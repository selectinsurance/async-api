const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(ApiUrl,callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(event) {
        if (this.readyState == 4) {
           if (this.status == 200) {
                callback(null,JSON.parse(this.responseText));
            } else {
                const error = new Error(this.statusText, + ApiUrl);
                return callback(error,null);
            }
        }
    }
    xhttp.open('GET', ApiUrl, true);
    xhttp.send();
}


fetchData(API + '/products', (error1, data1) => {
   if(error1) return console.log(error1);
    fetchData(API + '/products/' + data1[0].id, (error2, data2) => {
        if(error2) return console.log(error2);
        fetchData(API + '/categories/' + data2.category.id,(error3, data3) => {
        if(error3) return console.log(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
        });
    });
}
);

