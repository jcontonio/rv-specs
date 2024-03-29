/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yke0gejz2hmtrhp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "93ahsi10",
    "name": "enabled",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yke0gejz2hmtrhp")

  // remove
  collection.schema.removeField("93ahsi10")

  return dao.saveCollection(collection)
})
