function get_random_int()
{
    return Math.floor(Math.random() * list.length);
}

function compare_by_date(a, b)
{
    if (a["date"] < b["date"])
    {
        return -1;
    }
    if (a["date"] > b["date"])
    {
        return 1;
    }
    return 0;
}

function compare_by_popularity(a, b)
{
    if (a["popularity"] < b["popularity"])
        {
            return -1;
        }
        if (a["popularity"] > b["popularity"])
        {
            return 1;
        }
        return 0;
}

function compare_by_name(a, b)
{
    const a_name = a.name;
    const b_name = b.name;

    if (a_name < b_name)
        {
            return -1;
        }
        if (a_name > b_name)
        {
            return 1;
        }
        return 0;
}

document.getElementById("random_article").addEventListener("click", function()
{
    var url = list[get_random_int()]["link"];
    console.log(url);

    this.href = url;
}
);

var list = [{id: "event_1", link: './event_1.html', name: "COVID-19", date: 1, popularity: 3, picture: "./src/img/covid.webp", desc: "COVID-19, также известный как коронавирус, стал одним из самых серьезных вызовов для человечества в XXI веке. Этот вирус был впервые обнаружен в городе Ухань, провинция Хубэй, Китай в декабре 2019 года и быстро распространился по всему миру, вызывая пандемию.", is_fav: null },
            {id: "event_2", link: './event_2.html', name: "Террористические акты 11 сентября", date: 2, popularity: 2, picture: "./src/img/towers_2.jpg", desc: "11 сентября – это дата, которая навсегда останется в памяти многих людей как день одного из самых ужасных террористических актов в истории. Этот день стал чёрным на фоне мировой истории из-за серии координированных терактов, совершенных в Соединенных Штатах Америки.", is_fav: null},
            {id: "event_3", link: './event_3.html', name: "Война в Ираке 2003-2011", date: 3, popularity: 1, picture: "./src/img/usa_abrams.jpg", desc: "Война в Ираке, также известная как вторая иракская война или операция \"Иракская свобода\", была вооруженным конфликтом, который начался в марте 2003 года и завершился в декабре 2011 года. Этот конфликт в основном был вызван вторжением коалиции возглавляемой США в Ирак, который был оправдан угрозой ядерного оружия, массового уничтожения, связей с террористическими организациями и нарушениями прав человека со стороны правительства Саддама Хусейна.", is_fav: null},
            {id: "event_4", link: './event_4.html', name: "Мировой экономический кризис", date: 4, popularity: 5, picture: "./src/img/recession.webp", desc: "Экономический кризис 2008 года, также известный как Великая рецессия, был одним из самых серьезных и глобальных экономических кризисов с начала XXI века. Причиной кризиса стала коллапс рынка ипотечного кредитования в США, который повлек за собой цепную реакцию по всему миру.", is_fav: null},
            {id: "event_5", link: './event_5.html', name: "Изобретение смартфонов", date: 5, popularity: 4, picture: "./src/img/iphone.jpg", desc: "Сегодня смартфоны стали неотъемлемой частью нашей жизни. Мы используем их для общения в социальных сетях, просмотра видео, игр, звонков, отправки сообщений, совершения покупок и многих других целей. Благодаря постоянному развитию технологий, смартфоны становятся все более мощными, функциональными и удобными.", is_fav: null}
            ];


var current_sort = "popularity";

function is_fav_by_the_beginning()
{
    
    for (let i = 0; i < list.length; i++)
        {
            let temp_index = list.findIndex(element => element["id"] == `event_${i+1}`)

            if ((localStorage.getItem(`event_${i+1}`) == null) || (localStorage.getItem(`event_${i+1}`) == "false"))
            {
                localStorage.setItem(`event_${i+1}`, "false");
                list[temp_index]["is_fav"] = false;
            }
            else
            {
                list[temp_index]["is_fav"] = true;
            }
        }
        
}



function get_fav(e, a)
{
    
    if ((localStorage.getItem(`event_${a+1}`) == "false") || (localStorage.getItem(`event_${a+1}`) == null))
    {
        localStorage.setItem(`event_${a+1}`, "true");
    }
    else
    {
        localStorage.setItem(`event_${a+1}`, "false");
    }


    //
    if (current_sort == "popularity")
    {
        sort_by_popularity();
    }
    else if (current_sort == "name")
    {
        sort_by_name();
    }
    else
    {
        sort_by_date();
    }
}






sort_by_the_beginning();

