const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let timerInterval;

  return (seconds) => {
    clearInterval(timerInterval);

    const animateTimer = () => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secondsRemainder = seconds % 60;

      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsRemainder.toString().padStart(2, '0')}`;
      timerEl.innerHTML = formattedTime;

      seconds--;

      if (seconds < 0) {
        clearInterval(timerInterval);
      }
    };

    animateTimer();
    timerInterval = setInterval(animateTimer, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  const cleanedValue = inputEl.value.replace(/\D/g, '');
  inputEl.value = cleanedValue;
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
  inputEl.focus();
});
