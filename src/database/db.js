import Sequelize  from "sequelize";

export const sequelize = new Sequelize('sequelize','root','',{
    host:'localhost',
    dialect:'mysql'
})