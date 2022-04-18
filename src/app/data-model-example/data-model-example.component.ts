import { Component, OnInit } from '@angular/core';
import { UsersDataService } from './../users-data.service';
import { UserModel } from './UserModel';

@Component({
  selector: 'app-data-model-example',
  templateUrl: './data-model-example.component.html',
  styleUrls: ['./data-model-example.component.css'],
})
export class DataModelExampleComponent implements OnInit {
  usersList: UserModel[] = [];
  constructor(private usersFromService: UsersDataService) {
    usersFromService.getData().subscribe((data: any) => {
      console.log(data);
      this.usersList = data;
    });
  }
  ngOnInit(): void {}
}
