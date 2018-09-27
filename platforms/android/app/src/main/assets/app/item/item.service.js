"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var connectivityModule = require("tns-core-modules/connectivity");
var ItemService = /** @class */ (function () {
    function ItemService() {
        this.dataStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection('LiveServiceDemo', kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Network);
        this.newMessage = new core_1.EventEmitter();
        connectivityModule.startMonitoring(function (newConnectionType) {
            switch (newConnectionType) {
                case connectivityModule.connectionType.none:
                    break;
                case connectivityModule.connectionType.wifi:
                case connectivityModule.connectionType.mobile:
                    //this.liveServiceRegister();
                    break;
                default:
                    break;
            }
        });
    }
    ItemService.prototype.liveServiceRegister = function () {
        var _this = this;
        kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser().registerForLiveService()
            .then(function () {
            console.log("LaveService register ok");
            _this.subscribeToCollection();
        }).catch(function (err) {
            console.log("LaveService register error");
        });
    };
    ItemService.prototype.subscribeToCollection = function () {
        var _this = this;
        this.dataStore.subscribe({
            onMessage: function (m) {
                console.log("onMessage " + JSON.stringify(m));
                _this.newMessage.emit(m);
            },
            onStatus: function (s) {
                console.log("onStatus " + s);
            },
            onError: function (err) {
                console.log("onError " + err);
            }
        }).then(function (e) {
            console.log("subscribe on colection " + e);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ItemService.prototype, "newMessage", void 0);
    ItemService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBRWpFLG1FQUFpRDtBQUVqRCxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBR3BFO0lBTUk7UUFGQSxjQUFTLEdBQUcsZ0NBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLGdDQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR3JGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFckMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLFVBQUMsaUJBQWlCO1lBRWpELE1BQU0sQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSTtvQkFDdkMsS0FBSyxDQUFDO2dCQUNWLEtBQUssa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFDNUMsS0FBSyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsTUFBTTtvQkFDekMsNkJBQTZCO29CQUM3QixLQUFLLENBQUM7Z0JBQ1Y7b0JBQ0ksS0FBSyxDQUFDO1lBQ2QsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHlDQUFtQixHQUExQjtRQUFBLGlCQVFDO1FBUEcsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsc0JBQXNCLEVBQUU7YUFDL0MsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sMkNBQXFCLEdBQTVCO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUNyQixTQUFTLEVBQUUsVUFBQyxDQUFDO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUNELFFBQVEsRUFBRSxVQUFDLENBQUM7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUNELE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDbEMsQ0FBQztTQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUEvQ1M7UUFBVCxhQUFNLEVBQUU7a0NBQWEsbUJBQVk7bURBQVM7SUFGbEMsV0FBVztRQUR2QixpQkFBVSxFQUFFOztPQUNBLFdBQVcsQ0FtRHZCO0lBQUQsa0JBQUM7Q0FBQSxBQW5ERCxJQW1EQztBQW5EWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5cbmNvbnN0IGNvbm5lY3Rpdml0eU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2Nvbm5lY3Rpdml0eVwiKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcblxuICAgIEBPdXRwdXQoKSBuZXdNZXNzYWdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICBcbiAgICBkYXRhU3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb24oJ0xpdmVTZXJ2aWNlRGVtbycsIEtpbnZleS5EYXRhU3RvcmVUeXBlLk5ldHdvcmspO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgICAgIGNvbm5lY3Rpdml0eU1vZHVsZS5zdGFydE1vbml0b3JpbmcoKG5ld0Nvbm5lY3Rpb25UeXBlKSA9PiB7XG5cbiAgICAgICAgICAgIHN3aXRjaCAobmV3Q29ubmVjdGlvblR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eU1vZHVsZS5jb25uZWN0aW9uVHlwZS5ub25lOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eU1vZHVsZS5jb25uZWN0aW9uVHlwZS53aWZpOlxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5TW9kdWxlLmNvbm5lY3Rpb25UeXBlLm1vYmlsZTpcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmxpdmVTZXJ2aWNlUmVnaXN0ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsaXZlU2VydmljZVJlZ2lzdGVyKCkge1xuICAgICAgICBLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCkucmVnaXN0ZXJGb3JMaXZlU2VydmljZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMYXZlU2VydmljZSByZWdpc3RlciBva1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZVRvQ29sbGVjdGlvbigpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGF2ZVNlcnZpY2UgcmVnaXN0ZXIgZXJyb3JcIik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3Vic2NyaWJlVG9Db2xsZWN0aW9uKCkge1xuICAgICAgICB0aGlzLmRhdGFTdG9yZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgb25NZXNzYWdlOiAobSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25NZXNzYWdlIFwiICsgSlNPTi5zdHJpbmdpZnkobSkpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZS5lbWl0KG0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3RhdHVzOiAocykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25TdGF0dXMgXCIgKyBzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkVycm9yIFwiICsgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JpYmUgb24gY29sZWN0aW9uIFwiICsgZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG59XG4iXX0=