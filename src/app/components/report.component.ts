import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector:'app-report',
    template: `<section id="report">
                <h1>Report</h1>
                <div> Task completed: {{completed}} </div>
                </section>
                `
})
export class ReportCompnent implements OnInit {
    @Input() completed: number;
    ngOnInit(): void {
        
    }
}