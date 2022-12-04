import React from 'react';


// Criar componente com classe precisamos antes importar o modulo acima
class ComponenteComClasse extends React.Component {

  // ARROW FUNCTION
  // sem paramentro
  botaoSemParam1 = () => {
    alert("Funçao sem parametro 1, Acionada!!!");

  }

  botaoSemParam2 = () => {
    alert("Funçao sem parametro 2, Acionada!!!");
  }

  // com parametro
  botaoComParam1 = (param1) => {
    alert("Funçao com parametro 1, " + param1);
  }

  botaoComParam2 = (param2) => {
    alert("Funçao Acionada parametro 2, " + param2);
  }

  //arrow function teclado (o obj pode ser um e, event..., na verdade o nome que quiseres)
  teclado = (obj) => {
    console.log(obj.target.value)
  }

  // para uma classe sempre deve existir o metedo render
  render() {
    return (
      <div>
        
        <div>

          <h1>Treinando como chamar funcção com e sem parametros </h1>

          {/* 2 FORMAS DE CHAMAR FUNÇÕES SEM PARAMETROS */}
          <h3>Botões que acionam funções sem parâmetros</h3>

          {/* Tipo 1: */}
          <button onClick={() => this.botaoSemParam1()}>Botão Sem parameto 1</button>

          {/* Tipo 2: */}
          <button onClick={this.botaoSemParam2}>Botão Sem parameto 2</button>

        </div>

        <div>

          {/*  2 FORMAS DE CHAMAR FUNÇÃO COM PARAMETROS */}
          <h3>Botões que acionam funções com parâmetros</h3>

          {/* Tipo 1: usando arrow function*/}
          <button onClick={() => this.botaoComParam1("Acionado!!!")}>Botão Com parameto 1</button>

          {/* Tipo 2: usando o bind*/}
          <button onClick={this.botaoComParam2.bind(this, "Acionado!!!")}>Botão Com parameto 2</button>

        </div>

      </div>
    )
  }

}

export default ComponenteComClasse;


// mover linha para baixo: alt + up or down

