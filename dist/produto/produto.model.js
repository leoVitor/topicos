"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const produtoSchema = new mongoose_1.default.Schema({
    nome: {
        type: String
    },
    valor: {
        type: Number
    }
});
exports.Produto = mongoose_1.default.model('Produto', produtoSchema);
