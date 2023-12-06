import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethod } from 'src/shared/entities/paymentMethod.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentMethodsService {
  constructor(
    @InjectRepository(PaymentMethod)
    private PaymentMethodRepo: Repository<PaymentMethod>,
  ) {}

  async execute(): Promise<PaymentMethod[]> {
    return this.PaymentMethodRepo.find();
  }
}
