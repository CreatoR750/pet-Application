import { IAnimal } from "../../animal";

export interface AnimalState {
    animals: IAnimal[];
    selectedAnimal: IAnimal | null;
}

export const initialAnimalState: AnimalState = {
    animals: [],
    selectedAnimal: null,
};
