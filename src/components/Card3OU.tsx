type Props = {
    phrase: string;
    autor?: string;
}

//FAZ COM QUE SE NÃO EXISTIR UM AUTOR, NÃO VAI APARECER NADA NA TELA
export const Card3OU = ({phrase, autor}: Props) => {
    return (
        <div className="w-96 border-2 border-red-600 p-3 text-3xl text-center italic ml-5">
            <h3 className="text-3xl font-bold italic">{phrase}</h3>
            {autor && 
                <p className="text-right text-sm">- {autor}</p>
            }
            {!autor &&  <p className="text-right text-sm italic">- Autor desconhecido</p>}
        </div>
    );
 
}