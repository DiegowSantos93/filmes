import express from "express";
import diretorController from "../controllers/diretor-controller.js";
import cep_endereco from "../midllewares/cep_endereco.js";

const router = express.Router()

router.post("/", cep_endereco, diretorController.create)
router.get("/", diretorController.index)
router.get("/:id", diretorController.show)
router.put("/:id", cep_endereco, diretorController.update)
router.delete("/:id", diretorController.destroy)

export default router