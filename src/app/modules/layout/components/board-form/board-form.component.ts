import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.scss']
})
export class BoardFormComponent {

  form = this.fb.group({
    title: [''],
    backgroundColor: ['']
  });

  constructor(
    private fb: FormBuilder
  ) {

  }

  doSave() {
    if (this.form.valid) {
      const { title, backgroundColor } = this.form.getRawValue();
      console.log(title, backgroundColor);

    } else {
      this.form.markAllAsTouched
    }
  }
}
