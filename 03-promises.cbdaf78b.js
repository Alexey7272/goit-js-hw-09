function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var l=r("eWCmQ");const i={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function u(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delayVal:o}):n({position:e,delayVal:o})}),o)}))}i.form.addEventListener("submit",(function(o){o.preventDefault();let t=i.delay.valueAsNumber;const n=i.step.valueAsNumber,r=i.amount.valueAsNumber;for(let o=1;o<=r;o++)u(o,t).then((({position:t,delayVal:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:t,delayVal:n})=>{e(l).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)})),t+=n}));
//# sourceMappingURL=03-promises.cbdaf78b.js.map
