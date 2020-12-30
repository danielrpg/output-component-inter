import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-subject',
    templateUrl: './subject.component.html'
})
export class SubjectComponent implements OnInit {

    subjects: any[] = [];

    ngOnInit(): void {
        this.subjects.push({ code:"ng", description: "Angular", rate: 0});
        this.subjects.push({ code:"jar", description: "Java", rate: 0});
    }

    receiveSubjectCompletion(event: any) {
        console.log(event);
        const index = this.subjects.findIndex(subject => subject.code == event.code);
        //TODO: improve this logic
        if(event.code.rate != 0) {
           this.subjects[index].rate += event.rate 
        } else {
           this.subjects[index].rate -= event.rate
        } 
    }
}