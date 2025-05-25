import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateSaleRequest {
    @IsString({ message: 'El nombre debe ser un texto' })
    @IsNotEmpty({ message: 'Debe tener un nombre' })
    name: string;

    @IsNumber({}, { message: 'production_value debe ser un número' })
    @IsNotEmpty({ message: 'production_value es obligatorio' })
    production_value: number;

    @IsNumber({}, { message: 'public_sale_value debe ser un número' })
    @IsNotEmpty({ message: 'public_sale_value es obligatorio' })
    public_sale_value: number;

    @IsNumber({}, { message: 'cuantity debe ser un número' })
    @IsNotEmpty({ message: 'cuantity es obligatorio' })
    cuantity: number;

    // @IsNumber({}, { message: 'gross_sale debe ser un número' })
    // @IsNotEmpty({ message: 'gross_sale es obligatorio' })
    // gross_sale: number;

    @IsNumber({}, { message: 'investment_value debe ser un número' })
    @IsNotEmpty({ message: 'investment_value es obligatorio' })
    investment_value: number;

    // @IsNumber({}, { message: 'profit debe ser un número' })
    // @IsNotEmpty({ message: 'profit es obligatorio' })
    // profit: number;

    // @IsNumber({}, { message: 'profit_percentage debe ser un número' })
    // @IsNotEmpty({ message: 'profit_percentage es obligatorio' })
    // profit_percentage: number;
}