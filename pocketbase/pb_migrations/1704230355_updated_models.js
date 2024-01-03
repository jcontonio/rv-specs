/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yke0gejz2hmtrhp")

  // remove
  collection.schema.removeField("r0w5xzst")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tehfikk7",
    "name": "length",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1fqolqgo",
    "name": "width",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yke0gejz2hmtrhp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r0w5xzst",
    "name": "length",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("tehfikk7")

  // remove
  collection.schema.removeField("1fqolqgo")

  return dao.saveCollection(collection)
})
