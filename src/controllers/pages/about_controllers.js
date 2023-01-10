import { request, response } from "express"

export const about_controller = (req = request, res = response) => {

    const data = [
        {
            id: 1,
            title: "title pertama",
            content: "content pertama"
        },
        {
            id: 2,
            title: "title kedua",
            content: "content kedua"
        },
        {
            id: 3,
            title: "title ketiga",
            content: "content ketiga"
        },
        {
            id: 4,
            title: "title keempat",
            content: "content keempat"
        },
    ]

    return res.render("about", {
        title: "about page",
        description: "ini adalah about page",
        data: data
    })
}

