/* ==========================================
   カード一覧表示
========================================== */

function renderCards(cards){

    const container = document.getElementById("card-list");

    container.innerHTML = "";

    cards.forEach(card=>{

        const div = document.createElement("div");

        div.className = "card";

        div.innerHTML = `

            <div class="card-image">

                <img src="images/placeholder/no-image.png">

            </div>

            <div class="card-body">

                <h3>${card.Name}</h3>

                <p>${card.Series}</p>

                <small>${card.CardNo}</small>

            </div>

        `;

        container.appendChild(div);

    });

}
