import { Component, ViewContainerRef } from '@angular/core';
import { UsersDataService } from './users-data.service';
import { UserModel } from './UserModel';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  usersList: UserModel[] = [];
  constructor(
    private usersFromService: UsersDataService,
    private viewConRef: ViewContainerRef
  ) {
    usersFromService.getData().subscribe((data: any) => {
      console.log(data);
      this.usersList = data;
    });
  }
  appName = 'tuturial';
  getName = () => {
    return 'Vikas';
  };

  obj = {
    name: 'Marco Jansen',
    age: 20,
  };

  arr = ['Ram', 'Shyam'];

  a = 100;
  b = 200;
  siteUrl = window.location.href;

  buttonClicked = (clickedBy: any) => {
    console.log('Button clicked');
    alert('Method called by:' + clickedBy);
  };

  myEvent(evt: any) {
    console.log(evt);
  }

  enteredValue = '';

  textInputVal(event: any) {
    this.enteredValue = event.target.value;
  }

  textInputValButton(value: any) {
    console.log(value);
    this.enteredValue = value;
  }

  oneWayPropertyBindingValue = 'Test Value';

  data = 'Two Way data binding';

  disabled = false;

  color = 'green';

  dataForLoop = ['Jaya', 'Srivelli', 'Allu'];
  objectArrForLoop = [
    {
      name: 'Jaya',
      age: 20,
    },
    {
      name: 'Srivelli',
      age: 21,
    },
    {
      name: 'Allu',
      age: 22,
    },
  ];

  getUserValues(formValues: any) {
    console.log(formValues);
    this.usersFromService.postData(formValues).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('Completed'),
    });
  }

  colorRed = false;

  headerText = 'My Website';
  users = [
    {
      name: 'vikas',
    },
    {
      name: 'Avi',
    },
  ];

  parentComponent(dataFromChild: any) {
    console.log(dataFromChild);
  }

  size = 10203028;
  //Lazy loading of components
  async lazyLoadComponent(componentName: string): Promise<void> {
    this.viewConRef.clear();
    if (componentName === 'one') {
      const { LazyComponentOneComponent } = await import(
        './lazy-component-one/lazy-component-one.component'
      );
      this.viewConRef.createComponent(LazyComponentOneComponent);
    } else if (componentName === 'two') {
      const { LazyComponentTwoComponent } = await import(
        './lazy-component-two/lazy-component-two.component'
      );
      this.viewConRef.createComponent(LazyComponentTwoComponent);
    }
  }

  reactiveForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    age: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  get username() {
    return this.reactiveForm.get('username');
  }

  onSubmitReactiveForm() {
    console.log(this.reactiveForm.value);
  }
}
