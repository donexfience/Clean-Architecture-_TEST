import express, { Request, Response } from "express";
import { UserService } from "../../application/services/user-service";
export const createExpressApp = (userService: UserService) => {
  const app = express();
  app.use(express.json());
  app.post("/users", async (req: Request, res: Response) => {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "unknown error occcured" });
      }
    }
  });
  app.get("/user", async (req: Request, res: Response) => {
    try {
      const user = await userService.getUser(
        userService["userRepository"],
        req.params.id
      );
      if (user) {
        res.json(user);
      } else {
        res.status(400).json({ error: "user not found for the id" });
      }
    } catch (error) {
      res.status(500).json({ error: "internal server error" });
    }
  });
  return app
};
