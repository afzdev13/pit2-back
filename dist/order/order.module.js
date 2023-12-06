"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_controller_1 = require("./order.controller");
const create_order_use_case_1 = require("./use-cases/create-order.use-case");
const find_all_orders_use_case_1 = require("./use-cases/find-all-orders.use-case");
const find_user_orders_use_case_1 = require("./use-cases/find-user-orders.use-case");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("../shared/entities/order.entity");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_entity_1.Order])],
        controllers: [order_controller_1.OrderController],
        providers: [create_order_use_case_1.CreateOrderUseCase, find_all_orders_use_case_1.GetAllOrdersUseCase, find_user_orders_use_case_1.GetUserOrdersUseCase],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map