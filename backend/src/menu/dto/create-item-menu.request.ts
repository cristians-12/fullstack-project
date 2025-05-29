import { IsIn, IsNotEmpty, IsNumber } from "class-validator";

export class CreateItemMenuRequestDTO {
    @IsNotEmpty({ message: 'Debe tener un nombre' })
    name: string;

    @IsNotEmpty({ message: 'Debe tener un valor de venta al público' })
    @IsNumber({}, { message: 'El valor de venta al público debe ser un número' })
    public_sale_value: number;

    @IsNotEmpty({ message: 'Debe tener una categoría' })
    @IsIn(['perro', 'salchipapa', 'hamburguesa'], { message: 'La categoría debe ser perro, salchipapa o hamburguesa' })
    category: 'perro' | 'salchipapa' | 'hamburguesa';
}