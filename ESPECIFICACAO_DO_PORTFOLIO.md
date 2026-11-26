# Portfólio de Lucas Sena

## Direção do site

O portfólio será uma página de rolagem vertical. Quem entrar verá primeiro um detalhe pessoal, o relógio de Lucas. O enquadramento se abre, apresenta o rosto e dá acesso direto aos projetos. Mais abaixo, a academia introduz o Skiros, aplicativo de treino para uso pessoal e último projeto antes do contato.

**Percurso de leitura** — Relógio → retrato e apresentação → sobre e formação → projetos selecionados → certificados → academia → revelação do Skiros → contato e rodapé.

O retrato, o relógio, a posição do Skiros, a transformação em partículas e as duas paletas são decisões de identidade do projeto. A ordem das seções intermediárias, as frases de interface, a tipografia e os tempos de animação abaixo são propostas para a primeira versão. Os títulos e relatos em primeira pessoa devem soar como Lucas e corresponder à experiência dele.

## Linguagem visual compartilhada

| Aplicação | Cor | Onde aparece |
| --- | --- | --- |
| Fundo principal | `#101010` | Abertura, áreas de leitura, galeria e contato |
| Superfície elevada | `#1C1C1E` | Painéis e áreas de apoio que precisam se destacar do fundo |
| Texto principal | `#EEEEEC` | Nome, títulos, descrições principais |
| Texto secundário | `#A6A6A6` | Legendas, tecnologias, datas e instituições |
| Prata fria | `#BCC5CE` | Progresso, foco de teclado, ação principal e início da transição de partículas |

- **Fotografia.** O retrato fornece a referência de contraste. Preservar textura do cabelo, reflexos no vidro dos óculos, trama da pulseira e detalhes do terno. As áreas escuras da foto devem se integrar ao fundo. Nas capturas de software, preservar as cores reais das interfaces para que cada projeto possa ser reconhecido.
- **Tipografia proposta.** Usar Barlow Semi Condensed em títulos e Inter em textos e controles. O nome tem a maior escala da página. Títulos de seção vêm em seguida, depois títulos de projeto e texto corrido. Reservar algarismos de largura fixa para o percentual do carregamento. Evitar parágrafos inteiros em caixa alta.
- **Composição.** No desktop, alinhar nome, títulos de seção e textos a uma margem esquerda comum. Usar espaço livre e filetes finos para separar assuntos. Em telas estreitas, manter uma coluna com margens laterais de aproximadamente 20 px e corpo de texto a partir de 16 px. Permitir ampliação e quebra de linha.
- **Movimento.** Reservar as duas animações de maior destaque para o relógio e o Skiros. Nos projetos e certificados, basta uma mudança discreta de borda ou sublinhado ao passar o ponteiro ou focar um link.

## 1. Carregamento e revelação do relógio

A primeira tela tem fundo `#101010` e, no centro, o relógio que Lucas usa no [retrato escolhido](./retrato-06-preto-e-branco.png). Do [Kage](./kage-design-system/design-system.html), aproveitar a composição do carregamento, a barra fina e o percentual. O símbolo inicial é substituído pelo detalhe fotográfico do mostrador, com a inclinação e a luz que ele tem no pulso.

1. **Entrada.** Exibir o mostrador centralizado com espaço escuro ao redor. Uma máscara esconde o restante da foto. A barra e o percentual ficam em uma área de apoio, afastados do relógio.
2. **Preparação.** Priorizar o carregamento e a decodificação do retrato. O indicador acompanha a preparação dos recursos necessários para a abertura. Projetos, certificados e partículas podem carregar depois. Se a entrada já estiver pronta, encurtar essa etapa.
3. **Revelação.** Ao concluir, apagar barra e percentual. Em cerca de 800 ms, abrir a máscara, reduzir a ampliação e deslocar a foto até seu enquadramento final à direita. O visitante reconhece a pulseira, vê a mão ajustando a gravata e então o rosto. O mesmo mostrador permanece visível durante o percurso.
4. **Chegada.** Quando o olhar já consegue identificar Lucas, apresentar o nome e a ação principal à esquerda. O relógio termina exatamente sobre o pulso. Usar a posição do mostrador na imagem como âncora para calcular o percurso em cada tamanho de tela.

