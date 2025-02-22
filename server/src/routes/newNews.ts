import { Router } from "express";
import { param } from "express-validator";
import { ARCHIVED, NEWS } from "../constants";
import { NewNewsController } from "../controllers/newNews";
import { validateNew } from "../middlewares/news";
import { handleInputErrors } from "../middlewares/validation";

export const newNewsRoutes = Router();

newNewsRoutes.post("/", validateNew, NewNewsController.create);
newNewsRoutes.get("/", NewNewsController.getAll);
newNewsRoutes.put(
  "/:id",
  param("id").isMongoId().withMessage("Not valid ID"),
  handleInputErrors,
  NewNewsController.updateNew
);
newNewsRoutes.patch(
  "/:id",
  param("id").isMongoId().withMessage("Not valid ID"),
  handleInputErrors,
  NewNewsController.updateNew
);
newNewsRoutes.delete(
  "/:id/:type",
  param("id").isMongoId().withMessage("Not valid ID"),
  param('type').isIn([NEWS, ARCHIVED]).withMessage(`Type must be either '${NEWS}' or '${ARCHIVED}'`),
  handleInputErrors,
  NewNewsController.deleteNew
);
