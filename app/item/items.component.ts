import { Component, OnInit, NgModule } from "@angular/core";

import { ItemService } from "./item.service";

import { Kinvey } from 'kinvey-nativescript-sdk';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    private test: string = "";
    private message: string = "";
    private myEventSubscription: any;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.itemService.liveServiceRegister();

        this.myEventSubscription = this.itemService.newMessage.subscribe(m => {
            console.log("Poruka: " + m.Test);
            this.message = m.Test;
            this.test = "";
        });        
    }

    onButtonTap() {
        let dataStore = Kinvey.DataStore.collection('LiveServiceDemo', Kinvey.DataStoreType.Network);
        console.log("Test: " + this.test);
        let entity = {"Test": this.test}
        dataStore.save(entity)
                .then(function (entity: any) {
                    console.log("Saved");
                })
                .catch(function (error: Kinvey.BaseError) {
                    console.log("Error: " + error);
                });
    }
}