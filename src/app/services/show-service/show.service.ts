import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Show } from 'src/show/show.model';
import { IShow } from 'src/show/shows-list.interface';
import { IShowsResponse } from 'src/show/shows-response.interface';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	private shows$: BehaviorSubject<Array<Show>>;

	constructor(private readonly http: HttpClient) {
		this.shows$ = new BehaviorSubject<Array<Show>>([]);
	}

	public fetchAll(): Observable<Array<Show>> {
		return this.http
			.get<IShowsResponse>('https://tv-shows.infinum.academy/shows', {
				headers: {
					'access-token': localStorage.getItem('token') || '',
					'token-type': localStorage.getItem('token-type') || '',
					uid: localStorage.getItem('uid') || '',
					expiry: localStorage.getItem('expiry') || '',
					client: localStorage.getItem('client') || '',
				},
			})
			.pipe(
				map((showsResponse) => {
					return showsResponse.shows.map((show) => {
						return new Show(show);
					});
				}),
			);
	}

	public fetchTopRated(): Observable<Array<Show>> {
		return this.http
			.get<IShowsResponse>('https://tv-shows.infinum.academy/shows/top_rated', {
				headers: {
					'access-token': localStorage.getItem('token') || '',
					'token-type': localStorage.getItem('token-type') || '',
					uid: localStorage.getItem('uid') || '',
					expiry: localStorage.getItem('expiry') || '',
					client: localStorage.getItem('client') || '',
				},
			})
			.pipe(
				map((showsResponse) => {
					return showsResponse.shows.map((show) => {
						let rating = show.average_rating;
						return rating !== (null && 0) && rating >= 3
							? new Show(show)
							: {
									id: 0,
									title: '',
									description: '',
									imageUrl: '',
									averageRating: 0,
							  };
					});
				}),
			);
	}

	public fetchById(id: number): Observable<Show | undefined> {
		return this.shows$.pipe(
			map((shows) => {
				return shows.find((show) => {
					return show.id === id;
				});
			}),
		);
		/*
		return this.http
			.get<IShowsResponse>(`https://tv-shows.infinum.academy/shows/${id}`, {
				headers: {
					'access-token': localStorage.getItem('token') || '',
					'token-type': localStorage.getItem('token-type') || '',
					uid: localStorage.getItem('uid') || '',
					expiry: localStorage.getItem('expiry') || '',
					client: localStorage.getItem('client') || '',
				},
			})
			.pipe(
				map((showsResponse) => {
					return showsResponse.shows.map((show) => {
						return new Show(show);
					});
				}),
			);*/
	}
}
