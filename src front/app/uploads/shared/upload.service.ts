/*import { Injectable } from '@angular/core';
import { AngularFire, AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Upload } from './upload';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {

  constructor(private af: AngularFire, private db: AngularFireDatabase) { }
  private basePath: string = '/uploads';
  private uploadTask: firebase.storage.uploadTask;

  pushUpload(upload: Upload){
    let storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child('${this.basePath}/${upload.file.name}').put(upload.file);
    
    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
      upload.progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
    },
    (error) => {
      console.log(error)
    },
    () => {
      upload.url = this.uploadTask.snapshot.downloadURL
      upload.name = upload.file.name
      this.saveFileData(upload)
    }
  )
  }
}*/
