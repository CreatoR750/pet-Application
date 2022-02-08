import { Component, Input } from "@angular/core";
import { Animal } from "../../animal";
import { Location } from "@angular/common";
import { AnimalService } from "../../service/animal.service";
import { ViewChild } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { AddAnimal } from "../../store/actions/animal.actions";
import { MatDialogRef } from "@angular/material/dialog";
@Component({
    selector: "app-add-animal",
    templateUrl: "./add-animal.component.html",
    styleUrls: ["./add-animal.component.less"],
})
export class AddAnimalComponent {
    @ViewChild("animalForm") form: any;
    animals: Animal[] = [];
    genders = ["Мальчик", "Девочка"];
    animal = {
        id: "",
        name: "",
        type: "",
        color: "",
        age: "",
        gender: this.genders[0],
    };

    constructor(
        public dialogRef: MatDialogRef<AddAnimalComponent>,
        private animalService: AnimalService,
        private location: Location,
        private _store: Store<IAppState>
    ) {}

    ngOnInit(): void {}

    onSubmit(): void {
        const animal = this.form!.value;
        if (animal) {
            this._store.dispatch(new AddAnimal(animal));
        }
        this.goBack();
    }

    goBack(): void {
        this.dialogRef.close();
    }
}
