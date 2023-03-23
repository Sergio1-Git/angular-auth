import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BoardsService } from '../../../../services/boards.service';
import { Colors } from '../../../../models/colors.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.scss']
})
export class BoardFormComponent {

  form = this.fb.nonNullable.group({
    title: ['', [Validators.required]],
    backgroundColor: new FormControl<Colors>('sky', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  constructor(
    private fb: FormBuilder,
    private boardsService: BoardsService,
    private router: Router,
  ) {

  }

  doSave() {
    if (this.form.valid) {
      const { title, backgroundColor } = this.form.getRawValue();
      this.boardsService.createBoard(title, backgroundColor)
        .subscribe((board) => {
          console.log(board);
          this.router.navigate(['/app/boards', board.id])
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
