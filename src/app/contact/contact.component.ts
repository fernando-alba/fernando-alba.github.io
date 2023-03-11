import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  name: string | undefined;
  subject: string | undefined;
  email: string | undefined;
  message: string | undefined;

  showMsg: boolean | false | undefined;

  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
    console.log(contactForm.valid);

    /* const formUrl = 'https://ncp-api.herokuapp.com/api/mail'; */
    const formUrl = 'https://api.simplicitystudio.it/api/falba/mail';
    const data = contactForm.value;

    this.http.post(formUrl, data).subscribe((response) => {
      if (contactForm.valid) {
        this.showMsg = true;
        contactForm.reset();
      }
    });
  }
}
