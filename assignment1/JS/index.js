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

const reviewTextAreaElement = document.getElementById('review');
const rating = document.getElementById('rating');
const post = document.getElementById('post');

const reviews = JSON.parse(localStorage.getItem('review')) || [];
renderReviews();

post.addEventListener('click', (event) => {
	event.preventDefault();

	addReview();
	renderReviews();
});

function addReview() {
	const review = {
		review: reviewTextAreaElement.value,
		rating: rating.value,
	};

	reviews.push(review);

	localStorage.setItem('review', JSON.stringify(reviews));
}

function renderReviews() {
	const postReview = document.getElementById('postReview');

	reviews.forEach((review) => {
		const newReview = document.createElement('p');
		const newRating = document.createElement('p');

		newReview.innerHTML = review.review;
		newRating.innerHTML = review.rating;

		postReview.style = style;
		postReview.appendChild(newReview);
		postReview.appendChild(newRating);
	});
}
