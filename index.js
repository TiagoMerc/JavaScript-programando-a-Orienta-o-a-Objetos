class Cliente { //molde
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  //#saldo 
  _saldo = 0;

  sacar(valor){
    if(this._saldo >= valor){
        this._saldo -= valor;
        return valor; //Se não tiver retorno, retorna underfined
    }
  }

  depositar(valor){
    if(valor <= 0){
        return;
    }

    this._saldo += valor;
  }
}

const cliente1 = new Cliente(); //Criando objeto ou instância da classe Cliente
cliente1.nome = "Ricardo";
cliente1.cpf = 1112223309;

const cliente2 = new Cliente(); //Criando objeto ou instância da classe Cliente
cliente2.nome = "Alice";
cliente2.cpf = 8882223309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);



