# JavaScript

# O que faz o JavaScript?
   interações entre o cliente e o website
# Cliente x Servidor
     JavaScript é uma tecnologia que funciona muito mais para cliente
# Website
    Como fosse um jornal
        jornalista, produção de conteudo responsavel por texto, imagem, video. (HMTL)
        designer, pegar o conteudo e organiza-los, tornar as coisas mais bonitas. (CSS)
        programador, tratar da engenharia da entrega, segurança, interação. (JS)

# Quem usa JavaScript ?
Google
Youtube
Linkedin
Netflix
Facebook

# Identificadores de variaveis

* Podem começar com letra, $ ou _
* Não podem comçar com números
* É possivel utilizar letras ou numeros
* É possivel usar acentos e simbolos
* Não podem conter espaços
* Não podem ser palavras reservadas, por exemplo comandos do JS

# Dicas de identificadores de variaveis

* Maisculas e minusculas fazem diferença
* Utilizar nomes coerentes para as variaveis
* Evite se tornar um "programdor alfabeto" ou um "programador contador"

# Diferenças de variaveis

* 5 18 -12 0.5 -15.9 3.14 8.0 = Number
* "Gooogle" 'JavaScript' `Maria` = String
* True, false = Boolean

# Manipulação de Dados
* Conversão de string para numero:
 * Number.parseInt(n) ➡ numero inteiro
 * Number.parseFloat(n) ➡ numero real
 * Number(n)➡ O proprio JS decide com o valor que é dado se é real ou inteiro

* Conversão de numero para string
 * String(n)
 * n.toString()

# Formatando Strings
 * var s = 'JavaScript'
 'Eu estou aprendendo s' ➡ não faz interpolação
 'Eu estou aprendendo ' + s ➡ usa concatenação
 `Eu estou aprendendo ${s}` ➡ usa template string

* s.length ➡ quantos caracteres tem uma string
* s.toUpperCase() ➡ muda tudo para letras maiusculas
* s.toLowerCase() ➡ muda tudo para letras minusculas

# Formatando Numeros
* n1.toFixed(2)
* n1.toFixed(2).replace ('.', ',')
* n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})