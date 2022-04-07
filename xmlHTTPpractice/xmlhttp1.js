/**
 * https://jsonplaceholder.typicode.com/users
 */

const btn = document.getElementById("button");
const table = document.getElementById('table');

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.readyState
xhr.onreadystatechange = () => {

    if (xhr.readyState == 4){
        const responseData = xhr.responseText; // string 형태로 받게됨
        const parsedData = JSON.parse(responseData);
        

        for (let i = 0; i < parsedData.length; i++){
            
            const newRow = table.insertRow();
            
            
            const newCell1 = newRow.insertCell(0);
            const newCell2 = newRow.insertCell(1);
            const newCell3 = newRow.insertCell(2);
            
            newCell1.innerText = parsedData[i].id;
            newCell2.innerText = parsedData[i].name;
            newCell3.innerText = parsedData[i].address.zipcode;

        }
    }
};


btn.addEventListener('click', () => {
    xhr.send();
});
