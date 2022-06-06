export const errorCode = (response) => {
    switch (response.status) {
      case 400:
        return "Por favor, preencha todos os campos";
      case 401:
        return "Usuário não autenticado"; 
        // token inválido 
      case 403:
        return "Email já cadastrado";
      case 404:
        return "Usuário não encontrado";
      default:
        return "Ocorreu um erro, tente novamente";
    }
  };
  // 200 -> sucesso, deu certo 