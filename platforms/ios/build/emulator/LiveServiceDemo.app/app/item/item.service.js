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
                var x = JSON.stringify(m);
                _this.newMessage.emit(x);
            },
            onStatus: function (s) {
                console.log("onStatus " + s);
            },
            onError: function (err) {
                console.log("onError " + err);
            }
        }).then(function () {
            console.log("subscribe on colection sucess");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBRWpFLG1FQUFpRDtBQUVqRCxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBR3BFO0lBTUk7UUFGQSxjQUFTLEdBQUcsZ0NBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLGdDQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR3JGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFckMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLFVBQUMsaUJBQWlCO1lBRWpELE1BQU0sQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSTtvQkFDdkMsS0FBSyxDQUFDO2dCQUNWLEtBQUssa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFDNUMsS0FBSyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsTUFBTTtvQkFDekMsNkJBQTZCO29CQUM3QixLQUFLLENBQUM7Z0JBQ1Y7b0JBQ0ksS0FBSyxDQUFDO1lBQ2QsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHlDQUFtQixHQUExQjtRQUFBLGlCQVFDO1FBUEcsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsc0JBQXNCLEVBQUU7YUFDL0MsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sMkNBQXFCLEdBQTVCO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7WUFDckIsU0FBUyxFQUFFLFVBQUMsQ0FBQztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxHQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUM7WUFDRCxRQUFRLEVBQUUsVUFBQyxDQUFDO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFDRCxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7U0FDSixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWhEUztRQUFULGFBQU0sRUFBRTtrQ0FBYSxtQkFBWTttREFBUztJQUZsQyxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7O09BQ0EsV0FBVyxDQW9EdkI7SUFBRCxrQkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcblxuY29uc3QgY29ubmVjdGl2aXR5TW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCIpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuXG4gICAgQE91dHB1dCgpIG5ld01lc3NhZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIFxuICAgIGRhdGFTdG9yZSA9IEtpbnZleS5EYXRhU3RvcmUuY29sbGVjdGlvbignTGl2ZVNlcnZpY2VEZW1vJywgS2ludmV5LkRhdGFTdG9yZVR5cGUuTmV0d29yayk7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAgICAgY29ubmVjdGl2aXR5TW9kdWxlLnN0YXJ0TW9uaXRvcmluZygobmV3Q29ubmVjdGlvblR5cGUpID0+IHtcblxuICAgICAgICAgICAgc3dpdGNoIChuZXdDb25uZWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5TW9kdWxlLmNvbm5lY3Rpb25UeXBlLm5vbmU6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5TW9kdWxlLmNvbm5lY3Rpb25UeXBlLndpZmk6XG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHlNb2R1bGUuY29ubmVjdGlvblR5cGUubW9iaWxlOlxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMubGl2ZVNlcnZpY2VSZWdpc3RlcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxpdmVTZXJ2aWNlUmVnaXN0ZXIoKSB7XG4gICAgICAgIEtpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKS5yZWdpc3RlckZvckxpdmVTZXJ2aWNlKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxhdmVTZXJ2aWNlIHJlZ2lzdGVyIG9rXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlVG9Db2xsZWN0aW9uKCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMYXZlU2VydmljZSByZWdpc3RlciBlcnJvclwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdWJzY3JpYmVUb0NvbGxlY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZGF0YVN0b3JlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBvbk1lc3NhZ2U6IChtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbk1lc3NhZ2UgXCIgKyBKU09OLnN0cmluZ2lmeShtKSk7XG4gICAgICAgICAgICAgICAgbGV0IHg6YW55ID0gSlNPTi5zdHJpbmdpZnkobSlcbiAgICAgICAgICAgICAgICB0aGlzLm5ld01lc3NhZ2UuZW1pdCh4KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN0YXR1czogKHMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uU3RhdHVzIFwiICsgcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FcnJvcjogKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25FcnJvciBcIiArIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JpYmUgb24gY29sZWN0aW9uIHN1Y2Vzc1wiKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cbiJdfQ==