import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AnimalModuleModule } from "./animal-module/animal-module.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { appReducers } from "./animal-module/store/reducers/app.reducers";
import { EffectsModule } from "@ngrx/effects";
import { AnimalEffects } from "./animal-module/store/effects/animal.effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AnimalModuleModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([AnimalEffects]),
        StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        BrowserAnimationsModule,
    ],
    providers: [
        // no need to place any providers due to the `providedIn` flag...
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
