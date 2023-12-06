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
exports.OrderItem = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./order.entity");
const item_entity_1 = require("./item.entity");
const crypto_1 = __importDefault(require("crypto"));
let OrderItem = class OrderItem {
    constructor(props, id) {
        Object.assign(this, props);
        this.id = id ?? crypto_1.default.randomUUID();
    }
};
exports.OrderItem = OrderItem;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], OrderItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderItem.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderItem.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.Order, ({ orderItems }) => orderItems),
    (0, typeorm_1.JoinColumn)({ name: 'orderId' }),
    __metadata("design:type", order_entity_1.Order)
], OrderItem.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => item_entity_1.Item),
    (0, typeorm_1.JoinColumn)({ name: 'itemId' }),
    __metadata("design:type", item_entity_1.Item)
], OrderItem.prototype, "item", void 0);
exports.OrderItem = OrderItem = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object, String])
], OrderItem);
//# sourceMappingURL=orderItem.js.map