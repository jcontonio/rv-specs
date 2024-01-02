import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

export async function getModels(filter?: string) {
  // fetch a paginated records list
  const filterString = filter
    ? `enabled=true && ${filter}`
    : 'enabled=true'
  console.log(filterString)
  const resultList = await pb.collection('models').getList(1, 50, {
    filter: filterString,
    sort: '-created'
  })
  return resultList
}

export async function getPopularFurnaces() {
  const filterStrings = `enabled=true && popular=true`
  const resultList = await pb.collection('furnaces').getList(1, 10, {
    filter: filterStrings,
  })
  return resultList
}
