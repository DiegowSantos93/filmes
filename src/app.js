import "dotenv/config";
import express from "express";
import produtoraRoutes from "./routes/produtora-routes.js"
import diretorRoutes from "./routes/diretor-routes.js"
import filmeRoutes from "./routes/filme-routes.js"

const app = express();

app.use(express.json());

app.use("/produtora", produtoraRoutes)
app.use("/diretor", diretorRoutes)
app.use("/filme", filmeRoutes)

app.listen(process.env.API_PORT, () => {
    console.log(`Server is running in port ${process.env.API_PORT}`)
});

