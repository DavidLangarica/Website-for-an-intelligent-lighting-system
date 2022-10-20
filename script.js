var ctr = 0;
var ctr_habs = 0;
var subrooms_ctr = 0;
var subrooms_ctr_sch = 0;
var clicks = [0,0,0,0,0,0,0,0,0,0,0];
var clicks_sch = [0,0,0,0,0,0,0,0,0,0,0];

function button_color(id,num){
    if(num < 7){
        if (clicks[num] == 0){
            id.style.backgroundColor = '#F8BA5F';
            ctr +=1 ;
            document.getElementById('on_rooms').innerHTML = ctr;
            clicks[num] = 1;
        }
        else{
            id.style.backgroundColor = '#C3C3C3';
            ctr -=1 ;
            document.getElementById('on_rooms').innerHTML = ctr;
            clicks[num] = 0;
        }
    }
    else{
        if (clicks[num] == 0){
            id.style.backgroundColor = '#F8BA5F';
            ctr += 1;
            document.getElementById('on_rooms').innerHTML = ctr;
            subrooms_ctr += 1;
            document.getElementById('number_rooms').innerHTML = subrooms_ctr;
            clicks[num] = 1;
        }
        else{
            id.style.backgroundColor = '#C3C3C3';
            ctr-=1;
            document.getElementById('on_rooms').innerHTML = ctr;
            subrooms_ctr -= 1;
            document.getElementById('number_rooms').innerHTML = subrooms_ctr;
            clicks[num] = 0;
        }

        if(subrooms_ctr > 0){
            document.getElementById('room_number').style.backgroundColor = '#F8BA5F';

            if(subrooms_ctr == 4){
                document.getElementById('button_many_rooms').style.backgroundColor = '#F8BA5F';
            }
            else{
                document.getElementById('button_many_rooms').style.backgroundColor = '#C3C3C3';
            }
        }
        else{
            document.getElementById('room_number').style.backgroundColor = '#C3C3C3';
        }
    }
}

function button_color_rooms(){
    document.getElementById('pop_rooms').style.visibility = 'visible';
}

function close_roomswindow(){
    document.getElementById('pop_rooms').style.visibility = 'hidden';
    document.getElementById('popup_schedule').style.visibility = 'hidden';
    document.querySelector('.pp2rooms_normal').style.visibility = 'hidden';
    document.getElementById('pp2_rooms').style.visibility = 'hidden';
    clear_sch_time();
    clear_sch_buttons();
    for (var i = 0; i < 11; i++){
        clear_array_sch_counters(i)
    }
}

function schedule(){
    document.getElementById('popup_schedule').style.visibility = 'visible';
    document.querySelector('.pp2rooms_normal').style.visibility = 'visible';
}

function button_color_sch(id,num){
    if(num < 7){
        if (clicks_sch[num] == 0){
            id.style.backgroundColor = '#5f97f8';
            clicks_sch[num] = 1;
            ctr_habs +=1 ;
            document.getElementById('num_habs').innerHTML = ctr_habs;
        }
        else{
            id.style.backgroundColor = '#C3C3C3';
            clicks_sch[num] = 0;
            ctr_habs -=1 ;
            document.getElementById('num_habs').innerHTML = ctr_habs;
        }
    }
    else{
        if (clicks_sch[num] == 0){
            id.style.backgroundColor = '#5f97f8';
            subrooms_ctr_sch += 1;
            document.getElementById('number_rooms_static').innerHTML = subrooms_ctr_sch;
            clicks_sch[num] = 1;

            ctr_habs +=1 ;
            document.getElementById('num_habs').innerHTML = ctr_habs;
        }
        else{
            id.style.backgroundColor = '#C3C3C3';
            subrooms_ctr_sch -= 1;
            document.getElementById('number_rooms_static').innerHTML = subrooms_ctr_sch;
            clicks_sch[num] = 0;

            ctr_habs -=1 ;
            document.getElementById('num_habs').innerHTML = ctr_habs;
        }

        if(subrooms_ctr_sch > 0){
            document.getElementById('sch_rooms').style.backgroundColor = '#5f97f8';

            if(subrooms_ctr_sch == 4){
                document.getElementById('sch_rooms').style.backgroundColor = '#5f97f8';
            }
            else{
                document.getElementById('sch_rooms').style.backgroundColor = '#C3C3C3';
            }
        }
        else{
            document.getElementById('sch_rooms').style.backgroundColor = '#C3C3C3';
        }
    }
}

function sch_rooms(){
    document.getElementById('pp2_rooms').style.visibility = 'visible';
    document.querySelector('.pp2rooms_normal').style.visibility = 'hidden';
}

function sch_rooms_back(){
    document.getElementById('pp2_rooms').style.visibility = 'hidden';
    document.querySelector('.pp2rooms_normal').style.visibility = 'visible';
}

function clear_sch_time(){
    document.getElementById('startTime').value = '';
    document.getElementById('endTime').value = '';
}

function clear_sch_buttons(){
    document.getElementById('brooms_stat0').style.backgroundColor = '#C3C3C3';
    document.getElementById('brooms_stat1').style.backgroundColor = '#C3C3C3';
    document.getElementById('brooms_stat2').style.backgroundColor = '#C3C3C3';
    document.getElementById('brooms_stat3').style.backgroundColor = '#C3C3C3';
    document.getElementById('brooms_stat4').style.backgroundColor = '#C3C3C3';
    document.getElementById('brooms_stat5').style.backgroundColor = '#C3C3C3';
    document.getElementById('brooms_stat6').style.backgroundColor = '#C3C3C3';
    document.getElementById('brooms_stat7').style.backgroundColor = '#C3C3C3';
    document.getElementById('brooms_stat8').style.backgroundColor = '#C3C3C3';
    document.getElementById('brooms_stat9').style.backgroundColor = '#C3C3C3';
    document.getElementById('brooms_stat10').style.backgroundColor = '#C3C3C3';

    document.getElementById('sch_rooms').style.backgroundColor = '#C3C3C3';

    subrooms_ctr_sch = 0;
    document.getElementById('number_rooms_static').innerHTML = subrooms_ctr_sch;

    ctr_habs = 0;
    document.getElementById('num_habs').innerHTML = ctr_habs;
}

function clear_array_sch_counters(num){
    clicks_sch[num] = 0;
}