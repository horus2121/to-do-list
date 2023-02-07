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

  GetAllTasks() {
    const user = JSON.parse(localStorage.getItem('user')!)
    const taskCollection: AngularFirestoreCollection<any> = this.afs.collection(
      `users/${user.uid}/tasks`
    )

    return taskCollection.valueChanges()
  }

  CreateTask(task: Task) {
    const user = JSON.parse(localStorage.getItem('user')!)
    const taskCollection: AngularFirestoreCollection<any> = this.afs.collection(
      `users/${user.uid}/tasks`
    )
    const date = new Date()
   
    const taskData: Task = {
      content: task.content,
      status: task.status,
      createdAt: date
    };

    return taskCollection.add(taskData);
  }

  EditTask(task: Task) {
    const user = JSON.parse(localStorage.getItem('user')!)
    const taskRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}/tasks/${task.uid}`
    )
    const date = new Date()

    const taskData: Task = {
      uid: task.uid,
      content: task.content,
      status: task.status,
      updatedAt: date
    }

    return taskRef.update(taskData)
  }

  AddUID(taskUid: string) {
    const user = JSON.parse(localStorage.getItem('user')!)
    const taskRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}/tasks/${taskUid}`
    )

    return taskRef.update({uid: taskUid})
  }

  DeleteTask(taskUid: string) {
    const user = JSON.parse(localStorage.getItem('user')!)
    const taskRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}/tasks/${taskUid}`
    )

    return taskRef.delete()
  }
}
