export const products =[
{id: 1, price:75, pictureURL: "https://vinilodesignshop.com/wp-content/uploads/2022/08/Producto-Web-NuevoVD-5-300x300.jpg" , title: "Gengar", stock: 100},
{id: 2, price:75, pictureURL: "https://vinilodesignshop.com/wp-content/uploads/2022/03/Producto-Web-Nuevo-16-300x300.jpg" , title: "Twitch", stock: 200},
{id: 3, price:75, pictureURL: "https://vinilodesignshop.com/wp-content/uploads/2022/03/Producto-Web-y-300x300.jpg" , title: "Playstation", stock: 300},
{id: 4, price:75, pictureURL: "https://vinilodesignshop.com/wp-content/uploads/2022/03/Producto-Web-NuevoVD-15-300x300.jpg" , title: "Dino", stock: 400}
]

export const getProducts = () => {
    const promise = new Promise((resolve) =>{
        return resolve(products);
    })
    return promise;
};


export const getIDProducts = (id) => {
    const promise = new Promise((resolve) =>{
        const productid = products.find((product)=>product.id === id)
        return resolve(productid);
    })
    return promise;
};
 