import { Component, Input, OnInit } from "@angular/core";
import { IAnimal } from "../../animal";
import { AnimalService } from "../../service/animal.service";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { selectAnimalList } from "../../store/selector/animal.selector";
import { Router } from "@angular/router";
import { DeleteAnimal } from "../../store/actions/animal.actions";
@Component({
    selector: "app-animal",
    templateUrl: "./animal.component.html",
    styleUrls: ["./animal.component.less"],
})
export class AnimalComponent {
    @Input() animals: IAnimal[] | undefined | null;
    hiddenCats: boolean = false;

    constructor(private _store: Store<IAppState>) {}

    ngOnInit(): void {}

    delete(animal: IAnimal): void {
        this._store.dispatch(new DeleteAnimal(animal.id));
    }
}
