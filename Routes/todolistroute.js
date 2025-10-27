import express from "express"
import { itemAdd, itemDelete } from "../controller/todoitemcontroller.js"
import { categories, Pending } from "../controller/todoitemviewscontroller.js"
import { todoallitemviewcontroller } from "../controller/todoallitemviewcontroller.js"

const routes = express.Router()

routes.post("/todoAdd",itemAdd)
routes.get("/Categories",categories)
routes.post("/itemDelete",itemDelete)
routes.get("/",todoallitemviewcontroller)
routes.get("/pending",Pending)
routes.get("/alltask")
export default routes