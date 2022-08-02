class Cliente { //molde
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor){
    if(this.saldo >= valor){
        this.saldo -= valor;
    }
  }
}

const cliente1 = new Cliente(); //Criando objeto ou instância da classe Cliente

cliente1.nome = "Ricardo";
cliente1.cpf = 1112223309;

/* cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 123456789; */

const cliente2 = new Cliente(); //Criando objeto ou instância da classe Cliente

cliente2.nome = "Alice";
cliente2.cpf = 8882223309;

cliente2.agencia = 1001;
cliente2.saldo = 0;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo.saldo);


let valorSacado = 200;
/* if(contaCorrenteRicardo.saldo >= valorSacado) {
   contaCorrenteRicardo.saldo -= valorSacado;
}
 */

console.log(cliente1);
console.log(cliente2);


