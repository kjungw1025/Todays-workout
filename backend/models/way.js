const Sequelize = require('sequelize');

class Way extends Sequelize.Model {
  static initiate(sequelize) {
    Way.init({
      part: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      exercisename: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING(200),
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
      modelName: 'Way',
      tableName: 'Ways',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Way.belongsTo(db.Machine, { targetKey: 'name', foreignKey: 'machinename', constraints: false});
  }
};

module.exports = Way;