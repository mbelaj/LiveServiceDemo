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
                    //this.dataStore.unsubscribe().then(() => {
                    kinvey_nativescript_sdk_1.Kinvey.User.unregisterFromLiveService().then(function () {
                        _this.liveServiceRegister();
                    });
                    //})
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBRWpFLG1FQUFpRDtBQUVqRCxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBR3BFO0lBTUk7UUFBQSxpQkFvQkM7UUF0QkQsY0FBUyxHQUFHLGdDQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxnQ0FBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdyRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRXJDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxVQUFDLGlCQUFpQjtZQUVqRCxNQUFNLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUk7b0JBQ3ZDLEtBQUssQ0FBQztnQkFDVixLQUFLLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQzVDLEtBQUssa0JBQWtCLENBQUMsY0FBYyxDQUFDLE1BQU07b0JBQ3pDLDJDQUEyQztvQkFDdkMsZ0NBQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0JBQ3pDLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO29CQUMvQixDQUFDLENBQUMsQ0FBQztvQkFDUCxJQUFJO29CQUNKLEtBQUssQ0FBQztnQkFDVjtvQkFDSSxLQUFLLENBQUM7WUFDZCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0seUNBQW1CLEdBQTFCO1FBQUEsaUJBUUM7UUFQRyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRTthQUMvQyxJQUFJLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSwyQ0FBcUIsR0FBNUI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUNyQixTQUFTLEVBQUUsVUFBQyxDQUFDO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLEdBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUNELFFBQVEsRUFBRSxVQUFDLENBQUM7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUNELE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDbEMsQ0FBQztTQUNKLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBcERTO1FBQVQsYUFBTSxFQUFFO2tDQUFhLG1CQUFZO21EQUFTO0lBRmxDLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTs7T0FDQSxXQUFXLENBd0R2QjtJQUFELGtCQUFDO0NBQUEsQUF4REQsSUF3REM7QUF4RFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuXG5jb25zdCBjb25uZWN0aXZpdHlNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb25uZWN0aXZpdHlcIik7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XG5cbiAgICBAT3V0cHV0KCkgbmV3TWVzc2FnZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XG5cbiAgICBkYXRhU3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb24oJ0xpdmVTZXJ2aWNlRGVtbycsIEtpbnZleS5EYXRhU3RvcmVUeXBlLk5ldHdvcmspO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgICAgICBjb25uZWN0aXZpdHlNb2R1bGUuc3RhcnRNb25pdG9yaW5nKChuZXdDb25uZWN0aW9uVHlwZSkgPT4ge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG5ld0Nvbm5lY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHlNb2R1bGUuY29ubmVjdGlvblR5cGUubm9uZTpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHlNb2R1bGUuY29ubmVjdGlvblR5cGUud2lmaTpcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eU1vZHVsZS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5kYXRhU3RvcmUudW5zdWJzY3JpYmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEtpbnZleS5Vc2VyLnVucmVnaXN0ZXJGcm9tTGl2ZVNlcnZpY2UoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVTZXJ2aWNlUmVnaXN0ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvL30pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGl2ZVNlcnZpY2VSZWdpc3RlcigpIHtcbiAgICAgICAgS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpLnJlZ2lzdGVyRm9yTGl2ZVNlcnZpY2UoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGF2ZVNlcnZpY2UgcmVnaXN0ZXIgb2tcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0NvbGxlY3Rpb24oKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxhdmVTZXJ2aWNlIHJlZ2lzdGVyIGVycm9yXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN1YnNjcmliZVRvQ29sbGVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5kYXRhU3RvcmUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG9uTWVzc2FnZTogKG0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uTWVzc2FnZSBcIiArIEpTT04uc3RyaW5naWZ5KG0pKTtcbiAgICAgICAgICAgICAgICBsZXQgeDogYW55ID0gSlNPTi5zdHJpbmdpZnkobSlcbiAgICAgICAgICAgICAgICB0aGlzLm5ld01lc3NhZ2UuZW1pdCh4KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN0YXR1czogKHMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uU3RhdHVzIFwiICsgcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FcnJvcjogKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25FcnJvciBcIiArIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JpYmUgb24gY29sZWN0aW9uIHN1Y2Vzc1wiKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cbiJdfQ==