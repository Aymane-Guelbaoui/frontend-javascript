import { Subjects } from './Teacher';
import { Subjects as SubjectBase } from './Subject';

export class Cpp extends SubjectBase.Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
  }

  getAvailableTeacher(): string {
    if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
