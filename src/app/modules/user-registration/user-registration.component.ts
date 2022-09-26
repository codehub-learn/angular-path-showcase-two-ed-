import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {regionProperValueValidator} from "./region-proper-value-validator";
import {RxwebValidators} from "@rxweb/reactive-form-validators";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistrationForm!: FormGroup;

  regions = ["Choose a region...*", "Attica", "Central Greece", "Central Macedonia", "Crete",
    "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean",
    "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia", "Mount Athos"];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.setFormInitialValues();
  }

  private setFormInitialValues() {
    this.userRegistrationForm = this.fb.group({
      fullname: this.fb.group({
        first_name: this.fb.control("", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
        last_name: this.fb.control("", [Validators.required])
      }),
      email: this.fb.control("", [Validators.required, Validators.email]),
      avatar: this.fb.control("", [Validators.required, RxwebValidators.extension({extensions: ["png", "jpg"]})]),
      region: this.fb.control("Choose a region...*", [Validators.required, regionProperValueValidator(this.regions)]),
      gender: this.fb.control("", [Validators.required]),
      receiveEmails: this.fb.control(false),
      telephoneNumbers: this.fb.array([this.fb.control("",
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(7),
          Validators.pattern("^[1-9]+$")
        ])])
    });
  }

  onSubmit() {
    console.log(this.userRegistrationForm);
    if(this.userRegistrationForm.valid){
      console.log("success!");
      this.setFormInitialValues();
    } else {
      console.log("failure!")
      this.userRegistrationForm.markAllAsTouched();
    }
  }

  addTelephoneNumber() {
    this.telephoneNumbers.push(this.fb.control("", [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(7),
      Validators.pattern("^[1-9]+$")
    ]));
  }

  removeTelephoneNumber(index: number) {
    this.telephoneNumbers.removeAt(index);
  }

  setExampleValues() {
    // set value requires full object, patch value can "patch" only certain fields of group
    //this.userRegistrationForm.get("fullname")?.setValue({first_name: "Ioannis", last_name: "Ioannidis"});
    this.userRegistrationForm.get("fullname")?.patchValue({first_name: "Ioannis", last_name: "Ioannidis"});
    this.userRegistrationForm.get("email")?.setValue("ioannis@gmail.com");
    // the following does not work, cannot set path:
    //this.userRegistrationForm.get("avatar")?.setValue("test");
    this.userRegistrationForm.get("region")?.setValue("Attica");
    this.userRegistrationForm.get("gender")?.setValue("female");
    this.userRegistrationForm.get("receiveEmails")?.setValue(true);
    // way to update form array, perhaps there is a better way?
    this.telephoneNumbers.at(0).patchValue("1234567");
    this.telephoneNumbers.push(this.fb.control("7654321"));
  }

  get first_name(): FormControl {
    return this.userRegistrationForm.get("fullname")?.get("first_name") as FormControl;
  }

  get last_name(): FormControl {
    return this.userRegistrationForm.get("fullname")?.get("last_name") as FormControl;
  }

  get email(): FormControl {
    return this.userRegistrationForm.get("email") as FormControl;
  }

  get avatar(): FormControl {
    return this.userRegistrationForm.get("avatar") as FormControl;
  }

  get region(): FormControl {
    return this.userRegistrationForm.get("region") as FormControl;
  }

  get gender(): FormControl {
    return this.userRegistrationForm.get("gender") as FormControl;
  }

  get receiveEmails(): FormControl {
    return this.userRegistrationForm.get("receiveEmails") as FormControl;
  }

  get telephoneNumbers(): FormArray {
    return this.userRegistrationForm.get("telephoneNumbers") as FormArray;
  }

  telephoneNumberAt(index: number): FormControl {
    return this.telephoneNumbers.at(index) as FormControl;
  }
}
