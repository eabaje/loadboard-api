module.exports = (sequelize, DataTypes) => {
    const Insurance = sequelize.define("Insurances", {
        InsuranceId: {
        type: DataTypes.INTEGER,autoIncrement:true,primaryKey: true 
      },
      CompanyId: { type: DataTypes.INTEGER },
      InsuranceName: { type: DataTypes.STRING },
      InsuranceType: { type: DataTypes.STRING },
      Insurer: { type: DataTypes.STRING },
      Address: { type: DataTypes.STRING },
      InsureranceDoc: { type: DataTypes.STRING },
      Rating: { type: DataTypes.INTEGER }
     
    });
  
    return Insurance;
  };