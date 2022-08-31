/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

let users;

function showUsersButton() {


    fetch("https://api.github.com/users")
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(data => {
            console.log(data);
            users = data;
            showUsers();
        })
        .catch(error => {
            console.error(error);
        });
}
function showUsers() {
    document.getElementById("message").hidden = true;
    const userContainer = document.getElementById("output");
    for (const user of users) {
        const userElement = document.createElement("div");
        userElement.style.border = "1px solid black";
        userElement.style.textAlign = "center";
        userElement.style.marginBottom = "5px";
        userElement.style.fontSize = "28px";
        userElement.innerHTML = `
        vardas: ${user.login} <br>
        avataras: <img src="${user.avatar_url}" style="width:30px"/>
        `;
        userContainer.append(userElement);
    }
}
