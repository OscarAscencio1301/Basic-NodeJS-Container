import { Request, Response } from "express";
import { data } from "../data/data";

export const getData = async (req: Request, resp: Response) => {
  try {
    resp.status(200).json({
      data,
    });
  } catch (error) {
    resp.status(500).json({
      msg: "Error en el servidor",
    });
  }
};
