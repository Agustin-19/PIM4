import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductByIdService, getProductsService } from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductById = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await getProductByIdService(Number(id));
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  }
);