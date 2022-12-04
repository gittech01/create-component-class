import React from 'react';


// Criar componente com classe
class Componente extends React.Component {

  // arrow function
  // arrow function sem paramentro
  botao1 = () => {
    alert("Botão 1 Clicado!!!");
  }

  // arrow function com parametro
  botao2 = (curso) => {
    alert("Botão 2, apresenta " + curso);
  }

  // para uma classe sempre deve existir o metedo render
  render() {
    return (
      <div>
        <p>Mostramos a baixo como chamar as arrow function dentro de uma Componente com Classe </p>
        <button onClick={() => this.botao1()}>Botão 1</button>
        <br></br>
        <button onClick={() => this.botao2("ReactJS")}>Botão 2</button>
      </div>
    )
  }

}

export default Componente;
