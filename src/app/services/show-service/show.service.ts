import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Show } from 'src/show/show.model';
import { IShowsResponse } from 'src/show/shows-response.interface';
import { ISingleShow } from 'src/show/single-show.interface';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	constructor(private readonly http: HttpClient) {}

	public fetchAll(): Observable<Array<Show>> {
		return this.http.get<IShowsResponse>('https://tv-shows.infinum.academy/shows').pipe(
			map((showsResponse) => {
				return showsResponse.shows.map((show) => {
					return new Show(show);
				});
			}),
		);
	}

	public fetchTopRated(): Observable<Array<Show>> {
		return this.http.get<IShowsResponse>('https://tv-shows.infinum.academy/shows/top_rated').pipe(
			map((showsResponse) => {
				return showsResponse.shows.map((show) => {
					return new Show(show);
				});
			}),
		);
	}

	public fetchById(id: number): Observable<Show | undefined> {
		return this.http.get<ISingleShow>(`https://tv-shows.infinum.academy/shows/${id}`).pipe(
			map((shows) => {
				return new Show(shows.show);
			}),
		);
	}
}
