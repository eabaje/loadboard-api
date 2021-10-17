module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payments', {
    PaymentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    UserId: { type: DataTypes.STRING },
    OrderId: { type: DataTypes.STRING },
    TotalPrice: { type: DataTypes.DECIMAL },
    PaymentSessionId: { type: DataTypes.STRING },
    ReferenceId: { type: DataTypes.STRING },
    OrderStatus: { type: DataTypes.STRING },
    PaymentMethod: { type: DataTypes.STRING },
  });

  return Payment;
};