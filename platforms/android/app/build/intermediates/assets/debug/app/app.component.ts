import { Component } from "@angular/core";

import { Kinvey } from 'kinvey-nativescript-sdk';
import { ItemService } from "~/item/item.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 
    constructor(private itemService: ItemService){
        Kinvey.User.login("User1", "12345678").then(() => {
            this.itemService.liveServiceRegister();
        });
    } 
}
