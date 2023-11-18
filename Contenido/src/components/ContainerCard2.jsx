import { useState } from "react";
import Card2 from "./Card2";

export default function ContainerCard2({ array, setNombres }) {
	const [nuevoNombre, setNuevoNombre] = useState("")
  function agregar() {
		setNombres([...array, nuevoNombre])
	}
  return (
		<div>
			{array && array.map(nombre => <Card2 key={nombre} nombre={nombre}/>)}
			<input type="text" onChange={(e) => setNuevoNombre(e.target.value)} value={nuevoNombre}/>
			<button onClick={() => agregar()}>Agregar</button>
		</div>
  )
}