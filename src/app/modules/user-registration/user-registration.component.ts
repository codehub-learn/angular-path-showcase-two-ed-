import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.setFormInitialValues();
  }

  private setFormInitialValues() {
    this.userRegistrationForm = this.fb.group({
      fullname: this.fb.group({
        first_name: "",
        last_name: ""
      }),
      email: "",
      avatar: "",
      region: "",
      gender: "",
      receiveEmails: false,
      telephoneNumbers: this.fb.array([this.fb.control("")])
    });
  }

  onSubmit(){
    console.log(this.userRegistrationForm);
  }

  get telephoneNumbers(): FormArray {
    return this.userRegistrationForm.get("telephoneNumbers") as FormArray;
  }

  addTelephoneNumber() {
    this.telephoneNumbers.push(this.fb.control(""));
  }

  removeTelephoneNumber(index: number) {
    this.telephoneNumbers.removeAt(index);
  }
}
