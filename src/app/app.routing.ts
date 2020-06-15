import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AppComponent} from "./app.component";

const APP_ROUTES: Routes = [
    { path: '', component: AppComponent },
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true });
