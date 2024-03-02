import express from "express";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  //firebase user creation and credentials handling
  const { email, password } = req.body;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
      res.status(200);
    })
    .catch((error) => {
      const { code, message } = error;
      console.error(code, message);
    });
});

export default userRouter;
