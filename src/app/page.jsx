import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>HOME PAGE</h1>

      <div>
        <Link href="/produtos/estaticas/tenis">TÊNIS</Link> | <Link href="/produtos/dinamicas/estranho/tenis-preto">TÊNIS PRETO</Link> | <Link href="/produtos/dinamicas/vestuario/camisa-xadrez">CAMISA-X</Link>
      </div>
    </>
  )
}
