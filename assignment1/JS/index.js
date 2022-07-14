const review = document.getElementById('review');
const rating = document.getElementById('rating');
const post = document.getElementById('post');
const reviews = JSON.parse(localStorage.getItem('review')) || [];

const style = `
    display: block;
    margin-left: auto;
    margin-right: auto;
    color: white;
    text-align: left;
    padding: 1vw;
    padding-left: 2vw;
    padding-right: 2vw;
    max-width: 28vw;
    border-radius: 10px;
    font-size: 1vw;
    background-color: rgb(196, 54, 54);
    word-wrap: break-word;
`;

renderReviews();

post.addEventListener('click', (event) => {
	event.preventDefault();
	addReview();
	renderReviews();
});

function addReview() {
	let info = {
		review: review.value,
		rating: rating.value,
	};

	reviews.push(info);

	localStorage.setItem('review', JSON.stringify(reviews));
}

function renderReviews() {
	reviews.forEach((review) => {
		const postReview = document.getElementById('postReview');
		const newReview = document.createElement('p');
		const newRating = document.createElement('p');

		newReview.innerHTML = review.review;
		newRating.innerHTML = review.rating;

		postReview.style = style;
		postReview.appendChild(newReview);
		postReview.appendChild(newRating);
	});
}
