import Link from "next/link";

export default function MeuProduto({params}) {
    return (
        <div>
            <h1>Recuperando o parâmetro [oculos]</h1>
            <div>
                <p>O valor é : {params.oculos}</p>
                <p> <Link href="/">Voltar...</Link> </p>
            </div>
        </div>
    )
}