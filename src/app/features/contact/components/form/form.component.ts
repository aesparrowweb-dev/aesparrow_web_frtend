import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

interface Country {
  code: string;
  name: string;
  digits: number;
  pattern: string;
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  contactForm!: FormGroup;
  contactFormUrl = 'https://aesparrow-nodess.vercel.app/contactForm'
  contacatData: any;
  spinner = false; groupedContacts: { type: string; values: string[] }[] = [];
  selectedCountry: Country | null = null;

  countries: Country[] = [
    { code: '+1', name: 'United States', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+44', name: 'United Kingdom', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+91', name: 'India', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+971', name: 'UAE', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+61', name: 'Australia', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+86', name: 'China', digits: 11, pattern: '^[0-9]{11}$' },
    { code: '+33', name: 'France', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+49', name: 'Germany', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+81', name: 'Japan', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+82', name: 'South Korea', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+55', name: 'Brazil', digits: 11, pattern: '^[0-9]{11}$' },
    { code: '+52', name: 'Mexico', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+34', name: 'Spain', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+39', name: 'Italy', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+31', name: 'Netherlands', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+41', name: 'Switzerland', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+46', name: 'Sweden', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+47', name: 'Norway', digits: 8, pattern: '^[0-9]{8}$' },
    { code: '+45', name: 'Denmark', digits: 8, pattern: '^[0-9]{8}$' },
    { code: '+358', name: 'Finland', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+32', name: 'Belgium', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+43', name: 'Austria', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+353', name: 'Ireland', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+351', name: 'Portugal', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+420', name: 'Czech Republic', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+48', name: 'Poland', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+36', name: 'Hungary', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+380', name: 'Ukraine', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+7', name: 'Russia', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+966', name: 'Saudi Arabia', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+20', name: 'Egypt', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+27', name: 'South Africa', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+234', name: 'Nigeria', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+254', name: 'Kenya', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+60', name: 'Malaysia', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+65', name: 'Singapore', digits: 8, pattern: '^[0-9]{8}$' },
    { code: '+66', name: 'Thailand', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+84', name: 'Vietnam', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+62', name: 'Indonesia', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+63', name: 'Philippines', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+64', name: 'New Zealand', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+90', name: 'Turkey', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+98', name: 'Iran', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+92', name: 'Pakistan', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+880', name: 'Bangladesh', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+94', name: 'Sri Lanka', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+95', name: 'Myanmar', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+855', name: 'Cambodia', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+856', name: 'Laos', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+977', name: 'Nepal', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+93', name: 'Afghanistan', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+964', name: 'Iraq', digits: 10, pattern: '^[0-9]{10}$' },
    { code: '+962', name: 'Jordan', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+961', name: 'Lebanon', digits: 8, pattern: '^[0-9]{8}$' },
    { code: '+972', name: 'Israel', digits: 9, pattern: '^[0-9]{9}$' },
    { code: '+974', name: 'Qatar', digits: 8, pattern: '^[0-9]{8}$' },
    { code: '+968', name: 'Oman', digits: 8, pattern: '^[0-9]{8}$' },
    { code: '+965', name: 'Kuwait', digits: 8, pattern: '^[0-9]{8}$' },
    { code: '+973', name: 'Bahrain', digits: 8, pattern: '^[0-9]{8}$' }
  ];



  services = [
    'Cybersecurity Consulting',
    'VAPT Services',
    'GRC Services',
    'Compliance Consulting',
    'Other Services'
  ];


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.buildForm();
    this.updatePhoneValidation();
  }

  buildForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      service: ['', Validators.required],
      message: ['', Validators.required]
    });
  }


  updatePhoneValidation(): void {
    const country = this.countries.find(c => c.code === this.contactForm.get('countryCode')?.value);
    if (country) {
      this.selectedCountry = country;
      const phoneControl = this.contactForm.get('phone');
      if (phoneControl) {
        phoneControl.setValidators([
          Validators.required,
          Validators.pattern(country.pattern)
        ]);
        phoneControl.updateValueAndValidity();
      }
    }
  }

  onPhoneInput(event: any): void {
    const input = event.target.value;
    const numericValue = input.replace(/[^0-9]/g, '');
    this.contactForm.get('phone')?.setValue(numericValue, { emitEvent: false });
  }


  onSubmit() {
    this.contactForm.markAllAsTouched()
    this.spinner = true;
    if (this.contactForm.valid) {

      this.http.post(this.contactFormUrl, this.contactForm.getRawValue()).subscribe(
        response => {
          this.contacatData = response;
          this.spinner = false;
          this.contactForm.reset();
          this.snackbar.open('Thank you for reaching out, we will get back to you soon', 'Okay', { duration: 5000 });

        },
        error => {
          console.error('Error submitting form:', error);
          this.snackbar.open('Something went wrong. Please try again later.', 'Okay', { duration: 5000 });
        }
      );
    } else {
      this.spinner = false;
      this.snackbar.open('Please check all the details in the form', 'Okay', { duration: 5000 });
    }
  }
}
