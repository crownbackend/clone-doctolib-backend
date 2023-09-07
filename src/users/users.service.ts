import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import * as bcrypt from 'bcryptjs';
import { Role } from '../entity/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async create(user: User): Promise<User> {
    user.createdBy = 'SYSTEM';
    user.lastChangedBy = 'SYSTEM';
    const salt = bcrypt.genSaltSync(10);
    user.password = await bcrypt.hash(user.password, salt);
    const newRole = await this.findRoleByName('patient');
    user.roles = [newRole];
    return await this.usersRepository.save(user).catch((error) => {
      if (/(email)[\s\S]+(already exists)/.test(error.detail)) {
        throw new BadRequestException(
          'Account with this email already exists.',
        );
      }
      return error;
    });
  }

  async createDoctor(user: User): Promise<User> {
    user.createdBy = 'SYSTEM';
    user.lastChangedBy = 'SYSTEM';
    const salt = bcrypt.genSaltSync(10);
    user.password = await bcrypt.hash(user.password, salt);
    const newRole = await this.findRoleByName('doctor');
    user.roles = [newRole];
    return await this.usersRepository.save(user).catch((error) => {
      if (/(email)[\s\S]+(already exists)/.test(error.detail)) {
        throw new BadRequestException(
          'Account with this email already exists.',
        );
      }
      return error;
    });
  }
  async findOne(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({
      where: {
        email: email,
      },
      select: {
        roles: {
            name: true,
            description: true,
        }
      },
      relations: {
        roles: true,
      }
    });
  }

  async userHasRole(userId: string, roles: string[]): Promise<boolean> {
    const user = await this.usersRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['roles'],
    });

    if (!user) {
      return false;
    }

    return roles.some((roleName) =>
      user.roles.some((role) => role.name === roleName),
    );
  }

  async findRoleByName(name: string): Promise<Role | undefined> {
    return await this.roleRepository.findOne({
      where: {
        name: name,
      },
    });
  }
  async findAll(): Promise<User[]> {
    // await this.usersRepository.delete({
    //   id: 'e8a8ac1c-41cd-4220-994a-2e95faecae94'
    // })
    /*const role = new Role();
    role.name = 'admin';
    role.description = 'Admin role';
    role.createdBy = 'SYSTEM';
    role.lastChangedBy = 'SYSTEM';
    await this.roleRepository.save(role);*/
    return await this.usersRepository.find();
  }
}
