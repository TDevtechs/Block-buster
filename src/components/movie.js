import { Component,createElement } from "../lib/react/index.js";
 
 
//  <article class="movie recommended">
//         <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg" alt="">
//         <p class="movie-title">Duro de matar</p>
//         <p class="movie-id">123456</p>
//         <span class="movie-rate">10</span>
//       </article>

class Movie extends Component {
	render() {
		const { poster_path, title, id, vote_average } = this.props
		return createElement('article',{
			class:`movie ${vote_average >= 7 ? 'recommended': ''}`,
			children: [
				createElement('img',{
					class:'movie-poster',
					src: `//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
				}),
				createElement('p',{
					class: 'movie-title',
				},title),
				createElement('p',{
					class: 'movie-id',
				},id),
				createElement('span',{
					class: 'movie-rate',
				},vote_average),
			]
		})
	}
}

export default Movie