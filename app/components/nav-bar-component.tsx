'use client'
import  "@/styles/navbar.scss";
import Link from "next/link";
import { useRef } from "react";


export default function Navbar(){
    const navToggleRef = useRef<null | HTMLButtonElement>(null)
    const navContentRef = useRef<null | HTMLUListElement>(null)

    const onToggleNav = () => {
        if(navContentRef.current !== null){
            const isVisible = navContentRef.current.getAttribute('data-visible') === 'true';

            if(isVisible){
                navToggleRef.current?.setAttribute('aria-expanded', 'false');
                navContentRef.current.setAttribute('data-visible', 'false');
            }else if(!isVisible){
                navToggleRef.current?.setAttribute('aria-expanded', 'true');
                navContentRef.current.setAttribute('data-visible', 'true');    
            }

        }
    };
    return(
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
                    <Link href="/">Inicio</Link>
                    <Link href="/part1">Parte 1</Link>
                    <Link href="/part2">Parte 2</Link>
                    <Link href="/part3">Parte 3</Link>
                    <Link href="/part4">Parte 4</Link>
                </ul>
            </nav>
        </header>
    )
}