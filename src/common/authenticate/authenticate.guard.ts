import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { AllConfig } from '../../config/config.type';
import { ShopService } from '../../shop/shop.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly configService: ConfigService<AllConfig>,
    private readonly shopService: ShopService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const authorization = req.headers.authorization;
    if (!authorization) {
      throw new ForbiddenException();
    }
    const [type, token] = authorization.split(' ');
    if (type !== 'Bearer' || !token) {
      throw new ForbiddenException();
    }
    let decoded: jwt.JwtPayload & { dest: string };
    try {
      decoded = jwt.verify(
        token,
        this.configService.get('shopify.apiSecretKey', { infer: true }) || '',
      ) as jwt.JwtPayload & { dest: string };
    } catch (e) {
      const error = e as jwt.JsonWebTokenError;
      if (error?.message.includes('Invalid token')) {
        throw new UnauthorizedException('Invalid token');
      } else {
        throw new InternalServerErrorException('Verify session token failed');
      }
    }

    const domain = decoded.dest?.replace(/https:\/\/|\/$/g, '');
    if (domain) {
      const shop = await this.shopService.findOne({
        domain: domain,
      });
      if (shop) {
        req['shop'] = shop;
      } else {
        throw new NotFoundException('Shop not found');
      }
    } else {
      throw new NotFoundException('Domain not found');
    }
    return true;
  }
}

@Injectable()
export class AfterAuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService<AllConfig>) {}

  canActivate(context: ExecutionContext): boolean {
    const req: Request = context.switchToHttp().getRequest();
    const authorization = req.headers.authorization;
    if (!authorization) {
      throw new ForbiddenException();
    }
    const [type, token] = authorization.split(' ');
    if (type !== 'Bearer' || !token) {
      throw new ForbiddenException();
    }
    let decoded: jwt.JwtPayload;
    try {
      decoded = jwt.verify(
        token,
        this.configService.get('shopify.apiSecretKey', { infer: true }) || '',
      ) as jwt.JwtPayload;
    } catch (e) {
      const error = e as jwt.JsonWebTokenError;
      if (error?.message.includes('Invalid token')) {
        throw new UnauthorizedException('Invalid token');
      } else {
        throw new InternalServerErrorException('Verify session token failed');
      }
    }

    if (!decoded) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
