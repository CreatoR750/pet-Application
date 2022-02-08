import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IAnimal } from "../animal";
import { Animals } from "../animal-list";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class AnimalService {
    private animalsUrl = "http://localhost:3000/animals";

    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    constructor(private http: HttpClient) {}

    getAnimals(): Observable<IAnimal[]> {
        return this.http.get<IAnimal[]>(this.animalsUrl).pipe(catchError(this.handleError<any>("getAnimals")));
    }

    getFilteredAnimals(): Observable<IAnimal[]> {
        const animals = of(Animals);
        const filteredAnimals = animals.pipe(map((animal) => animal.filter((animal) => animal.type != "Кот" && animal.type != "Кошка")));
        return filteredAnimals;
    }

    getAnimal(id: number): Observable<IAnimal> {
        const url = `${this.animalsUrl}/${id}`;
        return this.http.get<IAnimal>(url).pipe(catchError(this.handleError<IAnimal>(`getAnimal id=${id}`)));
    }

    updateAnimal(animal: IAnimal, id: number): Observable<any> {
        const url = `${this.animalsUrl}/${id}`;
        return this.http.put(url, animal, this.httpOptions).pipe(catchError(this.handleError<any>("updateAnimal")));
    }
    addAnimal(animal: IAnimal): Observable<IAnimal> {
        return this.http.post<IAnimal>(this.animalsUrl, animal, this.httpOptions).pipe(catchError(this.handleError<IAnimal>("addAnimal")));
    }

    deleteAnimal(id: number): Observable<IAnimal> {
        const url = `${this.animalsUrl}/${id}`;
        return this.http.delete<IAnimal>(url, this.httpOptions).pipe(catchError(this.handleError<IAnimal>("deleteAnimal")));
    }
    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            return of(result as T);
        };
    }
}
