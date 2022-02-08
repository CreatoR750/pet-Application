import { Action } from "@ngrx/store";
import { IAnimal } from "../../animal";

export enum EAnimalActions {
    GetAnimals = "[Animal] Get Animals",
    GetAnimalsSuccess = "[Animal] Get Animals Success",
    GetAnimal = "[Animal] Get Animal",
    GetAnimalSuccess = "[Animal] Get Animal Success",
    DeleteAnimal = "[Animal] Delete Animal",
    UpdateAnimal = "[Animal] Update Animal",
    AddAnimal = "[Animal] Add Animal",
}

export class GetAnimals implements Action {
    public readonly type = EAnimalActions.GetAnimals;
}

export class GetAnimalsSuccess implements Action {
    public readonly type = EAnimalActions.GetAnimalsSuccess;
    constructor(public payload: IAnimal[]) {}
}

export class GetAnimal implements Action {
    public readonly type = EAnimalActions.GetAnimal;
    constructor(public payload: number) {}
}

export class GetAnimalSuccess implements Action {
    public readonly type = EAnimalActions.GetAnimalSuccess;
    constructor(public payload: IAnimal) {}
}

export class DeleteAnimal implements Action {
    public readonly type = EAnimalActions.DeleteAnimal;
    constructor(public payload: number) {}
}

export class UpdateAnimal implements Action {
    public readonly type = EAnimalActions.UpdateAnimal;
    constructor(public payload: { animal: IAnimal; id: number }) {}
}

export class AddAnimal implements Action {
    public readonly type = EAnimalActions.AddAnimal;
    constructor(public payload: IAnimal) {}
}

export type AnimalActions =
    | GetAnimals
    | GetAnimalsSuccess
    | GetAnimal
    | GetAnimalSuccess
    | DeleteAnimal
    | UpdateAnimal
    | AddAnimal;
