/* 
    OBJETIVO - quando clicar no pokemon da lista temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem 

        PASSO 1 - precisamos criar uma variavel no JS para trabalhar com a lista de pokemons
        PASSO 2 - identificar o evento de clique no elemento da lista
        PASSO 3 - remover a classe aberto só do cartão que tá aberto
        PASSO 4 - ao clicar em um pokemon da lista pegamos o id desse pokemon para saber qual cartão abrir
        PASSO 5 - remover a classe 'activate' que marca o pokemon selecionado na lista
        PASSO 6 - adicionar a classe 'activate' no pokemon selecionado na lista
*/

//PASSO 1 - precisamos criar uma variavel no JS para trabalhar com a lista de pokemons
const listaSelecaoPokemon = document.querySelectorAll(".pokemon");

//PASSO 2 - identificar o evento de clique no elemento da lista
listaSelecaoPokemon.forEach(pokemon =>{
    pokemon.addEventListener("click",() =>{
     //PASSO 3 - remover a classe aberto só do cartão que tá aberto
     esconderCartaoPokemon();

     //PASSO 4 - ao clicar em um pokemon da lista pegamos o id desse pokemon para saber qual cartão abrir
     const idPokemonSelecionado = mostrarCartaoPokemon(pokemon);

     //PASSO 5 - remover a classe 'activate' que marca o pokemon selecionado na lista
     desativarPokemonNaLista();

     //PASSO 6 - adicionar a classe 'activate' no pokemon selecionado na lista
     ativarPokemonNaLista(idPokemonSelecionado);
    })
})


function ativarPokemonNaLista(idPokemonSelecionado) {
    const pokemonSelecionadoNaLista = document.getElementById(idPokemonSelecionado);
    pokemonSelecionadoNaLista.classList.add("activate");
}

function desativarPokemonNaLista() {
    const pokemonActivateNaLista = document.querySelector(".activate");
    pokemonActivateNaLista.classList.remove("activate");
}

function mostrarCartaoPokemon(pokemon) {
    const idPokemonSelecionado = pokemon.attributes.id.value;
    const idDoCartaoPokemonParaAbrir = "card-" + idPokemonSelecionado;
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir);
    cartaoPokemonParaAbrir.classList.add("open");
    return idPokemonSelecionado;
}

function esconderCartaoPokemon() {
    const cartaoPokemonOpen = document.querySelector(".open");
    cartaoPokemonOpen.classList.remove("open");
}

