// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   CompanyId: { type: Number },
//   CarrierType: { type: String, default: null },
//   FleetType: { type: String, unique: true },
//   FleetNumber: { type: String },
//   Licensed: { type: Boolean },
//   AboutUs: { type: String },
//   ServiceDescription: { type: String },
//   Rating: { type: Number },
// });

// module.exports = mongoose.model("carrier", userSchema);

module.exports = (sequelize, DataTypes) => {
  const Carrier = sequelize.define('Carriers', {
    Carrier: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    CompanyId: { type: DataTypes.INTEGER },
    CarrierType: { type: DataTypes.STRING },
    FleetType: { type: DataTypes.STRING },
    FleetNumber: { type: DataTypes.STRING },
    AboutUs: { type: DataTypes.STRING },
    ServiceDescription: { type: DataTypes.STRING },
    Rating: { type: DataTypes.INTEGER },
    Licensed: { type: DataTypes.BOOLEAN },
  });

  return Carrier;
};