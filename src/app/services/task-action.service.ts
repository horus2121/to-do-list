import { Injectable } from '@angular/core';
import { Task } from './task';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskActionService {

  constructor(
    public afs: AngularFirestore,
  ) { }

  CreateTask(task: Task) {
    const user = JSON.parse(localStorage.getItem('user')!)
    const taskCollection: AngularFirestoreCollection<any> = this.afs.collection(
      `users/${user.uid}/tasks`
    )
   
    const taskData: Task = {
      content: task.content,
      status: task.status
    };

    return taskCollection.add(taskData);
  }

  EditTask(task: Task) {
    const user = JSON.parse(localStorage.getItem('user')!)
    const taskRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}/tasks/${task}`
    )

    const taskData: Task = {
      content: task.content,
      status: task.status
    }

    return taskRef.set(taskData)
  }

  DeleteTask(task: Task) {
    const user = JSON.parse(localStorage.getItem('user')!)
    const taskRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}/tasks/${task}`
    )

    return taskRef.delete()
  }
}
