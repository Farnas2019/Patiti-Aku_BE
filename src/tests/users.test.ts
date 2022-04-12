// import request from "supertest";
// let server = require("../app");
// import UserModel from "../models/user.model";
// describe("/users", () => {
//   beforeAll(() => {
//     server;
//   });
//   describe('GET /:id', () => {
//       it("should return a user if valid ID is passed", async () =>{
//           const user = await UserModel.create({email:"nakou@gmail.com", id: "AThjkjkITIAKU123"});
//           const res = await  request(server).get("/users/"+ user.id).expect(200)
//       })
//   });
//   describe('Post /', () => {
//       test("should return a user if valid Inputs is passed", async () =>{
//            const res = await  request(server).post("/users/").expect("Content-Type", /json/)
//           .send({
//             email:"mbnn@gmail.com", id: "lKUpppp123"
//           }).expect(200)
//       })
//   });
//   describe('Delete /:id', () => {
//     it("should delete user if valid ID is passed", async () =>{
//         const user = ({id: "AThjkjkITIAKU123"});
//         const res = await  request(server).delete("/users/"+ user.id).expect(200)
//     })
//     });
// });
