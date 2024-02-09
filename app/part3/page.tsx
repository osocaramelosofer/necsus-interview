'use client'
import 'highlight.js/styles/atom-one-dark.css';
import React, { ReactNode, useEffect } from 'react';
import "@/styles/part3.scss"
import { CodeHighlighter } from '../components/code-highlighter';

export default function Part1(){
    
    return(
        <main className="part3">
            <h1>Parte 3 <br /> Ejercicio Práctico</h1>

            <section className="content">
                <div>
                    <h3>Problema de Lógica (3 puntos):</h3>
                    <p>• Escribe una función en JavaScript que tome un arreglo de números como parámetro y devuelva el número más grande.</p>
                </div>
                <br />
            </section>
            <section>
            <CodeHighlighter language='javascript'>
                {`
                    function findLargestNumber(numbers) {
                        if (numbers.length === 0) {
                          throw new Error('El arreglo no debe estar vacío');
                        }
                      
                        return Math.max(...numbers);
                      }
                      
                      // Uso de la función
                      const array = [1, 5, 3, 9, 2, 10, 4];
                      const largestNumber = findLargestNumber(array);
                      console.log(largestNumber); // Debería mostrar el número 10
                              
                `}
            </CodeHighlighter>
            </section>
        </main>
    )
}