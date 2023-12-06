import { PaymentMethodsService } from './payment-methods.service';
export declare class PaymentMethodsController {
    private readonly paymentMethodsService;
    constructor(paymentMethodsService: PaymentMethodsService);
    findAll(): Promise<import("../shared/entities/paymentMethod.entity").PaymentMethod[]>;
}
