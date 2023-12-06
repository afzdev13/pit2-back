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
exports.ItemsController = void 0;
const common_1 = require("@nestjs/common");
const create_item_dto_1 = require("./dto/create-item.dto");
const update_item_dto_1 = require("./dto/update-item.dto");
const create_item_use_case_1 = require("./use-cases/create-item.use-case");
const find_all_items_use_case_1 = require("./use-cases/find-all-items.use-case");
const edit_item_use_case_1 = require("./use-cases/edit-item.use-case");
let ItemsController = class ItemsController {
    create(createItemDto) {
        return this.createItemUseCase.execute(createItemDto);
    }
    findAll() {
        return this.getAllItemsUseCase.execute();
    }
    update(id, updateItemDto) {
        return this.editItemUseCase.execute(id, updateItemDto);
    }
};
exports.ItemsController = ItemsController;
__decorate([
    (0, common_1.Inject)(create_item_use_case_1.CreateItemUseCase),
    __metadata("design:type", create_item_use_case_1.CreateItemUseCase)
], ItemsController.prototype, "createItemUseCase", void 0);
__decorate([
    (0, common_1.Inject)(find_all_items_use_case_1.GetAllItemsUseCase),
    __metadata("design:type", find_all_items_use_case_1.GetAllItemsUseCase)
], ItemsController.prototype, "getAllItemsUseCase", void 0);
__decorate([
    (0, common_1.Inject)(edit_item_use_case_1.EditItemUseCase),
    __metadata("design:type", edit_item_use_case_1.EditItemUseCase)
], ItemsController.prototype, "editItemUseCase", void 0);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_dto_1.CreateItemDto]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_item_dto_1.UpdateItemDto]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "update", null);
exports.ItemsController = ItemsController = __decorate([
    (0, common_1.Controller)('items')
], ItemsController);
//# sourceMappingURL=items.controller.js.map