import { Controller, Post, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryResponse } from './dto/cloudinary.response';

@Controller('upload')
export class CloudinaryController {
    constructor(private readonly cloudinaryService: CloudinaryService) {}

    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<CloudinaryResponse> {
        if (!file) {
            throw new BadRequestException('No se proporcionó un archivo');
        }
        return this.cloudinaryService.uploadFile(file);
    }
}