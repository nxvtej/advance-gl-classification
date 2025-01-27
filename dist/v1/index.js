"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = __importDefault(require("./routes/upload"));
const gl_code_1 = __importDefault(require("./routes/gl-code"));
const v1Router = express_1.default.Router();
v1Router.use('/upload', upload_1.default);
v1Router.use('/gl-code', gl_code_1.default);
exports.default = v1Router;
