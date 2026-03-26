import { useState } from "react";

const Apto = () =>{
    const [anoNasc, setAnoNasc] = useState(0);
    const [mesNasc, setMesNasc] = useState(0);
    const [diaNasc, setDiaNasc] = useState(0);

    const [exibirPagina, setExibirPagina] = useState(false);

    const [resultado, setResultado] = useState('');

    const ano_atual = new Date().getFullYear();
    const mes = new Date().getMonth();
    const mes_atual = mes + 1;
    const dia_atual = new Date().getDate();

    let idade = ano_atual - anoNasc;

    if(mes_atual < mesNasc || (mes_atual == mesNasc && dia_atual < diaNasc)){
        idade--;
    }

    function aptoDirigir(){
        if(idade >= 18){
            return(
                <p>Você tem {idade} anos e está Apto à dirigir</p>
            )
        } else {
            return(
                <p>Você tem {idade} anos e está <strong>INAPTO</strong> à tirar a carteira</p>
            )
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        setExibirPagina(true);
    }

    return(
        <div>
            <div className="w-[800px] h-[300px]">
                <h1 className="text-4xl font-bold text-white mb-5 text-center">Apto à dirigir 🚙</h1>
                <form onSubmit={handleSubmit}>
                    <h4 className="text-center text-white text-xl">Ano de nascimento</h4>
                    <input type="text" className="block mx-auto w-64" onChange={(e) => setAnoNasc(Number(parseInt(e.target.value)))} />
                    <h4 className="text-center text-white text-xl">Mês de nascimento</h4>
                    <input type="text" className="block mx-auto w-64" onChange={(e) => setMesNasc(Number(parseInt(e.target.value)))} />
                    <h4 className="text-center text-white text-xl">Dia de nascimento</h4>
                    <input type="text" className="block mx-auto w-64"onChange={(e) => setDiaNasc(Number(parseInt(e.target.value)))} />
                    <br />
                    <button type="submit" className="block mx-auto bg-blue-500 text-white rounded px-4 py-2 mb-5">Enviar</button>
                </form>
            </div>

            <div className="block">
                <p className="text-white text-center">{
                exibirPagina && anoNasc && mesNasc && diaNasc && aptoDirigir()
                }</p>
            </div>
        </div>
    )
}

export default Apto;