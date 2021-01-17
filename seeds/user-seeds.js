const {user} = require('../models');

const userData = [
    {
        username: 'jsmith',
        password: 'jsmith123',
    },
    {
        username: 'mjones',
        password: 'mjones123',
    },
    {
        username: 'awashington',
        password: 'awashington123',
    }
   
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;