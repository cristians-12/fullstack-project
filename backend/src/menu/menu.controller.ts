import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { MenuService } from './menu.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Menu } from './model/menu.model';
import { CreateItemMenuRequestDTO } from './dto/create-item-menu.request';

@Controller('menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) { }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    async create(
        @Body() body: CreateItemMenuRequestDTO,
        @UploadedFile() image: Express.Multer.File
    ): Promise<{ message: string, data: Menu }> {
        return this.menuService.create(body, image);
    }

    @Get()
    async get_all(): Promise<Menu[]> {
        return this.menuService.get_all();
    }
}
