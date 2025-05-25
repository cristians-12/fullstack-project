import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './model/sale.model';
import { CreateSaleRequest } from './dto/create-sale.request';

@Injectable()
export class SaleService {
    constructor(
        @InjectRepository(Sale)
        private readonly saleRepository: Repository<Sale>,
    ) { }

    async getAll(): Promise<Sale[]> {
        return await this.saleRepository.find();
    }

    async create(createSaleDto: CreateSaleRequest): Promise<Sale> {
        const sale = new Sale();
        sale.name = createSaleDto.name;
        sale.production_value = createSaleDto.production_value;
        sale.public_sale_value = createSaleDto.public_sale_value;
        sale.cuantity = createSaleDto.cuantity;
        sale.investment_value = createSaleDto.investment_value;

        sale.gross_sale = sale.public_sale_value * sale.cuantity;
        sale.profit = sale.gross_sale - (sale.production_value * sale.cuantity + sale.investment_value);
        sale.profit_percentage = Number(
            ((sale.profit / (sale.production_value * sale.cuantity + sale.investment_value)) * 100).toFixed(2)
        );

        // Guardar en la base de datos
        return await this.saleRepository.save(sale);
    }
}