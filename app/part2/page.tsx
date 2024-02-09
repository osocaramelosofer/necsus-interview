'use client'
import "@/styles/part2.scss"
import { useRef, useState } from "react"

export default function Part1(){
    const paragraphRef= useRef<null|HTMLParagraphElement>(null)
    const btnRef= useRef<null|HTMLButtonElement>(null)
    const colors = [
        "red",
        "blue",
        "orange",
        "steelblue",
        "pink",
        "green",
        "darkblue"
    ]
    const[colorIndex, setColorIndex] =  useState<null|number>(null)

    function changeBgColor(){
        if(paragraphRef.current !== null && btnRef.current !== null){
            const index = Math.floor(Math.random() * colors.length)
            setColorIndex(index)
            paragraphRef.current.style.backgroundColor= colors[index]
            btnRef.current.style.backgroundColor = colors[index]
        }
    }
    return(
        <main className="part2">
            <h1>Parte 2 <br /> Ejercicio Práctico</h1>

            <section className="content">
                <div>
                    <h3>HTML/CSS/JS (5 puntos):</h3>
                    <p>• Crea una página web simple con un encabezado, un párrafo de texto y un botón.</p>
                    <p>• Al hacer clic en el botón, cambia el color del fondo del párrafo de texto a otro color diferente.</p>
                </div>
                <br />
                <h2>
                    Encabezado de la Página |
                    color actual: {colors[colorIndex ?? 0]}
                </h2>
                
                <div className="wrapper">
                    <p ref={paragraphRef}>Este es un párrafo de texto que describe el contenido de la página o da la bienvenida a los visitantes.</p>
                    <button ref={btnRef} type="button" onClick={changeBgColor}>
                        Haz clic aquí
                        <br />
                    </button>
                </div>
            </section>
        </main>
    )
}