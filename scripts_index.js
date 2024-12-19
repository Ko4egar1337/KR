var list = [{link: 'event_1.html', name: "COVID-19", date: 1, popularity: 3, picture: "./src/img/covid.webp", desc: "COVID-19, также известный как коронавирус, стал одним из самых серьезных вызовов для человечества в XXI веке. Этот вирус был впервые обнаружен в городе Ухань, провинция Хубэй, Китай в декабре 2019 года и быстро распространился по всему миру, вызывая пандемию." },
            {link: 'event_2.html', name: "Террористические акты 11 сентября", date: 2, popularity: 2, picture: "./src/img/towers_2.jpg", desc: "11 сентября – это дата, которая навсегда останется в памяти многих людей как день одного из самых ужасных террористических актов в истории. Этот день стал чёрным на фоне мировой истории из-за серии координированных терактов, совершенных в Соединенных Штатах Америки."},
            {link: 'event_3.html', name: "Война в Ираке 2003-2011", date: 3, popularity: 1, picture: "./src/img/usa_abrams.jpg", desc: "Война в Ираке, также известная как вторая иракская война или операция \"Иракская свобода\", была вооруженным конфликтом, который начался в марте 2003 года и завершился в декабре 2011 года. Этот конфликт в основном был вызван вторжением коалиции возглавляемой США в Ирак, который был оправдан угрозой ядерного оружия, массового уничтожения, связей с террористическими организациями и нарушениями прав человека со стороны правительства Саддама Хусейна."},
            {link: 'event_4.html', name: "Мировой экономический кризис", date: 4, popularity: 5, picture: "./src/img/recession.webp", desc: "Экономический кризис 2008 года, также известный как Великая рецессия, был одним из самых серьезных и глобальных экономических кризисов с начала XXI века. Причиной кризиса стала коллапс рынка ипотечного кредитования в США, который повлек за собой цепную реакцию по всему миру."},
            {link: 'event_5.html', name: "Изобретение смартфонов", date: 5, popularity: 4, picture: "./src/img/iphone.jpg", desc: "Сегодня смартфоны стали неотъемлемой частью нашей жизни. Мы используем их для общения в социальных сетях, просмотра видео, игр, звонков, отправки сообщений, совершения покупок и многих других целей. Благодаря постоянному развитию технологий, смартфоны становятся все более мощными, функциональными и удобными."}
            ];

function get_random_int()
{
    return Math.floor(Math.random() * list.length);
}            

document.getElementById("random_article").addEventListener("click", function()
{
    let url = list[get_random_int()]["link"];
    console.log(url);

    this.href = url;
}
);

document.getElementById("random_article_bottom").addEventListener("click", function()
{
    let url = list[get_random_int()]["link"];
    console.log(url);

    this.href = url;
}
);

document.getElementById("random_article_aside").addEventListener("click", function()
{
    let url = list[get_random_int()]["link"];
    console.log(url);

    this.href = url;
}
);

document.getElementById("random_card").addEventListener("click", function()
{
    let url = list[get_random_int()]["link"];
    console.log(url);

    window.location.href = url;
}
);


//alert("Hello! I am an alert box!!");

// if (document.getElementById("rand_info_add") != null)
// {
random_article();
// }

function random_article()
{
    rand_number = get_random_int();

    while (rand_number == 0)//
    {
        rand_number = get_random_int();
    }

    temp_html_string = `<div><span class="core_name"> <a href="${list[rand_number]["link"]}" style="color: white; text-decoration: none;"> ${list[rand_number]["name"]} </a> </span> 
                    <div class="section_div">
                    <img class="article_div_img" src="${list[rand_number]["picture"]}">
                    <p class="article_desc">
                        ${list[rand_number]["desc"]}
                    </p>
                    </div>
                    </div>`;

    

    (document.getElementById("rand_info_add")).innerHTML = temp_html_string;


}







// function printMousePos(event) {
//     temp = "clientX: " + event.clientX + " - clientY: " + event.clientY;

//     console.log(temp);

    
//   }
  
//   document.addEventListener("click", printMousePos);




//14

//   window.addEventListener('click', function(event)
//         {
//             //let new_elem = this.document.createElement('div');
//             let new_elem = document.createElement('div');

//             new_elem.style.position = 'absolute';
//             new_elem.style.width = "100px";
//             new_elem.style.height= "100px";
//             new_elem.style.border= "1px solid black";
//             new_elem.style.backgroundColor= "rgba(23,164,226,0.5)";
//             new_elem.style.pointerEvents= "none";
//             new_elem.style.borderRadius= "50%";
//             new_elem.style.backgroundImage= "url(./src/img/dices.png)"
//             new_elem.style.backgroundPosition= "center";
//             new_elem.style.backgroundSize= "80%";
//             new_elem.style.backgroundRepeat= "no-repeat";

//             let W = parseInt(new_elem.style.width, 10);
//             let H = parseInt(new_elem.style.height, 10);
                

//             new_elem.style.left = (event.pageX - W / 2) + 'px';
//             new_elem.style.top = (event.pageY - H / 2) + 'px';
                
            

//             console.log(event.pageX, event.pageY);

//             this.document.body.appendChild(new_elem);
            
//             this.setTimeout(function(){new_elem.remove();}, 500)

                


//         }
//     );



