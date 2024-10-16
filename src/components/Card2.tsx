type Props = {
    phrase: string;
    autor?: string;
}

export const Card2 = ({phrase, autor}: Props) => {
    return (
        <div className="w-96 border-2 border-red-600 p-3 text-3xl text-center italic ml-5">
            <h3 className="text-3xl font-bold italic">{phrase}</h3>
            <p className="text-right text-sm">- {autor ?? 'Autor Desconhecido'}</p>
        </div>
    );
 
}