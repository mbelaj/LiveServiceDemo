"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var item_service_1 = require("~/item/item.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(itemService) {
        var _this = this;
        this.itemService = itemService;
        kinvey_nativescript_sdk_1.Kinvey.User.login("User1", "12345678").then(function () {
            _this.itemService.liveServiceRegister();
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsbUVBQWlEO0FBQ2pELG9EQUFrRDtBQU9sRDtJQUNJLHNCQUFvQixXQUF3QjtRQUE1QyxpQkFJQztRQUptQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4QyxLQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBTFEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUdtQywwQkFBVztPQURuQyxZQUFZLENBTXhCO0lBQUQsbUJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEtpbnZleSB9IGZyb20gJ2tpbnZleS1uYXRpdmVzY3JpcHQtc2RrJztcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIn4vaXRlbS9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2Upe1xuICAgICAgICBLaW52ZXkuVXNlci5sb2dpbihcIlVzZXIxXCIsIFwiMTIzNDU2NzhcIikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmxpdmVTZXJ2aWNlUmVnaXN0ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfSBcbn1cbiJdfQ==