import Sequelize, { DataTypes, Model } from 'sequelize';
import util from 'util';

const sequelize = new Sequelize('postgresql:///muse_app', {
  dialect: 'postgres',
  logging: false,
  define: {
    underscored: true,
    timestamps: false
  }
});

class User extends Model {} 

User.init(
    {
        id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        UserName: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    },
  {
    modelName: 'user', 
    sequelize: sequelize, 
  },
);

class Img extends Model {}
  
  Img.init(
    {
      id:{
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      img: {
          type: DataTypes.TEXT(),
          allowNull: false,
      },
      tag: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      modelName: 'img', 
      sequelize: sequelize,  
    },
  );
  
  User.hasMany(Img, { foreignKey: 'userId' });
  Img.belongsTo(User, { foreignKey: 'userId' });

  await sequelize.sync({force: true});
  await sequelize.close()

  export default sequelize;
  export { sequelize, User, Img };