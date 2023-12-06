"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./shared/entities/user.entity");
const login_module_1 = require("./login/login.module");
const userRole_entity_1 = require("./shared/entities/userRole.entity");
const role_entity_1 = require("./shared/entities/role.entity");
const user_role_module_1 = require("./user-role/user-role.module");
const role_module_1 = require("./role/role.module");
const order_module_1 = require("./order/order.module");
const items_module_1 = require("./items/items.module");
const order_items_module_1 = require("./order-items/order-items.module");
const payment_methods_module_1 = require("./payment-methods/payment-methods.module");
const order_payment_methods_module_1 = require("./order-payment-methods/order-payment-methods.module");
const item_entity_1 = require("./shared/entities/item.entity");
const order_entity_1 = require("./shared/entities/order.entity");
const orderItem_1 = require("./shared/entities/orderItem");
const paymentMethod_entity_1 = require("./shared/entities/paymentMethod.entity");
const orderPaymentMethod_entity_1 = require("./shared/entities/orderPaymentMethod.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.development.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                database: 'pit2',
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT || '3306'),
                synchronize: true,
                entities: [
                    user_entity_1.User,
                    role_entity_1.Role,
                    userRole_entity_1.UserRole,
                    item_entity_1.Item,
                    order_entity_1.Order,
                    orderItem_1.OrderItem,
                    paymentMethod_entity_1.PaymentMethod,
                    orderPaymentMethod_entity_1.OrderPaymentMethod,
                ],
            }),
            users_module_1.UsersModule,
            login_module_1.LoginModule,
            user_role_module_1.UserRoleModule,
            role_module_1.RoleModule,
            order_module_1.OrderModule,
            items_module_1.ItemsModule,
            order_items_module_1.OrderItemsModule,
            payment_methods_module_1.PaymentMethodsModule,
            order_payment_methods_module_1.OrderPaymentMethodsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map