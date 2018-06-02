"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hotelesMock_1 = require("../data/hotelesMock");
class Hoteles {
    constructor(requestExpress, responseExpress, nextExpress) {
        this.requestExpress = requestExpress;
        this.responseExpress = responseExpress;
        this.nextExpress = nextExpress;
    }
    getHotels() {
        let nameHotel = this.requestExpress.body.nameHotel;
        let start = this.requestExpress.body.start;
        try {
            let hotelResult = hotelesMock_1.hoteles.filter((hotel) => {
                return nameHotel ? hotel.name === nameHotel : start ? hotel.stars == start : hotel;
            });
            this.responseExpress.status(200).send(hotelResult);
        }
        catch (error) {
            this.responseExpress.status(500).send({ message: error });
        }
    }
}
exports.Hoteles = Hoteles;
