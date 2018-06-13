"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const vendaSchema = new mongoose_1.default.Schema({
    nome: {
        type: String
    },
    telefone: {
        type: String
    },
    email: {
        type: String
    }
});
exports.Vendedor = mongoose_1.default.model('Vendedor', vendaSchema);
