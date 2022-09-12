import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `<p>Warning it is.</p>`,
    styles: [`p{padding:20px;color:white;background-color:rgb(230, 119, 119);border:1px solid red;}`]

})

export class WarningAlertComponent implements OnInit{
    constructor() { }
    ngOnInit(): void {
        
    }
}