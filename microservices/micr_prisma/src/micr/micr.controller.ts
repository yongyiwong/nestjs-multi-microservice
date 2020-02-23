import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserById, User } from './interfaces';
import { PrismaService } from '../prisma/prisma.service';

@Controller()
export class MicrService {
  constructor(private readonly prisma: PrismaService) {}

  @GrpcMethod()
  save(metadata: any): Promise<User> {
    return this.prisma.mutation.createUser({
      data: { name: 'John2', surname: 'Prova' },
    });
  }

  @GrpcMethod()
  findOne(data: UserById, metadata: any): Promise<User> {
    return this.prisma.query.users({
      where: {
        name: 'John2',
      },
    });
  }
}
