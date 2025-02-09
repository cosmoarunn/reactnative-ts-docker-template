// backend/src/models/Server.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

interface ServerAttributes {
  id: number;
  name: string;
  status: string; // e.g., 'Running', 'Stopped', 'Available'
  region: string;
  userId: number; // Foreign key to the User model
  // ... other server attributes
}

export interface ServerInstance extends Model<ServerAttributes>, ServerAttributes {}

export const Server = sequelize.define<ServerInstance>('Server', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // Name of the users table
      key: 'id', // Key in the users table
    },
  },
  // ... other server attributes
}, {
  tableName: 'servers',
  timestamps: true,
});

// Define the association (important!)
User.hasMany(Server, { foreignKey: 'userId', as: 'servers' }); // A user can have many servers
Server.belongsTo(User, { foreignKey: 'userId', as: 'user' }); // A server belongs to a user
