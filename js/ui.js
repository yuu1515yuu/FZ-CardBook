/* ======================================================
   ui.js
====================================================== */

function renderCards() {

    const grid = document.getElementById("cardGrid");

    grid.innerHTML = "";

    cards.forEach(card => {

        grid.innerHTML += `
            <div class="card">

                <div class="card-image">
                    🖼️
                </div>

                <div class="card-body">

                    <div class="card-title">
                        ${card.title}
                    </div>

                    <div class="card-series">
                        ${card.series}
                    </div>

                    <div class="card-status">

                        <span class="badge">
                            ${card.owned ? "所持" : "未所持"}
                        </span>

                    </div>

                </div>

            </div>
        `;

    });

}

document.addEventListener("DOMContentLoaded", renderCards);
