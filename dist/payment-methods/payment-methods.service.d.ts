import { PaymentMethod } from 'src/shared/entities/paymentMethod.entity';
import { Repository } from 'typeorm';
export declare class PaymentMethodsService {
    private PaymentMethodRepo;
    constructor(PaymentMethodRepo: Repository<PaymentMethod>);
    execute(): Promise<PaymentMethod[]>;
}
