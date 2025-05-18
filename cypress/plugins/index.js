const { downloadfile } = require("cypress-downloadfile/lib/addPlugin");
module.exports = (on, config) => {
  on("task", { downloadfile });
};