No celular, o movimento termina com o retrato acima do texto. Ajustar a altura da imagem para que rosto e relógio caibam juntos. Com movimento reduzido, mostrar a composição final diretamente. Se o retrato falhar, liberar apresentação, navegação e projetos. Ao abrir um link direto para uma seção, respeitar o destino sem obrigar a pessoa a percorrer a abertura.

## 2. Primeira dobra e navegação

**À direita**, o retrato ocupa aproximadamente metade da largura disponível em telas grandes. Manter o volume do cabelo e a mão da gravata dentro do enquadramento. Se a junção entre foto e página ficar evidente, suavizar apenas a borda externa da imagem.

**À esquerda**, usar “Lucas Sena” como título principal. Abaixo, uma linha curta situa sua formação e área de atuação. Uma possibilidade, após confirmar a descrição da formação, é “Estudante da ETEC. Desenvolvo projetos para a web e aplicativos de uso pessoal.” O botão **Ver projetos** leva ao início da seleção de trabalhos.

A navegação tem o nome de Lucas como retorno ao início e atalhos para **Sobre**, **Projetos**, **Skiros** e **Contato**. O atalho para Skiros chega à apresentação legível do produto, inclusive para quem pulou a animação. No celular, usar um menu compacto com esses mesmos destinos. Ao escolher um item, fechar o menu e levar o foco à seção correspondente.

## 3. Sobre e formação

Esta seção responde a duas perguntas de quem acabou de conhecer Lucas — o que ele estuda e em que tipo de problema gosta de trabalhar. No desktop, o título **Sobre mim** ocupa uma coluna estreita; o relato e a formação ocupam a coluna maior. No celular, a ordem é título, relato e formação.

Escrever um parágrafo curto em primeira pessoa, com um exemplo concreto. Lucas pode apresentar o interesse por desenvolvimento web e citar o que aprendeu ao organizar dados em um acervo ou ao construir uma experiência jogável no navegador. Em seguida, mostrar ETEC, nome oficial do curso e situação da formação assim que esses dados forem confirmados. Associar as tecnologias aos projetos em que foram usadas. A experiência com treino ganha espaço próprio mais adiante.

## 4. Projetos selecionados

O título **Projetos** é o destino da ação principal da abertura. Proposta de composição para desktop: abrir com uma captura maior do Acervo de Livros e, em seguida, colocar TopSpeed e PetLume lado a lado. No celular, empilhar os três na mesma ordem. Cada projeto precisa funcionar como uma apresentação curta por si só.

| Projeto | O que mostrar na imagem | O que explicar ao lado |
| --- | --- | --- |
| Acervo de Livros | Catálogo com capas e um controle de busca ou filtro visível | Como a pessoa cadastra, encontra e organiza livros. Mencionar o uso do Supabase na persistência dos dados. |
| TopSpeed | Uma corrida em andamento, com a pista e o carro legíveis | Como é jogar no navegador e qual foi o papel do Three.js na cena 3D. |
| PetLume | Interface do pet shop em uma tela de celular | Contexto escolar, experiência responsiva e recursos de PWA. Identificar o agendamento como demonstrativo. |

Cada entrada tem nome, descrição de uma ou duas frases, tecnologias pertinentes e links com destino claro. Usar **Abrir demonstração** quando houver uma versão pública funcional e **Ver código** quando o repositório for público. Em links repetidos, incluir o nome do projeto no rótulo acessível. Uma captura grande deve continuar compreensível em tela pequena, mesmo que isso exija um recorte específico para celular.

**Estudo em Dia** pode entrar como trabalho complementar se houver uma captura que demonstre a organização das tarefas. Exercícios de Java e de Web I podem ser encontrados pelo link do GitHub. O Skiros terá apresentação exclusiva depois da academia.

## 5. Certificados e estudos

Usar uma lista editorial compacta. Cada linha apresenta primeiro o título do curso e depois instituição, carga horária e data quando constarem no documento. Um link **Ver certificado** abre o comprovante correspondente. No celular, os dados secundários passam para baixo do título.

- **Santander — Cibersegurança do Zero à Prática, na DIO.** O layout considera o cenário combinado de bootcamp concluído. Reservar a primeira linha para a credencial final e preencher seu título oficial, carga horária, data e link a partir do certificado de conclusão.
- **Fundamentos da IA Moderna: Machine Learning, LLMs, IA Generativa e Agentes.** Exibir como curso da DIO, com 2 horas. O comprovante disponível é `7XL3BLIC.pdf`.
- **Economia, Já!** Apresentar como atividade complementar de participação, com 5 horas. O comprovante disponível é `Certificado Lucas Sena.pdf`.
- **Atividades de abertura do Santander.** Se forem incluídas, agrupar as duas credenciais de 1 hora como atividades introdutórias. Os arquivos são `AV0VNSV8.pdf` e `F633ZMAD.pdf`. A credencial final do bootcamp tem função própria na primeira linha.

