import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private firestore: AngularFirestore) { }

  createCoffeeOrder(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("coffeeOrders")
            .add(data)
            .then(res => resolve(res), err => reject(err));
    });
  }

  getCoffeeOrders() {
    return this.firestore.collection("coffeeOrders").snapshotChanges();
  }

  updateCoffeeOrder(data) {
    return this.firestore
       .collection("coffeeOrders")
       .doc(data.id)
       .set({ isCompleted: true }, { merge: true });
  }

  deleteCoffeeOrder(data) {
    return this.firestore
       .collection("coffeeOrders")
       .doc(data.id)
       .delete();
  }
}
