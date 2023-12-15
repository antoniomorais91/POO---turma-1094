// Definição da classe ItemMenu
class ItemMenu {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

// Definição da classe Restaurante
class Restaurante {
    constructor(nome) {
        this.nome = nome;
        this.menu = [];
    }

    adicionarItemAoMenu(item) {
        this.menu.push(item);
    }
}

// Definição da classe Cliente
class Cliente {
    constructor(nome) {
        this.nome = nome;
    }
}

// Definição da classe Pedido
class Pedido {
    constructor(cliente, restaurante) {
        this.cliente = cliente;
        this.restaurante = restaurante;
        this.itens = [];
        this.status = 'pendente';
    }

    adicionarItemAoPedido(item) {
        this.itens.push(item);
    }

    calcularTotal() {
        let total = 0;
        this.itens.forEach(item => {
            total += item.preco;
        });
        return total;
    }

    setStatus(status) {
        this.status = status;
    }
}

// Exemplos de uso:

// Criar itens do menu
const hamburguer = new ItemMenu('Hamburguer', 10.99);
const pizza = new ItemMenu('Pizza', 15.99);

// Criar restaurante e adicionar itens ao menu
const restaurante1 = new Restaurante('Restaurante A');
restaurante1.adicionarItemAoMenu(hamburguer);
restaurante1.adicionarItemAoMenu(pizza);

// Criar cliente
const cliente1 = new Cliente('Cliente 1');

// Fazer um pedido
const pedido1 = new Pedido(cliente1, restaurante1);
pedido1.adicionarItemAoPedido(hamburguer);
pedido1.adicionarItemAoPedido(pizza);

// Calcular o valor total do pedido
const totalPedido1 = pedido1.calcularTotal();

// Rastrear o status do pedido
pedido1.setStatus('em andamento');

console.log(`Total do Pedido: $${totalPedido1}`);
console.log(`Status do Pedido: ${pedido1.status}`);
