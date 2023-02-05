import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { TaskActionService } from 'src/app/services/task-action.service';
import { Task } from 'src/app/services/task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  task: string = '';
  taskList: string[] = [];
  translatedText: string = '';

  constructor(
    private translateService: TranslateService,
    public taskAction: TaskActionService) { }

  ngOnInit(): void { }

  onTest(content: string) {
    const task = {
      content: content,
      status: "UNDONE"
    }

    this.taskAction
    .CreateTask(task)
    .then(() => {
      window.alert('Task added successfully.')
    })
    .catch((error) => {
      window.alert(error)
    })
  }

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
