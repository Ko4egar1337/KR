// var list_of_local_storage_var_names = [];

// var list_of_favs = [];

var list = [{id: "event_1", link: './event_1.html', name: "COVID-19", date: 1, popularity: 3, picture: "./src/img/covid.webp", desc: "COVID-19, также известный как коронавирус, стал одним из самых серьезных вызовов для человечества в XXI веке. Этот вирус был впервые обнаружен в городе Ухань, провинция Хубэй, Китай в декабре 2019 года и быстро распространился по всему миру, вызывая пандемию."},
    {id: "event_2", link: './event_2.html', name: "Террористические акты 11 сентября", date: 2, popularity: 2, picture: "./src/img/towers_2.jpg", desc: "11 сентября – это дата, которая навсегда останется в памяти многих людей как день одного из самых ужасных террористических актов в истории. Этот день стал чёрным на фоне мировой истории из-за серии координированных терактов, совершенных в Соединенных Штатах Америки."},
    {id: "event_3", link: './event_3.html', name: "Война в Ираке 2003-2011", date: 3, popularity: 1, picture: "./src/img/usa_abrams.jpg", desc: "Война в Ираке, также известная как вторая иракская война или операция \"Иракская свобода\", была вооруженным конфликтом, который начался в марте 2003 года и завершился в декабре 2011 года. Этот конфликт в основном был вызван вторжением коалиции возглавляемой США в Ирак, который был оправдан угрозой ядерного оружия, массового уничтожения, связей с террористическими организациями и нарушениями прав человека со стороны правительства Саддама Хусейна."},
    {id: "event_4", link: './event_4.html', name: "Мировой экономический кризис", date: 4, popularity: 5, picture: "./src/img/recession.webp", desc: "Экономический кризис 2008 года, также известный как Великая рецессия, был одним из самых серьезных и глобальных экономических кризисов с начала XXI века. Причиной кризиса стала коллапс рынка ипотечного кредитования в США, который повлек за собой цепную реакцию по всему миру."},
    {id: "event_5", link: './event_5.html', name: "Изобретение смартфонов", date: 5, popularity: 4, picture: "./src/img/iphone.jpg", desc: "Сегодня смартфоны стали неотъемлемой частью нашей жизни. Мы используем их для общения в социальных сетях, просмотра видео, игр, звонков, отправки сообщений, совершения покупок и многих других целей. Благодаря постоянному развитию технологий, смартфоны становятся все более мощными, функциональными и удобными."}
    ];








function check_local_storage_for_any_fav_vars()
{
    for (let i = 0; i < list.length; i++)
        if (localStorage.getItem(list[i]["id"]) == "true")
            return true;
    

    return false;
}




function show_list_of_fav_events()
{
    let main = document.getElementById("place_events_here");
    let temp_html_text = "";


    if (check_local_storage_for_any_fav_vars())
    {
        for (let i = 0; i < list.length; i++)
            {  

                temp_html_text += `<div class="container_div">`;


                if (localStorage.getItem(list[i]["id"]) == "true")
                {
                    temp_html_text += 
                    `<div class="img_wrap"> <div class="container_div_img" style="background-image: url(${list[i]["picture"]})"> </div> </div>      
                    <div class="container_div_name"> <a href="${list[i]["link"]}"> ${list[i]["name"]} </a> </div>     
                    <div class="container_div_desc"> ${list[i]["desc"]} </div>      
                    <div id="remove_event_${i+1}" class="remove_from_favs"> Удалить из избранного </div>`;
                }

                temp_html_text += `</div>`;
            }   

        console.log("est shit");

    }

    else
    {
        temp_html_text = 
        `<div class="container_div_empty"> 
            <span class="empty_info">
                Вы не сохраняли избранные статьи (
            </span>
            <span class="empty_info_hint">
                Чтобы добавить сюда статью, выберите их в списке событий
            </span>
        </div>`

        console.log("netu shita");
    }

    main.innerHTML = temp_html_text;

    remove_from_favs_button_onclick();
}









function remove_from_favs(e, temp)
{
    localStorage.setItem(temp, "false");

    

    console.log(`event_${temp} deleted`);

    show_list_of_fav_events();
}


function remove_from_favs_button_onclick()
{
    for (let i = 0; i < list.length; i++)
    {
        let temp = list[i]["id"];
        if (localStorage.getItem(temp) == "true")
        
        document.getElementById(`remove_event_${i+1}`).addEventListener("click", event => remove_from_favs(event, temp));
    }
}





show_list_of_fav_events();


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