import {SHOP_DATA} from '../../pages/shop/datashop'

const InitalState = {
    collection: SHOP_DATA
}


const Reducer = (state=InitalState, action) => {
    switch(action.type) {
        default:
            return state
    }
}


export default Reducer