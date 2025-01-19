const jwt = require("jsonwebtoken");
if (process.env.NODE !== "PRODUCTION") {
  require("dotenv").config({
    path: "./config/.env",
  });
}
const verifyUser = (req, res, next) => {
  // console.log("token", req.body.token, process.env.SECRET_KEY);
  const { token } = req.query;
  if (!token) {
    return res.status(404).send({ message: "Send token over rqeuest" });
  }
  // console.log("token", token);

  const data = jwt.verify(token, process.env.SECRET_KEY);
  console.log(data);
  req.userEmailAddress = data.email;
  req.UserId = data.id;
  //   req.body.userEmailAddress
  next();
};

module.exports = verifyUser;
