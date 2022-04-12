import request from "supertest";
let server = require("../app");
import ConcentModel from "../models/concent.model";
describe("/users", () => {
  beforeAll(() => {
    server;
  });
  describe('Post Concent /:id', () => {
      test("should create an event if valid ID is passed", async () =>{
          const userId = "lKUpppp123"
          const concent = await ConcentModel.create({Id: "sms_notifications"});
          const res = await  request(server).post("/events/"+ userId ).expect(200)
      })
  });
  
});
