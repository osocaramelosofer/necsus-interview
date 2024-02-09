'use client'

import 'highlight.js/styles/atom-one-dark.css';
import React from 'react';
import "@/styles/part4.scss"
import { CodeHighlighter } from '../components/code-highlighter';

export default function Part1(){
    
    return(
        <main className="part4">
            <h1>Parte 4<br /> Proyecto Práctico (3 puntos):</h1>

            <section className="content">
                <div>
                    <h3>Desarrollo de Componente (3 puntos):</h3>
                    <p>• Desarrolla un componente de barra de navegación (navbar) completamente responsivo utilizando HTML, CSS y opcionalmente JavaScript si es necesario.</p>
                    <br />
                    <p>• Asegúrate de que la barra de navegación tenga al menos tres elementos de navegación y
                    que se adapte adecuadamente a diferentes tamaños de pantalla.</p>
                </div>
                <br />

                <h4>Solución: Aquí estan unos snippets de como estructure el navbar de esta página, el cual es la solución a este ejercicio práctico.</h4>
                <br />
            </section>
            <section>
                <h2>HTML Structure</h2>
                <CodeHighlighter language='xml'>
                    {`
                    <header className="primary-header">
                        <button
                            ref={navToggleRef}
                            aria-controls="navbar-content"
                            aria-expanded="false"
                            className="mobile-nav-toggle"
                            onClick={onToggleNav}
                        >
                            <span className="sr-only">Menu</span>
                        </button>
                        <nav>
                            <ul 
                            id="navbar-content" 
                            className="navbar-content"
                            data-visible="false"
                            ref={navContentRef}>
                                <Link href="/part1">Parte 1</Link>
                                <Link href="/part2">Parte 2</Link>
                                <Link href="/part3">Parte 3</Link>
                                <Link href="/part4">Parte 4</Link>
                            </ul>
                        </nav>
                    </header>`}
                </CodeHighlighter>
                <h2>CSS Styles (with SCSS)</h2>
                <CodeHighlighter language='css'>
                    {`header{
    display: flex;
    .mobile-nav-toggle{
        display: none;
    }
    nav{
        width: 100%;

        .navbar-content {
            padding-block: 1.5rem;
            background-color: hsl(0 0% 100% / 0.1);
            backdrop-filter: blur(1rem);
            width: 100%;
            display: flex;
            list-style: none;  
            display: flex;
            justify-content: center;
            column-gap: 30px;
        }
    
    }
}



@media (max-width: 35rem){
    header{
        position: fixed;
        inset: 0 0 0 30%;
        .navbar-content{
            padding: min(30vh, 10rem) 2em;
            flex-direction: column;
            row-gap: 1.5rem;
            transform: translateX(100%);
            height: 100%;
            transition: transform 350ms ease-out;
        }
        .navbar-content[data-visible="true"]{
            transform: translateX(0%);
        }


        .mobile-nav-toggle{
            display: block;
            position: absolute;
            background: url("/assets/hamburger-menu.svg");
            width: 2.6rem;
            aspect-ratio: 1;
            top: 2rem;
            right: 2rem;
            z-index: 9999;
            color: white;
            border: 0;
            background-repeat: no-repeat;

        }
        .mobile-nav-toggle[aria-expanded="true"]{
            background: url("/assets/close.svg");
        }
    }
}

.sr-only {
	border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important;
	-webkit-clip-path: inset(50%) !important;
		clip-path: inset(50%) !important;
	height: 1px !important;
	margin: -1px !important;
	overflow: hidden !important;
	padding: 0 !important;
	position: absolute !important;
	width: 1px !important;
	white-space: nowrap !important;
}`}
                </CodeHighlighter>
            </section>
        </main>
    )
}