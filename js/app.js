document.addEventListener("DOMContentLoaded", async ()=>{

    console.log("FZ CardBook 起動");

    const db = await loadDatabase();

    console.log(db);

});
