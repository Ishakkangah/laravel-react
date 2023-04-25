import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {},
});

const tempSurvey = [
    {
        id: 1,
        image_url:
            "https://cdn.pixabay.com/photo/2023/04/06/01/26/heart-7902540_960_720.jpg",
        title: "Saya belajar laravel-react",
        slug: "Saya-belajar-laravel-react",
        status: true,
        description:
            "my nama ishak <br> am web developer 2 +years of experience Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti rerum recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae iste laudantium.    ",
        created_at: "2023-01-22 16:34:19",
        updated_at: "2023-02-26 16:12:11",
        expire_date: "2023-03-26",
        question: [
            {
                id: 15,
                type: "text",
                question: "From country are you ?",
                description: null,
                data: [],
            },
            {
                id: 16,
                type: "checkbox",
                question:
                    "Which language video do you  want to see on my channel ?",
                description:
                    "orem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti rerum recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae iste laudantium.    ",
                data: [],
            },
            {
                id: 17,
                type: "textarea",
                question: "From country are you ?",
                description: null,
                data: [],
            },
            {
                id: 18,
                type: "checkbox",
                question: "You have alone ?",
                description:
                    "orem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti rerum recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae iste laudantium.    ",
                data: [],
            },
            {
                id: 19,
                type: "text",
                question: "You have Drink ?",
                description:
                    "orem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti rerum recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae iste laudantium.    ",
                data: [],
            },
        ],
    },
    {
        id: 2,
        image_url:
            "https://media.istockphoto.com/id/1324723036/id/foto/tandem-parasut-melompat-wanita-brasil-yang-cantik.jpg?s=612x612&w=is&k=20&c=Ymm_L_d-fQKULpqeOipLV-mB8lVHd2AXw4Uvxk4kkIo=",
        title: "Bismillahirohmanirohim",
        slug: "Bismillahirohmanirohim",
        status: true,
        description:
            "my nama ishak <br> am web developer 2 +years of experience Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti rerum recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae iste laudantium.    ",
        created_at: "2023-01-22 16:34:19",
        updated_at: "2023-02-26 16:12:11",
        expire_date: "2023-03-26",
        question: [
            {
                id: 15,
                type: "text",
                question: "From country are you ?",
                description: null,
                data: [],
            },
            {
                id: 16,
                type: "checkbox",
                question:
                    "Which language video do you  want to see on my channel ?",
                description:
                    "orem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti rerum recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae iste laudantium.    ",
                data: [],
            },
            {
                id: 17,
                type: "textarea",
                question: "From country are you ?",
                description: null,
                data: [],
            },
            {
                id: 18,
                type: "checkbox",
                question: "You have alone ?",
                description:
                    "orem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti rerum recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae iste laudantium.    ",
                data: [],
            },
            {
                id: 19,
                type: "text",
                question: "You have Drink ?",
                description:
                    "orem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti rerum recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae iste laudantium.    ",
                data: [],
            },
        ],
    },
    {
        id: 3,
        image_url:
            "https://media.istockphoto.com/id/955139618/id/foto/warna-tandem-skydiving.jpg?s=612x612&w=is&k=20&c=xB8TWM_N7UY2DFFrbp6mQPjTEaALXkStNQpyIFXoQfw=",
        title: "Allahuakbar",
        slug: "Allahuakbar",
        status: true,
        description:
            "my nama ishak <br> am web developer 2 +years of experience Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti rerum recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae iste laudantium.    ",
        created_at: "2023-01-22 16:34:19",
        updated_at: "2023-02-26 16:12:11",
        expire_date: "2023-03-26",
        question: [
            {
                id: 15,
                type: "text",
                question: "From country are you ?",
                description: null,
                data: [],
            },
            {
                id: 16,
                type: "checkbox",
                question:
                    "Which language video do you  want to see on my channel ?",
                description:
                    "orem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti rerum recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae iste laudantium.    ",
                data: [],
            },
            {
                id: 17,
                type: "textarea",
                question: "From country are you ?",
                description: null,
                data: [],
            },
            {
                id: 18,
                type: "checkbox",
                question: "You have alone ?",
                description:
                    "orem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti rerum recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae iste laudantium.    ",
                data: [],
            },
            {
                id: 19,
                type: "text",
                question: "You have Drink ?",
                description:
                    "orem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti rerum recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae iste laudantium.    ",
                data: [],
            },
        ],
    },
];

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: "Tom Cook",
        email: "tom@example.com",
        imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    });
    const [userToken, setUserToken] = useState("12345");
    const [surveys, setSurveys] = useState(tempSurvey);

    return (
        <StateContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                userToken,
                setUserToken,
                surveys,
                setSurveys,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const userStateContext = () => useContext(StateContext);
