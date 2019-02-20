import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-bpt',
  templateUrl: './bpt.component.html',
  styleUrls: ['./bpt.component.css']
})
export class BptComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  public show:boolean = false;
  profileForm = new FormGroup({
  	name: new FormControl('', Validators.required),
  	email: new FormControl('', Validators.required),
  	phone: new FormControl('', [
  		Validators.required,
  		Validators.minLength(10),
  		Validators.maxLength(10),
  		Validators.pattern("^[0-9]*$"),
  		]),
  });
onSubmit(){
 	console.warn(this.profileForm.value);
   this.show = true;
	}
}
