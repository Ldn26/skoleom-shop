const sequelize = require("./config");

// Register all models
// require("./schemas/acheteur");
require("./schemas/avatar");
require("./schemas/tryon");
require("./schemas/user");
// Register all associations
require("./schemas/relations");

module.exports = sequelize;