const Admin = require('../models/admin');

exports.createUser = async () => {
  const adminUser = {
    fullName: "Admin",
    email: "admin@gmail.com",
    password: "admin",
    role: "admin",
    isActive: true
  };

  const user = await Admin.findOne(adminUser);

  if (!user) {
    await Admin.create(adminUser);
  }
};
