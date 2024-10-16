import { Circulo } from "./Circulo"
import { Quadrado } from "./Quadrado"

export const FormasGeometricas = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold">Formas Geométricas</h3>

            <div className="flex gap-5">
                <Quadrado/>
                <Circulo/>
            </div>
        </div>
    )
}