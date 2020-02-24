import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { BrowserAnimationsModule, NoopAnimationsModule  } from '@angular/platform-browser/animations';

@NgModule({
    imports:[CommonModule, BrowserAnimationsModule,NoopAnimationsModule],
    declarations:[HomeComponent],
    exports:[]
})
export class HomeModule{}
