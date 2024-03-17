# 1º Fullstack AWS Challenge

# Projeto Login + Keep Alive

## 🛑 **Obrigatório para o projeto no geral**

- Utilização de HTML, CSS e JS;
- Seguir o layout do Figma, respeitando as cores e os tamanhos devidos (Pixel Perfect);
- Não utilizar bibliotecas como Bootstrap, Material UI, Tailwind, entre outras.

## 🚀 **Adicionais (NÃO OBRIGATÓRIOS)**

- Utilizar TS;
- Responsividade das telas (Mobile, Tablet e Desktop);
- Modal de sucesso ou erro ao registrar usuário, ao deletar e adicionar card;
- Criar uma API e salvar os usuários utilizando o JSON Server;
- Ao clicar em qualquer logo da Compass.UOL, levar o usuário à pagina inicial da empresa.

---

**Tela Cadastro 📄**

![Register.jpg](https://periodic-rhythm-b59.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F35927e8d-396d-40fc-aa77-39fce9eac8df%2F4b2e4859-bacc-4840-ba60-75a7d3bfecc8%2FRegister.jpg?table=block&id=651a2c09-231b-4b97-8071-6f52ac659573&spaceId=35927e8d-396d-40fc-aa77-39fce9eac8df&width=2000&userId=&cache=v2)

- Precisa ter um texto que leva para a tela de Login;
- A validação pode ser da maneira que for desejada, mas precisa existir;
- Ao cadastrar o usuário, o mesmo **deve ser salvo no localstorage.**

---

## **Tela Login 📲**

![Login.jpg](https://periodic-rhythm-b59.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F35927e8d-396d-40fc-aa77-39fce9eac8df%2F8e94fc2e-9ed4-419e-bf7d-cec521632cc4%2FLogin.jpg?table=block&id=f4ea920c-7787-4cfe-b4e9-1188f739f100&spaceId=35927e8d-396d-40fc-aa77-39fce9eac8df&width=2000&userId=&cache=v2)

- Precisa ter um botão que leva para a tela de Cadastro;
- O “user name” para realizar o Login deve poder ser ou o email do usuário, ou o primeiro nome + sobrenome que foram inseridos;
- Ao clicar no campo de input, os ícones ao lado precisam deslizar para dentro dela. Caso o usuário digite algo, os ícones devem se manter dentro da input, senão devem retornar para onde estavam. Conforme imagem abaixo:
    
    ![Login Filled.jpg](https://periodic-rhythm-b59.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F35927e8d-396d-40fc-aa77-39fce9eac8df%2F2840ef0a-e951-4d45-bf62-c35151f2cc6c%2FLogin_Filled.jpg?table=block&id=4abcd1b0-5662-4fdb-b124-91437da5e0e4&spaceId=35927e8d-396d-40fc-aa77-39fce9eac8df&width=2000&userId=&cache=v2)
    

---

## Tela Dashboard 📌

![Home.jpg](https://periodic-rhythm-b59.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F35927e8d-396d-40fc-aa77-39fce9eac8df%2F4b2586b4-1da4-411c-b73b-600cc90d7505%2FHome.jpg?table=block&id=64e4cb77-aecc-4a18-a79c-0add9b9769b3&spaceId=35927e8d-396d-40fc-aa77-39fce9eac8df&width=2000&userId=&cache=v2)

- O usuário NÃO DEVE poder acessar esta tela a não ser que o mesmo esteja logado;
- É dividida em 3 partes: o Header, a Action Section e o Board.

---

### Header

![Untitled](https://periodic-rhythm-b59.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F35927e8d-396d-40fc-aa77-39fce9eac8df%2F6b7abbcd-9ce7-4c54-a387-207673bb4d2e%2FUntitled.png?table=block&id=098fcdf3-be84-4e52-ad07-19b3db5293e0&spaceId=35927e8d-396d-40fc-aa77-39fce9eac8df&width=2000&userId=&cache=v2)

- **Data e hora:** precisa ser em tempo real;
- **Temperatura:** deve ser mostrada de acordo com a cidade cadastrada na criação do usuário. Se a cidade cadastrada for inválida, o campo deve mostrar uma mensagem dizendo que não pôde localizar a cidade.

---

### Footer

![Untitled](https://periodic-rhythm-b59.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F35927e8d-396d-40fc-aa77-39fce9eac8df%2F0feca81c-29f3-4cc2-91c0-92a107508c02%2FUntitled.png?table=block&id=234950ba-27e6-42de-9a52-fdba15e488e7&spaceId=35927e8d-396d-40fc-aa77-39fce9eac8df&width=2000&userId=&cache=v2)

- **Botão de Logout:** ao clicar, o usuário deve retornar à página de Login e não deve mais ter acesso ao Dashboard pela URL.
- **Counter**: na imagem notamos o número 600. Esse número deverá ser um counter de 30 segundos **(E NÃO 600s)**, o qual quando chegar a zero (0) deverá fazer o reload na página;
- **Botão “Continuar Navegando”**:  ao clicar no botão deverá redirecionar para a página do **Google**.

---