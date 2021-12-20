let includedHeader = document.querySelector('header'); // находим хедер в коде
includedHeader.insertAdjacentHTML("afterbegin", `
<div id="header">
    <a href="index.html" >
        <svg class="logo" viewBox="0 0 104 94" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5969 19.1214C14.5284 29.9705 9.8158 54.1778 23.5129 64.2132C40.6342 76.7576 58.3959 69.167 60.8069 68.1122C63.5192 66.9255 80.9796 57.4325 75.555 25.7326C69.0003 31.6092 49.4492 43.871 25.2081 45.5662" stroke="#B59177" stroke-width="2"/>
        <path d="M15.0371 48.787C21.2528 56.4718 40.0919 70.3497 67.0792 63.7046" stroke="#B59177" stroke-width="2"/>
        <path d="M14.8677 38.6159C23.1176 45.9617 46.7032 58.4495 75.0467 49.6346" stroke="#B59177" stroke-width="2"/>
        <path d="M18.4275 19.2907C22.8915 26.7495 38.7019 39.972 66.2316 32.5132" stroke="#B59177" stroke-width="2"/>
        <path d="M29.4463 24.3765C35.0969 27.9364 50.0936 33.5305 64.8756 27.4278C60.5246 22.3423 47.3474 14.6122 29.4463 24.3765Z" fill="#B59177" stroke="#B59177" stroke-width="2"/>
        <path d="M68.7743 3.52566C69.9948 8.95025 64.8754 13.5837 62.1631 15.2224L70.639 17.9347C77.4197 13.8663 80.019 5.61639 80.4711 2L68.7743 3.52566Z" stroke="#B59177" stroke-width="2"/>
        <path d="M47.0761 81.165C8.69713 83.606 2.94481 68.5076 4.86601 60.6533C-7.16979 74.5538 9.27349 95.4045 48.9408 92.5227C80.6746 90.2172 97.536 80.0349 102 75.2318L91.8289 67.095C75.2839 76.8592 55.0999 80.5434 47.0761 81.165Z" stroke="#B59177" stroke-width="2"/>
        </svg>            
    </a>

   <div class="contacts">
        <ul class="topmenu1">
            <li><a href="#">
                    <div>КОНТАКТЫ</div>
                    <img class="cluv_contacts" src="./img/стрелка вниз.png">
                </a>
                <ul class="submenu1">
                    <li><a href="#">+375&nbsp;33&nbsp;319&nbsp;88&nbsp;97&nbsp;(мтс)</a></li>
                    <li><a href="#">+375&nbsp;25&nbsp;629&nbsp;72&nbsp;39&nbsp;(life)</a></li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="adress">
        <ul class="topmenu2">
            <li><a href="#">
                    <div>АДРЕСА</div>
                    <img class="cluv_adress" src="./img/стрелка вниз.png"> 
                </a>
                <ul class="submenu2">
                    <li><a href="#">ул.&nbsp;Гоголя,&nbsp;82</a>
                    <img class="cluv1_adress" src="./img/стрелка влево.png">

                        <ul class="submenu2">
                            <li><a href="">Пн - Пт | 8:00-20:00<br>Сб - Вс | 11:00-20:00</a></li>
                        </ul>
                    </li>
                    <li><a href="#">ул.&nbsp;Московская,&nbsp;245</a>
                    <img class="cluv1_adress" src="./img/стрелка влево.png">
                        <ul class="submenu2">
                            <li><a href="#">Вс - Чт | 9:00-21:00<br>Пт - Сб | 10:00-22:00</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

    

</div>`);


let includedFooter = document.querySelector('footer'); // находим хедер в коде
includedFooter.insertAdjacentHTML("afterbegin", `
<div class="footer">
    <div class="inst">
        <div class="inst_txt">
            Подпишитесь&nbsp;на&nbsp;нас&nbsp;в&nbsp;<a href="https://www.instagram.com/kokon_brest/?hl=ru">Instagram</a>
        </div>
        <div class="photo">
            <div class="inst13">
                <a href="https://www.instagram.com/p/CUeraZZrlbp/"><img class="inst1" src="./img/kokon_brest-20211007-0001.jpg"></a>
                <a href="https://www.instagram.com/p/CUULXVaMqw0/"><img class="inst2" src="./img/kokon_brest-20211007-0002.jpg"></a>
                <a href="https://www.instagram.com/p/CUNKd_jMYkk/"><img class="inst3" src="./img/kokon_brest-20211007-0003.jpg"></a>
            </div>
            <div class="inst46">
                <a href="https://www.instagram.com/p/CUHTgkKMPhp/"><img class="inst4" src="./img/kokon_brest-20211007-0004.jpg"></a>
                <a href="https://www.instagram.com/p/CT4L81iM3d_/"><img class="inst5" src="./img/kokon_brest-20211007-0005.jpg"></a>
                <a href="https://www.instagram.com/p/CTy17S4s14a/"><img class="inst6" src="./img/kokon_brest-20211007-0006.jpg"></a>
            </div>
        </div>
    </div>

    <div class="footer_logo">        
         <a href="index.html">
            <div class="logo_footer">           
                    <img class="logo_footer_img" src="./img/лого brown.png">
                    <div class="logo_footer_txt">КОКОН</div>                
            </div>
        </a> 
        <div class="footer_content">
            <div class="content"><a href="меню.html">Меню</a></div>
            <div class="content"><a href="новинки.html">Новинки</a></div>
            <div class="content"><a href="о нас.html">О нас</a></div>
        </div>
    </div>
    <hr>
    <div class="developer">Разработка сайта uliana_kreidich</div>


</div>`);

// let contactClick = document.body.querySelector(".topmenu1");
// let subMenu = document.body.querySelector(".submenu1");
// contactClick.addEventListener("click", () => {
//     console.log("click");
//     //subMenu.classList.toggle("is_open");
// });