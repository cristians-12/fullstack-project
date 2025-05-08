import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcryptjs';      

import { CreateUserRequest } from './dto/create-user.request';
import { User } from './model/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  /* ───────── CREATE ───────── */
  async createUser(dto: CreateUserRequest): Promise<User> {
    // 1. ¿Ya existe el email?
    const exists = await this.userRepo.findOneBy({ email: dto.email });
    if (exists) throw new BadRequestException('Email already registered');

    // 2. Hash de la contraseña (bcryptjs)
    const hashed = await bcrypt.hash(dto.password, 10);

    // 3. Persistir
    const user = this.userRepo.create({
      email: dto.email,
      password: hashed,
      role: dto.role,
    });

    return this.userRepo.save(user);
  }

  /* ───────── READ ───────── */
  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  /* ───────── DELETE ───────── */
  async remove(id: number): Promise<void> {
    const result = await this.userRepo.delete(id);
    if (!result.affected) throw new NotFoundException('User not found');
  }
}