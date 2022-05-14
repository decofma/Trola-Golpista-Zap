// github do criador - https://github.com/Matt-Fontes/SendScriptWhatsApp/blob/main/shrekSendScript.js

async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line),
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)

	if(!textarea) throw new Error("Não há uma conversa aberta")

	for(const line of lines){
		console.log(line)

		textarea.textContent = line
		textarea.dispatchEvent(new InputEvent("input", { bubbles: true }));

		(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click()
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250))
	}

	return lines.length
}
enviarScript(`

BEM VINDO AO TROLA ZAP GORUMET

AQUI VC ENCONTRA RECEITAS TOPS 

VAMOS PARA A PRIMEIRA TROLARECEITA

Receita de Ratatouille

Inspirada pelo filme 

fiz esta receita de ratatouille 

super fácil e deliciosa. 

Estes legumes assados 

com molho de tomate

e 

pimentão vai te surpreender.

Esta é uma daquelas receitas

que são inspiradoras, 

não só por ter um filme da Disney 

com o nome dela, 

nem pela receita de ratatouille

ser feito ápice do filme, 

mas pela história que a envolve.

Acredito que todo mundo já teve 

aquela experiência que o crítico 

gastronômico com cara de vilão, 

Anton Ego, 

tem ao dar a primeira garfada no ratatouille

– uma lembrança nostálgica, 

cheia de sentimentos e que emociona. 

Uma lembrança que vem tão intensa que 

aquele prato que é tão simples

transforma o cruel, 

frio e egocêntrico vilão 

num personagem feliz e carismático.

O Ratatouille é 

um tipo de ensopado de legumes, 

tradicionalmente feito por famílias camponesas 

e pobres da região de Provença na França. 

O que muitos não sabem é que o prato 

que foi feito no filme não é a tradicional 

receita de ratatouille, 

mas sim uma releitura chamada Confit byaldi. 

A receita tradicional de ratatouille

é  feita com os legumes cortados em cubos grandes, 

estes legumes são refogados separadamente 

e depois são combinados, 

temperados e cozidos (ou assados) 

juntos com algum tipo de vinho. 

Esta é somente uma das variações, 

é claro. Existem inúmeras. 

Já o Confit byaldi

é uma versão mais leve 

do ratatouille criada 

pelo chef Michel Guérard. 

Aqui os legumes são cortados em fatias finas, 

com o molho de tomates e pimentão 

por baixo dos legumes e assados juntos.

Bom, 

mas o que realmente importa 

pra nós é 

que este é um prato delicioso, 

fácil de fazer e que 

introduz os legumes de forma maravilhosa 

na nossa alimentação. 

O que não poderia faltar aqui são 

as dicas para que 

a sua receita de ratatouille, 

fique incrível e com cara de prato de restaurante francês.

Primeiro tenha um mandoline, 

aquele fatiador de vegetais 

que vai te ajudar a ter fatias finas

e uniformes dos vegetais. Se você não

tiver um, use uma faca bem afiada e 

vá com calma. Para o tomate e a berinjela

o melhor são as facas de serra, 

assim você consegue fatiar a pele 

sem problemas. 

E a segunda dica é paciência. 

Depois de fatiar os vegetais 

você fará montinhos intercalando 

as fatias de legumes, alternando 

entre berinjela, tomate, abobrinha e cebola.

Não precisa ser exatamente 

uma fatia de cada, as vezes 

você tem mais abobrinha que

cebola, e tudo bem, é só pular 

algumas fatias sem cebola. 

Este passo vai facilitar a 

montagem dos vegetais na assadeira. 

A terceira e última dica

é – escolha os legumes pelo seu tamanho. 

Para que o prato fique bem harmônico, 

o melhor que todos os legumes tenham 

o mesmo diâmetro. Então compre todos 

ao mesmo tempo e preste atenção neste 

detalhe. Se for melhor, compra a 

berinjela japonesa, que é um pouco 

mais fina que a normal e o tomate 

italiano ou rasteiro que também são

mais alongados.

Espero que vocês 

gostem desta receita 

e lembre-se do lema do 

chef Auguste Gusteau: 

“Qualquer um pode cozinhar”.

Ingredientes

Receita de Ratatouille

2 abobrinhas (usei 1 verde e 1 amarela)

1 berinjela

3 tomates italianos

1 cebola média

1 colher de sopa de azeite

sal e pimenta do reino a gosto

manjericão para finalizar

Molho de tomate e pimentão

1 pimentão vermelho em cubos

1 cebola pequena picada

2 dentes de alho picados

1 lata de tomate pelado (pode usar 400 g de tomate italiano sem pele)

1 xícara de caldo de legumes

folhas de alecrim (pode usar desidratado)

folhas de tomilho (pode usar desidratado)

sal e pimenta do reino a gosto

1 colher de sopa de azeite

100 g de creme de leite de caixinha (para opção vegana substitua por um creme de leite vegano)

Modo de preparo

Aqueça o azeite em uma panela funda. 

Coloque a cebola e tempere 

com uma pitada de sal. 

Refogue a cebola até dourar. 

Junte os dentes de alho e 

refogue por alguns segundos.


Acrescente o pimentão 

e refogue por uns 2 minutos. 

Adicione o tomate pelado junto 

com o liquido da lata 

(ou o tomate italiano picado), 

o caldo de legumes, o alecrim e o tomilho. 

Tempere com sal e pimenta, 

misture bem e deixe cozinhar 

em fogo baixo até que o tomate 

desmanche. Deve levar uns 10 minutos.


Bata o molho com um mixer 

para que fique um molho liso.

Se gostar pode deixar pedaçudo 

também que não tem problema. 

Acrescente o creme de leite e 

misture bem.
Deixe cozinhar por mais uns 5 

minutos, em fogo baixo. Verifique

se precisa de mais sal e 

pimenta, acerte o tempero 

se necessário e desligue.

Receita de Ratatouille

Fatie as abobrinhas,

a cebola e o tomate 

em rodelas bem finas. 

Eu usei um mandoline 

para facilitar. Reserve.


Separe uma bacia 

com água e sal. 

Fatie a berinjela 

em rodelas finas, 

aqui eu usei uma 

faca de serra. 

Coloque a berinjela

na bacia com água 

para evitar que 

oxidem. Reserve.


Em uma travessa,

coloque 2/3 do 

molho no fundo , 

separe o restante 

para servir a parte.


Vá colocando as 

fatias dos legumes, 

alternando entre todos

eles. A cebola eu 

coloquei somente em 

algumas camadas.

Depois que terminar 

todas as fatias, 

pincele um fio de 

azeite por cima, 

cubra com uma folha de papel 

manteiga e leve para o 

forno, preaquecido a 180

ºC por 35 minutos. Retire 

o papel, aumente a temperatura

para uns 220 ºC e deixe assar

por mais 10 minutos.

Retire do forno, 

coloque as folhas 

de manjericão por cima 

e sirva com mais molho a parte.

FIM

PROXIMA RECEITA

BOLO DE CENOURA

INGREDIENTES
MASSA
1/2 xícara (chá) de óleo
3 cenouras médias raladas
4 ovos
2 xícaras (chá) de açúcar
2 e 1/2 xícaras (chá) de farinha de trigo
1 colher (sopa) de fermento em pó
COBERTURA
1 colher (sopa) de manteiga
3 colheres (sopa) de chocolate em pó
1 xícara (chá) de açúcar
1 xícara (chá) de leite
MODO DE PREPARO
MASSA
Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.

Acrescente o açúcar e bata novamente por 5 minutos.

Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente.

Acrescente o fermento e misture lentamente com uma colher.

Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.

COBERTURA
Despeje em uma tigela a manteiga, o chocolate em pó, o açúcar e o leite, depois misture.

Leve a mistura ao fogo e 
continue misturando até obter
uma consistência cremosa, 
depois despeje a calda por cima do bolo.

INFORMAÇÕES ADICIONAIS

OBS: Você poderá seguir ao vídeo ou a receita escrita, o resultado sairá perfeito dos 2 modos.

Para fazer seu bolo de cenoura 
de liquidificador de uma 
vez só é preciso um liquidificador 
potente, mas se achar a massa pesada 
para o seu aparelho, corte a cenoura 
em pedaços bem pequenos e só bata no 
aparelho os ingredientes úmidos. Depois 
que estiver tudo homogêneo, incorpore a 
mistura líquida aos ingredientes secos, 
mexendo bem e delicadamente. Além de poupar 
o seu liquidificador, misturar os ingredientes 
secos delicadamente com a mão também é o segredo 
para o seu bolo de cenoura não solar.

A receita de bolo de cenoura
pode ser complicada porque 
exige alguns pequenos detalhes
que garantem o resultado perfeito. 
Uma delas é a proporção de cenoura, 
ue precisa ser correta para a receita 
que você está fazendo. Por isso, para
ter certeza de que o bolo não vai solar, 
você pode utilizar a mesma medida da nossa 
receita de ovo recheado com bolo de cenoura,
cerca de 250 g de cenoura para 
2 copos de farinha de trigo.

Para garantir o seu bolo de 
cenoura fofinho, lembre-se de 
testar o fermento antes de adicioná-lo 
à massa e peneire a farinha de trigo! 
Isso vai garantir que um bolo de cenoura
fofo, leve e ainda mais delicioso!

Se você prefere um bolo de
cenoura cremoso, faça uma 
calda para umedecer seu bolo! 
Basta adicionar 1 xícara de 
açúcar e 1 xícara de água em 
uma leiteira e, assim que levantar
fervura, desligue o fogo. Quando 
esfriar completamente, você pode 
regar seu bolo. Se quiser incrementar
essa mistura para deixar ainda mais 
gostoso e dar um perfume ao seu bolo
de cenoura, você pode adicionar
raspas de laranja, essência de 
baunilha ou um pouco de canela.
Dessa forma, você vai ter um
bolo de cenoura molhadinho e delicioso!

O bolo de cenoura é delicioso
de qualquer jeito: se quiser
um bolo de cenoura simples,
daqueles que vão bem com um
cafezinho, basta não fazer
a calda. Mas se você não 
perde a oportunidade de comer
chocolate e não abre mão da
calda para bolo de cenoura, 
confira essas receitas de calda
de chocolate do TudoGostoso 
e escolha qual vai você quer 
colocar no seu bolo de cenoura 
com calda de chocolate!

Se você está de dieta e está
morrendo de vontade de comer
um bolo de cenoura, que tal 
conferir outras opções de bolo 
de cenoura do TudoGostoso como
bolo de cenoura fit, bolo de 
cenoura vegano, bolo de cenoura
low carb, bolo de cenoura com
aveia, bolo de cenoura integral e mais!

FIM

PROXIMA RECEITA

FRAPÊ DE CAFÉ

INGREDIENTES
1 lata de leite condensado
2 colheres (sopa) de café-solúvel
1 forma de gelo
4 bolas de sorvete de creme
1/2 xícara de água
chantilly e café-solúvel para decorar
MODO DE PREPARO
Bata no liquidificador o leite condensado com o café-solúvel, o gelo e 1/2 xícara de água.
Coloque as bolas de sorvete em copos altos.
Cubra-as com a mistura batida e decore decore com o chantilly e o café-solúvel reservado.


FIM

PROXIMA RECEITA

MISTO QUENTE DE FORNO À MINHA MODA

INGREDIENTES
Margarina para untar
12 fatias de pão de forma (sem a casca)
1/2 lata de molho de tomate pronto (coloquei 1 sache de sazon sabor do nordeste)
6 fatias de presunto (ou a gosto)
4 colheres de sopa de requeijão
12 fatias de mussarela (ou a gosto)
1/2 caixa de creme de leite
1 tomate grande cortado em rodelas
orégano a gosto
MODO DE PREPARO
Unte um refratário com margarina.
Forre o fundo com 6 fatias de pão de forma.
Colocar metade do molho de tomate temperado, presunto, camada de requeijão, metade da mussarela, restante do pão de forma, molho de tomate, creme de leite, mussarela, tomate em rodelas, orégano.
Leve o refratário ao forno até a mussarela derreter (fiz no micro-ondas)

FIM

PROXIMA RECEITA

ARROZ DOCE CREMOSO

INGREDIENTES
1 xícaras e 1/2 de arroz
2 xícaras e 1/2 de água
5 xícaras de leite
2 colheres de baunilha
1 lata de leite condensado
1 lata de creme de leite
açúcar a gosto
canela em pó ou em lascas
MODO DE PREPARO
Coloque a água o arroz e a canela e deixe ferver até secar a água.

Após coloque o leite, a baunilha, o açúcar e o leite condensado, mexendo sempre.

Deixe ferver por 15 minutos e coloque o creme de leite, mexa.

Ferva por mais 5 minutos e pronto.

Polvilhe com canela.

Pode ser servido quente ou frio conforme o gosto.

FIM

PROXIMA RECEITA

FAROFA DE CENOURA

INGREDIENTES
3 cenouras grandes, raladas crua no ralo fino ou processadas
1 cebola pequena picada
1 colher (sopa) de pimentão verde picado
1 dente de alho amassado
farinha de mandioca a gosto
sal a gosto
3 colheres (sopa) de óleo ou manteiga de sua preferência
não esprema a cenoura pra tirar o suco
MODO DE PREPARO
Coloque o óleo em uma panela, quando estiver fervendo acrescente o alho e a cebola para dourar.
Em seguida o pimentão, não pode deixar queimar, portanto é aconselhável dar sempre uma virada com uma colher, quando estiver tudo douradinho desligue o fogo.
Em um recipiente de vidro, coloque aproximadamente duas xícaras de farinha de mandioca e despeje os temperos fritos junto com o óleo.
Misture bem com o auxílio de um garfo, não deixe embolar.
Quando estiver bem misturado, acrescente o sal e a cenoura, misture bem, se possível com o auxílio das mãos, agregando a farofa à cenoura.
Não coloque muita farinha para que a farofa não fique ressecada, pois seu paladar está na cenoura, se colocar muita farinha, quando comê-la não sentirá o sabor da cenoura.

FIM

PROXIMA RECEITA

POLENTA CREMOSA AO MOLHO

INGREDIENTES
Polenta:
2 dentes de alho
1 litro de água
1 folha de louro
1 envelope de caldo de carne
1 colher (sopa) de cebola picada
50 g de manteiga com sal
2 xícaras (chá) de fubá
Sal a gosto
1 caixa de creme de leite
Noz-moscada a gosto
Molho:
2 colheres (sopa) de azeite
1 cebola picada
2 dentes de alho amassados
300 g de carne moída
Sal a gosto
300 ml de molho de tomate
Queijo ralado para polvilhar
Tomilho, orégano, salsa e pimenta-do-reino branca moída
MODO DE PREPARO
Em uma panela, refogue o alho e a cebola junto com a manteiga, acrescente a água, o louro, o caldo de carne, o sal e a noz-moscada.

Deixe ferver.

Após levantar fervura, acrescente o fubá dissolvido em um pouco de água para não empelotar e mexa.

Abaixe o fogo, tampe a panela e cozinhe por aproximadamente 25 minutos.

Desligue e retire a folha de louro.

Agregue o creme de leite.

Coloque em um refratário e regue com o molho.

Com a ponta de uma faca espete a polenta para o molho penetrar (opcional).

Polvilhe com queijo ralado.

Leve ao forno para derreter o queijo.

Molho:

Em uma panela, aqueça o azeite refogue o alho e a cebola.

Frite a carne moída e coloque o tomilho, orégano, salsa e pimenta-do-reino branca moída.

Adicione o molho de tomate e o sal.

Cozinhe por alguns minutos até o molho criar consistência (não ficar aguado).

FIM

PARA PARAR DE RECEBER PARE DE SER BABACA

SE NAO VAI CONTINUAR RECEBENDO

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)