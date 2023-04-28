import {postCategory} from "./script.js";

let form = document.querySelector("form")
let inputName = document.querySelector("#name")
let inputTitle = document.querySelector("#title")
let inputCountry = document.querySelector("#country")
let formGroup=document.querySelector(".nuray")



if (inputName.value.trim() == "" && inputTitle.value.trim() == "" && inputCountry.value.trim() == "") {
    let error = document.createElement("small")
    error.classList.add("form-text")
    error.classList.add("text-danger")
    formGroup.append(error)
}
else {

    form.addEventListener("submit", async function (e) {
        e.preventDefault()
        const supply = {
            contactName: inputName.value,
            contactTitle: inputTitle.value,
            address: { country: inputCountry.value }
        };
        inputName.value = "",
            inputTitle.value = "",
            inputCountry.value = ""

        await postCategory(supply)

        window.location.href = "http://127.0.0.1:5500/index.html"
    })
}
