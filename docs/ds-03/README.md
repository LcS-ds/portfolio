# DS-03 · Da academia ao Skiros

Materiais para a seção **Além do código**, a apresentação do Skiros e a transição por partículas. A imagem principal do projeto é a tela de registro de série. [Foto escolhida por Lucas](../../site/assets/academia.webp) · [Símbolo oficial](../../site/assets/skiros/simbolo.png) · [Cartão DS-03](https://trello.com/c/SM3xa78g)

## Texto para o portfólio

**Além do código**

A academia faz parte da minha rotina. Entre uma série e outra, eu queria responder a uma pergunta simples: quanto usei na última vez? Criei o Skiros para ter essa resposta à mão e registrar a série enquanto o treino ainda está acontecendo.

**Skiros**

Meu aplicativo pessoal de musculação. Posso retomar o treino de onde parei, anotar as repetições e a carga de cada série e consultar as sessões que concluí na semana.

O relato acima é uma proposta de redação criada a pedido de Lucas. Os números nas capturas são de uma ficha demonstrativa.

## Foto e marca

- **Foto da academia.** Usar a versão em preto e branco já preparada para o FE-01, com 1184 × 1328 px. Texto alternativo sugerido: “Lucas fotografa o reflexo no espelho com o celular à frente do rosto.” [Abrir foto](../../site/assets/academia.webp)
- **Símbolo do app.** O cabeçalho do Skiros usa o arquivo transparente chamado **T avançado** como máscara. A cópia no portfólio preserva os 96 × 68 px e os dois traços separados. Para o FE-04, obter os pontos do canal alfa, manter a proporção 96:68 e deixar o intervalo entre os traços vazio. Para a marca estática em fundo preto, preencher a máscara com o branco suave `#F5F7FB`. O PNG original contém traços pretos. [Máscara para o portfólio](../../site/assets/skiros/simbolo.png) · [Origem no Skiros](https://github.com/LcS-ds/skiros/blob/f3b9595b011bacec2bc3f74a6ef8ee58ad55c695/src/assets/t-avancado.png)

## Telas do aplicativo

| Ordem e tela | Legenda para o site | Texto alternativo |
| --- | --- | --- |
| 1 · [Retomar treino](../../site/assets/skiros/01-retomar.png) | O treino em andamento fica disponível para continuar. | A tela Hoje mostra o Treino A, o exercício Remada e o botão Continuar treino. |
| 2 · [Registrar série](../../site/assets/skiros/02-registrar-serie.png) | A primeira série fica visível enquanto preparo o registro da próxima. | Na sessão de Remada, a primeira série tem 10 repetições com 20 kg. Os campos da próxima mostram 8 repetições e 22 kg. |
| 3 · [Consultar histórico](../../site/assets/skiros/03-historico.png) | Depois de concluir, encontro a sessão no histórico da semana. | O Histórico mostra um treino em um dia na semana de 23 a 29 de novembro e inclui o Treino A entre as sessões concluídas. |

**Origem das capturas.** Versão web do Skiros aberta no Chrome em uma janela móvel de 412 × 915 pixels CSS, com densidade 2×. Em um perfil isolado, foi cadastrada uma ficha com Remada. O treino foi iniciado, retomado pela tela Hoje, usado para salvar duas séries e concluído pela revisão. A tela Histórico exibiu a sessão concluída. As capturas preservam a interface e as cores do aplicativo. Na implementação da página, a paleta externa da seção segue a [especificação do portfólio](../../ESPECIFICACAO_DO_PORTFOLIO.md).
