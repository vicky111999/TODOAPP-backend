import express from "express"
import { itemAdd } from "../controller/todoitemcontroller.js"
import { categories, Pending } from "../controller/todoitemviewscontroller.js"
import { todoallitemviewcontroller } from "../controller/todoallitemviewcontroller.js"
import { alltask } from "../controller/todoalltaskController.js"
import { Deleted } from "../controller/todotaskeditdelController.js"
import { edit } from "../controller/todoedit.js"
import { completion } from "../controller/completed.js"
import { completedtask } from "../controller/completedtasks.js"
import { pendingtask } from "../controller/pendingtasks.js"
import { charting } from "../controller/chart.js"

const routes = express.Router()

routes.post("/todoAdd",itemAdd)
routes.get("/Categories",categories)
routes.get("/",todoallitemviewcontroller)
routes.get("/pending",Pending)
routes.get("/alltask",alltask)
routes.delete("/delete/:id",Deleted)
routes.put("/update/:id",edit)
routes.patch("/status/:id",completion)
routes.get("/completed",completedtask)
routes.get("/pending",pendingtask)
routes.get("/chart",charting)
export default routes