"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const hotelController_1 = require("../controller/hotelController");
class IndexRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("[IndexRoute::create] Creating index route.");
        router.get("/", (req, res, next) => {
            res.send({ message: "Al mundo" });
        });
        router.post("/getHotels", (req, res, next) => {
            new hotelController_1.Hoteles(req, res, next).getHotels();
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = "Home | Tour of Heros";
        let options = {
            "message": "Welcome to the Tour of Heros"
        };
        this.render(req, res, "index", options);
    }
}
exports.IndexRoute = IndexRoute;
