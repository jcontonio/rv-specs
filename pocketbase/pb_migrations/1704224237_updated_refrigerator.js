/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6ao8klcjw0e0rw")

  collection.name = "refrigerators"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6ao8klcjw0e0rw")

  collection.name = "refrigerator"

  return dao.saveCollection(collection)
})
