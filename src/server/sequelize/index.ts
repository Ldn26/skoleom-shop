// const sequelize = require("./config");

// // Register all models
// // require("./schemas/acheteur");
// require("./schemas/avatar");
// require("./schemas/tryon");
// require("./schemas/user");
// // Register all associations
// require("./schemas/relations");

// module.exports = sequelize;

import sequelize from "./config";

// Register all models & associations
import "./schemas/avatar";
import "./schemas/tryon";
import "./schemas/user";
import "./schemas/relations";

export { sequelize };
export default sequelize;