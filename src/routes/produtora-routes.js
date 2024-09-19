import express from "express";
import produtoraController from "../controllers/produtora-controller.js";
import cep_endereco from "../midllewares/cep_endereco.js";

const router = express.Router()

router.post("/", cep_endereco, produtoraController.create)
router.get("/", produtoraController.index)
router.get("/:id", produtoraController.show)
router.put("/:id", cep_endereco, produtoraController.update)
router.delete("/:id", produtoraController.destroy)

export default router