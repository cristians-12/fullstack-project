import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SaleService } from './sale.service';
import { Sale } from './model/sale.model';
import { CreateSaleRequest } from './dto/create-sale.request';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('sale')
export class SaleController {
    constructor(private readonly saleService: SaleService) {
    }

    @UseGuards(AuthGuard)
    @Get()
    async getAllSales(): Promise<Sale[]> {
        return await this.saleService.getAll();
    }

    @UseGuards(AuthGuard)
    @Post()
    async createSale(@Body() createSaleDto: CreateSaleRequest): Promise<Sale> {
        return await this.saleService.create(createSaleDto);
    }
}