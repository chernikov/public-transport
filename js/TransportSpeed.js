/// <reference path="Data.ts" />
var TransportSpeed = (function () {
    function TransportSpeed(data) {
        this.data = data;
    }
    TransportSpeed.prototype.display = function () {
        console.log(this.data[0].speed);
    };
    return TransportSpeed;
}());
//# sourceMappingURL=TransportSpeed.js.map