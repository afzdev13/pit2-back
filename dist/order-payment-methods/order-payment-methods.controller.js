"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPaymentMethodsController = void 0;
const common_1 = require("@nestjs/common");
const order_payment_methods_service_1 = require("./order-payment-methods.service");
const create_order_payment_method_dto_1 = require("./dto/create-order-payment-method.dto");
let OrderPaymentMethodsController = class OrderPaymentMethodsController {
    constructor(orderPaymentMethodsService) {
        this.orderPaymentMethodsService = orderPaymentMethodsService;
    }
    create(data) {
        return this.orderPaymentMethodsService.execute(data);
    }
};
exports.OrderPaymentMethodsController = OrderPaymentMethodsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_payment_method_dto_1.CreateOrderPaymentDTOMethod]),
    __metadata("design:returntype", void 0)
], OrderPaymentMethodsController.prototype, "create", null);
exports.OrderPaymentMethodsController = OrderPaymentMethodsController = __decorate([
    (0, common_1.Controller)('order-payment-methods'),
    __metadata("design:paramtypes", [order_payment_methods_service_1.OrderPaymentMethodsService])
], OrderPaymentMethodsController);
//# sourceMappingURL=order-payment-methods.controller.js.map