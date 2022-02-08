import { RouterReducerState } from "@ngrx/router-store";

import { AnimalState, initialAnimalState } from "./animal.state";

export interface IAppState {
    router?: RouterReducerState;
    animals: AnimalState;
}

export const initialAppState: IAppState = {
    animals: initialAnimalState,
};

export function getInitialState(): IAppState {
    return initialAppState;
}
