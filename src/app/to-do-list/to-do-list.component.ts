import { Component } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { ContentFilterService } from '../services/content-filter.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  task: string = '';
  taskList: string[] = [];
  translatedText: string = '';

  constructor(private translateService: TranslateService, private contentFilterService: ContentFilterService) { }

  onChangeTask(event: Event) {
    const target = event.target as HTMLInputElement;
    const value: string = target.value;

    this.task = value;
  }

  onAddTask() {
    this.taskList.push(this.task);
  }

  onDeleteTask(event: Event) {
    const target = event.target as HTMLButtonElement;
    const li = target.parentElement as HTMLLIElement;

    li.parentNode?.removeChild(li);
  }

  onTranslateText() {
    this.translateService.translate(this.task).subscribe((result) => {
      this.translatedText = result;
    })
  }

  content?: string;

  ngOnInit(): void {
    this.contentFilterService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }
}
