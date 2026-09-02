const chips = document.querySelectorAll('.chip');
const sections = document.querySelectorAll('.estacao');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    const filter = chip.dataset.filter;

    sections.forEach(section => {
      const audiences = section.dataset.audience.split(' ');

      if (filter === 'todos' || audiences.includes(filter)) {
        section.style.display = '';
      } else {
        section.style.display = 'none';
      }
    });
  });
});
