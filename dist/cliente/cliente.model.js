"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const clienteSchema = new mongoose_1.default.Schema({
    nome: {
        type: String
    },
    cpf: {
        type: String
    },
    end: {
        type: String
    },
    fone: {
        type: String
    }
});
exports.Cliente = mongoose_1.default.model('Cliente', clienteSchema);
