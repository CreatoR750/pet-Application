import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimalsListComponent } from "./animal-module/components/animals-list/animals-list.component";
import { AnimalDetailsComponent } from "./animal-module/components/animal-details/animal-details.component";
import { AddAnimalComponent } from "./animal-module/components/add-animal/add-animal.component";

const routes: Routes = [
    { path: "pets", component: AnimalsListComponent },
    { path: "", redirectTo: "/pets", pathMatch: "full" },
    { path: "pet/:id", component: AnimalDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
