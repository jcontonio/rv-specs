/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yke0gejz2hmtrhp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uaozmkjp",
    "name": "waterHeaters",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "wv8s8bxt87vle6r",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yke0gejz2hmtrhp")

  // remove
  collection.schema.removeField("uaozmkjp")

  return dao.saveCollection(collection)
})
