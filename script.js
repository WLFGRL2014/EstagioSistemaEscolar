const calendar = document.querySelector(".calendar");
date = document.querySelector(".date");
daysContainer = document.querySelector(".days");
prev = document.querySelector(".prev");
    next = document.querySelector(".next");

let today = new Date();
let activeDay;
let month = today.getFullMonth();
let year = today.getFullYear();

const months = [
    "January" ,
    "February" ,
    "March" ,
    "April" ,
    "May" ,
    "June" ,
    "July" ,
    "August" ,
    "September" ,
    "October" ,
    "November" ,
    "December" ,
];

//funcao para add dias

function initCalendar(){
    //para pegar o meses anteriores e o atual todos os dias rem next month days
    const firstDay = new Date(year, month, 1);
    const lastDays = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
        const prevDays = prevLastDay.getDate();
        const lastDate = lastDay.getDate();
        const day = firstDay.getDay();
        const nextDays = 7 - lastDay.getDay() - 1;

        //atualiza a data no topo do calendario
        date.innerHTML = months[month] + " " + year;


        //adicionando dias dom

        let days = "";

        //mes anterior dias

        for(let x = day; x>0; x--){
            days += `<div class="day prev-date"> >${prevDays -x +1}</div>`;
        }

        //atual mes e dias

        for(let i = 1; i <= lastDate; i++){
            //se dia é hoje então add classe today
            if(i === new Date().getDate() &&
                year === new Date().getFullYear() && 
                month ===  new Date().getMonth()){
                days += `<div class="day today"> >${i}</div>`;
            }
            //adiciona o restante como são??
            else{
                days += `<div class="day"> >${i}</div>`;
            }
        }

        //prox mes dos dias

        for(let j = 1; j <= nextDays; j++){
            days += `<div class="day next-date"> >${j}</div>`;
        }

        daysContainer.innerHTML = days;
}

initCalendar();
