/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8xb3z4x27tlg9ux")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8xb3z4x27tlg9ux")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2q1jlkbh",
    "name": "rv",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yke0gejz2hmtrhp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
