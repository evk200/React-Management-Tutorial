


// 모바일 내비메뉴
jQuery(document).ready(function () {

//Open the menu
jQuery("#hamburger").click(function () {
    jQuery('nav').toggle();
    jQuery('.Nationwide').css("display","none");
    jQuery('.Chart').css("display","none");
});
});
$(document).ready(function(){
$("#Close_X,#Close_X2").click(function(){
    $(".Nationwide").css("display","none");
    $(".Chart").css("display","none");
});
$("#confirmedcase").click(function(){
    $(".Nationwide").css("display","block");
});
$("#m_confirmedcase").click(function(){
    $("nav").css("display","none");
    $(".Nationwide").css("display","block");
});
$("#Chart").click(function(){
    $(".Chart").css("display","block");
});
$("#m_Chart").click(function(){
    $("nav").css("display","none");
    $(".Chart").css("display","block");
});


});

/*Add class when scroll down*/
$(window).scroll(function(event){
var scroll = $(window).scrollTop();
if (scroll >= 50) {
    $(".go-top").addClass("show");
} else {
    $(".go-top").removeClass("show");
}
});
/*Animation anchor*/
$('.go-top').click(function(){
$('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
}, 1000);
});
// 코로나 확진자 수
$(document).ready(function(){

$.ajax({

    url: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=0OhBU7ZCGIobDVKDeBJDpmDRqK3IRNF6jlf%2FJB2diFAf%2FfR2czYO9A4UTGcsOwppV6W2HVUeho%2FFPwXoL6DwqA%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20210805&endCreateDt=20210810",              //ajax로 ajax_xml.xml파일을 불러온다.

    cache: false,                     //사용자캐시를 사용할 것인가.

    dataType: "xml",                  //서버로부터 받을 것으로 예상되는 데이터 타입.

    success: function(data){          //ajax요청을 통해 반환되는 데이터 data.

        $(data).find("items").each(function(){
            document.getElementById("entire").innerHTML = $(this).find("defCnt:eq(18)").text()+"명";
            document.getElementById("entire2").innerHTML = $(this).find("defCnt:eq(18)").text()+"명";
            var insertTb = "";
            insertTb += "<h1>확진자 수</h1>";
            insertTb += "<table>";
            insertTb += "<tr>";
            insertTb += "<th>"+$(this).find("gubun:eq(1)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(2)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(3)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(4)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(5)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(6)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(7)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(8)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(9)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(10)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(11)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(12)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(13)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(14)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(15)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(16)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(17)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(18)").text();+"</th>";
            insertTb += "</tr>";
            insertTb += "<tr>";
            insertTb += "<td>"+$(this).find("defCnt:eq(1)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(2)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(3)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(4)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(5)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(6)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(7)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(8)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(9)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(10)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(11)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(12)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(13)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(14)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(15)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(16)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(17)").text();+"</td>";
            insertTb += "<td>"+$(this).find("defCnt:eq(18)").text();+"</td>";
            insertTb += "</tr>";
            insertTb += "</table>";    
            
            insertTb += "<h1>격리중 환자 수</h1>";
            insertTb += "<table>";
            insertTb += "<tr>";
            insertTb += "<th>"+$(this).find("gubun:eq(1)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(2)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(3)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(4)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(5)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(6)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(7)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(8)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(9)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(10)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(11)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(12)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(13)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(14)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(15)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(16)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(17)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(18)").text();+"</th>";
            insertTb += "</tr>";
            insertTb += "<tr>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(1)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(2)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(3)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(4)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(5)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(6)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(7)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(8)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(9)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(10)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(11)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(12)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(13)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(14)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(15)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(16)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(17)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolIngCnt:eq(18)").text();+"</td>";
            insertTb += "</tr>";
            insertTb += "</table>";

            insertTb += "<h1>격리 해제 수</h1>";
            insertTb += "<table>";
            insertTb += "<tr>";
            insertTb += "<th>"+$(this).find("gubun:eq(1)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(2)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(3)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(4)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(5)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(6)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(7)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(8)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(9)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(10)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(11)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(12)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(13)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(14)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(15)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(16)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(17)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(18)").text();+"</th>";
            insertTb += "</tr>";
            insertTb += "<tr>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(1)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(2)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(3)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(4)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(5)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(6)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(7)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(8)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(9)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(10)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(11)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(12)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(13)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(14)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(15)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(16)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(17)").text();+"</td>";
            insertTb += "<td>"+$(this).find("isolClearCnt:eq(18)").text();+"</td>";
            insertTb += "</tr>";
            insertTb += "</table>";

            insertTb += "<h1>사망자 수</h1>";
            insertTb += "<table>";
            insertTb += "<tr>";
            insertTb += "<th>"+$(this).find("gubun:eq(1)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(2)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(3)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(4)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(5)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(6)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(7)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(8)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(9)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(10)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(11)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(12)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(13)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(14)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(15)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(16)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(17)").text();+"</th>";
            insertTb += "<th>"+$(this).find("gubun:eq(18)").text();+"</th>";
            insertTb += "</tr>";
            insertTb += "<tr>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(1)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(2)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(3)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(4)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(5)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(6)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(7)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(8)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(9)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(10)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(11)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(12)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(13)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(14)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(15)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(16)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(17)").text();+"</td>";
            insertTb += "<td>"+$(this).find("deathCnt:eq(18)").text();+"</td>";
            insertTb += "</tr>";
            insertTb += "</table>";

            var insertTb2 = "";
            insertTb2 += "<h1 id='h1_ma'>확진자 수</h1><br>";
            insertTb2 += "<table class='main_area'>";
            insertTb2 += "<tr>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(1)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(2)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(3)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(4)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(5)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(6)").text();+"</th>";
            insertTb2 += "</tr>";
            insertTb2 += "<tr>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(1)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(2)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(3)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(4)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(5)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(6)").text();+"</td>";
            insertTb2 += "</tr>";
            insertTb2 += "<tr>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(7)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(8)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(9)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(10)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(11)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(12)").text();+"</th>";
            insertTb2 += "</tr>";    
            insertTb2 += "<tr>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(7)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(8)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(9)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(10)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(11)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(12)").text();+"</td>";
            insertTb2 += "</tr>";
            insertTb2 += "<tr>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(13)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(14)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(15)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(16)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(17)").text();+"</th>";
            insertTb2 += "<th>"+$(this).find("gubun:eq(18)").text();+"</th>";    
            insertTb2 += "</tr>";
            insertTb2 += "<tr>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(13)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(14)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(15)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(16)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(17)").text();+"</td>";
            insertTb2 += "<td>"+$(this).find("defCnt:eq(18)").text();+"</td>";
            insertTb2 += "</tr>";
            insertTb2 += "</table>"; 
        
            $('#covid').append(insertTb);
            $('.area1').append(insertTb2);

            // 차트
            var ctx = $('#myChart'); // jQuery 사용
            var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    $(this).find("gubun:eq(1)").text(),
                    $(this).find("gubun:eq(2)").text(),
                    $(this).find("gubun:eq(3)").text(),
                    $(this).find("gubun:eq(4)").text(),
                    $(this).find("gubun:eq(5)").text(),
                    $(this).find("gubun:eq(6)").text(),
                    $(this).find("gubun:eq(7)").text(),
                    $(this).find("gubun:eq(8)").text(),
                    $(this).find("gubun:eq(9)").text(),
                    $(this).find("gubun:eq(10)").text(),
                    $(this).find("gubun:eq(11)").text(),
                    $(this).find("gubun:eq(12)").text(),
                    $(this).find("gubun:eq(13)").text(),
                    $(this).find("gubun:eq(14)").text(),
                    $(this).find("gubun:eq(15)").text(),
                    $(this).find("gubun:eq(16)").text(),
                    $(this).find("gubun:eq(17)").text(),
                ],
                datasets: [
                    {
                        label: '확진자 수 ',
                        data: [
                            $(this).find("defCnt:eq(1)").text(),
                            $(this).find("defCnt:eq(2)").text(),
                            $(this).find("defCnt:eq(3)").text(),
                            $(this).find("defCnt:eq(4)").text(),
                            $(this).find("defCnt:eq(5)").text(),
                            $(this).find("defCnt:eq(6)").text(),
                            $(this).find("defCnt:eq(7)").text(),
                            $(this).find("defCnt:eq(8)").text(),
                            $(this).find("defCnt:eq(9)").text(),
                            $(this).find("defCnt:eq(10)").text(),
                            $(this).find("defCnt:eq(11)").text(),
                            $(this).find("defCnt:eq(12)").text(),
                            $(this).find("defCnt:eq(13)").text(),
                            $(this).find("defCnt:eq(14)").text(),
                            $(this).find("defCnt:eq(15)").text(),
                            $(this).find("defCnt:eq(16)").text(),
                            $(this).find("defCnt:eq(17)").text()
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255,000,255,0.2)',
                            'rgba(255,204,000,0.2)',
                            'rgba(102,102,255,0.2)',
                            'rgba(204,204,255,0.2)',
                            'rgba(255,000,000,0.2)',
                            'rgba(000,051,102,0.2)',
                            'rgba(204,255,000,0.2)',
                            'rgba(051,000,000,0.2)',
                            'rgba(102,255,153,0.2)',
                            'rgba(255,051,102,0.2)',
                            'rgba(000,000,000,0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255,000,255,1)',
                            'rgba(255,204,000,1)',
                            'rgba(102,102,255,1)',
                            'rgba(204,204,255,1)',
                            'rgba(255,000,000,1)',
                            'rgba(000,051,102,1)',
                            'rgba(204,255,000,1)',
                            'rgba(051,000,000,1)',
                            'rgba(102,255,153,1)',
                            'rgba(255,051,102,1)',
                            'rgba(000,000,000,1)'
                        ],
                        borderWidth: 1,
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                 },
                scales: {
                yAxes: [{
                    ticks: {
                    beginAtZero: true
                    }
                }]
                }
            }
            });

             // 차트
             var ctx = $('#myChart2'); // jQuery 사용
             var myChart2 = new Chart(ctx, {
             type: 'bar',
             data: {
                 labels: [
                     $(this).find("gubun:eq(1)").text(),
                     $(this).find("gubun:eq(2)").text(),
                     $(this).find("gubun:eq(3)").text(),
                     $(this).find("gubun:eq(4)").text(),
                     $(this).find("gubun:eq(5)").text(),
                     $(this).find("gubun:eq(6)").text(),
                     $(this).find("gubun:eq(7)").text(),
                     $(this).find("gubun:eq(8)").text(),
                     $(this).find("gubun:eq(9)").text(),
                     $(this).find("gubun:eq(10)").text(),
                     $(this).find("gubun:eq(11)").text(),
                     $(this).find("gubun:eq(12)").text(),
                     $(this).find("gubun:eq(13)").text(),
                     $(this).find("gubun:eq(14)").text(),
                     $(this).find("gubun:eq(15)").text(),
                     $(this).find("gubun:eq(16)").text(),
                     $(this).find("gubun:eq(17)").text(),
                 ],
                 datasets: [
                     {
                         label: '확진자 수 ',
                         data: [
                             $(this).find("defCnt:eq(1)").text(),
                             $(this).find("defCnt:eq(2)").text(),
                             $(this).find("defCnt:eq(3)").text(),
                             $(this).find("defCnt:eq(4)").text(),
                             $(this).find("defCnt:eq(5)").text(),
                             $(this).find("defCnt:eq(6)").text(),
                             $(this).find("defCnt:eq(7)").text(),
                             $(this).find("defCnt:eq(8)").text(),
                             $(this).find("defCnt:eq(9)").text(),
                             $(this).find("defCnt:eq(10)").text(),
                             $(this).find("defCnt:eq(11)").text(),
                             $(this).find("defCnt:eq(12)").text(),
                             $(this).find("defCnt:eq(13)").text(),
                             $(this).find("defCnt:eq(14)").text(),
                             $(this).find("defCnt:eq(15)").text(),
                             $(this).find("defCnt:eq(16)").text(),
                             $(this).find("defCnt:eq(17)").text()
                         ],
                         backgroundColor: [
                             'rgba(255, 99, 132, 0.2)',
                             'rgba(54, 162, 235, 0.2)',
                             'rgba(255, 206, 86, 0.2)',
                             'rgba(75, 192, 192, 0.2)',
                             'rgba(153, 102, 255, 0.2)',
                             'rgba(255, 159, 64, 0.2)',
                             'rgba(255,000,255,0.2)',
                             'rgba(255,204,000,0.2)',
                             'rgba(102,102,255,0.2)',
                             'rgba(204,204,255,0.2)',
                             'rgba(255,000,000,0.2)',
                             'rgba(000,051,102,0.2)',
                             'rgba(204,255,000,0.2)',
                             'rgba(051,000,000,0.2)',
                             'rgba(102,255,153,0.2)',
                             'rgba(255,051,102,0.2)',
                             'rgba(000,000,000,0.2)'
                         ],
                         borderColor: [
                             'rgba(255, 99, 132, 1)',
                             'rgba(54, 162, 235, 1)',
                             'rgba(255, 206, 86, 1)',
                             'rgba(75, 192, 192, 1)',
                             'rgba(153, 102, 255, 1)',
                             'rgba(255, 159, 64, 1)',
                             'rgba(255,000,255,1)',
                             'rgba(255,204,000,1)',
                             'rgba(102,102,255,1)',
                             'rgba(204,204,255,1)',
                             'rgba(255,000,000,1)',
                             'rgba(000,051,102,1)',
                             'rgba(204,255,000,1)',
                             'rgba(051,000,000,1)',
                             'rgba(102,255,153,1)',
                             'rgba(255,051,102,1)',
                             'rgba(000,000,000,1)'
                         ],
                         borderWidth: 1,
                     }
                 ]
             },
             options: {
                 legend: {
                     display: false
                  },
                 scales: {
                 yAxes: [{
                     ticks: {
                     beginAtZero: true
                     }
                 }]
                 }
             }
             });

                     // kakao map
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(36.206896175059406, 127.96303879876369), //지도의 중심좌표.
    level: 14 //지도의 레벨(확대, 축소 정도)
};
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
map.setZoomable(false); // 지도 확대,축소 막기
map.setDraggable(false); // 지도 드래그 막기

