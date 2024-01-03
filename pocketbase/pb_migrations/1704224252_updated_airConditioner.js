/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ygjtl2p10bb0yo5")

  collection.name = "airConditioners"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ygjtl2p10bb0yo5")

  collection.name = "airConditioner"

  return dao.saveCollection(collection)
})
