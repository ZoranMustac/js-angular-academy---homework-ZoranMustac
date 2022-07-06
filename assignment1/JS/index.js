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

	let info = {
		review: review.value,
		rating: rating.value,
	};

	console.log(newReview);
	save.push(info);
	window.localStorage.setItem('review', JSON.stringify(save));
	newReview.innerHTML = JSON.parse(localStorage.getItem('review'));
	postReview.appendChild(newReview);
}
