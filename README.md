# 1º Fullstack AWS Challenge

# Projeto Login + Keep Alive

### **P.O. do Projeto: Cassio Silva Takarada**

Qualquer dúvida em relação à regras de negócio, layout e/ou funcionalidades deverão ser tratadas com o PO. Dúvidas técnicas poderão ser tratadas com qualquer instrutor, inclusive o P.O.

## Entrega

- Último commit até às **17h00** de **18/03/2024 (**segunda-feira)
- Cada projeto deve estar em um repositório no GitHub
- O repositório deve ser configurado como "privado"
- O repositório deve ter uma branch 'main' e outra branch para desenvolvimento, conter pelo menos 3 commits e 1 merge/pull request. Mantenha o histórico de commits visível.
- Permitir que os instrutores visualizem o GitHub:
    - **Rafaela Janeczk:** [sagethirteen@gmail.com](mailto:sagethirteen@gmail.com)
    - **Maithe Saldanha Ferrao:** [maithe.ferrao@compasso.com.br](mailto:maithe.ferrao@compasso.com.br)
    - **Cassio Silva Takarada:** [cassio.takarada@compasso.com.br](mailto:cassio.takarada@compasso.com.br)
    - **Anthoni Bortolotto Martinelli:** [anthoni.martinelli@compasso.com.br](mailto:anthoni.martinelli@compasso.com.br)
    - **Leonardo Buhring Muller:** [l.muller.dev@gmail.com](mailto:l.muller.dev@gmail.com)
    - **Gabriel Bezerra Rodrigues**: [gabriel.bezerra@compasso.com.br](mailto:gabriel.bezerra@compasso.com.br)

## **Prazo**

Prazo para **envio** do e-mail com **link do repositório:** 12/03/2024  (terça-feira), **até às 17h30**.

## **Envio do e-mail**

Crie um e-mail com o seguinte assunto:

- Challenge 1 - [nome do Desenvolvedor]

**Exemplo de texto para o corpo de e-mail:**

*“Olá instrutores e sm, estamos enviando o link do desafio 1, como solicitado.* 

*Link do repositório: [link do repositório no Github]”*

**Envie o e-mail para os seguintes destinatários:**

- [rafaela.janeczko@compasso.com.br](mailto:rafaela.janeczko@compasso.com.br)
- [maithe.ferrao@compasso.com.br](mailto:maithe.ferrao@compasso.com.br)
- [cassio.takarada@compasso.com.br](mailto:cassio.takarada@compasso.com.br)
- [anthoni.martinelli@compasso.com.br](mailto:anthoni.martinelli@compasso.com.br)
- [leonardo.muller@compasso.com.br](mailto:leonardo.muller@compasso.com.br)
- [gabriel.bezerra@compasso.com.br](mailto:gabriel.bezerra@compasso.com.br)

***Com cópia (CC):***

- [l](mailto:glauber.ventura@compasso.com.br)[uara.oliveira@compasso.com.br](mailto:uara.oliveira@compasso.com.br)

**LINK DO FIGMA:**

---

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

![Register.jpg](1%C2%BA%20Fullstack%20AWS%20Challenge%20ea15470724fc4e5aa0fd361c2f125ebc/Register.jpg)

- Precisa ter um texto que leva para a tela de Login;
- A validação pode ser da maneira que for desejada, mas precisa existir;
- Ao cadastrar o usuário, o mesmo **deve ser salvo no localstorage.**

---

## **Tela Login 📲**

![Login.jpg](1%C2%BA%20Fullstack%20AWS%20Challenge%20ea15470724fc4e5aa0fd361c2f125ebc/Login.jpg)

- Precisa ter um botão que leva para a tela de Cadastro;
- O “user name” para realizar o Login deve poder ser ou o email do usuário, ou o primeiro nome + sobrenome que foram inseridos;
- Ao clicar no campo de input, os ícones ao lado precisam deslizar para dentro dela. Caso o usuário digite algo, os ícones devem se manter dentro da input, senão devem retornar para onde estavam. Conforme imagem abaixo:
    
    ![Login Filled.jpg](1%C2%BA%20Fullstack%20AWS%20Challenge%20ea15470724fc4e5aa0fd361c2f125ebc/Login_Filled.jpg)
    

---

## Tela Dashboard 📌

![Home.jpg](1%C2%BA%20Fullstack%20AWS%20Challenge%20ea15470724fc4e5aa0fd361c2f125ebc/Home.jpg)

- O usuário NÃO DEVE poder acessar esta tela a não ser que o mesmo esteja logado;
- É dividida em 3 partes: o Header, a Action Section e o Board.

---

### Header

![Untitled](1%C2%BA%20Fullstack%20AWS%20Challenge%20ea15470724fc4e5aa0fd361c2f125ebc/Untitled.png)

- **Data e hora:** precisa ser em tempo real;
- **Temperatura:** deve ser mostrada de acordo com a cidade cadastrada na criação do usuário. Se a cidade cadastrada for inválida, o campo deve mostrar uma mensagem dizendo que não pôde localizar a cidade.

---

### Footer

![Untitled](1%C2%BA%20Fullstack%20AWS%20Challenge%20ea15470724fc4e5aa0fd361c2f125ebc/Untitled%201.png)

- **Botão de Logout:** ao clicar, o usuário deve retornar à página de Login e não deve mais ter acesso ao Dashboard pela URL.
- **Counter**: na imagem notamos o número 600. Esse número deverá ser um counter de 30 segundos **(E NÃO 600s)**, o qual quando chegar a zero (0) deverá fazer o reload na página;
- **Botão “Continuar Navegando”**:  ao clicar no botão deverá redirecionar para a página do **Google**.

---

## Links Úteis

- **Axios**: https://www.npmjs.com/package/axios
- **LocalStorage**: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage
- **Weather API**: https://openweathermap.org/api

---