# Portfólio de Lucas Sena

Portfólio pessoal de desenvolvimento web. A abertura revela o retrato a partir do relógio, e a seção de academia se transforma na marca do Skiros, aplicativo de treino desenvolvido para uso pessoal.

A [especificação do portfólio](ESPECIFICACAO_DO_PORTFOLIO.md) reúne a sequência das seções, o comportamento das animações, as paletas e os critérios de validação. Os retratos de trabalho e as extrações dos sites de referência ficam na pasta local do projeto.

O [contexto do projeto](CONTEXTO_PORTFOLIO.md) resume as decisões, o estado do trabalho e como retomar os cartões de desenvolvimento.

## Executar localmente

Use Git, Node.js 22.13 ou superior e pnpm 11.19.0. Os comandos a seguir partem de uma pasta em que você deseja clonar o projeto, com acesso ao repositório privado.

```sh
git clone https://github.com/LcS-ds/portfolio.git
cd portfolio
pnpm install --frozen-lockfile
pnpm dev
```

Abra o endereço local indicado no terminal (por padrão, `http://localhost:5173`). A página inicial de verificação mostra **Portfólio de Lucas Sena**. Use Ctrl+C para encerrar o servidor.

## Verificar o build

Na raiz do repositório, execute os comandos abaixo.

```sh
pnpm build
pnpm preview
```

O build gera a página em `dist/index.html`. O preview serve essa cópia no endereço exibido no terminal (por padrão, `http://localhost:4173`). Confira o mesmo título no navegador e encerre com Ctrl+C.

O código do site fica em `site/`. O Vite usa essa pasta como raiz e recria `dist/` a cada build. As referências visuais de trabalho ficam fora da pasta publicada.

## Fluxo de desenvolvimento

Acompanhe as entregas no [quadro do portfólio no Trello](https://trello.com/b/Fux87bHx). A primeira tarefa de implementação é [INF-01 — Preparar ambiente local do site](https://trello.com/c/UAMuUlrY).

A `main` reúne as mudanças integradas. Para executar um cartão do Trello, use uma branch no formato `codex/<id-do-cartao>-<resumo>`. Registre o cartão no pull request e vincule o PR e a evidência de validação no cartão.
