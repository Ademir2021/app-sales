"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RouterUsers_1 = require("./routes/RouterUsers");
const cors = require('cors');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3005;
app.use(cors());
app.use(express_1.default.json());
app.use(RouterUsers_1.routerUser);
app.use((error, request, response, next) => {
    return response.json({
        status: "Error",
        message: error.message,
    });
});
app.listen(PORT, () => console.log("server is runing on", { PORT }));
