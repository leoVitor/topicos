"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const transportadoraSchema = new mongoose_1.default.Schema({
    rzsocial: {
        type: String
    },
    end: {
        type: String
    },
    cnpj: {
        type: String,
    }
});
exports.Transportadora = mongoose_1.default.model('Transportadora', transportadoraSchema);
