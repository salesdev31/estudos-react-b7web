import { Card } from "@/components/Card";
import { Card2 } from "@/components/Card2";
import { Card3OU } from "@/components/Card3OU";
import { Person } from "@/components/Person";


function Page (){
  return (
    <div>
      <div className="bg-black text-white py-5 px-2 text-3xl">Testando Props</div>
                  <div className="flex gap-5 bg-red-950 p-5">
                    <Person name="Zed" titulo="Assasino" img="https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Zed_0.jpg"/>
                    <Person name="LeBlanc" titulo="Assasino" img="https://i.pinimg.com/736x/5c/c2/56/5cc2565288178d2c1f3bdb0726ae2bce.jpg"/>
                    <Person name="Avatar padrão" titulo="Foto Padrão Props"/>
      </div>

      <div className="bg-black text-white py-5 px-2 text-3xl">Testando Children</div>
                    <Card>
                      <>
                        <h3>"Frase de Efeito!"</h3>
                        <p className="text-center font-bold text-black italic">Autor Desconhecido</p>
                      </>
                    </Card>  

                    <Card>
                      <h2>"A Morte, é como o vento, esta sempre ao meu lado"</h2>
                      <p className="text-center font-bold text-black italic">Yasuo</p>
                    </Card>
      
      
      <div className="bg-black text-white py-5 px-2 text-3xl my-5">Testando Renderização Condicional - tipo if</div>
                    <Card2 phrase="Alguma coisa TOP" autor="Coach de milhões" />
                    <Card2 phrase="Eu volteeeei!" />


      <div className="bg-black text-white py-5 px-2 text-3xl my-5">Testando Operador Lógioco &&</div>
                    <Card3OU phrase="é porque é mesmo" autor="Sertão"/>





    </div>
  );
}

export default Page;


/* 

      <h1 className="text-white bg-red-900 p-5 text-3xl">Olá Mundo</h1>
      <h3 className="text-white bg-green-700 p5 text-2xl">Texto em H3</h3>

      <FormasGeometricas/>


      <Person name='Adriano Sales' avatar="https://upload.wikimedia.org/wikipedia/commons/6/67/Bill_Gates_-_2023_-_P062021-670188_%28cropped%29.jpg"
      cargos={['Programador','microsoft']}
      />

      <Person name='Claudinho' avatar="https://cdn.prod.website-files.com/62e89931273b5c21be76c486/645aabd8f6bb3d0f962d0cce_jeff-bezos-fundador-amazon-foto-divulgacao.jpg"
      cargos={['Programador','Amazon']}
      />


*/