import { NgModel } from "@angular/forms";
import { AppComponent } from "../app.component";
import { AccountListComponent } from "../account-list/account-list.component";
import { AccountFormComponent } from "../account-form/account-form.component";

@NgModel({

  declaration: [AppComponent,AccountListComponent,AccountFormComponent]
})

export class AppModule() {
  constructor(private http:HttpClient);
}
