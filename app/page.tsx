import "@/styles/home.scss"
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <div className="wrapper">
        <h2>
          Hola, mi nombre es Fernando, soy full stack developer.
        </h2>
        <br />
        <p>
          El objetivo de esta pagina es resolver el examen para Desarrollador Front-End.
        </p>
        <br />
        <p>Opte por solucionarlo aqui, ya que era necesario desarrollar algunas cosas del <a href="/assets/examen.pdf" className="link" target="_blank">examen</a> como el componente <i>navbar</i> entre otras cosas.
          (Por cierto, ese mismo componente que piden en la <Link className="link" href="/part4">parte 4</Link> ,es el mismo que esta usando esta pagina.)
          <br />          
        </p>
        <br />
        <p>Lo unico que me falto fue la parte del cv,debido a mis responsabilidades en mi actual trabajo no tuve tiempo suficiente para desarrollarlo. 
          Pero dejo por aqui el link de <Link className="link" href="https://fernandos-portfolio.vercel.app/" target="_blank">mi portafolio personal</Link>
        </p>
      </div>
    </main>
  );
}
