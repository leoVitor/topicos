"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const estoqueSchema = new mongoose_1.default.Schema({
    produto: {
        type: mongoose_1.default.Schema.Types.ObjectId
    },
    armazem: {
        type: Number
    },
    qtd: {
        type: String
    }
});
exports.Estoque = mongoose_1.default.model('Estoque', estoqueSchema);
