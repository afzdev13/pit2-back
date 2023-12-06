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
exports.PaymentMethod = void 0;
const typeorm_1 = require("typeorm");
const orderPaymentMethod_entity_1 = require("./orderPaymentMethod.entity");
const crypto_1 = __importDefault(require("crypto"));
let PaymentMethod = class PaymentMethod {
    constructor(props, id) {
        Object.assign(this, props);
        this.id = id ?? crypto_1.default.randomUUID();
    }
};
exports.PaymentMethod = PaymentMethod;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], PaymentMethod.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaymentMethod.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orderPaymentMethod_entity_1.OrderPaymentMethod, ({ paymentMethod }) => paymentMethod),
    __metadata("design:type", Array)
], PaymentMethod.prototype, "OrderPaymentMethod", void 0);
exports.PaymentMethod = PaymentMethod = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object, String])
], PaymentMethod);
//# sourceMappingURL=paymentMethod.entity.js.map