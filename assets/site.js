// Small interactions used across the static site.
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  if (button && nav) button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
  // Dashboard period filter updates the sample view label and summary counts.
  const period = document.querySelector('#period-filter');
  if (period) period.addEventListener('change', () => {
    const factor = Number(period.value);
    document.querySelectorAll('[data-base]').forEach(el => {
      const base = Number(el.dataset.base);
      el.textContent = Math.round(base * factor).toLocaleString();
    });
    document.querySelector('#period-caption').textContent = period.options[period.selectedIndex].text;
  });
});
