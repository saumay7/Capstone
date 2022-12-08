import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';
import orderRouter from './routers/order.router';
import { sample_foods, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";
dbConnect();
const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.post("/api/users/login", (req, res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email 
      && user.password === password);
  
     if(user) {
      res.send(generateTokenReponse(user));
     }
     else{
       const BAD_REQUEST = 400;
       res.status(BAD_REQUEST).send("Username or password is invalid!");
     }
  
  })
  
  const generateTokenReponse = (user : any) => {
    const token = jwt.sign({
      email:user.email, isAdmin: user.isAdmin
    },"SomeRandomText",{
      expiresIn:"30d"
    });
  
    user.token = token;
    return user;
  }
const port = 5000;
app.listen(port, () =>{
    console.log("Website saved on http://localhost:" + port);
})