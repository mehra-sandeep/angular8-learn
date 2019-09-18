import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
	selector: 'app-product-add',
	templateUrl: './product-add.component.html',
	styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
	nggForm: FormGroup;

	constructor() { }
	ngOnInit() {
		this.nggForm = new FormGroup({
			'title': new FormControl(null, Validators.required),
			'slug': new FormControl(null, Validators.required),
			'body': new FormControl(null),
			'status': new FormControl(null),
			'color': new FormControl(null),
			'gender': new FormControl(null),
			'terms': new FormControl(true),
			'lang': new FormControl(null)
		});
	}

	selStatus: Array<string> = ['Deactive', 'Active'];
	selColor: { code: string, name: string }[] = [
		{ code: '#123', name: 'Red' },
		{ code: '#456', name: 'Blue' },
		{ code: '#789', name: 'Green' },
		{ code: '#001', name: 'Yellow' }
	];

	gender: Array<string> = ['Female', 'Male'];
	terms: boolean = true;

	checkLang = [
		{ code: '101', name: 'PHP' },
		{ code: '102', name: 'JavaScript' },
		{ code: '103', name: 'Angular' },
		{ code: '104', name: 'NodeJs' }
	];

	submitted: boolean = false;

	generateSlug() {
		let slug = this.nggForm.value.title;
		slug = slug.toLowerCase();
		slug = slug.replace(/[^a-z0-9]+/ig, "-");

		this.nggForm.patchValue({ //To set value for specific field
			slug: slug
		});
	}

	onSubmit() {
		console.log(this.nggForm);
		console.log(this.nggForm.value);

		// which is best?
		// console.log(this.nggForm.value.title);
		// console.log(this.nggForm.controls.title.value);

		//this.nggForm.reset();
	}

}

