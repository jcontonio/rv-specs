/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hx4jyt6mtnwrqrj")

  collection.name = "manufacturers"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hx4jyt6mtnwrqrj")

  collection.name = "manufacturer"

  return dao.saveCollection(collection)
})
