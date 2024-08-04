import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
//Middleware inject kiya gaya hai just register hone se pehle
router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    {
      name: "cover",
      maxCount: 1,
    },
  ]),
  registerUser
);
export default router;
