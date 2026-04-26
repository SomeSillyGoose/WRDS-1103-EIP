// Scroll Animation - - - - - - - - - - - - - - - - - - - -
const elements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});
elements.forEach(el => observer.observe(el));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const expandableCards = document.querySelectorAll('.expand-card');
expandableCards.forEach(card => {
    const trigger = card.querySelector('.card-trigger');
    const extension = card.querySelector('.card-extension');

    if (!trigger || !extension) {
        return;
    }

    if (!extension.id) {
        extension.id = `card-details-${Math.random().toString(36).slice(2, 9)}`;
    }

    trigger.setAttribute('aria-controls', extension.id);

    trigger.addEventListener('click', () => {
        const isOpen = card.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', String(isOpen));
        extension.setAttribute('aria-hidden', String(!isOpen));
    });
});