import React from 'react'
import { useState } from 'react'

export default function Card3() {

  const [count, setCount] = useState(0)

  // const sumar = () => {
  //   setCount(count + 1) // => el set es asincorono
  //   console.log(count)
  //   // el console.log me muestra 0 al presionar el boton sumar y en el h1 un 1 porque el setCount es una promesa, es decir que se demora un poco
  // }
  const sumar = () => {
    setCount((value) => value + 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={sumar}>Sumar</button>
      </div>
    </>
  )
}
