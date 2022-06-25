import fetch from "node-fetch"; 

const API = "https://api.escuelajs.co/api/v1";


async function getData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFnction = async (urlApi) => {
    try {
        const products = await getData(urlApi + "/products");
        const product = await getData(urlApi + "/products/" + products[0].id);
        const category = await getData(urlApi + "/categories/" + product.category.id);
        console.log("products: ", products);
        console.log("product Especifico: ", product);
        console.log("Categoria: ", category);
    } catch (error) {
        console.log(error);
    }
}

console.log(anotherFnction(API));
 