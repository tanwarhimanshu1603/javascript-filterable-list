import contactList from './contactList.json' assert {type: 'json'}

const showList = (list) => {
    const userListDiv = document.getElementById('userListDiv');
    userListDiv.innerHTML = `<ul id='userList'></ul>`;
    const userList = document.getElementById('userList')
    list.map((name) => {
        const newUser = document.createElement('li');
        newUser.innerHTML = `<li>${name[0].toUpperCase() + name.slice(1)}</li>`;
        userList.appendChild(newUser);
    });
}

const showUpdatedList = (e) => {
    const val = e.target.value;
    if(e.target.value===''){
        showList(contactList);
        return;
    }
    const filteredList = contactList.filter((name) =>  name.toLowerCase().startsWith(val.toLowerCase()));
    showList(filteredList);
}

const userInput = document.getElementById('userInput')

userInput.addEventListener('input',showUpdatedList)

showList(contactList);