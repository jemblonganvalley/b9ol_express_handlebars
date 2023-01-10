import { request, response } from "express"

export const home_controller = (req = request, res = response) => {

    res.render("index", {
        title: "Express Handlebars",
        description: "belajar express handlebars"
    })

}