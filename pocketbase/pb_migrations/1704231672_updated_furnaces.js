/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6hxdt904zzaahy2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lxcd5osi",
    "name": "enabled",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "phgpnzbn",
    "name": "popular",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6hxdt904zzaahy2")

  // remove
  collection.schema.removeField("lxcd5osi")

  // remove
  collection.schema.removeField("phgpnzbn")

  return dao.saveCollection(collection)
})
