const { Post } = require('../models');

const postData = [
  {
    title: 'Sequelize Migrations',
    content: 'You can use migrations to keep track of changes to the database',
    user_id: 1
    
  },
  {
    title: 'What is ORM',
    content: 'Object-relational mapping is used to link and query data from a database using an obejct-oriented paradigm.',
    user_id: 2
  },
  {
    title: 'Stylesheets',
    content: 'What are style sheets and how can we use them in JavaScript? Style sheets change the look and feel of webpages.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;