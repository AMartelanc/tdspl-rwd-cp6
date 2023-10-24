import Link from "next/link";


export default function Cabecalho() {
    return (
        <header className="bg-gray-800 text-white h-16">
            <nav className="flex flex-row justify-around">
                <Link className="link-cabecalho" href="/produtos/estaticas/tenis">TÊNIS</Link>
                <Link className="link-cabecalho" href="/produtos/dinamicas/estranho/bone/bone-branco">BONÉ BRANCO</Link>
                <Link className="link-cabecalho" href="/produtos/dinamicas/estranho/oculos/oculos-escuros">OCULOS ESCUROS</Link>
                <Link className="link-cabecalho" href="/produtos/dinamicas/estranho/sapato/sapato-formal">SAPATO FORMAL</Link>
                <Link className="link-cabecalho" href="/produtos/dinamicas/vestuario/camisa/camisa-xadrez">CAMISA-X</Link>
                <Link className="link-cabecalho" href="/produtos/dinamicas/vestuario/calca/calca-jeans">CALÇA JEANS</Link>
            </nav>
      </header>
    )
}