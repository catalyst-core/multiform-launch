
function playVoice(id) {
  const audio = new Audio(`assets/${id}.mp3`);
  audio.play();
}
