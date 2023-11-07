import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private http: HttpClient, private messageService: MessageService) { }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }


  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };




  addProduct(data: Hero) {
    return this.http.post<Hero>(this.heroesUrl, data, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added product`)),
      catchError(this.handleError<Hero>('addHero'))
    );

  }

  /** GET products from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }


  
  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {


    return this.http.delete<Hero>(this.heroesUrl, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

   /** PUT: update the hero on the server */
   updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
