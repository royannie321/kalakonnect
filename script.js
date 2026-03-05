// Category chip click behaviour
const chips = document.querySelectorAll('.chip');

chips.forEach(function(chip) {
  chip.addEventListener('click', function() {
    chips.forEach(function(c) {
      c.classList.remove('selected');
    });
    chip.classList.add('selected');
  });
});