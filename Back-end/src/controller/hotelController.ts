import { NextFunction, Request, Response, Router } from "express";
import { hoteles } from "../data/hotelesMock";

export class Hoteles {
    constructor(private requestExpress: any, private responseExpress: Response, private nextExpress: NextFunction) {

    }

    public getHotels() {
        let nameHotel = this.requestExpress.body.nameHotel;
        let start = this.requestExpress.body.start;

        try {
            let hotelResult = hoteles.filter((hotel) => {
                return nameHotel ? hotel.name === nameHotel : start ? hotel.stars == start : hotel;
            });

            this.responseExpress.status(200).send(hotelResult);
        } catch (error) {
            this.responseExpress.status(500).send({ message: error });
        }
    }
}