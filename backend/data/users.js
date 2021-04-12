const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'john doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'jane doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

module.exports = users;
