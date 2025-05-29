import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './model/menu.model';

@Module({
  controllers: [MenuController],
  providers: [MenuService],
  imports: [CloudinaryModule, TypeOrmModule.forFeature([Menu])]
})
export class MenuModule { }
