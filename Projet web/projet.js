

fetch("https://randomuser.me/api/?results=100")
.then(response => response.json())
.then(data => {
    var userData = data.results
    const userList = document.getElementById('user')
    data.results.forEach(user => {
        const itemList1 = document.createElement("li")
        itemList1.textContent = `Nom complet : ${user.name.title}. ${user.name.first} ${user.name.last}`
        userList.appendChild(itemList1);
        const itemList2 = document.createElement("li")
        itemList2.textContent = `N° de téléphone : ${user.phone}`
        userList.appendChild(itemList2);
        const itemList3 = document.createElement("img")
        itemList3.src = `${user.picture.large}` 
        userList.appendChild(itemList3);
        
    }); 
})



function buttonClickRandom() {
    fetch("https://randomuser.me/api/?results=100")
    .then(response => response.json())
    .then(data => {
        const userList = document.getElementById('user');
        
        const random = Math.floor(Math.random() * data.results.length);
        const user = data.results[random];

        const itemList1 = document.createElement("li");
        itemList1.textContent = `Nom complet : ${user.name.title}. ${user.name.first} ${user.name.last}`;
        userList.appendChild(itemList1);

        const itemList2 = document.createElement("li");
        itemList2.textContent = `N° de téléphone : ${user.phone}`;
        userList.appendChild(itemList2);

        const itemList3 = document.createElement("img");
        itemList3.src = `${user.picture.large}`;
        userList.appendChild(itemList3);

        const alertMessage = `Nom complet : ${user.name.title}. ${user.name.first} ${user.name.last}\nN° de téléphone : ${user.phone}`;
        alert(alertMessage);
    })
  }