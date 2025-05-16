import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number; // ID autoincrementado (integer en PostgreSQL)

    @Column({ type: 'numeric', precision: 15, scale: 3, unique: true })
    production_value: number;

    @Column({ type: 'numeric', precision: 15, scale: 3 })
    public_sale_value: number;

    @Column({ type: 'integer' })
    cuantity: number;

    @Column({ type: 'numeric', precision: 15, scale: 3 })
    gross_sale: number;

    @Column({ type: 'numeric', precision: 15, scale: 3 })
    investment_value: number;

    @Column({ type: 'numeric', precision: 15, scale: 3 })
    profit: number;

    @Column({ type: 'numeric', precision: 5, scale: 2 })
    profit_percentage: number;
}