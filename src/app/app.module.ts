import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, RegistrationComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
