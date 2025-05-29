import { IsIn, IsNumber } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @IsNumber({}, { message: 'El valor de venta al público debe ser un número' })
    @Column({ type: 'integer' })
    public_sale_value: number;

    @IsIn(['perro', 'salchipapa', 'hamburguesa'], { message: 'La categoría debe ser perro, salchipapa o hamburguesa' })
    @Column({ type: 'varchar' })
    category: 'perro' | 'salchipapa' | 'hamburguesa';

    @Column({ type: 'varchar', length: 500 })
    image: string;
}