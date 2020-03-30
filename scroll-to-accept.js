const terms = document.querySelector(".terms-and-conditions");
const button = document.querySelector(".accept");

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    console.log("removing disabled");
  } else {
    button.disabled = true;
  }
}

const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1 });

ob.observe(terms.lastElementChild);
