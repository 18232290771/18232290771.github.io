// 动态心跳，更改自己的名称
$(document).ready(function(e){
    $('.copyright').html('©2022 By Yae Miko');
})

$(document).ready(function(e){
    show_date_time();
})

//本站运行时间，更改自己建立站点的时间
function show_date_time(){
$('.framework-info').html('小站居然运行了<span id="span_dt_dt" style="color: #fff;"></span>');
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("12/14/2022 0:0:0");
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
span_dt_dt.innerHTML='<font style=color:white>'+daysold+'</font> 天 <font style=color:white>'+hrsold+'</font> 时 <font style=color:white>'+minsold+'</font> 分 <font style=color:white>'+seconds+'</font> 秒';
}