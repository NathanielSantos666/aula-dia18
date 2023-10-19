import * as leitor from "readline-sync"

export class Loja {
    nome: String;
    endereco: String;
    public listaDeProdutos = ['bolo', 'torta', 'croissant', 'baguete']

    constructor(nome: String, endereco: String) {
        this.nome = nome;
        this.endereco = endereco;
    }

    remover() {
        let produto = leitor.question('Insira o nome do produto que deseja remover: ');
        let index = this.listaDeProdutos.indexOf(produto);
        this.listaDeProdutos.splice(index, 1);
        console.log(`Produto ${produto} removido da lista com sucesso`)
        return produto
    }

    adicionar() {
        let produto = leitor.question('Insira o nome do produto que deseja adicionar: ');
        this.listaDeProdutos.push(produto)
        console.log(`Produto ${produto} adicionado a lista com sucesso`)
        return produto
    }
}
