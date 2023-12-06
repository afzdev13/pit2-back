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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const get_all_users_use_case_1 = require("./use-cases/get-all-users.use-case");
const create_user_use_case_1 = require("./use-cases/create-user.use-case");
const delete_user_use_case_1 = require("./use-cases/delete-user.use-case");
const edit_user_use_case_1 = require("./use-cases/edit-user.use-case");
let UsersController = class UsersController {
    create(createUserDto) {
        return this.createUserUseCase.execute(createUserDto);
    }
    findAll() {
        return this.getAllUsersUseCase.execute();
    }
    update(id, updateUserDto) {
        return this.editUserUseCase.execute(id, updateUserDto);
    }
    remove(id) {
        return this.deleteUserUseCase.execute(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Inject)(get_all_users_use_case_1.GetAllUsersUseCase),
    __metadata("design:type", get_all_users_use_case_1.GetAllUsersUseCase)
], UsersController.prototype, "getAllUsersUseCase", void 0);
__decorate([
    (0, common_1.Inject)(create_user_use_case_1.CreateUserUseCase),
    __metadata("design:type", create_user_use_case_1.CreateUserUseCase)
], UsersController.prototype, "createUserUseCase", void 0);
__decorate([
    (0, common_1.Inject)(delete_user_use_case_1.DeleteUserUseCase),
    __metadata("design:type", delete_user_use_case_1.DeleteUserUseCase)
], UsersController.prototype, "deleteUserUseCase", void 0);
__decorate([
    (0, common_1.Inject)(edit_user_use_case_1.EditUserUseCase),
    __metadata("design:type", edit_user_use_case_1.EditUserUseCase)
], UsersController.prototype, "editUserUseCase", void 0);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users')
], UsersController);
//# sourceMappingURL=users.controller.js.map