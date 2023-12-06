"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPaymentMethodsModule = void 0;
const common_1 = require("@nestjs/common");
const order_payment_methods_service_1 = require("./order-payment-methods.service");
const order_payment_methods_controller_1 = require("./order-payment-methods.controller");
const typeorm_1 = require("@nestjs/typeorm");
const orderPaymentMethod_entity_1 = require("../shared/entities/orderPaymentMethod.entity");
let OrderPaymentMethodsModule = class OrderPaymentMethodsModule {
};
exports.OrderPaymentMethodsModule = OrderPaymentMethodsModule;
exports.OrderPaymentMethodsModule = OrderPaymentMethodsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([orderPaymentMethod_entity_1.OrderPaymentMethod])],
        controllers: [order_payment_methods_controller_1.OrderPaymentMethodsController],
        providers: [order_payment_methods_service_1.OrderPaymentMethodsService],
    })
], OrderPaymentMethodsModule);
//# sourceMappingURL=order-payment-methods.module.js.map