const coversSection = document.querySelector('.covers-container');

const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			const lines = coversSection.querySelectorAll('.covers-inner-list');
			lines.forEach(line => {
				entry.isIntersecting
					? line.classList.add('covers-start-animation')
					: line.classList.remove('covers-start-animation');
			});
		});
	},
	{ threshold: 0.05 }
);

observer.observe(coversSection);