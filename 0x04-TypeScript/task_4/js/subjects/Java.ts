import { Subjects } from './Teacher';
import { Subjects as SubjectBase } from './Subject';

export class Java extends SubjectBase.Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  getAvailableTeacher(): string {
    if (!this.teacher || this.teacher.experienceTeachingJava <= 0) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
