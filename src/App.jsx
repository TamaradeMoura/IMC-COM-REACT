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
      const imc = form.peso / (form.altura * form.altura )
      alert("Seu escore é " + imc);
      if (imc <= 18.5) {
        alert("é considerado magreza");
      } else {
        if ((imc >= 18.6) && (imc <= 24.9)) {
          alert("é considerado ideal (parabéns)");
        } else {
          if ((imc >= 25.0) && (imc <= 29.9)) {
            alert("é considerado levemente acima do peso (cuidado)");
          } else {
            if ((imc >= 30.0) && (imc <= 34.9)) {
              alert("é considerado obesidade grau I");
            } else {
              if ((imc >= 35.0) && (imc <= 39.9)) {
                alert("OBESIDADE GRAU II (SEVERA)");
              } else {
                if (imc >= 40) {
                  alert("OBESIDADE GRAU III (MÓRBIDA)");
                }
              }
            }
          }
        }
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
