/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yke0gejz2hmtrhp")

  collection.name = "rvs"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yke0gejz2hmtrhp")

  collection.name = "rv"

  return dao.saveCollection(collection)
})
