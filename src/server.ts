import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { Server } from "http";

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
process.on("unhandledRejection", () => {
  console.log("server is close");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log("server is colse now");
  process.exit(1);
});
main();
