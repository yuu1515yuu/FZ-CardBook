/* ======================================================
   FZ CardBook
   config.js
====================================================== */

const CONFIG = {

    app: {
        name: "FZ CardBook",
        version: "1.0.0"
    },

    members: {

        karen: {
            id: "karen",
            name: "松本かれん",
            color: "#FFB6D5",
            icon: "🩷"
        },

        yui: {
            id: "yui",
            name: "櫻井優衣",
            color: "#98F0D0",
            icon: "💚"
        }

    },

    cardTypes: {

        paper: {
            id: "paper",
            name: "紙トレカ",
            hasBackImage: true
        },

        clear: {
            id: "clear",
            name: "クリアトレカ",
            hasBackImage: false
        }

    },

    imagePath: {

        base: "images/members/",

        placeholder: "images/placeholder/no-image.png"

    }

};
