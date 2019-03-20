
export const createOrder = ( order ) => {
    return (dispatch,getState, { getFirebase,getFirestore }) =>{
        const firestore = getFirestore();
        const state=getState()
        console.log(order.item)
        firestore.collection('order').add( { 
            product:firestore.doc('rates/'+order.item.id),
            consumerId: state.firebase.auth.uid,
            consumer:firestore.doc('users/'+state.firebase.auth.uid),
            date:new Date(),
            amount: parseInt(order.amount),
            rate:order.item.price,
            name:order.item.name
         })

    }
}

export const createShipment = (shipment) =>{

    return (dispatch,getState, { getFirebase,getFirestore }) =>{
        const firestore = getFirestore();
        const state =getState();
        firestore.collection('shipment').add({
            supplierId:state.firebase.auth.uid,
            supplier:firestore.doc('users/' + state.firebase.auth.uid),
            product:firestore.doc('rates/' + shipment.id),
            amount:parseInt(shipment.amount),
            date:new Date(),
            name:shipment.name
        })

    }
}

export const changePrice = (item) => {

    return (dispatch,getState, { getFirebase,getFirestore }) =>{
        const firestore = getFirestore();
        firestore.collection('rates').doc(item.id).update({
            price:item.price,
            marketPrice: item.marketPrice
        })
    }
}