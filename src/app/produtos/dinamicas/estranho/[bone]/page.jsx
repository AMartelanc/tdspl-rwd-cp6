import Link from "next/link";

export default function MeuProduto({params}) {
    return (
        <div>
            <h1>Recuperando o parâmetro [bone]</h1>
            <div>
                <p>O valor é : {params.bone}</p>
                <p> <Link href="/">Voltar...</Link> </p>
            </div>
        </div>
    )
}