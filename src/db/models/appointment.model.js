const { Model, DataTypes } = require('sequelize');

const APPOINTMENTS = 'appointments';

class Appointment extends Model {

  static config(sequelize) {

    return {
      sequelize, 
      tablename: APPOINTMENTS,
      modelName: 'Appointment',
      timestamps: false
    }
  }
}

const AppointmentSchema = {
  
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  appointment: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'appointment'
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'email'
  },
  token: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'token'
  }

}

module.exports = { Appointment, AppointmentSchema };