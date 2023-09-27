let arrAudios = [
    new Audio("Audio_Cavalo.mp3"),
    new Audio("Audio_Ele_Gosta.mp3"),
    new Audio("Audio_ui.mp3"),
    new Audio("Audio_Que_Isso_Meu_Filho_Calma.mp3"),
    new Audio("Audio_Ratinho.mp3")
];

let audioAtual = 0; // Inicialmente, reproduza o primeiro áudio

function randomizarArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function tocarAudio() {
    if (audioAtual < arrAudios.length) {
        arrAudios[audioAtual].play();
        audioAtual++;
    } else {
        audioAtual = 0; // Reinicie a reprodução do primeiro áudio quando atingir o final
        arrAudios[audioAtual].play();
        audioAtual++;
    }
}

// Randomize o array quando a página for carregada
window.onload = function () {
    randomizarArray(arrAudios);
};