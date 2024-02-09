/* eslint-disable react/no-unescaped-entities */
import "@/styles/part1.scss"
export default function Part1(){
    return(
        <main className="part1">
            <h1>Parte 1 <br /> Conceptos Teóricos</h1>
            <ol>
                <li>
                    <h3> HTML/CSS (2 puntos):</h3>
                    <ul className="questions-container">
                        <li> 
                            <details>
                                <summary>Explica la diferencia entre margin y padding en CSS.</summary>
                                <p>
                                    Los dos son propiedades que controlan el espaciado pero de maneras diferentes: 
                                    <br/>
                                    <br/>
                                    Margin(Margen): controla el espaciado alrededor de un elemento, se utiliza para crear espaciado entre el borde del elemento y los elementos alrededor.<br/>
                                    Padding(Relleno): Controla el espaciado dentro del elemento
                                </p>
                            </details>
                        </li>
                        <li> 
                            <details>
                        <summary>¿Qué es el modelo de caja en CSS y cuáles son sus componentes principales?</summary>
                            <p>
                                El modelo de caja o box model describe comose compone la estructura de cada elemento html y como se relaciona con el espaciado de la pagina y los demas elementos.
                                <br />
                                El contenido de caja(Box model) se compone de 4 puntos:
                                <ol>
                                    <li>Contenido(Content)</li>
                                    <li>Relleno(Padding)</li>
                                    <li>Borde(Border)</li>
                                    <li>Margen(Margin)</li>
                                </ol>
                            </p>
                            <div className="img-container">
                                <img src="/assets/boxmodel.png" alt="boxmodel" />
                            </div>
                            </details>
                        </li>
                    </ul>
                </li>

                <li>
                    <h3> JavaScript (3 puntos)</h3>
                    <ul className="questions-container">
                        <li> 
                            <details>
                                <summary>Explique el concepto de "hoisting" en JavaScript.</summary>
                                <p>
                                    El "hoisting" es un comportamiento de JavaScript por el cual las declaraciones de variables (usando var) y funciones son movidas al principio de su contexto de ejecución (el inicio del script o de la función en la que se encuentran) antes de que el código sea ejecutado.
                                </p>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>¿Cuál es la diferencia entre let, const y var en la declaración de variables?</summary>
                                <p>
                                    En JavaScript, var, let, y const son palabras clave utilizadas para la declaración de variables, pero tienen diferencias importantes en cuanto a alcance (scope), elevación (hoisting), y reasignación.
                                </p>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Describa cómo funciona el event bubbling en el contexto de eventos de JavaScript.</summary>
                                <p>
                                    El "event bubbling" (propagación de burbuja) es un mecanismo de cómo los eventos son manejados en el DOM (Document Object Model) en JavaScript. Cuando un evento ocurre en un elemento, por ejemplo, un clic en un botón, este evento no solo se ejecuta en el propio botón. Después de activarse en el elemento más específico (el objetivo del evento), se propaga hacia arriba a través de sus ancestros en el árbol del DOM.
                                </p>
                            </details>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>Responsive Web Design (2 puntos):</h3>
                    <ul className="questions-container">
                        <li> 
                            <details>
                                <summary>¿Qué son los media queries y cómo se utilizan en CSS para crear un diseño receptivo?</summary>
                                <p>
                                    El 'hoisting' es un comportamiento de JavaScript por el cual las declaraciones de variables (usando var) y funciones son movidas al principio de su contexto de ejecución (el inicio del script o de la función en la que se encuentran) antes de que el código sea ejecutado.
                                </p>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Menciona al menos dos técnicas para hacer que las imágenes sean receptivas en una página web.</summary>
                                <p>Uso de la etiqueta picture:permiten especificar múltiples fuentes de imagen para diferentes resoluciones y tamaños de pantalla.</p>
                                <p>Uso de CSS con max-width y height auto: Al establecer max-width: 100% y height: auto, la imagen se escalará proporcionalmente dentro de su contenedor sin exceder el ancho del mismo.</p>
                            </details>
                        </li>

                    </ul>
                </li>
            </ol>
        </main>
    )
}