const EmailVerfy = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Verificação de E-mail
        </h2>
        <p className="text-gray-700 mb-4">
          Um e-mail de verificação foi enviado para o seu endereço. Por favor,
          verifique sua caixa de entrada e clique no link de verificação.
        </p>
        <p className="text-gray-700 mb-4">
          Se você não recebeu o e-mail, verifique sua pasta de spam ou solicite
          um novo e-mail de verificação.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Reenviar E-mail de Verificação
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerfy;
