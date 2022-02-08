import { Component, OnInit, Input } from "@angular/core";
import { IAnimal } from "../../animal";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AnimalService } from "../../service/animal.service";
import { FormGroup, FormControl, FormsModule } from "@angular/forms";
import { Validators } from "@angular/forms";
import { AnimalModuleModule } from "../../animal-module.module";
import { IAppState } from "../../store/state/app.state";
import { selectSelectedAnimal } from "../../store/selector/animal.selector";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { GetAnimal, UpdateAnimal } from "../../store/actions/animal.actions";
import { Subscription } from "rxjs";

@Component({
    selector: "app-animal-details",
    templateUrl: "./animal-details.component.html",
    styleUrls: ["./animal-details.component.less"],
})
export class AnimalDetailsComponent implements OnInit {
    animal$ = this._store.pipe(select(selectSelectedAnimal));
    animalForm: FormGroup | undefined;
    subscription: Subscription[] = [];
    currentAnimal: IAnimal;

    constructor(
        private _store: Store<IAppState>,
        private _router: Router,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getAnimal();
        this.setValues();
    }

    getAnimal(): void {
        const id = parseInt(this.route.snapshot.paramMap.get("id")!, 10);
        this._store.dispatch(new GetAnimal(id));
    }

    setValues() {
        this.subscription.push(
            this.animal$.subscribe((animal: IAnimal | null) => {
                if (animal) {
                    this.animalForm = new FormGroup({
                        name: new FormControl(animal.name, [
                            Validators.required,
                            Validators.minLength(3),
                            Validators.maxLength(10),
                        ]),
                        id: new FormControl(animal?.id),
                        type: new FormControl(animal?.type, [
                            Validators.required,
                        ]),
                        color: new FormControl(animal?.color),
                        age: new FormControl(animal?.age, [
                            Validators.required,
                            Validators.minLength(1),
                            Validators.maxLength(2),
                        ]),
                        gender: new FormControl(animal?.gender),
                    });
                }
            })
        );
        this.currentAnimal = this.animalForm!.value;
    }

    save(): void {
        const animal = this.animalForm!.value;
        if (animal) {
            this._store.dispatch(new UpdateAnimal({ animal, id: animal.id }));
        }
    }

    goBack(): void {
        this.location.back();
    }

    ngOnDestroy(): void {
        this.subscription.forEach((subscription) => subscription.unsubscribe());
    }

    onSubmit(): void {
        this.save();
        this.goBack();
    }
    /*this.animal! = this.animalForm!.value;
    }
    save(): void {
        if (this.animal) {
            this.animalService.updateAnimal(this.animal, this.animal.id);
        }
    }
    */
    /*
    setValues() {
        this.subscription.push(
            this.animal$.subscribe((animal: IAnimal | null) => {
                if (animal) {
                    this.animalForm = new FormGroup({
                        name: new FormControl(animal.name, [
                            Validators.required,
                            Validators.minLength(3),
                            Validators.maxLength(10),
                        ]),
                        id: new FormControl(animal?.id),
                        type: new FormControl(animal?.type, [
                            Validators.required,
                        ]),
                        color: new FormControl(animal?.color),
                        age: new FormControl(animal?.age, [
                            Validators.required,
                            Validators.minLength(1),
                            Validators.maxLength(2),
                        ]),
                        gender: new FormControl(animal?.gender),
                    });
                }
            })
        );
    }

    get name() {
        return this.animalForm!.get("name")!;
    }

    get color() {
        return this.animalForm!.get("color")!;
    }
    get age() {
        return this.animalForm!.get("age")!;
    }*/
}
