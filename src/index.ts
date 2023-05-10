import "reflect-metadata";
import { TestApi } from "./server";

let _appInstance: TestApi;

const port = 4000;

if (!_appInstance) {
  console.log("index- " + __filename);
  _appInstance = new TestApi();
  _appInstance
    .start(port)
    .then((port) => console.log(`server running on port ${port}`))
    .catch((err) => console.error(err));
}