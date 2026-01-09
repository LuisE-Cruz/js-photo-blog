
// Riferimento endpoint
const endPoint = "https://lanciweb.github.io/demo/api/pictures/";

// Elemento di outputHtml
const containerOutput = document.getElementById("container");

// Seleziono gli elementi da utilizzare
const overLay = document.getElementById("show-photo")
const button = document.getElementById("close-photo")
const imgOverlay = document.getElementById("img-size")

// Chiamiamo ajax all'endpoint
axios
    .get(endPoint)

    .then(response => {

        // output che verrà a schermo
        let cardsOutput = "";

        // Prendiamo i dati dall'endpoint
        const cards = response.data;

        // Ciclo array per estrapolare dati
        cards.forEach(card => {
            
            // Destrutturiamo
            const {title, date, url} = card;

            // Generiamo le card nell'output a schermo
            cardsOutput += `<div class="card">
                <div class="pin">
                    <img class="img-pin" src="./img/pin.svg" alt="pin image">
                </div>
                <div class="img-container">
                    <img class="img-card" src="${url}" alt="test image">
                </div>
                <div>
                    <h3 class="title-card">${title}</h3>
                </div>
                <div>
                    <p class="date-card">${date}</p>
                </div>
            </div>`
        });

        //Inseriamo le card in pagina 
        containerOutput.innerHTML = cardsOutput;
        
        // Selezioniamo le card
        const inputCard = document.querySelectorAll(".card");

        // Creiamo un evento click per far comparire overlay e un ciclo delle immagini nel cardInput
        inputCard.forEach(card=> {

            // Selezioniamo l'imagine della card
            card.addEventListener("click", () => {

                const img = card.querySelector(".img-card");
                

                imgOverlay.src = img.src;
                imgOverlay.alt = img.alt;
                

                overLay.classList.remove("d-none")
            });
        });

        button.addEventListener("click", () => {
            overLay.classList.add("d-none");

        })

    })