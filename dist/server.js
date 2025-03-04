"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./v1/index"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Welcome to classificatio.');
});
app.use('/api/v1', index_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
