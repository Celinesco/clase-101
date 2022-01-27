import { useState } from 'react';
import './App.scss';

const App = () => {
  const [inputNombre, setInputNombre] = useState("")
  const [terminosYCondiciones, setTerminosYCondiciones] = useState("NO")
  const [pais, setPais] = useState("")
  const [animal, setAnimal] = useState("")
  


  const aceptarRechazar = (e) => {
    e.target.checked ? setTerminosYCondiciones("SI") : setTerminosYCondiciones("NO")
  }

  const imprimirNombre = (e) => {
    setInputNombre(e.target.value)
  }

  const imprimirSelect = (e) => {
    if (e.target.value === "argentina") {
      setPais("🇦🇷")
    }
    else if (e.target.value === "brasil") {
      setPais("🇧🇷")
    }
    else {
      setPais("🇧🇴")
    }
  }

  const radioCheck = (e) => {
    e.target.value === "gato" ? setAnimal("😽") : setAnimal ("🐶")
  }

  return (
    <div className="App">
      <div className='contenedor-formulario'>
        <form>
          <label>Nombre<input onInput={imprimirNombre} type="text"></input>
            <p>Tu nombre: {inputNombre}</p>
          </label>
          <label>Acepta terminos y condiciones
            <input onInput={aceptarRechazar} type="checkbox"></input>
            <p>Esta de acuerdo: {terminosYCondiciones}</p>
          </label>
          <label>Elegir pais
            <select onChange = {imprimirSelect}>
              <option value="argentina">Argentina</option>
              <option value="brasil">Brasil</option>
              <option value="bolivia">Bolivia</option>
            </select>
            <p>Pais elegido: {pais}</p>
          </label>
          <p>Que preferis</p>
            <label for="perro"> Perro <input onChange={radioCheck} type="radio" id="perro" name="animal" value="perro"></input></label>
            <label for="gato">Gato<input onChange={radioCheck} type="radio" name="animal" value="gato"></input> </label>
          <p className='texto-animal'>{animal}</p>

        </form>
      </div>


    </div>
  );
}

export default App;
