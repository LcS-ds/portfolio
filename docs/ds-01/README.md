# DS-01 · Retrato e mostrador para a abertura

A imagem principal mostra Lucas ajustando a gravata. O mostrador usado na abertura foi recortado da mesma versão WebP exibida no pulso. A máscara acompanha o aro inclinado e deixa transparente a área externa. [Retrato para a web](../../site/assets/lucas-sena.webp) · [Mostrador transparente](../../site/assets/mostrador-relogio.png)

## Como alinhar o mostrador

A referência é a imagem de 1024 × 1536 px, com origem no canto superior esquerdo. A âncora é o eixo em que os ponteiros se encontram. A caixa do PNG foi escolhida para que esse ponto coincida com seu centro.

| Medida | Valor em pixels da imagem |
| --- | --- |
| Âncora no retrato (x, y) | (731, 1269) |
| Origem da caixa do recorte no retrato (x, y) | (663, 1197) |
| Largura × altura do recorte | 136 × 144 |
| Âncora no PNG do mostrador | (68, 72) |

Para o FE-02, usar o centro do viewport como posição inicial do eixo dos ponteiros. Preservar a proporção do PNG e a inclinação fotografada durante a transição. Na chegada, calcular a posição a partir da imagem efetivamente desenhada. Com `object-fit: contain` e `object-position: center`, a caixa do elemento pode incluir espaço vazio nas laterais ou acima e abaixo da foto.

Dada a caixa do elemento em coordenadas do viewport (esquerda, topo, largura, altura), o cálculo em pixels CSS é:

```text
escala = min(largura / 1024, altura / 1536)
xFoto = esquerda + (largura - 1024 × escala) / 2
yFoto = topo + (altura - 1536 × escala) / 2
centroDoRelogio = (xFoto + 731 × escala, yFoto + 1269 × escala)
tamanhoFinalDoRecorte = (136 × escala, 144 × escala)
```

O PNG e a foto compartilham a mesma escala na chegada. Se o recorte for desenhado numa camada sobreposta, posicionar seu centro em `centroDoRelogio` e retirar a camada ao revelar o pulso. Recalcular a caixa após redimensionamento ou mudança de orientação. Para movimento reduzido, usar diretamente a foto na composição final.

## Conferência do enquadramento

Medições no Chrome, com a rolagem no topo, usando o build local da frente FE-01. Os centros abaixo, arredondados a um pixel CSS, servem para comparar a implementação. A fórmula acima acompanha o layout real.

| Viewport | Centro do relógio no viewport | Resultado |
| --- | --- | --- |
| 1440 × 900 | (1149, 680) | Retrato à direita do nome. Rosto, mãos e relógio visíveis. [Captura desktop](desktop.png) |
| 390 × 844 | (261, 455) | Retrato acima do nome. Rosto, mãos e relógio visíveis. [Captura celular](celular.png) |
| 320 × 568 | (205, 330) | A foto inteira cabe na largura disponível e termina a 384 px do topo. |

**Origem e fidelidade** · A fonte local é `retrato-06-preto-e-branco.png`. O WebP é o mesmo arquivo usado no FE-01, revisão `1cc05c1`. Na comparação entre os pixels opacos do mostrador e a área correspondente do WebP, a diferença máxima foi de 1 nível por canal RGB em 255. A borda semitransparente suaviza a silhueta do aro.

[Cartão DS-01](https://trello.com/c/g9XBF7c2) · [Cartão de implementação FE-02](https://trello.com/c/6C0zyqIa) · [Especificação da abertura](../../ESPECIFICACAO_DO_PORTFOLIO.md)
