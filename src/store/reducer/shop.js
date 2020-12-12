import {SHOP_DATA} from '../../pages/shop/datashop'
import SHOPACTIONTYPE from '../../pages/shop/shopType'

const InitalState = {
    collection: SHOP_DATA
}


const Reducer = (state=InitalState, action) => {
    switch(action.type) {
        case SHOPACTIONTYPE.UPDATE_COLLECTION:
            return {
                ...state,
                collection: action.payload
            }
        default:
            return state
    }
}


export default Reducer