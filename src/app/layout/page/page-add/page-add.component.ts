import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page-add',
  templateUrl: './page-add.component.html',
  styleUrls: ['./page-add.component.css']
})
export class PageAddComponent implements OnInit {
  constructor(private PageService: PageService) { }
  ngOnInit() { }


  @ViewChild('f', { static: true }) signupForm: NgForm; //Second way to use ngForm with the help of @ViewChild

  weight: number = 100;
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
    { code: '101', name: 'PHP', checked: false },
    { code: '102', name: 'JavaScript', checked: false },
    { code: '103', name: 'Angular', checked: false },
    { code: '104', name: 'NodeJs', checked: false }
  ];

  submitted: boolean = false;

  generateSlug() {
    let slug = this.signupForm.value.title;
    slug = slug.toLowerCase();
    slug = slug.replace(/[^a-z0-9]+/ig, "-");
    this.signupForm.form.patchValue({ //To set value for specific field
      slug: slug
    });
  }

  onSubmit() {
    const checkedLangs = this.checkLang.filter(f => f.checked === true);
    console.log(checkedLangs);
    console.log(this.signupForm.value);
    this.submitted = true;

    console.log(this.signupForm.value.terms);
    // console.log(this.signupForm.value.lang);

    // let objForm = {
    // 	title: this.signupForm.value.title,
    // 	slug: this.signupForm.value.slug,
    // 	body: this.signupForm.value.body,
    // 	weight: this.signupForm.value.weight,
    // 	status: this.signupForm.value.status
    // };

    // this.PageService.pageAdd(objForm);
    //this.signupForm.reset(); //form fields ho empty kar dega
  }

}
