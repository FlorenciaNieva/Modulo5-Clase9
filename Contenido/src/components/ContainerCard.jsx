import { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

export default function ContainerCard({ array, setNombres }) {
	const [apellido, setApellido] = useState("Programación")

  function agregarProgramacion() {
		setNombres([...array, apellido])
  }

  return (
		<div>
			{array && array.map(nombre => <Card2 key={nombre} nombre={nombre}/>)}
			<button onClick={agregarProgramacion}>Button</button>
		</div>
  )
}