var positions = [
    {
        title: '서울', 
        latlng: new kakao.maps.LatLng(37.54925878910763, 126.95961176874968),
        number: $(this).find("defCnt:eq(17)").text()
    },
    {
        title: '경기', 
        latlng: new kakao.maps.LatLng(37.08631150018431, 126.97353532134325),
        number: $(this).find("defCnt:eq(9)").text()
    },
    {
        title: '대구', 
        latlng: new kakao.maps.LatLng(35.90391944089139, 128.5846306899788),
        number: $(this).find("defCnt:eq(15)").text()
    },
    {
        title: '인천',
        latlng: new kakao.maps.LatLng(37.39946840228727, 126.63804441498034),
        number: $(this).find("defCnt:eq(14)").text()
    },
    {
        title: '부산', 
        latlng: new kakao.maps.LatLng(35.16746696438281, 129.07593018792105),
        number: $(this).find("defCnt:eq(16)").text()
    },
    {
        title: '경남', 
        latlng: new kakao.maps.LatLng(35.46223487751278, 128.48568123717055),
        number: $(this).find("defCnt:eq(2)").text()
    },
    {
        title: '경북', 
        latlng: new kakao.maps.LatLng(36.393288292855324, 128.5602695239652),
        number: $(this).find("defCnt:eq(3)").text()
    },
    {
        title: '충남', 
        latlng: new kakao.maps.LatLng(36.20046116613137, 126.99660865989294),
        number: $(this).find("defCnt:eq(6)").text()
    },
    {
        title: '강원', 
        latlng: new kakao.maps.LatLng(37.46501729752135, 128.44338470806102),
        number: $(this).find("defCnt:eq(8)").text()
    },
    {
        title: '대전', 
        latlng: new kakao.maps.LatLng(36.31981042830554, 127.38431624204443),
        number: $(this).find("defCnt:eq(12)").text()
    },
    {
        title: '충북', 
        latlng: new kakao.maps.LatLng(36.76966759476971, 127.83385656261297),
        number: $(this).find("defCnt:eq(7)").text()
    },
    {
        title: '광주', 
        latlng: new kakao.maps.LatLng(35.212856793045205, 126.85044673941253),
        number: $(this).find("defCnt:eq(13)").text()
    },
    {
        title: '울산', 
        latlng: new kakao.maps.LatLng(35.54151487996512, 129.31131678884756),
        number: $(this).find("defCnt:eq(11)").text()
    },
    {
        title: '전북', 
        latlng: new kakao.maps.LatLng(35.71111203025698, 127.23426519732908),
        number: $(this).find("defCnt:eq(5)").text()
    },
    {
        title: '전남', 
        latlng: new kakao.maps.LatLng(35.091825836807665, 127.52445260053801),
        number: $(this).find("defCnt:eq(4)").text()
    },
    {
        title: '제주', 
        latlng: new kakao.maps.LatLng(33.430535369602936, 126.55627630735526),
        number: $(this).find("defCnt:eq(1)").text()
    },
    {
        title: '세종', 
        latlng: new kakao.maps.LatLng(36.624713328513515, 127.236999917502),
        number: $(this).find("defCnt:eq(10)").text()
    } 
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "\maps.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(20, 30); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        image : markerImage // 마커 이미지 
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="text-align:center;">'+positions[i].title + '시:'+ positions[i].number +'명'+'</div>' // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}
// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}
            
        });



    }

    


    
});

});

