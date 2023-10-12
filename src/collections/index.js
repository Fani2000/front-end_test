import Dexie from "dexie";

export const db = new Dexie("BrandDB");

db.version(1).stores({
  carousel: "++id, imageUrl, title, description",
});
