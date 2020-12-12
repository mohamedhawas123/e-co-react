import SHOPACTIONTYPE from './shopType'

export const updateCollection = (collectionMap) => ({
    type:SHOPACTIONTYPE.UPDATE_COLLECTION,
    payload: collectionMap
})