import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SaleController } from './sale/sale.controller';
import { SaleModule } from './sale/sale.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    // Variables de entorno globales
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (cfg: ConfigService) => ({
        type: 'postgres',
        url: cfg.get<string>('DATABASE_URL'),  // <── usamos la URL completa
        autoLoadEntities: true,
        synchronize: true,                     
        ssl: { rejectUnauthorized: false },    
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    SaleModule,
    CloudinaryModule,
    MenuModule,
  ],
  controllers: [SaleController],
})
export class AppModule { }