Os PDFs disponíveis estão na pasta Downloads de Lucas. Ao montar o site, publicar os arquivos destinados ao público ou usar URLs de validação e testar os links fora do computador de desenvolvimento.

## 6. Academia — a seção que dá origem ao Skiros

O título sugerido é **Além do código**. Usar uma foto pessoal de treino em preto e branco, com tratamento compatível com o retrato de abertura. A primeira imagem mostra Lucas de terno; esta deve mostrá-lo em uma situação real da rotina de academia. A escolha da foto de treino ainda está em aberto.

Ao lado da imagem, um parágrafo em primeira pessoa conta qual parte do treino Lucas queria organizar melhor e como surgiu a vontade de desenvolver um aplicativo para uso próprio. Escolher um exemplo que ele realmente vivencie, como consultar a carga da sessão anterior. Esse detalhe prepara o visitante para entender a tela que verá depois. No celular, apresentar título, imagem e relato em sequência.

Dar espaço para ler o parágrafo inteiro antes de iniciar a transformação. O último enquadramento da seção reúne imagem, título, texto e filetes. Essa composição inteira fornece a matéria visual da animação seguinte.

## 7. Transição da academia para o Skiros

A referência de movimento é o [Auralis](./referencias/auralis-design-system/design-system.html). O visitante controla a transformação pela rolagem. Se parar no meio, a forma permanece naquele estágio. Se subir, as partículas refazem o percurso e recompõem a seção da academia.

| Etapa | O que a pessoa vê |
| --- | --- |
| Desagregação | Pelas bordas, a imagem, as letras e os filetes começam a perder pequenos pontos. As posições iniciais e os diferentes tons dos pontos ainda permitem reconhecer a composição de origem. |
| Travessia | A seção se desfaz por inteiro. Os pontos seguem trajetórias curtas e convergem para a área central. O fundo passa de `#101010` para `#08090B`. Os pontos prateados, inicialmente próximos de `#BCC5CE`, ganham a luminosidade de `#F5F7FB`. |
| Formação | As partículas ocupam o contorno e o interior do símbolo real do Skiros, preservando seus espaços vazios e suas proporções. A marca precisa ficar reconhecível mesmo quando a pessoa avança devagar. |
| Entrega | A marca permanece inteira por um pequeno trecho de rolagem. Em seguida, assume sua posição no cabeçalho do projeto e abre espaço para a captura do app, o nome e a descrição. |

Reservar o efeito às duas seções envolvidas. A navegação continua utilizável. No celular, trabalhar com menos partículas e um percurso mais curto. Com movimento reduzido ou sem suporte ao efeito, apresentar a academia por inteiro e, logo abaixo, a marca estática sobre o fundo do Skiros. Quem usa teclado ou leitor de tela encontra primeiro o relato e depois o título do aplicativo na ordem normal do documento.

## 8. Skiros — último projeto antes do contato

O projeto se chama **Skiros** em títulos, menus, descrições e legendas. A mudança de paleta começa durante a travessia das partículas e se completa quando o símbolo se forma.

| Uso no Skiros | Cor | Hex |
| --- | --- | --- |
| Fundo principal | Preto | `#08090B` |
| Cartões e painéis | Grafite | `#14171D` |
| Texto principal | Branco suave | `#F5F7FB` |
| Texto secundário | Cinza claro | `#ABB5C4` |
| Mensagens de erro | Rosa claro | `#FFB8BD` |

**Primeiro enquadramento.** A marca recém-formada introduz o nome e uma definição curta, por exemplo “Meu aplicativo para registrar treinos e consultar o histórico entre sessões”. Ao lado, mostrar uma captura real da tela usada durante um treino, ampliada o suficiente para ler exercício, séries e registros. O nome e a imagem já devem explicar que produto é esse.

**Demonstração.** Mostrar um percurso curto pelas telas disponíveis. Começar em uma sessão iniciada ou retomada, passar pelo registro de uma série e terminar na consulta ao histórico. Cada imagem recebe uma legenda que explica o que Lucas faz naquele passo. Se houver espaço para uma única captura, priorizar a tela de registro e explicar o restante no texto. Identificar a plataforma de cada captura quando forem usadas as versões web e Android.

