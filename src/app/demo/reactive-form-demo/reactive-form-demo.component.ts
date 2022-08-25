import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MinLengthValidator } from '../../validators/MinLengthValidator';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {
	// Simple Input
	newsletter: FormControl = new FormControl('hello@msn.com');

	// FormGroup
	subscriptionForm: FormGroup = new FormGroup({
		firstName: new FormControl('', MinLengthValidator(3, 'hello je suis  un message')),
		birthDate: new FormControl(''),
		address: new FormGroup({
			street: new FormControl(''),
			zip: new FormControl('')
		})
	});

	// FormGroup Builder
	artistProfile = this._fb.group({
		name: ['', [
			Validators.required,
			Validators.minLength(3)
		]],
		genres: this._fb.array([
			this._fb.control('', Validators.required)
		],[Validators.required])
	});

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

	get genres() {
		return this.artistProfile.get('genres') as FormArray;
	}

	hasError(myForm: FormGroup, inputName: string, validator: string) : boolean | undefined  {
		return myForm.get(inputName)?.hasError(validator)
			&& (myForm.get(inputName)?.touched || myForm.get(inputName)?.dirty);
	}

	addGenre() {
		this.genres.push(this._fb.control('', Validators.required));
	}

	removeGenre(index: number) {
		this.genres.removeAt(index);
	}

	handleSubmit() {
		console.log(this.subscriptionForm.value);
		this.subscriptionForm.reset();
	}
}
