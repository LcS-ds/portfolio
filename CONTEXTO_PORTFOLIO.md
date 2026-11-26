# Contexto do portfólio de Lucas Sena

Este é o ponto de partida para retomar o desenvolvimento. O portfólio é uma atividade da ETEC e uma página pessoal para apresentar a formação, os projetos e os interesses de Lucas. A atividade pede a adaptação do design system de um site de referência, o uso de fotografia própria editada com IA e a apresentação do portfólio ao lado do site usado como referência.

A composição de cada seção, os detalhes das animações, as paletas e os critérios de validação estão na [especificação completa do portfólio](ESPECIFICACAO_DO_PORTFOLIO.md).

## Decisões de produto e design

| Área | Decisão |
| --- | --- |
| Abertura | A estrutura do carregamento vem do Kage. O mostrador central é um recorte do relógio do próprio retrato. A abertura do enquadramento revela Lucas à direita no desktop, com o mostrador terminando sobre o pulso. No celular, o retrato fica acima da apresentação. |
| Identidade visual | O retrato em preto e branco orienta a paleta geral de preto, grafite, branco suave, cinza e prata fria. Os valores e as funções de cada cor estão na especificação. |
| Projetos | A seleção principal inclui Acervo de Livros, TopSpeed e PetLume. Cada trabalho apresenta o que faz, o papel de Lucas e, quando disponíveis, links para código ou demonstração. |
| Formação | Apresentar a formação na ETEC, os certificados disponíveis e a credencial final do Santander — Cibersegurança do Zero à Prática quando o comprovante de conclusão estiver disponível. |
| Academia e Skiros | Um relato e uma foto da rotina de treino apresentam a origem do app. A composição da academia se desfaz em partículas e forma a marca oficial do Skiros conforme a rolagem, com inspiração no Auralis. |
| Encerramento | O Skiros é o último projeto antes do contato. A seção usa a paleta do aplicativo e mostra o fluxo de treino com capturas reais. O site oferece acesso direto à seção e uma apresentação estática para quem prefere movimento reduzido. |

O Kage é a referência da abertura. O Auralis orienta a dinâmica de partículas. A preparação para a apresentação da atividade inclui a referência fotográfica, sua análise em JSON e o retrato final. [Kage](https://ds.asimov.academy/design-systems/kage-design-system/design-system.html) · [Auralis](https://ds.asimov.academy/design-systems/auralis-design-system/design-system.html)

## Estado do projeto em 26 de novembro de 2026

- A especificação tem nove seções, da abertura ao contato, além das referências e dos critérios de validação. [Especificação](ESPECIFICACAO_DO_PORTFOLIO.md)
- A branch `main` é a base de integração. O repositório privado guarda a documentação e receberá o código do portfólio. [GitHub](https://github.com/LcS-ds/portfolio)
- O quadro privado tem onze cartões em quatro frentes — Produto e documentação, Design e conteúdo, Front-end e Validação e publicação. O próximo cartão técnico é **INF-01 — Preparar ambiente local do site**. Seu aceite pede um checkout limpo que permita abrir a página localmente e verificar o build a partir do README. [Quadro do projeto](https://trello.com/b/Fux87bHx) · [INF-01](https://trello.com/c/UAMuUlrY)
- Na pasta de trabalho, `retrato-06-preto-e-branco.png` é o retrato escolhido. `kage-design-system/` contém a extração da abertura e `referencias/` reúne os ZIPs baixados pelo Asimov Site Downloader e os materiais extraídos. As análises fotográficas, as imagens de trabalho e as extrações estão fora do controle de versão. Os caminhos para esses materiais na especificação funcionam na pasta local.

## Materiais e decisões pendentes

- Selecionar a foto pessoal da academia e preparar o relato de Lucas sobre a rotina que motivou o Skiros.
- Obter a marca oficial e capturas reais do Skiros, incluindo registro de série e histórico. Vincular os materiais ao cartão **DS-03**. [DS-03](https://trello.com/c/SM3xa78g)
- Confirmar nome e situação do curso na ETEC, links públicos dos projetos e canais de contato. Incluir os dados da credencial final do Santander a partir do comprovante. [DS-02](https://trello.com/c/a9BACYiO)
- Definir a estrutura técnica e os comandos de desenvolvimento no **INF-01**. As verificações da primeira versão abrangem desktop, celular, teclado, movimento reduzido e a rolagem reversível da transição do Skiros. [INF-01](https://trello.com/c/UAMuUlrY) · [QA-01](https://trello.com/c/JeMeeq8u)

## Como retomar uma tarefa

1. Abra o cartão correspondente e leia o objetivo, as dependências, o aceite e a última atualização. Consulte a especificação antes de alterar o comportamento de uma seção.
2. Confira o checkout e a revisão de partida. Use a `main` atualizada ou a branch da dependência indicada no cartão. Para código, use uma branch no formato `codex/<id-do-cartao>-<resumo>`.
3. Vincule o cartão ao pull request. No Trello, registre o link do PR, a revisão testada, o ambiente e o resultado observado. Se houver um impedimento, indique a condição necessária para avançar.
4. Marque o cartão como concluído após verificar seu critério de aceite e registrar a evidência. Ao retomar em outro chat, leve o link do cartão, a branch ou revisão atual e o que falta validar.

O chat de planejamento concentra ideias, documentação e preparação do ambiente. Para iniciar a implementação, use o cartão correspondente como contexto e siga o escopo autorizado por Lucas.
