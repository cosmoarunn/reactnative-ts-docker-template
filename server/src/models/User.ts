// backend/src/models/User.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db'; // Import your Sequelize instance

interface UserAttributes {
  id: number;
  username: string;
  password: string; // Store password securely (hashed)
  // ... other user attributes
}

export interface UserInstance extends Model<UserAttributes>, UserAttributes {}

export const User = sequelize.define<UserInstance>('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // ... other user attributes
}, {
  tableName: 'users', // Customize table name if needed
  timestamps: true, // Add timestamps (createdAt, updatedAt)
});
