const fs = require("fs");
const path = require("path");
const db = require("../util/database");

const filePath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "users.json"
);

const getUsersFromFiles = (callBack) => {
  fs.readFile(filePath, (err, fileContenet) => {
    if (err) {
      callBack([]);
    } else {
      callBack(JSON.parse(fileContenet));
    }
  });
};

module.exports = class User {
  constructor(id, firstName, lastName, email, password) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  save() {
    return db.execute(
      "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)",
      [this.firstName, this.lastName, this.email, this.password]
    );
  }
  static fetchUsers() {
    return db.execute("SELECT * FROM USERS");
  }

  static singIn(email, password, callBack) {
    getUsersFromFiles((users) => {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      callBack(user);
    });
  }
};
