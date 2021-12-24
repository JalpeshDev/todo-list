import { v4 as uuidv4 } from "uuid";

export default class Task {
  public id: string;
  public title: string;
  public created: Date;
  public isCompleted: boolean;

  constructor() {
    // initialize the default value of model
    this.id = uuidv4();
    this.title = "";
    this.created = new Date();
    this.isCompleted = false;
  }
}
