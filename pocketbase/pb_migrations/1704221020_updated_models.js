/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yke0gejz2hmtrhp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4kna9ljj",
    "name": "refrigerators",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "i6ao8klcjw0e0rw",
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
  collection.schema.removeField("4kna9ljj")

  return dao.saveCollection(collection)
})
