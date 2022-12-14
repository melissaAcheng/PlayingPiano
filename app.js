const pianoKeys = document.querySelectorAll(".key");
const keyMap = [
	"Db4",
	"Eb4",
	"Gb4",
	"Ab4",
	"Bb4",
	"Db5",
	"Eb5",
	"Gb5",
	"Ab5",
	"Bb5",
	"C4",
	"D4",
	"E4",
	"F4",
	"G4",
	"A4",
	"B4",
	"C5",
	"D5",
	"E5",
	"F5",
	"G5",
	"A5",
	"B5",
];

function playSound(url) {
	new Audio(url).play();
	console.log(url);
}

pianoKeys.forEach((pianoKey, i) => {
	const newUrl = `24-piano-keys/${keyMap[i]}.mp3`;

	pianoKey.addEventListener("click", () => {
		playSound(newUrl);
	});
});

// piano-keys/Gb5.mp3
