import { MongoClient } from "https://deno.land/x/mongo@v0.10.1/mod.ts";
const client = new MongoClient();

client.connectWithUri("mongodb://localhost:27017");
const db = client.database("test");

export default db;