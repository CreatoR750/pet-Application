import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of, tap } from "rxjs";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { IAppState } from "../state/app.state";
import {
    GetAnimalsSuccess,
    EAnimalActions,
    GetAnimalSuccess,
    GetAnimal,
    GetAnimals,
    DeleteAnimal,
    UpdateAnimal,
    AddAnimal,
} from "../actions/animal.actions";
import { IAnimal } from "../../animal";
import { AnimalService } from "../../service/animal.service";
import { selectAnimalList } from "../selector/animal.selector";

@Injectable()
export class AnimalEffects {
    @Effect()
    getAnimal$ = this._actions$.pipe(
        ofType<GetAnimal>(EAnimalActions.GetAnimal),
        map((action) => action.payload),
        withLatestFrom(this._store.pipe(select(selectAnimalList))),
        switchMap(([id, animals]) => {
            const selectedAnimal = animals!.filter(
                (animal: IAnimal) => animal.id === +id
            )[0];
            return of(new GetAnimalSuccess(selectedAnimal));
        })
    );

    @Effect()
    getAnimals$ = this._actions$.pipe(
        ofType<GetAnimals>(EAnimalActions.GetAnimals),
        switchMap(() => this._animalService.getAnimals()),
        switchMap((animalHttp: IAnimal[]) =>
            of(new GetAnimalsSuccess(animalHttp))
        )
    );

    @Effect()
    deleteAnimal$ = this._actions$.pipe(
        ofType<DeleteAnimal>(EAnimalActions.DeleteAnimal),
        map((action) => action.payload),
        switchMap((id) => this._animalService.deleteAnimal(id)),
        switchMap(() => this._animalService.getAnimals()),
        switchMap((animalHttp: IAnimal[]) =>
            of(new GetAnimalsSuccess(animalHttp))
        )
    );

    @Effect()
    updateAnimal$ = this._actions$.pipe(
        ofType<UpdateAnimal>(EAnimalActions.UpdateAnimal),
        map((action) => action.payload),
        switchMap((animal) =>
            this._animalService.updateAnimal(animal.animal, animal.id)
        ),
        switchMap(() => this._animalService.getAnimals()),
        switchMap((animalHttp: IAnimal[]) =>
            of(new GetAnimalsSuccess(animalHttp))
        )
    );

    @Effect()
    addAnimal$ = this._actions$.pipe(
        ofType<AddAnimal>(EAnimalActions.AddAnimal),
        map((action) => action.payload),
        switchMap((animal) => this._animalService.addAnimal(animal)),
        switchMap(() => this._animalService.getAnimals()),
        switchMap((animalHttp: IAnimal[]) =>
            of(new GetAnimalsSuccess(animalHttp))
        )
    );

    constructor(
        private _animalService: AnimalService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) {}
}
