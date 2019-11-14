let answer = "";

while (answer != "exit") {

	answer = prompt('Parle moi <3');

	// Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
	if (/[?]$/.test(answer)) {console.log("Ouais Ouais...");}

	// Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
	else if (/[a-zA-Z]/.test(answer) && answer.toUpperCase() === answer) {console.log("Pwa, calme-toi...");}
	
	// Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
	else if (answer.includes("Fortnite") || answer.includes("fortnite")) {console.log("on s' fait une partie soum-soum ?");}

	// Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
	else if (answer === "") {console.log("t'es en PLS ?");}

    // Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;
    else console.log("balek.");

    }







