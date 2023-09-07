import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Aung Myin';

  data= {

    age: '19',
    address: 'Yangon'

  };

  onAgeClick() {
    alert("This is " + this.data.address);
  }

  reflectName(changeName:string) {
    this.name = changeName;
  }
}
