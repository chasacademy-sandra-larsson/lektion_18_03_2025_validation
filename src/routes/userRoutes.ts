import express, {Request, Response, NextFunction} from "express"
import { createUser, getUser, getUsers, updateUser, deleteUser } from "../controllers/userController";
//import { body, validationResult } from "express-validator"
import { validateUser } from "./../middleware/validator"

const router = express.Router()

// CRUD för en resurs users
router.post("/", 
    validateUser,
    // Det som finns i validator.ts
    // body("email").trim().isEmail().escape(),
    // body("password").trim().isLength({ min: 5}).escape(),
    // (req: Request, res: Response, next: NextFunction) => {
    //     const errors = validationResult(req);
    //     if(!errors.isEmpty()) {
    //         res.status(400).json({ message: "Not valid data", errors: errors.array()})
    //         return
    //     }
    //     next();
    // },
    createUser); // Kolla bodys parametrar om giltig e-post och password, samt sanitera input exempelvis genom att använda trim()
router.get("/", getUsers); // Man kan också validera query-parametrar här
router.get("/:id", getUser);
router.put("/:id", validateUser, updateUser); // Samma sak på put
router.delete("/:id", deleteUser);



export default router;
