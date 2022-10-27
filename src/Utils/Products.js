import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export const products = [
    { id: "1", price: 75, pictureURL: "https://vinilodesignshop.com/wp-content/uploads/2022/08/Producto-Web-NuevoVD-5-300x300.jpg", title: "Gengar", category: "Cine y TV", stock: 10 },
    { id: "2", price: 100, pictureURL: "https://vinilodesignshop.com/wp-content/uploads/2022/03/Producto-Web-Nuevo-16-300x300.jpg", title: "Twitch", category: "Musica", stock: 10 },
    { id: "3", price: 80, pictureURL: "https://vinilodesignshop.com/wp-content/uploads/2022/03/Producto-Web-y-300x300.jpg", title: "Playstation", category: "Musica", stock: 10 },
    { id: "4", price: 95, pictureURL: "https://vinilodesignshop.com/wp-content/uploads/2022/03/Producto-Web-NuevoVD-15-300x300.jpg", title: "Dino", category: "Deportes", stock: 10 },
]

export const getProducts = () => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items');

    return getDocs(collectionReference)
        .then(snapshot => {
            const list = snapshot
                .docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
            return list;
        })
        .catch(error => console.warn(error))
};


export const getIDProducts = (id) => {
    const database = getFirestore();
    const itemReference = doc(database, 'items', id);
    return getDoc(itemReference)
        .then(snapshot => {
            if (snapshot.exists()) {
                const item = {
                    id: snapshot.id,
                    ...snapshot.data()
                };
                return item;
            }
        })

};

export const getCategoryProducts = (categoryName) => {
    const database = getFirestore();

    const collectionReference = collection(database, 'items');

    const collectionQuery = query(collectionReference, where('category', '==', categoryName))
    return getDocs(collectionQuery)
        .then(snapshot => {
            if (snapshot.size === 0)
                return [];

            const list = snapshot
                .docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
            return list;
        })
        .catch(error => console.warn(error))
};