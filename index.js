import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente(); //Criando objeto ou instância da classe Cliente
cliente1.nome = "Ricardo";
cliente1.cpf = 1112223309;

const cliente2 = new Cliente(); //Criando objeto ou instância da classe Cliente
cliente2.nome = "Alice";
cliente2.cpf = 8882223309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log("Valor:", valor);
console.log(conta2);
//console.log(contaCorrenteRicardo);
