// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const image = document.querySelector('#explore img');
  const textarea = document.querySelector('#text-to-speak');
  const voiceSelect = document.querySelector('#voice-select');
  const button = document.querySelector('button');

  // Load voices into dropdown
  function loadVoices() {
    const voices = speechSynthesis.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  button.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(textarea.value);
  const selectedVoice = speechSynthesis.getVoices().find(v => v.name === voiceSelect.value);
  
  if (selectedVoice) utterance.voice = selectedVoice;

  utterance.addEventListener('start', () => {
    image.src = 'assets/images/smiling-open.png';
    image.alt = 'Smiling face open';
  });

  utterance.addEventListener('end', () => {
    image.src = 'assets/images/smiling.png';
    image.alt = 'Smiling face';
  });

  speechSynthesis.speak(utterance);
});


}