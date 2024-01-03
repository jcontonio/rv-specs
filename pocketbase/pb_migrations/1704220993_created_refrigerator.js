/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i6ao8klcjw0e0rw",
    "created": "2024-01-02 18:43:13.967Z",
    "updated": "2024-01-02 18:43:13.967Z",
    "name": "refrigerator",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yyp8pkzk",
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
        "id": "ymc0kk4o",
        "name": "type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "gas",
            "electric",
            "propane"
          ]
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
  const collection = dao.findCollectionByNameOrId("i6ao8klcjw0e0rw");

  return dao.deleteCollection(collection);
})
