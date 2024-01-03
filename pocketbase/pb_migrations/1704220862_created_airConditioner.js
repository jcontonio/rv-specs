/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ygjtl2p10bb0yo5",
    "created": "2024-01-02 18:41:02.694Z",
    "updated": "2024-01-02 18:41:02.694Z",
    "name": "airConditioner",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "htse0loa",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "toguj2vc",
        "name": "btu",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ygjtl2p10bb0yo5");

  return dao.deleteCollection(collection);
})
