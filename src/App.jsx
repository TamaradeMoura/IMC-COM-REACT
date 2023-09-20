import React, { useState } from "react"
import InputMask from "react-input-mask"


function App() {
  const [form, setForm] = useState("")

  function handleChange(event) {
    console.log('event 1', event.target.name)
    console.log('event 2', event.target.value)
    setForm({ ...form, [event.target.name]: event.target.value })
    console.log("form", form)
  }

  function handleSubmit(event) { 
    event.preventDefault()
    if ((!form.peso && !form.altura) || !form.peso || !form.altura ) {
      alert("Os valores não podem estar em branco. Digite novamente")
    } else {
      const imc = form.peso / (form.altura * form.altura )
      alert('O seu IMC é ' + imc)
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
