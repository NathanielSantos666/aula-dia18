import { Loja } from "./aula";

function main() {
    let loja = new Loja('Ace Bakery Shop', 'Rua El Dorado 123')
    console.log(`Nome da loja: ${loja.nome} \nEndereço: ${loja.endereco} \nProdutos disponiveis: ${loja.listaDeProdutos} `)
  
    loja.remover()
    loja.adicionar()

}

main()
