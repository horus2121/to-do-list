import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task: string = '';
  taskList: string[] = [];
  translatedText: string = '';

  constructor(private translateService: TranslateService) { }

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
}
