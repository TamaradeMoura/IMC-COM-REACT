import React, { useState } from "react"
import InputMask from "react-input-mask"

function App() {
  const [form, setForm] = useState("")

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) { 
    event.preventDefault()
    if ((!form.peso && !form.altura) || !form.peso || !form.altura ) {
      alert("Os valores não podem estar em branco. Digite novamente")
    } else {
      const imc = form.peso / (form.altura * form.altura);
      switch (true) {
        case imc <= 18.5:
          image = "./images/magreza.jpg";
          imageAlt = "imagem de peso normal";
          break;
        case imc <= 24.9:
          image = "./images/normal.jpg";
          imageAlt = "imagem de peso normal";
          break;
        case imc <= 29.9:
          image = "./images/acimadopeso.jpg";
          imageAlt = "imagem acima do peso";
          break;
        case imc <= 34.9:
          image = "./images/obesidade1.jpg";
          imageAlt = "imagem de obesidade grau 1";
          break;
        case imc <= 39.9:
          image = "./images/obesidade2.jpg";
          imageAlt = "imagem obesidade grau 2";
          break;
      }
      return (
        <>
          <span>Seu indice é: {imc} </span>
          <img className="imagem" src={image} alt={imagemAlt}></img>
        </>
      );
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <header className="header">
        <h1>Calculadora React Js</h1>
        </header>
        <div className="form">
          <label>Quanto você pesa?</label>
          <input placeholder="Digite seu peso" onChange={handleChange} name="peso"></input>
          <label>Quanto você mede?</label>
          <InputMask mask="9.99" placeholder="Digite sua altura" onChange={handleChange} name="altura"></InputMask>
          <button className="button">calcular</button>
        </div>
      </div>
    </form>
  )
}




export default App
