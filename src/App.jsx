import React, { useState } from "react"
import InputMask from "react-input-mask"
import minhaImagem from "./images/normal.jpg"
import minhaImagem1 from "./images/acimadopeso.jpg"
import minhaImagem2 from "./images/magreza.jpg"
import minhaImagem3 from "./images/obesidade1.jpg"
import minhaImagem4 from "./images/obesidade2.jpg"



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
      const imc = form.peso / (form.altura * form.altura )
      switch(imc) {
        case 24.6:
          <>
          <span>Seu indice é: {imc} </span>
          <img className="imagem" src={minhaImagem} alt="imagem de peso normal"></img>
          </>
          break;
      }
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
