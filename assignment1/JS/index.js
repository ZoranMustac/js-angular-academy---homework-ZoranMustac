const review = document.getElementById('review');
const rating = document.getElementById('rating');
const post = document.getElementById('post');
const save = [];

post.addEventListener('click', (event) => {
	event.preventDefault();
	reviews();
});

function reviews() {
	const postReview = document.getElementById('postReview');
	const newReview = document.createElement('p');
	const newRating = document.createElement('p');

	let info = {
		review: review.value,
		rating: rating.value,
	};

	save.push(info);

	newReview.innerHTML = info.review;
	newRating.innerHTML = info.rating;

	localStorage.setItem('review', JSON.stringify(save));
	postReview.appendChild(newReview);
	postReview.appendChild(newRating);
}
