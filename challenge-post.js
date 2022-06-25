import fetch from "node-fetch"
const API = "https://api.escuelajs.co/api/v1";

function postData(url, data) {
    return fetch(url, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

const data =    
{
    "title": "Curso de JavaScript",
    "price": 200.00,
    "description": "El mejor curso de JavaScript para aprender a programar desde los mas basico hasta profesionales",
    "categoryId": 1,
    "images": [
        "https://es.wikipedia.org/wiki/JavaScript#/media/Archivo:Unofficial_JavaScript_logo_2.svg"
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log("finally"))