import { Body, Controller, Get, Post } from '@nestjs/common';
import { SaleService } from './sale.service';
import { Sale } from './model/sale.model';
import { CreateSaleRequest } from './dto/create-sale.request';

@Controller('sale')
export class SaleController {
    constructor(private readonly saleService: SaleService) {
    }

    @Get()
    async getAllSales(): Promise<Sale[]> {
        return await this.saleService.getAll();
    }

    @Post()
    async createSale(@Body() createSaleDto: CreateSaleRequest): Promise<Sale> {
        return await this.saleService.create(createSaleDto);
    }
}