import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  
  contactMeForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)]),
    text: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor(){
  }

  sendEmail(): void {
    if (this.contactMeForm.valid) {
      const formData = this.contactMeForm.value;

      emailjs.send(
        'service_2swqma7',     // Replace with your EmailJS service ID
        'template_p3q74pi',    // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.text
        },
        'boa8YOvptTMBzN207'      // Replace with your EmailJS public key
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        // alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Email sending error:', error);
        // alert('Failed to send email. Please try again later.');
      });
    } else {
      // alert('Please fill out all fields correctly.');
    }
  }
}
