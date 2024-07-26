import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";


export const auth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  const token = req.headers.authorization;

  if(!token) {
    return res.status(403).json({
      status: "fail",
      message: "Token is missing"
    })
  }

  try {
    
    jwt.verify(token, process.env.JWT_SECRET || "");
    next();
  

  } catch (error) {
    res.status(403).json({
      status: "fail",
      message: "Unauthorized",
      error: error
    })
  }


};
