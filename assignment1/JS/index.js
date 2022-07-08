const review = document.getElementById('review');
const rating = document.getElementById('rating');
const post = document.getElementById('post');
const save = [];

post.addEventListener('click', (event) => {
	event.preventDefault();
	reviews();
});

let style = `
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
	postReview.style = style;
	postReview.appendChild(newReview);
	postReview.appendChild(newRating);
}
