import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

public nameLowerCase:string = 'dAviD'
public nameUpperCase:string = 'david'
public fullName:string = 'dAvID Mas-BAgA'

public customDate:Date = new Date()

}
