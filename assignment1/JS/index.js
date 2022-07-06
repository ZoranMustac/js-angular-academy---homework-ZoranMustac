const review = document.getElementById('review');
const rating = document.getElementById('rating');
const post = document.getElementById('post');
const save = [
	{
		review: '',
		rating: 0,
	},
];

window.localStorage.setItem('', JSON.stringify(save));

post.addEventListener('click', () => {
	postReview(save);
});

function postReview() {
	const postReview = document.getElementById('postReview');

	save.forEach(() => {
		const newParagraph = document.createElement('p');
		const newRating = document.createElement('p');
		save.push(newParagraph, newRating);
		window.localStorage.getItem('', JSON.stringify(save));
		postReview.appendChild(newParagraph);
		postReview.appendChild(newRating);
	});
}
