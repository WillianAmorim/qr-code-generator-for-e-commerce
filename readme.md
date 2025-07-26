# QRCode & Password Generator CLI

## 📌 Sobre o Projeto
Este projeto foi desenvolvido como parte de um **bootcamp** e consiste em uma aplicação **Node.js** que interage com o usuário via **terminal**. Ele oferece funcionalidades práticas, como:

- **Geração de QR Codes** a partir de textos ou URLs informados pelo usuário.  
- **Criação de senhas seguras** com base em critérios definidos.  
- **Interface no terminal** utilizando o módulo `prompt` para entrada de dados.  
- **Arquitetura de projeto** organizada em módulos para melhor manutenção e escalabilidade.

## 🚀 Funcionalidades
✔️ Interação com o usuário no terminal.  
✔️ Geração de QR Code.  
✔️ Criação de senhas com letras, números e caracteres especiais.  
✔️ Estrutura simples e fácil de entender.  

## 🛠️ Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)  
- [prompt](https://www.npmjs.com/package/prompt)  
- [qrcode](https://www.npmjs.com/package/qrcode)  

## 📂 Estrutura do Projeto
```
📦 projeto
 ┣ 📂 src
 │  ┣ 📂 prompts-schema
 │  │  ┣ 📜 prompt-schema-main.js
 │  │  ┗ 📜 prompt-schema-qrcode.js
 │  ┣ 📂 services
 │  │  ┣ 📂 password
 │  │  │  ┣ 📂 utils
 │  │  │  ┣ 📜 create.js
 │  │  │  ┗ 📜 handle.js
 │  │  ┗ 📂 qr-code
 │  │     ┣ 📜 create.js
 │  │     ┗ 📜 handle.js
 │  ┗ 📜 index.js
 ┣ 📜 .env
 ┣ 📜 .gitignore
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
 ┗ 📜 README.md
```

## ▶️ Como Executar
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/WillianAmorim/qr-code-generator-for-e-commerce
   cd qr-code-generator-for-e-commerce
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Execute o projeto:**
   ```bash
   node index.js
   ```

## ✅ Exemplo de Uso
```
? O que você deseja fazer?
1 - Gerar QR Code
2 - Criar Senha

Digite sua escolha: 1
Informe o texto ou URL: https://meusite.com

✅ QR Code gerado com sucesso: outputs/qrcode.png
```

## 📄 Licença
Este projeto foi desenvolvido para fins educacionais. Sinta-se à vontade para utilizar e modificar.
