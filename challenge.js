import fetch from "node-fetch"

const API = "https://api.escuelajs.co/api/v1";

function fetchData(url) {
    return fetch(url)
}
/*  */
/* fetchData(`${API}/products`) */
/*     .then(response => response.json()) */
/*     .then(data => console.log(data)) */
/*     .then(() => { */
/*         console.log("Terminado") */
/*     }) */
/*     .catch(error => console.log(error)) */
/*     .finally(() => console.log("finally")) */


fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category)
    }
    )
    .catch(error => console.log(error))
    .finally(() => console.log("finally"))