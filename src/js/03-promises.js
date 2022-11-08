import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const refs = {
  form: document.querySelector('.form'),

  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]')
};

refs.form.addEventListener('submit', subCreatePromises);

function subCreatePromises (evt) {
  evt.preventDefault();
  
  let delayVal = refs.delay.valueAsNumber;
  const stepVal = refs.step.valueAsNumber;
  const amountVal = refs.amount.valueAsNumber;

  for (let i = 1; i <= amountVal; i++) {
    createPromise(i, delayVal)

    .then(({position, delayVal}) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delayVal}ms`);
    })

    .catch(({position, delayVal}) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delayVal}ms`);
    });
    delayVal += stepVal;
  };
};

function createPromise(position, delayVal) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
       resolve({position, delayVal});
    } else {
       reject({position, delayVal});
    }
  }, delayVal);
});
}