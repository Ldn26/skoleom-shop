import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import sequelize from '../config';
import User from './user';

export interface SubscriptionModel
  extends Model<
    InferAttributes<SubscriptionModel>,
    InferCreationAttributes<SubscriptionModel>
  > {
  id: CreationOptional<number>;
  userId: ForeignKey<number>;
  stripeCustomerId: string;
  stripeSubscriptionId: string;
  planRole: 'acheteur' | 'vendeur';
  amount: number;
  status: 'active' | 'canceled' | 'past_due' | 'unpaid' | 'incomplete';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  createdAt?: CreationOptional<Date>;
  updatedAt?: CreationOptional<Date>;
}

export const Subscription = sequelize.define<SubscriptionModel>(
  'Subscription',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    stripeCustomerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stripeSubscriptionId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    planRole: {
      type: DataTypes.ENUM('acheteur', 'vendeur'),
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('active', 'canceled', 'past_due', 'unpaid', 'incomplete'),
      allowNull: false,
      defaultValue: 'incomplete',
    },
    currentPeriodStart: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    currentPeriodEnd: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'subscriptions',
    timestamps: true,
  }
);

User.hasOne(Subscription, { foreignKey: 'userId', as: 'subscription' });
Subscription.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default Subscription;