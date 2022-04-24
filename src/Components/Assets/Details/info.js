import img from "../Images/3..jpeg"
import img_1 from "../Images/4.jpg"
import estate from "../static/estate.jpg"
import car from "../static/car.jpg"
import yatch from "../static/yatch.jpg"
import jet from "../static/jet.jpg"

export const info = {
    name: 'King David Elites',
    nav_items : [
        {
            title:"About",
            link : '/about',
            id: 1, 
        },
        {
            id: 2,
            title : "Real Estate",
            link : '/real-estate'
        },
        {
            id: 3,
            title: "Cars",
            link : "/cars"
        },
        {
            id: 4,
            title: "Combo Deals",
            link: "/combo-deals"
        },
        {
            id: 5,
            title: "Latest",
            link : "/latest"
        },
        {
            id:6,
            title : "Blog",
            link: "/blog"
        },
        {
            id: 7,
            title : "Sign In/Up",
            link : "/auth",
        },
        
    ],
    banner_text : "Easy way to find a Perfect Property.",
    banner_sub_text : "We Provide a complete service for the sale, purchase or rental of real estate.",
    banner_img: img,
    footer_content_text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod qui vel nostrum, saepe alias sint aliquam pariatur ex dolorum explicabo ipsa! Nesciunt quia numquam, quam rem aliquam exercitationem nihil. Voluptate!",
    copyright : "2022 &copy; All right reserved",
    categories : [
        {
            id: 1,
            title : "Real Estate",
            link : "/real-estate",
            image : estate
        },
        {
            id: 2,
            title : "Cars",
            link : "/cars",
            image : car
        },
        {
            id: 3,
            title : "Yatch",
            link : "/yatch",
            image : yatch
        },
        {
            id: 4,
            title : "Jets",
            link : '/jets',
            image : jet
        }
    ],
    newsLetter_intro_text : "Receive the beautifully curated selection of what’s trending in luxury with inside stories and tips from our experts"
}