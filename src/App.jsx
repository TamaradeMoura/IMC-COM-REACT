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
      const imc = form.peso / (form.altura * form.altura).toFixed(1);
      if (imc <=18.5) {
        alert("seu escore é: " + imc + " considerado magreza");
      } else {
      if ((imc >= 18.6) && (imc <= 24.9)) {
        alert("seu escore é: " + imc + " considerado ideal (parabéns)");
        } else {
          if ((imc >= 18.6) && (imc <= 24.9)) {
            alert("seu escore é: " + imc + " considerado acima do peso (cuidado)");
          } else {
            if ((imc >= 25.0) && (imc <= 29.9)) {
              alert("seu escore é: " + imc + " considerado sobrepeso");
            } else {
              if ((imc >= 30.0) && (imc <= 34.9)) {
                alert("seu escore é: " + imc + " considerado obesidade grau I");
              } else {
                if ((imc >= 35.0) && (imc <= 39.9)) {
                  alert("seu escore é: " + imc + " considerado obesidade grau II");
                } else {
                  if (imc >= 40) {
                    alert("seu escore é: " + imc + " considerado obesidade grau III (morbida)");
                  }
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
