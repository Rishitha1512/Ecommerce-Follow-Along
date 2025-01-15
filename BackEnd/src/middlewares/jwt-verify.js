const jwt = require("jsonwebtoken");
if (process.env.NODE !== "PRODUCTION") {
  require("dotenv").config({
    path: "./config/.env",
  });
}
console.log("hiii");
const verifyUser = (req, res, next) => {
  console.log("token", req.body.token, process.env.SECRET_KEY);
  if (!req.body.token) {
    return res.status(404).send({ message: "Send token over rqeuest" });
  }
  // console.log("token", token);

  const data = jwt.verify(req.body.token, process.env.SECRET_KEY);
  console.log(data);
  req.userEmailAddress = data.email;
  //   req.body.userEmailAddress
  next();
};

module.exports = verifyUser;
