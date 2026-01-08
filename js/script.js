// Riferimento endpoint
const endPoint = "https://lanciweb.github.io/demo/api/pictures/";

// Elemento di outputHtml
const containerOutput = document.getElementById("container");

// Chiamiamo ajax all'endpoint
axios.get(endPoint)
    .then(response =>{

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

        containerOutput.innerHTML = cardsOutput;

    })