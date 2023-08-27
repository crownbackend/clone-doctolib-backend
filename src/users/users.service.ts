import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    user.createdBy = 'SYSTEM';
    user.lastChangedBy = 'SYSTEM';
    return await this.usersRepository.save(user);
  }
  async findOne(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
