text_el = document.getElementById("changing_text");
old_text = text_el.innerText;
texts = [
	"Kerja Lembur",
	"Nugas",
	"Ngejar Deadline",
	"Kerja Keras",
	"Terjebak Macet",
	"Meeting 5 Jam",
];

setInterval(function () {
	while (true) {
		new_text = texts[Math.floor(Math.random() * texts.length)] + ".";
		if (new_text !== old_text) {
			old_text = new_text;
			break;
		}
	}
	text_el.classList.toggle("anim_fade");
	setTimeout(function () {
		text_el.innerHTML = new_text;
	}, 250);
	setTimeout(function () {
		text_el.classList.toggle("anim_fade");
	}, 500);
}, 5000);
