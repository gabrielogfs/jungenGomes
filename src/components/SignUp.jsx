import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../context/auth';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsRegistering(true);

        if (password !== confirmPassword) {
            return;
        }

        await createUser(email, password);
        setIsRegistering(false);
        navigate("/");
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Crie sua conta
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    onSubmit={onSubmit}
                    className="space-y-6"
                    action="#"
                    method="POST">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                name="email"
                                type="email"
                                placeholder='Insira seu e-mail'
                                required
                                className="w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="text-sm/6 font-medium text-gray-900"
                            >
                                Senha
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                name="password"
                                type="password"
                                placeholder='Insira sua senha'
                                required
                                className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="text-sm/6 font-medium text-gray-900"
                            >
                                Confirmar Senha
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value)
                                }}
                                name="password"
                                type="password"
                                placeholder='Confirme sua senha'
                                required
                                className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            disabled={isRegistering}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                            {isRegistering ? "Criando usuário..." : "Criar Usuário"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
