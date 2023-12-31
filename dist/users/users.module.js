"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const create_user_use_case_1 = require("./use-cases/create-user.use-case");
const delete_user_use_case_1 = require("./use-cases/delete-user.use-case");
const edit_user_use_case_1 = require("./use-cases/edit-user.use-case");
const get_all_users_use_case_1 = require("./use-cases/get-all-users.use-case");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../shared/entities/user.entity");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [users_controller_1.UsersController],
        providers: [
            create_user_use_case_1.CreateUserUseCase,
            delete_user_use_case_1.DeleteUserUseCase,
            edit_user_use_case_1.EditUserUseCase,
            get_all_users_use_case_1.GetAllUsersUseCase,
        ],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map