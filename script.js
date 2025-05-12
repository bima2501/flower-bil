window.onload = function() {
  const petals = document.querySelectorAll('.petal');
  petals.forEach((petal, index) => {
    setTimeout(() => {
      petal.style.opacity = 1;
    }, index * 300);
  });
};
