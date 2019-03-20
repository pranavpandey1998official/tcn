const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.orderCreated = functions.firestore.document('order/{orderId}')
    .onCreate(doc => {
        const data =doc.data();
        data.product.get().then((doc) => {
            const demandAmount =doc.data().demandAmount;
            data.product.update({
                demandAmount: parseInt(demandAmount)+parseInt(data.amount),
            });
            return 1;
        }).catch((error) => {
            console.log(error);
          });
    })

    exports.orderDeleted = functions.firestore.document('order/{orderId}')
    .onDelete(doc => {
        const data = doc.data();
        data.product.get().then((doc) => {
            const demandAmount =doc.data().demandAmount;
            data.product.update({
                demandAmount: parseInt(demandAmount) - parseInt(data.amount),
            });
            return 2;
        }).catch((error) => {
            console.log(error);
          });
    })

    exports.shipmentCreated = functions.firestore.document('shipment/{shipmentId}')
    .onCreate(doc => {
        const data =doc.data();
        data.product.get().then((doc) => {
            const supplyAmount =doc.data().supplyAmount;
            data.product.update({
                supplyAmount: parseInt(supplyAmount)+parseInt(data.amount),
            });
            return 1;
        }).catch((error) => {
            console.log(error);
          });
    })

    exports.shipmentDeleted = functions.firestore.document('shipment/{shipmentId}')
    .onDelete(doc => {
        const data = doc.data();
        data.product.get().then((doc) => {
            const supplyAmount =doc.data().supplyAmount;
            data.product.update({
                supplyAmount: parseInt(supplyAmount) - parseInt(data.amount),
            });
            return 2;
        }).catch((error) => {
            console.log(error);
          });
    })