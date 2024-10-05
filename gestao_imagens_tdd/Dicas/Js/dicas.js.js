/*
Listas: [
        .push() -> adiciona um elemento na lista 
        .lenght() -> tamanho da lista por indices dos elementos 
        .map() 
        .find() -> busca o primeiro elementos que satisfaz a condição 
        .sort() -> ordena a lista
        .reverse() -> ordem reversa
        .slice(1 , 4) -> busca os elementos da lista neste intervalo 

        .splice(2, 1) -> número de elememtos sempre um basicamente (neste caso não inserimos nada, apenas deletamos.)
            -> primeiro argumento indica o indice onde o novo elemento deve ser inserido
            -> segundo argumento indica o numero de elementos que devem ser deletados
            -> terceiro argumento é o valor que será inserido no array

        .includes() -> como se fosse o in do python, verifica se contem o elemento no lugar que deseja 

        let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let par = numeros.filter(n => n % 2 == 0)
            -> usar o filter pode substituir o for e escrever menos codigos, praticar
        .concat() -> concatena listas 
            -> array1.concat(array2) - forma de usar 

        .every() -> busca ver se todos os elementos da lista satisfazem a condição, retornando true or false
        .some() -> busca ver se algum elemento na lista satisfaz a condição, retornando true or false
        .split() -> é um separador de palavras ou caracteres.
            -> let palavras = frase.split(',')
        .join() -> faz uma junção entre elementos, mesma forma de uso do split()


        Manipulação de data:
            getDate() --> pega o dia 
            getMonth --> pega o mes
            getFulLYear --> pega o ano
            getTime() --> converte a data para mil segundos 
            var hour24 = 1000 * 60 * 60 * 24
            var hour12 = 1000 * 60 * 60 * 12
            var hour1 = 1000 * 60 * 60 * 1
]


!!! Boa forma para se exibir um print
lista.forEach(function(item, index) {
    console.log(index, item) }

isNaN -> is Not a Number(não é um número)
.startsWith('parametro') -> seleciona o elemento do começo, 'COMEÇACOM'
*/

/* DOM: 
    document.getElementById('') --> busca pelo id do elemento
    document.getElementByTagName('') --> busca pela tag
    document.getElementsByClassName('') --> buscar por classe
    document.getElementById('') --> seleciona o 1° elemento de uma lista
    document.querySelectorAll('') --> seleciona todos os elementos da lista
    createElement('') --> para criar um elemento

    atributos:
        textContent -> texto contitdo na variavel
        innerHTML --> possibilita modificar as tags e texto
        firstChild --> primeiro filho
        removeChild --> remover filho
        appendChild --> adicionar ou adicionar filho
        setAttribute --> para modificar um atributo
        removeAttribute --> remover um atributo
        getAttribute --> para acessar ou buscar um atributo

    .style --> serve para usarmos o css e todas as suas propriedades
    alert('texto') --> mostra uma mensagem na tela
    event.preventDefault() --> previne o comportamento padrão do evento de clique, isso é util, por exemplo, para evitar que um botão dentro de um formulário envie o formulário

    .classList:
        .classList.add('class') --> para adicionar uma classe de um elemento ou tag
        .classList.remove('class') --> para remover uma classe de um elemento ou tag 
        .classList.toggle('') --> não sei defenir 
    
    addEventListener (adiciona um evento) ou removeEventListener (remove um evento)::
        'click' --> evento de clique
        'mouseover' --> hover do css
        'mouseout' --> quando o mouse sai da area
        'DOMContentLoaded' --> antes de habilitar a página mostra um aviso

*/