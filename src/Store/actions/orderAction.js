
export const createOrder = ( order ) => {
    return (dispatch,getState, { getFirebase,getFirestore }) =>{
        const firestore = getFirestore();
        const state=getState()
        firestore.collection('order').add( { 
            name: order.item.name,
            cost: order.item.price,
            consumerId: state.firebase.auth.uid,
            consumerLocation:state.firebase.profile.location,
            date:new Date(),
            remainingAmount: order.amount,
            totalAmount: order.amount,
         })

    }
}

export const createShipment = (shipment) =>{

    return (dispatch,getState, { getFirebase,getFirestore }) =>{
        const firestore = getFirestore();
        const state =getState();
        firestore.collection('shipments').add({
            shiperId:state.firebase.auth.uid,
            shiper:firestore.doc('users/' + state.firebase.auth.uid),
            orderOfShipment:firestore.doc('order/' + shipment.id),
            amount:shipment.amount,
        }).then((item)=>{
            firestore.collection('order').doc(shipment.id).update({
                remainingAmount:shipment.remainingAmount,
                shipments:firestore.FieldValue.arrayUnion(firestore.doc('shipments/' + item.id))
            })
        })

    }
}