/*верстка верхнего блока*/
let headOne = ` <div class="head">
                        <h1>Велосипед STELS Navigator 510 HD 26 2022</h1>
                        <div>
                          <p>Данный велосипед с колесами 26 дюймов хорошо подходит высоким подросткам. Прогиб рамы и
                            небольшой
                            размер
                            рамы расчитан на рост от 135 до 165 см.
                          </p>
                        </div>
                        <div>
                            <p>Суммарный вес велосипеда был снижен до 16,9 кг, так как рама была изготовлена с учетом
                                использования
                                велосипеда подростками.</p>
                        </div>
                    </div>`
let headTwo = `<div class="head">
                        <h1>Велосипед SCHWINN Traveler women 2022</h1>
                        <div>
                            <div><p>Женский велосипед со стальной рамой Classic step-true lightweight позволяет девушкам
                                    без проблем
                                    его перемещать.
                                  </p>
                            </div>
                            <div><p>На данном велосипеде имеется 7 скоростей с переключателями от Shimano, а жесткая
                                    вилка
                                    обеспечивает отличную управляемость. Подходит для катания по асфальтированным
                                    поверхностям.
                                  </p>
                            </div>
                        </div>
                    </div>`


let articleOne = `<article class="accordion-body"><img src="image/mobileStels.jpg" alt="photo"> ${headOne} </article>`
let articleTwo = `<article class="accordion-body"><img src="image/mobileSchwinn.jpg" alt="photo"> ${headTwo} </article>`

/*верстка блока  Характеристики */
let mainOne = ` <hr>
                <section class="selection">
                    <h3>Характеристики</h3>
                    <ol  class="text-wrap">
                        <li><p class="text-item"> Двойной обод</p></li>
                        <li><p class="text-item">Алюминиевый сплав</p></li>
                        <li><p class="text-item">Колеса диаметром 26 дюймов</p></li>
                        <li><p class="text-item">Покрышки 26х1,95"</p></li>
                    </ol>
                </section>
                <section class="selection">
                    <h3>Добавить характеристику</h3>
                    <input class="input-wrap" type="text"  placeholder="Алюминиевый сплав">
                    <button type="submit" class="add">Добавить</button>
                    <p class="validation">Строка не может быть пустой</p>
                </section>
                <section class="selection selection-completed">
                    <button class="selection-completed-add"  >Окей</button>
                    <button class="selection-completed-cancel">Отмена</button>
                </section>`
let mainTwo = `<hr>
                <section class="selection">
                    <h3>Характеристики</h3>
                    <ul class="text-wrap-ul">
                        <li><p class="text-item text-item-ul">Стальная рама</p></li>
                        <li><p class="text-item text-item-ul">Жесткая вилка</p></li>
                        <li><p class="text-item text-item-ul">Колеса диаметром 24 дюймов</p></li>
                        <li><p class="text-item text-item-ul">7 скоростей</p></li>
                    </ul>
                </section>
                <section class="selection selection-add">
                    <h3>Добавить характеристику</h3>
                    <input class="input-wrap-ul input-wrap" type="text"  placeholder="Алюминиевый сплав">
                    <button type="submit" class="add-ul add">Добавить</button>
                    <p class="validation-ul">Строка не может быть пустой</p>
                </section>
                <section class="selection selection-completed ">
                    <button class="selection-completed-add"  type="button">Окей</button>
                    <button class="selection-completed-cancel selection-completed-cancel-ul"  type="button">Отмена</button>
                </section>`
/*сборка блоков*/
let mainAccordOne = `${articleOne} ${mainOne}`
let mainAccordTwo = `${articleTwo} ${mainTwo}`

let mainTab = `<main class="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                  <article><img src="image/stelsNavigator.jpg"  alt="photo1"> ${headOne}</article> ${mainOne}
               </main>
               <main class="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <article><img src="image/schwinnWoman.jpg" alt="photo2"> ${headTwo}</article> ${mainTwo}
                </main>`

let clientWidth = document.documentElement.clientWidth
/* мобильная версия*/
if (clientWidth < 375) {
    document.querySelector(".understatedTwo").style.display = "block"
    document.querySelector(".understated").style.display = "none"

    document.getElementById("collapseOne").insertAdjacentHTML("afterbegin", mainAccordOne)
    document.getElementById("collapseTwo").insertAdjacentHTML("afterbegin", mainAccordTwo)
}
/*десктопная версия*/
if (clientWidth >= 375) {
    document.getElementById("myTabContent").insertAdjacentHTML("afterbegin", mainTab)

    document.querySelector(".understated").style.display = "block"
    document.querySelector(".understatedTwo").style.display = "none"
}

let addition = ""
let textInput = document.querySelector(".input-wrap")
textInput.addEventListener("click", function () {
    textInput.value = ""
})

/*добавление характеристики*/
document.querySelector(".add").addEventListener("click", function () {
    addition = textInput.value
    document.querySelector(".text-wrap").innerHTML += '<li> <p class="text-item">' + addition + '</p></li>'

    if (addition !== null && typeof addition !== "undefined") {
        addition = addition.trim();
    }
    if (!addition) {
        let arrayLi = []
        document.querySelectorAll(".text-wrap li").forEach(el => {
            arrayLi.push(el)
        })
        arrayLi[arrayLi.length - 1].style.listStyleImage = "none";
        arrayLi[arrayLi.length - 1].style.listStyleType = "none";
        document.querySelector(".validation").style.display = "block"
    } else {
        document.querySelector(".validation").style.display = "none"
    }
})

/*очищаем блок Характеристики при нажатии на кнопку  Отменить*/
document.querySelector(".selection-completed-cancel").addEventListener("click", function () {
    document.querySelector(".text-wrap").innerHTML = ""
})

/*очистка блока Характеристики при клике по инпуту*/
let additionUl = ""
let textInputUl = document.querySelector(".input-wrap-ul")
textInputUl.addEventListener("click", function () {
    textInputUl.value = ""
})

/*добавление характеристики*/
document.querySelector(".add-ul").addEventListener("click", function () {
    additionUl = textInputUl.value
    document.querySelector(".text-wrap-ul").innerHTML += '<li> <p class="text-item-ul">' + additionUl + '</p></li>'

    if (additionUl !== null && typeof additionUl !== "undefined") {
        additionUl = additionUl.trim();

    }
    /* проверка на пустую строку*/
    if (!additionUl) {
        let arr = []
        document.querySelectorAll(".text-wrap-ul li").forEach(el => {
            arr.push(el)
        })
        arr[arr.length - 1].style.listStyleImage = "none";
        arr[arr.length - 1].style.listStyleType = "none";
        document.querySelector(".validation-ul").style.display = "block"
    } else {
        document.querySelector(".validation-ul").style.display = "none"
    }
})

/*очищаем блок Характеристики при нажатии на кнопку  Отменить*/
document.querySelector(".selection-completed-cancel-ul").addEventListener("click", function () {
    document.querySelector(".text-wrap-ul").innerHTML = ""
})






