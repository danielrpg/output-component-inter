import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html'    
})

export class TaskComponent implements OnInit {

    @Output() subjectCompleteEvent: EventEmitter<any> = new EventEmitter<any>();
    taskCompleted = 0;
    todos: any[] = [];

    ngOnInit(): void {
        this.todos.push({ code: 'ng', description: 'angular cli commands'})
        this.todos.push({ code: 'ng', description: 'components interactions'})
        this.todos.push({ code: 'jar', description: 'Spring Boot Scaffolding'})
    }

    onCheck(event: any) {
        //console.log(event.target.checked, event.target.value);
        let checked = event.target.checked;
        let value = event.target.value;

        if(checked) {
            this.taskCompleted ++;
            //notify parent
            this.subjectCompleteEvent.emit({
                code: value,
                rate: 100
            })

        } else {
            this.taskCompleted --;

            this.subjectCompleteEvent.emit({
                code: value,
                rate: 0
            })
        }

       // console.log(this.taskCompleted);
    }
}