"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
        this.test = "";
        this.message = "";
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.liveServiceRegister();
        this.myEventSubscription = this.itemService.newMessage.subscribe(function (m) {
            var x = JSON.parse(m);
            console.log("Poruka: " + x.Test);
            _this.message = x.Test;
            _this.test = "";
        });
    };
    ItemsComponent.prototype.onButtonTap = function () {
        var dataStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection('LiveServiceDemo', kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Network);
        console.log("Test: " + this.test);
        var entity = { "Test": this.test };
        dataStore.save(entity)
            .then(function (entity) {
            console.log("Saved");
        })
            .catch(function (error) {
            console.log("Error: " + error);
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTREO0FBRTVELCtDQUE2QztBQUU3QyxtRUFBaUQ7QUFPakQ7SUFLSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQU5wQyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBVyxFQUFFLENBQUM7SUFLbUIsQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFdkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDOUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLFNBQVMsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsZ0NBQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQTtRQUNoQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNiLElBQUksQ0FBQyxVQUFVLE1BQVc7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxLQUF1QjtZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7SUEvQlEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FRbUMsMEJBQVc7T0FQbkMsY0FBYyxDQWdDMUI7SUFBRCxxQkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSAna2ludmV5LW5hdGl2ZXNjcmlwdC1zZGsnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSB0ZXN0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgbWVzc2FnZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIG15RXZlbnRTdWJzY3JpcHRpb246IGFueTtcblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmxpdmVTZXJ2aWNlUmVnaXN0ZXIoKTtcblxuICAgICAgICB0aGlzLm15RXZlbnRTdWJzY3JpcHRpb24gPSB0aGlzLml0ZW1TZXJ2aWNlLm5ld01lc3NhZ2Uuc3Vic2NyaWJlKG0gPT4ge1xuICAgICAgICAgICAgbGV0IHggPSBKU09OLnBhcnNlKG0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQb3J1a2E6IFwiICsgeC5UZXN0KTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHguVGVzdDtcbiAgICAgICAgICAgIHRoaXMudGVzdCA9IFwiXCI7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuXG4gICAgb25CdXR0b25UYXAoKSB7XG4gICAgICAgIGxldCBkYXRhU3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb24oJ0xpdmVTZXJ2aWNlRGVtbycsIEtpbnZleS5EYXRhU3RvcmVUeXBlLk5ldHdvcmspO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3Q6IFwiICsgdGhpcy50ZXN0KTtcbiAgICAgICAgbGV0IGVudGl0eSA9IHtcIlRlc3RcIjogdGhpcy50ZXN0fVxuICAgICAgICBkYXRhU3RvcmUuc2F2ZShlbnRpdHkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGVudGl0eTogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZWRcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yOiBLaW52ZXkuQmFzZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXX0=