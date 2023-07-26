const Sequelize = require('sequelize');

class Machine extends Sequelize.Model {
  static initiate(sequelize) {
    Machine.init({
      part: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
     },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Machine',
      tableName: 'Machines',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Machine.hasMany(db.Way, { sourceKey: 'name' , foreignKey: 'machinename', constraints: false});
  }
};

module.exports = Machine;