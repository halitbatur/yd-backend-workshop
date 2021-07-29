const { restore } = require("../models/user");
const User = require("../models/user");

exports.getUsers = async (req, res, next) => {
const users = await User.findAll()
res.send(users)
};

exports.postSignUp = async (req, res, next) => {
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const user = User.build({email,password,firstName,lastName});
  await user.save()
  res.sendStatus(200)
};

exports.postSignIn = async (req, res, next) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({where :{email}})
  if(user?.password === password){
    res.send(user)
  }else{
    res.status(400).send('Incorrect userName or password')
  }
 
};
