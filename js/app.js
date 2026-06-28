document.addEventListener("DOMContentLoaded", async () => {

    console.log("FZ CardBook 起動");

    try {

        const db = await loadDatabase();

        console.log(db);

        renderCards(db.master);

    } catch (error) {

        console.error(error);

    }

});
