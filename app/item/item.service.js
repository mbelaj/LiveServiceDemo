"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var connectivityModule = require("tns-core-modules/connectivity");
var ItemService = /** @class */ (function () {
    function ItemService() {
        var _this = this;
        this.dataStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection('LiveServiceDemo', kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Network);
        this.newMessage = new core_1.EventEmitter();
        connectivityModule.startMonitoring(function (newConnectionType) {
            switch (newConnectionType) {
                case connectivityModule.connectionType.none:
                    break;
                case connectivityModule.connectionType.wifi:
                case connectivityModule.connectionType.mobile:
                    _this.liveServiceRegister();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBRWpFLG1FQUFpRDtBQUVqRCxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBR3BFO0lBTUk7UUFBQSxpQkFnQkM7UUFsQkQsY0FBUyxHQUFHLGdDQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxnQ0FBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdyRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRXJDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxVQUFDLGlCQUFpQjtZQUVqRCxNQUFNLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUk7b0JBQ3ZDLEtBQUssQ0FBQztnQkFDVixLQUFLLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQzVDLEtBQUssa0JBQWtCLENBQUMsY0FBYyxDQUFDLE1BQU07b0JBQ3pDLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO29CQUMzQixLQUFLLENBQUM7Z0JBQ1Y7b0JBQ0ksS0FBSyxDQUFDO1lBQ2QsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHlDQUFtQixHQUExQjtRQUFBLGlCQVFDO1FBUEcsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsc0JBQXNCLEVBQUU7YUFDL0MsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sMkNBQXFCLEdBQTVCO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUNyQixTQUFTLEVBQUUsVUFBQyxDQUFDO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUNELFFBQVEsRUFBRSxVQUFDLENBQUM7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUNELE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDbEMsQ0FBQztTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE3Q1M7UUFBVCxhQUFNLEVBQUU7a0NBQWEsbUJBQVk7bURBQVM7SUFGbEMsV0FBVztRQUR2QixpQkFBVSxFQUFFOztPQUNBLFdBQVcsQ0FpRHZCO0lBQUQsa0JBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5cbmNvbnN0IGNvbm5lY3Rpdml0eU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2Nvbm5lY3Rpdml0eVwiKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcblxuICAgIEBPdXRwdXQoKSBuZXdNZXNzYWdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICBcbiAgICBkYXRhU3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb24oJ0xpdmVTZXJ2aWNlRGVtbycsIEtpbnZleS5EYXRhU3RvcmVUeXBlLk5ldHdvcmspO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgICAgIGNvbm5lY3Rpdml0eU1vZHVsZS5zdGFydE1vbml0b3JpbmcoKG5ld0Nvbm5lY3Rpb25UeXBlKSA9PiB7XG5cbiAgICAgICAgICAgIHN3aXRjaCAobmV3Q29ubmVjdGlvblR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eU1vZHVsZS5jb25uZWN0aW9uVHlwZS5ub25lOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eU1vZHVsZS5jb25uZWN0aW9uVHlwZS53aWZpOlxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5TW9kdWxlLmNvbm5lY3Rpb25UeXBlLm1vYmlsZTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlU2VydmljZVJlZ2lzdGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGl2ZVNlcnZpY2VSZWdpc3RlcigpIHtcbiAgICAgICAgS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpLnJlZ2lzdGVyRm9yTGl2ZVNlcnZpY2UoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGF2ZVNlcnZpY2UgcmVnaXN0ZXIgb2tcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0NvbGxlY3Rpb24oKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxhdmVTZXJ2aWNlIHJlZ2lzdGVyIGVycm9yXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN1YnNjcmliZVRvQ29sbGVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5kYXRhU3RvcmUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG9uTWVzc2FnZTogKG0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uTWVzc2FnZSBcIiArIEpTT04uc3RyaW5naWZ5KG0pKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld01lc3NhZ2UuZW1pdChtKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN0YXR1czogKHMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uU3RhdHVzIFwiICsgcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FcnJvcjogKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25FcnJvciBcIiArIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG59XG4iXX0=