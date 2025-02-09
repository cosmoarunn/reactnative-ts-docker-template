"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// backend/src/models/User.ts
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db"); // Import your Sequelize instance
exports.User = db_1.sequelize.define('User', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    // ... other user attributes
}, {
    tableName: 'users',
    timestamps: true, // Add timestamps (createdAt, updatedAt)
});
