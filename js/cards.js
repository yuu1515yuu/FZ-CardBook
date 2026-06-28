/* ==========================================
   カード一覧表示
========================================== */

function renderCards(cards){

    const container = document.getElementById("cardGrid");

    container.innerHTML = "";

    cards.forEach(card=>{

        const image =
            card["表画像"] ||
            "images/placeholder/no-image.png";

        const owned =
            card["所持"] === "TRUE"
                ? "🩷 所持"
                : "🤍 未所持";

        const div = document.createElement("div");

        div.className = "card";

        div.innerHTML = `

            <img src="${image}">

            <div class="card-body">

                <div class="card-number">
                    ${card["カード番号"] || ""}
                </div>

                <div class="card-title">
                    ${card["カード名"] || ""}
                </div>

                <div class="card-series">
                    ${card["シリーズ"] || ""}
                </div>

                <div class="card-status">
                    ${owned}
                </div>

            </div>

        `;

        container.appendChild(div);

    });

}
