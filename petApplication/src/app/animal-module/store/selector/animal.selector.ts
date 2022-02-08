import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { AnimalState } from "../state/animal.state";

const selectAnimals = (state: IAppState) => state.animals;

export const selectAnimalList = createSelector(
    selectAnimals,
    (state: AnimalState) => state.animals
);

export const selectSelectedAnimal = createSelector(
    selectAnimals,
    (state: AnimalState) => state.selectedAnimal
);
