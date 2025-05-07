
# 🛍️ Jungen

Projeto final do módulo de **React** do curso de desenvolvimento web da **Coderhouse**. Trata-se de uma aplicação de e-commerce com foco em navegação por categorias, detalhes de produtos, gerenciamento de carrinho e autenticação de usuários.

## 📸 Preview

![Preview do JungenGomes](./public/img/banner-preview.png)

## 🚀 Tecnologias Utilizadas

- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🔥 [Firebase](https://firebase.google.com/) – autenticação e banco de dados
- 🔔 [React Toastify](https://fkhadra.github.io/react-toastify/)
- ⚙️ `useReducer` + Context API para gerenciamento de estado
- 📦 [pnpm](https://pnpm.io/)
- 🧹 [ESLint](https://eslint.org/)

## 📁 Estrutura do Projeto

```bash
jungenGomes/
├── public/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── context/          # Contextos globais (Carrinho, Autenticação)
│   ├── data/             # Dados simulados (JSON)
│   ├── firebase/         # Configuração e integração com Firebase
│   ├── pages/            # Páginas principais da aplicação
│   ├── routes/           # Definição das rotas com React Router
│   ├── App.jsx
│   └── main.jsx
├── .env                  # Variáveis de ambiente (ex: chaves do Firebase)
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## ⚙️ Instalação

### Pré-requisitos

- Node.js >= 18
- pnpm (ou npm/yarn)
- Conta no Firebase para configurar seu próprio projeto

### Passos

```bash
git clone https://github.com/gabrielogfs/jungenGomes.git
cd jungenGomes
npm install
npm run dev
```

Crie um arquivo `.env` com as credenciais do Firebase:

```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Abra no navegador: `http://localhost:5173`

## 📦 Scripts Disponíveis

| Script         | Descrição                            |
|----------------|----------------------------------------|
| `npm dev`     | Inicia o servidor de desenvolvimento |
| `npm build`   | Gera a versão de produção do app     |
| `npm preview` | Visualiza o app após o build         |

## 🧠 Funcionalidades

- ✅ Listagem de produtos e categorias
- ✅ Detalhes individuais dos itens
- ✅ Carrinho de compras com Context API + useReducer
- ✅ Sistema de autenticação com Firebase
- ✅ Notificações com React Toastify (ações de login, logout, adicionar item, etc.)
- ✅ Rotas protegidas para áreas restritas
- ✅ Design responsivo com Tailwind

## 🔐 Autenticação

A autenticação é feita via **Firebase Auth**, integrada com React Context e Reducer. Usuários podem se registrar, fazer login e logout com persistência de sessão.

## ☁️ Firebase

Utilizado para:
- Autenticação de usuários
- (Opcional) Armazenamento de dados no Firestore ou Realtime Database

## 📄 Licença

Este projeto é de uso acadêmico e não possui uma licença específica.

---

👨‍💻 Desenvolvido por [@gabrielogfs](https://github.com/gabrielogfs)
