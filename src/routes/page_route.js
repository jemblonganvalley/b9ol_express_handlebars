import express from "express"
import { about_controller } from "../controllers/pages/about_controllers"
import { home_controller } from "../controllers/pages/home_controllers"
const page_route = express.Router()

// router khusus page
page_route.get("/", home_controller)
page_route.get("/about", about_controller)

export default page_route