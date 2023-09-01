import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from '../users.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true; // Si aucune annotation @Roles n'est trouvée, autorisez l'accès.
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // L'utilisateur extrait du JWT.
    if (!user) {
      throw new UnauthorizedException('Unauthorized');
    }
    const hasRequiredRole = await this.usersService.userHasRole(user.id, roles);

    if (!hasRequiredRole) {
      throw new ForbiddenException('Forbidden');
    }

    return true;
  }
}
