"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/app.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db")); // Import your database connection
const auth_1 = __importDefault(require("./routes/auth"));
const servers_1 = __importDefault(require("./routes/servers"));
const billing_1 = __importDefault(require("./routes/billing"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/auth', auth_1.default);
app.use('/api/servers', servers_1.default);
app.use('/api/billing', billing_1.default);
db_1.default.connect()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));
const _default = app;
export { _default as default };
