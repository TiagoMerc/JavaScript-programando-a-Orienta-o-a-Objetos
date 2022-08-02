export class ContaCorrente {
  agencia;
  cliente;


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

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}