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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const orderItem_1 = require("./orderItem");
const orderPaymentMethod_entity_1 = require("./orderPaymentMethod.entity");
const user_entity_1 = require("./user.entity");
const crypto_1 = __importDefault(require("crypto"));
let Order = class Order {
    constructor(props, id) {
        Object.assign(this, props);
        this.id = id ?? crypto_1.default.randomUUID();
    }
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, ({ orders }) => orders),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orderItem_1.OrderItem, ({ order }) => order),
    __metadata("design:type", Array)
], Order.prototype, "orderItems", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => orderPaymentMethod_entity_1.OrderPaymentMethod, ({ order }) => order),
    __metadata("design:type", orderPaymentMethod_entity_1.OrderPaymentMethod)
], Order.prototype, "orderPaymentMethod", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object, String])
], Order);
//# sourceMappingURL=order.entity.js.map