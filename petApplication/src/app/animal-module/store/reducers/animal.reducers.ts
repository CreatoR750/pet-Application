import { EAnimalActions } from "../actions/animal.actions";
import { AnimalActions } from "../actions/animal.actions";
import { initialAnimalState, AnimalState } from "../state/animal.state";

export const animalReducers = (
    state = initialAnimalState,
    action: AnimalActions
): AnimalState => {
    switch (action.type) {
        case EAnimalActions.GetAnimalsSuccess: {
            return {
                ...state,
                animals: action.payload,
            };
        }
        case EAnimalActions.GetAnimalSuccess: {
            return {
                ...state,
                selectedAnimal: action.payload,
            };
        }

        default:
            return state;
    }
};
