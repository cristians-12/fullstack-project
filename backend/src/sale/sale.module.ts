import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './model/sale.model';
import { SaleController } from './sale.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  providers: [SaleService],
  controllers: [SaleController],
  exports: [SaleService]
})
export class SaleModule {
}
