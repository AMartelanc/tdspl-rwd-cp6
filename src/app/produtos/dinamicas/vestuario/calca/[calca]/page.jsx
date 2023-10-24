import Link from "next/link";

export default function CamisaSlug({params}) {
    return (
        <div>
            <h1>Dados de Calças</h1>
            <div>
                <p>O valor é : {params.calca}</p>
                <p> <Link href="/">Voltar...</Link> </p>
            </div>
        </div>
    )
}