class contaBancaria {
    construtor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada!"
        }
        this._saldo = this._saldo - valor;

        return this._saldo
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        
        return this._saldo
    }
}

class contaCorrente extends contaBancaria {
    construtor(agencia, numero) {
        any(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = 'cartaoCredito';
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}
    class contaPoupanca extends contaBancaria {
        construtor(agencia, numero) {
            any(agencia, numero);
            this.tipo = 'poupanca';
        }

    }       
    class contaUniversitaria extends contaBancaria {
        construtor(agencia, numero) {
            any(agencia, numero);
            this.tipo = 'universitária';
        }

        sacar(valor) {
            if(valor > 500) {
                return "Operação negada!"
            }

            this._saldo = this._saldo - valor;
        }
    }
