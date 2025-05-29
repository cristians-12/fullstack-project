import { Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CreateItemMenuRequestDTO } from './dto/create-item-menu.request';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './model/menu.model';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
    constructor(
        private readonly cloudinaryService: CloudinaryService,
        @InjectRepository(Menu)
        private readonly menuRepo: Repository<Menu>,
    ) { }

    async create({ name, public_sale_value, category }: CreateItemMenuRequestDTO, imageFile: Express.Multer.File) {
        const uploadResult = await this.cloudinaryService.uploadFile(imageFile);
        const image_url = uploadResult.url;
        if (typeof public_sale_value === 'string') {
            public_sale_value = parseFloat(public_sale_value);
        }
        const comida = this.menuRepo.create({
            name: name,
            public_sale_value: public_sale_value,
            category: category,
            image: image_url
        });

        return {
            message: 'Item de menu creado exitosamente',
            data: await this.menuRepo.save(comida)
        };
    }

    async get_all() {
        return this.menuRepo.find()
    }
}
