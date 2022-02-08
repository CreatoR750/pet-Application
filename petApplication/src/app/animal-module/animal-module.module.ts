import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimalComponent } from "./components/animal/animal.component";
import { AnimalDetailsComponent } from "./components/animal-details/animal-details.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AddAnimalComponent } from "./components/add-animal/add-animal.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { AnimalsListComponent } from "./components/animals-list/animals-list.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducers } from "./store/reducers/app.reducers";
import { AnimalEffects } from "./store/effects/animal.effects";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [AnimalComponent, AnimalDetailsComponent, AddAnimalComponent, AnimalsListComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        MatDialogModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([AnimalEffects]),
        StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    exports: [AnimalComponent, AnimalDetailsComponent, AddAnimalComponent, AnimalsListComponent],
    providers: [HttpClientModule],
})
export class AnimalModuleModule {}
