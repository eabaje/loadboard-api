module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Orders', {
    OrderId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    UserId: { type: DataTypes.STRING },
    OrderId: { type: DataTypes.STRING },
    TotalPrice: { type: DataTypes.DECIMAL },
    PaymentSessionId: { type: DataTypes.STRING },
    IsPaymentSuccessful: { type: DataTypes.BOOLEAN },
    OrderStatus: { type: DataTypes.STRING },
    PaymentMethod: { type: DataTypes.STRING },
  });

  return Order;
};