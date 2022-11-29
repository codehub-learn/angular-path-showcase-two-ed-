import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userForm!: FormGroup;

  regions = ["Choose a region...*", "Attica", "Central Greece", "Central Macedonia", "Crete",
    "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean",
    "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia", "Mount Athos"];


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setFormInitialValues();
  }

  onSubmit(){
    if (this.userForm.valid){
      console.log(this.userForm);
    } else {
      console.log("form has errors");
    }
  }

  setFormInitialValues(){
    this.userForm = this.fb.group({
      full_name: this.fb.group({
        first_name: this.fb.control("", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
        last_name: this.fb.control("")
      }),
      gender: this.fb.control(""),
      region: this.fb.control(""),
      receiveEmail: this.fb.control(""),
      telephoneNumbers: this.fb.array([
        this.fb.control("")
      ])
    });
  }

  setExampleValues(){

    /* In case you want to set values for a certain control
    */

    this.userForm.get("gender")?.setValue("female");

    //this.userForm.get("full_name")?.setValue({first_name: "Tester", last_name: "Test"});
    this.userForm.get("full_name")?.patchValue({first_name: "Tester 2"});

    /* In case you need to set example values for whole form
    this.userForm = this.fb.group({
      first_name: this.fb.control("Ioannis"),
      last_name: this.fb.control("Ioannou"),
      gender: this.fb.control("male"),
      region: this.fb.control("Crete"),
      receiveEmail: this.fb.control(true)
    });
    */
  }

  get telephoneNumbers(): FormArray {
    return this.userForm.get("telephoneNumbers") as FormArray;
  }

  addTelephoneNumber() {
    this.telephoneNumbers.push(this.fb.control(""));
  }

  removeTelephoneNumber(i: number) {
    this.telephoneNumbers.removeAt(i);
  }
}
