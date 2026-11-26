# DS-02 · Conteúdo do portfólio de Lucas Sena

Textos e materiais para as seções de apresentação, projetos e certificados. As três capturas e os oito comprovantes estão neste diretório, com caminhos relativos que funcionam em um checkout do repositório. [Cartão DS-02](https://trello.com/c/a9BACYiO) · [Especificação visual](../../ESPECIFICACAO_DO_PORTFOLIO.md)

## Apresentação

**Nome** · Lucas Sena

**Linha de abertura** · Estudante da ETEC. Desenvolvo projetos para a web, de catálogos de livros a jogos de corrida.

**Sobre mim** · Gosto de explorar o que dá para fazer no navegador. No Acervo, trabalhei com busca, filtros e armazenamento de dados. No TopSpeed, usei o mesmo ambiente para criar uma corrida em 3D. O que me interessa muda de um projeto para outro, mas sempre começo pelo que a pessoa vai poder fazer na tela.

**Contato** · “Explore meus projetos no GitHub.” Usar o rótulo **Meu GitHub** para o perfil público. [GitHub de Lucas](https://github.com/LcS-ds)

## Projetos selecionados

### Acervo de Livros

Criei uma estante digital para cadastrar livros, guardar notas de leitura e acompanhar o que já li. Dá para encontrar uma obra pelo título ou pelo autor e filtrar a coleção por etapa da leitura. Usei HTML, CSS e JavaScript na interface e Supabase para armazenar os registros.

**Legenda** · Estante com três livros demonstrativos, busca por título ou autor e filtros de leitura.

**Texto alternativo** · As capas de Dom Casmurro, A Hora da Estrela e O Cortiço aparecem lado a lado, abaixo da busca e dos filtros de leitura.

**Ação para o site** · Ver código. A página pública abriu, mas a leitura do banco exibiu “Failed to fetch” durante a conferência. A captura mostra a interface publicada com os três registros de exemplo do próprio schema fornecidos apenas ao navegador de teste. Revalidar a consulta antes de oferecer a demonstração como destino principal. [Captura](capturas/acervo.png) · [Código](https://github.com/LcS-ds/acervo-livros) · [Origem dos exemplos](https://github.com/LcS-ds/acervo-livros/blob/main/schema.sql) · [Página do projeto](https://lcs-ds.github.io/acervo-livros/)

### TopSpeed

Desenvolvi um jogo de corrida arcade em 3D para o navegador. Antes da largada, quem joga escolhe a pista, o carro e a dificuldade dos adversários. Durante a corrida, o minimapa e o painel mostram o percurso, a posição e a velocidade. A cena usa Three.js.

**Legenda** · Corrida noturna em Shibuya, com o carro, o minimapa e o painel de velocidade.

**Texto alternativo** · Um carro vermelho entra em uma curva iluminada por neon. A posição aparece no alto da tela e o velocímetro, no canto inferior esquerdo.

**Ações** · Jogar no navegador e Ver código. A captura foi feita após iniciar a corrida na versão pública. [Captura](capturas/topspeed.png) · [Jogar](https://lcs-ds.github.io/TopSpeed/) · [Código](https://github.com/LcS-ds/TopSpeed)

### PetLume

Desenvolvi o site de um pet shop fictício como projeto escolar. Criei uma interface para consultar serviços e experimentar um agendamento demonstrativo pelo celular. A estrutura de PWA permite instalar o site e consultar o conteúdo offline após a primeira visita.

**Legenda** · Página inicial do PetLume no celular.

**Texto alternativo** · A página móvel do PetLume mostra o menu, a foto de um cão e um gato e a chamada “Mais leveza na rotina do seu pet”.

**Ações** · Abrir demonstração e Ver código. A captura usa a versão publicada em uma janela de 412 × 900 pixels CSS, com densidade 2×. [Captura](capturas/petlume.png) · [Demonstração](https://lcs-ds.github.io/petlume-pwa/) · [Código](https://github.com/LcS-ds/petlume-pwa)

## Certificados e estudos

A tabela transcreve o título, a data e a carga horária dos comprovantes de Lucas. Para a lista inicial do site, a sugestão é destacar a Escola de Inovadores e Fundamentos da IA Moderna e disponibilizar as demais credenciais na sequência. O rótulo **Ver certificado** abre o PDF da respectiva linha.

| Título no comprovante | Instituição ou programa | Registro | Data | Carga | Comprovante |
| --- | --- | --- | --- | --- | --- |
| Escola de Inovadores 21ª Edição - 2026 | INOVA CPS | Participação | 24/11/2026 | 50 h | [PDF](certificados/escola-de-inovadores.pdf) |
| Fundamentos da IA Moderna: Machine Learning, LLMs, IA Generativa e Agentes | DIO | Conclusão de curso | 21/11/2026 | 2 h | [PDF](certificados/fundamentos-da-ia-moderna.pdf) |
| Introdução à Engenharia de Prompts | DIO | Conclusão de curso | 22/11/2026 | 1 h | [PDF](certificados/engenharia-de-prompts.pdf) |
| Potencializando Seus Estudos e Carreira com IA (Chatbots, Copilotos e Agentes) | DIO | Conclusão de curso | 22/11/2026 | 2 h | [PDF](certificados/estudos-e-carreira-com-ia.pdf) |
| DIO Agent: Nunca Mais Estude Sozinho | DIO | Conclusão de curso | 22/11/2026 | 1 h | [PDF](certificados/dio-agent.pdf) |
| Economia, Já! | Junior Achievement | Participação | 22/10/2026 | 5 h | [PDF](certificados/economia-ja.pdf) |
| Boas vindas ao Bootcamp Santander Cibersegurança do Zero a Prática | DIO / Santander | Conclusão de atividade de abertura | 20/11/2026 | 1 h | [PDF](certificados/boas-vindas-bootcamp-santander.pdf) |
| Boas vindas à Aceleração Santander - Cibersegurança do Zero à Prática | DIO / Santander | Conclusão de atividade de abertura | 08/08/2026 | 1 h | [PDF](certificados/boas-vindas-aceleracao-santander.pdf) |

**Uso na integração** · As cópias em `docs/` servem à revisão no repositório privado. Ao implementar os links no site, usar os PDFs como arquivos do site ou URLs públicas verificadas. Os links privados do GitHub exigem autenticação.

**Atualizações futuras** · Adicionar a credencial final do bootcamp Santander quando Lucas fornecer o comprovante. O canal de contato confirmado para esta versão é o GitHub.
