const btn = document.getElementById("button");
const table = document.getElementById('table');

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

const idArr = [];
const nameArr = [];
const addressArr = [];

xhr.send();
xhr.onreadystatechange = () => {

    if (xhr.readyState == 4){
        const responseData = xhr.responseText;
        const parsedData = JSON.parse(responseData);
        
        for (let i = 0; i < parsedData.length; i++){
            idArr.push(parsedData[i].id);
            nameArr.push(parsedData[i].name);
            addressArr.push(parsedData[i].address.zipcode);
        }
    }
};

let i = 0;
btn.addEventListener('click', () => {

    if (i == 0){
        for (let i = 0; i < addressArr.length; i++){
            
            const newRow = table.insertRow();
            
            const newCell1 = newRow.insertCell(0);
            const newCell2 = newRow.insertCell(1);
            const newCell3 = newRow.insertCell(2);
            
            newCell1.innerText = idArr[i]
            newCell2.innerText = nameArr[i];
            newCell3.innerText = addressArr[i];

        }
        i = 1;
    }

    else {
        for (let i = addressArr.length; i > 0; i--){
            const newRow = table.deleteRow(i);
        }
        i = 0;
    }
});