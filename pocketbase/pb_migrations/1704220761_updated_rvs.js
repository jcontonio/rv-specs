/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yke0gejz2hmtrhp")

  collection.name = "models"

  // remove
  collection.schema.removeField("nwxuf9ff")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4e07zer2",
    "name": "manufacturer",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "hx4jyt6mtnwrqrj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "synxlulh",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "travel trailer",
        "fifth wheel",
        "toy hauler",
        "pop-up",
        "truck camper",
        "class a",
        "class b",
        "class c"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yke0gejz2hmtrhp")

  collection.name = "rvs"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nwxuf9ff",
    "name": "manufacturer",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("4e07zer2")

  // remove
  collection.schema.removeField("synxlulh")

  return dao.saveCollection(collection)
})