**Apresentação do trabalho.** Em poucas linhas, explicar a necessidade pessoal, o que Lucas desenvolveu e como usa o registro durante um treino. Usar painéis grafite para agrupar as telas e texto secundário nas legendas. Reservar o rosa a mensagens reais de erro. Exibir link de demonstração apenas se existir um destino público adequado. As capturas devem permitir conhecer o app mesmo com o código privado.

No celular, a sequência é marca, nome, descrição, tela principal e registros complementares. Depois da última tela, a rolagem conduz diretamente ao contato. Não inserir outro projeto nesse intervalo.

## 9. Contato e rodapé

O fundo retorna gradualmente de `#08090B` a `#101010`. Fechar com o título **Contato**, uma frase curta de convite e o [GitHub de Lucas](https://github.com/LcS-ds). Incluir e-mail ou LinkedIn quando Lucas escolher os endereços públicos. Se o link abrir o perfil, o rótulo pode ser **Meu GitHub**. Se abrir um e-mail, usar **Enviar e-mail**.

O rodapé reúne “Lucas Sena” e **Voltar ao início**. Esse controle retorna à apresentação já revelada. A última interação deve funcionar sem repetir o carregamento.

## Referências visuais para implementação

| Material local | Aplicação prevista |
| --- | --- |
| [Kage](./kage-design-system/design-system.html) | Estrutura exclusiva da tela de carregamento |
| [CHRONOS](./referencias/chronos-design-system/design-system.html) | Escala do mostrador e leitura dos reflexos metálicos |
| [Auralis](./referencias/auralis-design-system/design-system.html) | Continuidade do movimento e reorganização das partículas |
| [Grotesk Zero](./referencias/grotesk-zero-design-system/design-system.html) | Hierarquia dos títulos, filetes e alinhamentos editoriais |
| [Aurel Vance](./referencias/aurel-vance-design-system/design-system.html) | Enquadramento fotográfico, legendas e apresentação dos trabalhos |
| [Dennis Snellenberg](./referencias/dennis-snellenberg-design-system/design-system.html) | Relação entre apresentação pessoal e entrada nos projetos |
| [Designer Studio](./referencias/designer-studio-design-system/design-system.html) | Integração de superfícies escuras e imagens em cinza |
| [NOIR](./referencias/noir-design-system/design-system.html) | Uso pontual de luz e prata sobre o preto |
| [Interactive Particles](./referencias/interactive-particles-design-system/design-system.html) | Estudo técnico da formação de uma imagem por pontos |

Para a apresentação da atividade, mostrar o [Kage original](https://ds.asimov.academy/design-systems/kage-design-system/design-system.html) ao lado da abertura do portfólio. Depois, comparar o [Auralis original](https://ds.asimov.academy/design-systems/auralis-design-system/design-system.html) com a passagem da academia para o Skiros. Manter disponíveis a referência fotográfica usada com IA, a análise correspondente e o retrato final para explicar a construção da imagem pessoal.

## Materiais a confirmar antes da implementação

- Arquivo oficial da marca Skiros, com silhueta legível e fundo transparente, para definir a posição final das partículas.
- Foto pessoal da academia, relato de Lucas sobre a origem do app e capturas representativas das versões que serão apresentadas.
- Descrição oficial da formação, certificado final do Santander e destinos de contato que Lucas deseja publicar.
- Capturas e destinos públicos de cada projeto. Conferir a legibilidade das telas em tamanho de celular.

## Como validar a primeira versão

- Abrir o portfólio em desktop e celular. Acompanhar o mostrador do primeiro quadro até o pulso e conferir se o rosto e a pulseira continuam no enquadramento final.
- Acionar **Ver projetos**, selecionar um trabalho, abrir seu destino e voltar. Repetir a navegação principal usando apenas o teclado e conferir o foco visível.
- Ler toda a seção de academia, avançar lentamente até o símbolo do Skiros e inverter a rolagem. O sentido do movimento deve acompanhar o gesto em todo o trecho.
- Abrir diretamente o destino do Skiros e testar a página com movimento reduzido. Nome, conteúdo e capturas precisam estar disponíveis nos dois percursos.
- Conferir as cinco cores da seção do aplicativo, os títulos dos certificados, os links públicos e a passagem direta do Skiros ao contato.
