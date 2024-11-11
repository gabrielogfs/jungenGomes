import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
    try {
        const { products } = req.body;

        const line_items = products.map((product) => ({
            price_data: {
                currency: "brl",
                product_data: {
                    name: product.name,
                },
                unit_amount: Math.round(product.price * 100),
            },
            quantity: product.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: line_items,
            mode: 'payment',
            success_url: "http://localhost:5173/",
            cancel_url: "http://localhost:5173/",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Erro no backend do Stripe: ", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000."))


