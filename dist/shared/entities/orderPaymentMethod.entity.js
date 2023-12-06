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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPaymentMethod = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./order.entity");
const paymentMethod_entity_1 = require("./paymentMethod.entity");
const crypto_1 = __importDefault(require("crypto"));
let OrderPaymentMethod = class OrderPaymentMethod {
    constructor(props, id) {
        Object.assign(this, props);
        this.id = id ?? crypto_1.default.randomUUID();
    }
};
exports.OrderPaymentMethod = OrderPaymentMethod;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], OrderPaymentMethod.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderPaymentMethod.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderPaymentMethod.prototype, "paymentMethodId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => order_entity_1.Order, ({ orderPaymentMethod }) => orderPaymentMethod),
    (0, typeorm_1.JoinColumn)({ name: 'orderId' }),
    __metadata("design:type", order_entity_1.Order)
], OrderPaymentMethod.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paymentMethod_entity_1.PaymentMethod),
    (0, typeorm_1.JoinColumn)({ name: 'paymentMethodId' }),
    __metadata("design:type", paymentMethod_entity_1.PaymentMethod)
], OrderPaymentMethod.prototype, "paymentMethod", void 0);
exports.OrderPaymentMethod = OrderPaymentMethod = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object, String])
], OrderPaymentMethod);
//# sourceMappingURL=orderPaymentMethod.entity.js.map