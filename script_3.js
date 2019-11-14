let userNumber = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
for(let count = 1; count <= userNumber; count++){
	console.log((" ".repeat(userNumber - count)) + ("#".repeat(count)));
};