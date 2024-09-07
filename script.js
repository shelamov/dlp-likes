"use strict"
document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.dlp-likes').forEach(block => {
		const plusButton = block.querySelector('.dlp-likes__item_plus');
		const minusButton = block.querySelector('.dlp-likes__item_minus');
		const likesCounter = block.querySelector('.js-dlp-likes-counter-plus');
		const dislikesCounter = block.querySelector('.js-dlp-likes-counter-minus');

		let initLikes = parseInt(likesCounter.textContent);
		let initDislikes = parseInt(dislikesCounter.textContent);

		plusButton.addEventListener('click', (e) => {
			if (plusButton.classList.contains('active')) {
				initLikes -= 1;
				likesCounter.textContent = initLikes;
				plusButton.classList.remove('active');
			} else if (minusButton.classList.contains('active')) {
				initDislikes -= 1;
				dislikesCounter.textContent = initDislikes;
				initLikes += 1;
				likesCounter.textContent = initLikes;
				plusButton.classList.add('active');
				minusButton.classList.remove('active');
			} else {
				initLikes += 1;
				likesCounter.textContent = initLikes;
				plusButton.classList.add('active');
			}
		});

		minusButton.addEventListener('click', (e) => {
			if (minusButton.classList.contains('active')) {
				initDislikes -= 1;
				dislikesCounter.textContent = initDislikes;
				minusButton.classList.remove('active');
			} else if (plusButton.classList.contains('active')) {
				initLikes -= 1;
				likesCounter.textContent = initLikes;
				initDislikes += 1;
				dislikesCounter.textContent = initDislikes;
				minusButton.classList.add('active');
				plusButton.classList.remove('active');
			} else {
				initDislikes += 1;
				dislikesCounter.textContent = initDislikes;
				minusButton.classList.add('active');
			}
		});
	});
});