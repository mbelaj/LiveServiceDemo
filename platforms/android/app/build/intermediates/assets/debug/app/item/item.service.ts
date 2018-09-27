import { Injectable, Output, EventEmitter } from "@angular/core";

import { Kinvey } from "kinvey-nativescript-sdk";

const connectivityModule = require("tns-core-modules/connectivity");

@Injectable()
export class ItemService {

    @Output() newMessage: EventEmitter<number>;
    
    dataStore = Kinvey.DataStore.collection('LiveServiceDemo', Kinvey.DataStoreType.Network);

    constructor(){
        this.newMessage = new EventEmitter();

        connectivityModule.startMonitoring((newConnectionType) => {

            switch (newConnectionType) {
                case connectivityModule.connectionType.none:
                    break;
                case connectivityModule.connectionType.wifi:
                case connectivityModule.connectionType.mobile:
                    this.liveServiceRegister();
                    break;
                default:
                    break;
            }
        });
    }

    public liveServiceRegister() {
        Kinvey.User.getActiveUser().registerForLiveService()
            .then(() => {
                console.log("LaveService register ok");
                this.subscribeToCollection();
            }).catch((err) => {
                console.log("LaveService register error");
            });
    }

    public subscribeToCollection() {
        this.dataStore.subscribe({
            onMessage: (m) => {
                console.log("onMessage " + JSON.stringify(m));
                this.newMessage.emit(m);
            },
            onStatus: (s) => {
                console.log("onStatus " + s);
            },
            onError: (err) => {
                console.log("onError " + err);
            }
        })
    }

}
