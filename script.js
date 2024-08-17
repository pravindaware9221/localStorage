function login() {
    const userName = document.getElementById("InputText");
    const Name = userName.value;

    localStorage.setItem("Name", Name);
    if (!Name) {
        alert("Enter UserName")
        return;
    }

    const result = document.getElementById("result")
    result.innerText = (`Hello ! ${Name}`)

    const bttnElement = document.getElementById("Bttn")
    bttnElement.style.display = 'none';
    userName.style.display = 'none';

    const btnElement = document.getElementById("Btn")
    btnElement.classList.remove('btn2')


}

function loginOut() {
    localStorage.removeItem("Name")
    location.reload()

}
