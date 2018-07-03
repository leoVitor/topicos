"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const vendaSchema = new mongoose_1.default.Schema({
    fornecedor: {
        type: mongoose_1.default.Schema.Types.ObjectId
    },
    cliente: {
        type: mongoose_1.default.Schema.Types.ObjectId
    },
    produto: {
        type: mongoose_1.default.Schema.Types.ObjectId
    },
    valor: {
        type: Number
    },
    qtd: {
        type: Number
    }
});
exports.Venda = mongoose_1.default.model('Venda', vendaSchema);
