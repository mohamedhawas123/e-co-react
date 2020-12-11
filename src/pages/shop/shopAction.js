import SHOPACTIONTYPE from './shopType'

export const updateCollection = (collecionMap) => ({
    type:SHOPACTIONTYPE.UPDATE_COLLECTION,
    payload: collectionMap
})