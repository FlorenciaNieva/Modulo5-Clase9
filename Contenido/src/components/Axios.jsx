import React from 'react'
import axios from "axios"

export default function Axios() {
	fetch(`www.aswertg.com?apiKey=${apiKey}`, 
	{
		method: "POST",
		body: {
			name: "Flor",
			edad: 18,
		}
	})
	  .then(r => r.json())
		.then(data => console.log(data))

		axios(`www.aswertg.com?apiKey=${apiKey}`)
		  .then((data) => console.log(data))
		
		axios.post(`www.aswertg.com?apiKey=${apiKey}`) // para usar un metodo de fetch no hace falta abrir llaves
		  .then((data) => console.log(data))

		axios(`www.aswertg.com?apiKey=${apiKey}`, {name:"Flor", edad:18}) // para pasarle informaación no hace falta hacer la estructura del body, se lo pasa entre llaves a lado de la url
		  .then((data) => console.log(data))

  return (
    <div>Axios</div>
  )
}
