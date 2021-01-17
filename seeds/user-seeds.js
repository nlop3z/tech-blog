const { User } = require('../models');

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

const seedUsers = () => {
    console.log(userData)
    User.bulkCreate(userData, {individualHooks: true}).then(result=>{console.log("RES: ", result)})
};

module.exports = seedUsers;