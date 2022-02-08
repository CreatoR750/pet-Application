import { Component, OnInit } from "@angular/core";
import { GetAnimals } from "../../store/actions/animal.actions";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { selectAnimalList } from "../../store/selector/animal.selector";
import { Router } from "@angular/router";
import { AnimalService } from "../../service/animal.service";
import { MatDialog } from "@angular/material/dialog";
import { AddAnimalComponent } from "../add-animal/add-animal.component";
import { ViewEncapsulation } from "@angular/core";

@Component({
    selector: "app-animals-list",
    templateUrl: "./animals-list.component.html",
    styleUrls: ["./animals-list.component.less"],
    encapsulation: ViewEncapsulation.None,
})
export class AnimalsListComponent implements OnInit {
    animals$ = this._store.pipe(select(selectAnimalList));
    constructor(public dialog: MatDialog, private _store: Store<IAppState>, private _router: Router) {}

    ngOnInit(): void {
        this._store.dispatch(new GetAnimals());
    }
    openDialog() {
        let dialog = this.dialog.open(AddAnimalComponent);
    }
}
