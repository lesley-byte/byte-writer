const { User } = require('../models');
// userData is an array of objects that will be users.
const userData = [
  {
    username: 'johndoe',
    email: 'johndoe@johndoe.com',
    password: 'password123',
  },
  {
    username: 'janedoe',
    email: 'janedoe@janedoe.com',
    password: 'password123',
  },
  {
    username: 'barry',
    email: 'barry@barry.com',
    password: 'password123',
  },
  {
    username: 'jimmy',
    email: 'jimmy@jimmy.com',
    password: 'password',
  },
  {
    username: 'jane',
    email: 'jane@jane.com',
    password: 'password',
  },
  {
    username: 'joe',
    email: 'joe@joe.com',
    password: 'password',
  },
  {
    username: 'jim',
    email: 'jim@jim.com',
    password: 'password',
  },
  {
    username: 'barbara',
    email: 'barbara@barbara.com',
    password: 'password',
  },
  {
    username: 'Diane',
    email: 'Diane@Diane.com',
    password: 'password',
  },
  {
    username: 'Tom',
    email: 'Tom@Tom.com',
    password: 'password',
  },
];
//
const seedUsers = () => User.bulkCreate(userData);
//
module.exports = seedUsers;
