import { IsNumber } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @IsNumber({}, { message: 'El valor de venta al público debe ser un número' })
    @Column({ type: 'numeric', precision: 15, scale: 3 })
    production_value: number;

    @IsNumber({}, { message: 'El valor de venta al público debe ser un número' })
    @Column({ type: 'numeric', precision: 15, scale: 3 })
    public_sale_value: number;

    @IsNumber({}, { message: 'La cantidad debe ser un número' })
    @Column({ type: 'integer' })
    cuantity: number;

    @Column({ type: 'numeric', precision: 15, scale: 3 })
    gross_sale: number;


    @IsNumber({}, { message: 'El valor de inversión debe ser un número' })
    @Column({ type: 'numeric', precision: 15, scale: 3 })
    investment_value: number;

    @Column({ type: 'numeric', precision: 15, scale: 3 })
    profit: number;

    @Column({ type: 'numeric', precision: 5, scale: 2 })
    profit_percentage: number;
}