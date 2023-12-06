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
exports.EditItemUseCase = void 0;
const common_1 = require("@nestjs/common");
const Item_entity_1 = require("../../shared/entities/Item.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let EditItemUseCase = class EditItemUseCase {
    constructor(ItemRepo) {
        this.ItemRepo = ItemRepo;
    }
    async execute(id, { description, name, value }) {
        const Item = await this.ItemRepo.findOneOrFail({ where: { id } });
        Item.description = description || Item.description;
        Item.name = name || Item.name;
        Item.value = value || Item.value;
        await this.ItemRepo.save(Item);
    }
};
exports.EditItemUseCase = EditItemUseCase;
exports.EditItemUseCase = EditItemUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Item_entity_1.Item)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EditItemUseCase);
//# sourceMappingURL=edit-item.use-case.js.map