import { PORT } from "./config/envs";
import dotenv from "dotenv";
import app from "./server";
import "reflect-metadata"
import { AppDataSource } from "./config/dataSource";
import { preLoadCategories } from "./helpers/preLoadCategories";
import { preLoadProducts } from "./helpers/preLoadProducts";

dotenv.config();
const port = process.env.PORT || 4000;

const initialize = async () => {
    console.log("Initializing server");
    await AppDataSource.initialize();
    console.log("Database initialized");
    await preLoadCategories();
    await preLoadProducts();
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

initialize();

