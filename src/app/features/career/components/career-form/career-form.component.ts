import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';


interface Country {
  code: string;
  name: string;
  digits: number;
  pattern: string;
}

@Component({
  selector: 'app-career-form',
  templateUrl: './career-form.component.html',
  styleUrls: ['./career-form.component.scss']
})
export class CareerFormComponent {
  careerForm!: FormGroup;
  selectedFile: any;
  careerUrl = 'https://aesparrow-nodess.vercel.app/careerForm'
  spinner = false;
  contacatData: any;
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

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.careerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      countryCode: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      course_value: ['', Validators.required],
      experience: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required],
      file: ['', Validators.required]
    })
  }


  updatePhoneValidation(): void {
    const country = this.countries.find(c => c.code === this.careerForm.get('countryCode')?.value);
    if (country) {
      this.selectedCountry = country;
      const phoneControl = this.careerForm.get('phone');
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
    this.careerForm.get('phone')?.setValue(numericValue, { emitEvent: false });
  }


  onFileChange(event: any): void {
    const input = event.target as HTMLInputElement;

    if (input && input.files && input.files[0]) {
      const file = input.files[0];
      const fileType = file.type;

      const imageTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];

      if (imageTypes.includes(fileType)) {
        this.snackbar.open('Image files are not allowed. Please upload a document (PDF, DOC, DOCX).', 'Close', { duration: 5000 });
        this.careerForm.patchValue({ file: null });
        input.value = '';
        return;
      }

      this.careerForm.patchValue({ file: file });
    }
  }

  onSubmit() {
    this.careerForm.markAllAsTouched();
    this.spinner = true;
    const formData = new FormData();

    formData.append('first_name', this.careerForm.value.first_name);
    formData.append('last_name', this.careerForm.value.last_name);
    formData.append('countryCode', this.careerForm.value.countryCode);
    formData.append('phone', this.careerForm.value.phone);
    formData.append('email', this.careerForm.value.email);
    formData.append('country', this.careerForm.value.country);
    formData.append('address', this.careerForm.value.address);
    formData.append('pincode', this.careerForm.value.pincode);
    formData.append('course_value', this.careerForm.value.course_value);
    formData.append('experience', this.careerForm.value.experience);

    if (this.careerForm.value.file) {
      formData.append('file', this.careerForm.value.file);
    }

    this.http.post(this.careerUrl, formData).subscribe(
      response => {
        this.spinner = false;
        this.snackbar.open('Thank you for reaching out, we will get back to you soon', 'Okay', { duration: 5000 });
        this.careerForm.reset();

      },
      error => {
        console.error(error);
        this.spinner = false;
        this.snackbar.open('Something went wrong. Please try again later.', 'Okay', { duration: 5000 });
      }
    );
  }

}
