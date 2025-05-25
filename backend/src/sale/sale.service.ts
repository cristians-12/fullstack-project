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
        const sale = this.saleRepository.create(createSaleDto);
        return await this.saleRepository.save(sale);
    }
}