document.getElementById("sort_by_popularity").addEventListener("click", sort_by_popularity);
document.getElementById("sort_by_name").addEventListener("click", sort_by_name);
document.getElementById("sort_by_date").addEventListener("click", sort_by_date);


//alert("Hello! I am an alert box!!");

    // localStorage.setItem(`event_1`, "false");
    // localStorage.setItem(`event_2`, "false");
    // localStorage.setItem(`event_3`, "false");
    // localStorage.setItem(`event_4`, "false");
    // localStorage.setItem(`event_5`, "false");



function sort_by_the_beginning()
{
    
    is_fav_by_the_beginning();

    list.sort(compare_by_popularity);

    const main = document.getElementById('add_to_me');

    let html_string = "";




    for (let i = 0; i < list.length; i++)
    {
        html_string += `<div id="${list[i]["id"]}" class="box">
                    <div class="img_wrap"> <div class="event_list_img" style="background-image: url(${list[i]["picture"]})"> </div> </div>
                    <div class="event_list_link"> <a href="${list[i]["link"]}"> ${list[i]["name"]} </a> </div>
                    <div class="event_list_desc"> ${list[i]["desc"]} </div>`;

                    if ((list[i]["is_fav"] == false) || (list[i]["is_fav"] == null))
                    {
                        //id = fav_button_event_i
                        html_string += `<div id="fav_button_${list[i]["id"]}" class="event_list_favourite"> <img class="favourite_button" src="./src/img/hollow_heart.png"> </div> </div>`;
                    } 
                    else
                    {
                        html_string += `<div id="fav_button_${list[i]["id"]}" class="event_list_favourite active"> <img class="favourite_button" src="./src/img/hollow_heart.png"> </div> </div>`;
                    } 
                    
    }

    main.innerHTML = html_string;

    //
    fav_buttons = document.querySelectorAll(".event_list_favourite");

    for (let i = 0; i < list.length; i++) 
    {
        document.getElementById(`fav_button_event_${i+1}`).addEventListener("click", event => get_fav(event, i));
    }
}







function sort_by_popularity()
{
    sort_button_onclick("popularity");
}

function sort_by_name()
{
    sort_button_onclick("name");
}

function sort_by_date()
{
    sort_button_onclick("date");
}


function sort_button_onclick(sort_by_type)
{
    
    is_fav_by_the_beginning();

    if (sort_by_type == "popularity")
    {
        list.sort(compare_by_popularity);
    }
    else if (sort_by_type == "name")
    {
        list.sort(compare_by_name);
    }
    else
    {
        list.sort(compare_by_date);   
    }

    for (let i = 0; i < list.length; i++)
    {
        let temp_id = list[i]["id"];

                
        (document.getElementById("add_to_me")).removeChild(document.getElementById(temp_id));
    }

    let html_string = "";

    


    for (let i = 0; i < list.length; i++)
    {
        html_string += `<div id="${list[i]["id"]}" class="box">
                    <div class="img_wrap"> <div class="event_list_img" style="background-image: url(${list[i]["picture"]})"> </div> </div>
                    <div class="event_list_link"> <a href="${list[i]["link"]}"> ${list[i]["name"]} </a> </div>
                    <div class="event_list_desc"> ${list[i]["desc"]} </div>`;

                    if (list[i]["is_fav"] == false)
                    {
                        html_string += `<div id="fav_button_${list[i]["id"]}" class="event_list_favourite"> <img class="favourite_button" src="./src/img/hollow_heart.png"> </div> </div>`;

                    } 
                    else
                    {
                        html_string += `<div id="fav_button_${list[i]["id"]}" class="event_list_favourite active"> <img class="favourite_button" src="./src/img/hollow_heart.png"> </div> </div>`;
                    } 
    }

    (document.getElementById("add_to_me")).innerHTML = html_string;

    //
    fav_buttons = document.querySelectorAll(".event_list_favourite");

    for (let i = 0; i < list.length; i++) 
        {
            document.getElementById(`fav_button_event_${i+1}`).addEventListener("click", event => get_fav(event, i));
        }

    current_sort = sort_by_type;
}










// for (let i = 0; i < list.length; i++) 
// {
//     document.getElementById(`fav_button_event_${i}`).addEventListener("click", event => get_fav(event, i));
//     document.getElementById(`fav_button_event_${i}`).addEventListener("click", print_all_local_storage);
// }






function print_all_local_storage()
{
    for (let i = 0; i < list.length; i++)
    {
        console.log(localStorage.getItem(`event_${i+1}`));
    }
}































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


    



