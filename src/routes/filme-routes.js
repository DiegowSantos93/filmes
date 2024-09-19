import express from "express";
import filmeController from "../controllers/filme-controller.js";

const router = express.Router()

router.post("/", filmeController.create)
router.get("/", filmeController.index)
router.get("/:id", filmeController.show)
router.put("/:id", filmeController.update)
router.delete("/:id", filmeController.destroy)

export default router