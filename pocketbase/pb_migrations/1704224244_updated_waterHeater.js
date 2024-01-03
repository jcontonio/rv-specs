/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wv8s8bxt87vle6r")

  collection.name = "waterHeaters"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wv8s8bxt87vle6r")

  collection.name = "waterHeater"

  return dao.saveCollection(collection)
})
