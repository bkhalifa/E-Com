import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HostListenerComponent } from "./host-listener.component";


@NgModule({
imports:[CommonModule],
declarations:[HostListenerComponent],
exports:[HostListenerComponent],
providers:[]
})
export class HostModule{}
