type Props = {
    name: string;
    img?: string;
    titulo: string;

}

export const Person = ({name, img = 'https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg', titulo}: Props) => {
    return (
    <div className="flex flex-col gap-5 p-5 border-2 border-black w-96 ml-5 mt-5 bg-white">
        <img src={img} alt="" />
        <h2 className="text-center text-lg text-black font-bold">{name}</h2>
        <p className="bg-red-950 text-white font-bold text-center">{titulo}</p>
    </div>
    )
}




/*

function diaDeHoje (){
    return  Intl.DateTimeFormat('pt-BR', { weekday: 'long'}).format(new Date());
}

type Props = {
    name: string;
    avatar: string;
    cargos: string[];
}

export const Person = ({avatar,cargos,name} : Props) => {
    
    return (
        <div className="p-5 mb-10">
            <h1>{name} - Data de hoje: { diaDeHoje() }</h1>
            <img 
                className="w-36" 
                src={avatar} 
                alt={name} />
            <ul>
                <li>Empresa: {cargos[1]}</li>
                <li>Cargo: {cargos[0]}</li>
            </ul>
        </div>
    );
}





*/