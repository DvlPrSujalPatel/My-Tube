// import { Router } from "express";
// import { registerUser } from "../controllers/user.controller.js";

// const router = Router();

// router.get("/register").post(registerUser)


// export default router;
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

// Define a POST route for user registration
router.post("/register", registerUser);

export default router;
