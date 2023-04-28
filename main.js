import { getAllCategories ,deleteCategoryByID} from "./script.js";

let tableRow = document.querySelector(".tablerow")

getAllCategories().then(data => {
    data.forEach(suppliers => {



        let tr = document.createElement("tr")


        let thID = document.createElement("th")
        thID.setAttribute("scope", "row")
        thID.innerText = suppliers.id

        let tdName = document.createElement("td")
        tdName.innerText = suppliers.contactName

        let tdTitle = document.createElement("td")
        tdTitle.innerText = suppliers.contactTitle

        let tdCountry = document.createElement("td")
        tdCountry.innerText = suppliers.address?.country
        


        let tdSetting = document.createElement("td")


        let warningBtn = document.createElement("button")
        warningBtn.classList.add("btn")
        warningBtn.classList.add("btn-warning")
        let icon1 = document.createElement("i")
        icon1.classList.add("fa-solid")
        icon1.classList.add("fa-pen")

        warningBtn.append(icon1)


        let dangerBtn = document.createElement("button")
        dangerBtn.classList.add("btn")
        dangerBtn.classList.add("btn-danger")
        let icon2 = document.createElement("i")
        icon2.classList.add("fa-solid")
        icon2.classList.add("fa-trash-can")
        dangerBtn.append(icon2)


        tdSetting.append(warningBtn, dangerBtn)
        tr.append(thID, tdName, tdTitle, tdCountry, tdSetting)
        tableRow.append(tr)


        dangerBtn.addEventListener("click", function () {
            let id=suppliers.id
            deleteCategoryByID(id)
            tr.remove()

        })

        warningBtn.addEventListener("click",function(){
       

         

        })


    });

})







