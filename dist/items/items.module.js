"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsModule = void 0;
const common_1 = require("@nestjs/common");
const items_controller_1 = require("./items.controller");
const create_item_use_case_1 = require("./use-cases/create-item.use-case");
const find_all_items_use_case_1 = require("./use-cases/find-all-items.use-case");
const edit_item_use_case_1 = require("./use-cases/edit-item.use-case");
const typeorm_1 = require("@nestjs/typeorm");
const item_entity_1 = require("../shared/entities/item.entity");
let ItemsModule = class ItemsModule {
};
exports.ItemsModule = ItemsModule;
exports.ItemsModule = ItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([item_entity_1.Item])],
        controllers: [items_controller_1.ItemsController],
        providers: [create_item_use_case_1.CreateItemUseCase, find_all_items_use_case_1.GetAllItemsUseCase, edit_item_use_case_1.EditItemUseCase],
    })
], ItemsModule);
//# sourceMappingURL=items.module.js.map