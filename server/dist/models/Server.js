"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
// backend/src/models/Server.ts
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
exports.Server = db_1.sequelize.define('Server', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    region: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id', // Key in the users table
        },
    },
    // ... other server attributes
}, {
    tableName: 'servers',
    timestamps: true,
});
// Define the association (important!)
User.hasMany(exports.Server, { foreignKey: 'userId', as: 'servers' }); // A user can have many servers
exports.Server.belongsTo(User, { foreignKey: 'userId', as: 'user' }); // A server belongs to a user
