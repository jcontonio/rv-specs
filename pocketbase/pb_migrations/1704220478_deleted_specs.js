/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8xb3z4x27tlg9ux");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "8xb3z4x27tlg9ux",
    "created": "2024-01-02 18:25:15.987Z",
    "updated": "2024-01-02 18:32:39.135Z",
    "name": "specs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2q1jlkbh",
        "name": "rv",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "yke0gejz2hmtrhp",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "lzb042d1",
        "name": "airConditioning",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "qoe46muy",
        "name": "heater",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "cgjkhstn",
        "name": "refrigerator",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "gj42ajox",
        "name": "waterHeater",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "tyo6yh96",
        "name": "windows",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
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
})
