let nome
let xp
let nivel


if (xp < 1000) {
    nivel = "Prata"
}
else if (xp > 1000 && xp <= 2000) {
    nivel = "Ouro"
}
else if (xp > 2000 && xp <= 5000) {
    nivel = "Ak"
}
else if (xp > 5000 && xp <= 7000) {
    nivel = "Ak Cruzada"
}
else if (xp > 7000 && xp <= 8000) {
    nivel = "Águia"
}
else if (xp > 8000 && xp <= 9000) {
    nivel = "Xerife"
}
else if (xp > 9000 && xp <= 10000) {
    nivel = "Supremo"
}
else {
    nivel = "Global Elite"
}

console.log("O herói de nome " + nome + " está no nível: " + nivel)
