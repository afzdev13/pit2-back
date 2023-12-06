import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './shared/entities/user.entity';
import { LoginModule } from './login/login.module';
import { UserRole } from './shared/entities/userRole.entity';
import { Role } from './shared/entities/role.entity';
import { UserRoleModule } from './user-role/user-role.module';
import { RoleModule } from './role/role.module';
import { OrderModule } from './order/order.module';
import { ItemsModule } from './items/items.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { PaymentMethodsModule } from './payment-methods/payment-methods.module';
import { OrderPaymentMethodsModule } from './order-payment-methods/order-payment-methods.module';
import { Item } from './shared/entities/item.entity';
import { Order } from './shared/entities/order.entity';
import { OrderItem } from './shared/entities/orderItem';
import { PaymentMethod } from './shared/entities/paymentMethod.entity';
import { OrderPaymentMethod } from './shared/entities/orderPaymentMethod.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'pit2',
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      synchronize: true,
      entities: [
        User,
        Role,
        UserRole,
        Item,
        Order,
        OrderItem,
        PaymentMethod,
        OrderPaymentMethod,
      ],
    }),
    UsersModule,
    LoginModule,
    UserRoleModule,
    RoleModule,
    OrderModule,
    ItemsModule,
    OrderItemsModule,
    PaymentMethodsModule,
    OrderPaymentMethodsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
