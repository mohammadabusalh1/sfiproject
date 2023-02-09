$(document).ready(function () {
    function reload(sql) {
        $.ajax({
            url: "../controlPanal/phpFile/show.php",
            data: { sql: sql },
            dataType: "json",
            type: "post",
            success: function (data) {
                ht = "<tr> <th>إسم النشاط</th> <th> تاريخ النشاط</th> <th>المحافظة</th> <th>المنطقة</th>  <th>النوع</th> <th>التفاصيل</th> <th>البرنامج</th> <th>المشروع</th> <th>إختر</th></tr>";
                for (i = 0; i < data.length; i++) {
                    ht += "<tr><td>" + data[i].activity_name + "</td><td>" + data[i].activity_date
                        + "</td><td>" + data[i].activity_Governorate + "</td><td>" + data[i].activity_area
                        + "</td><td>" + data[i].activity_type + "</td><td>" + data[i].activity_details
                        + "</td><td>" + data[i].program_name + "</td><td>" + data[i].project_name
                        + "</td>" + "<td><button data-id=" +
                        data[i].activity_name + " class=\"click_btn\">إختر</button></td></tr>";
                }
                $(".table").html(ht);
            }
        });
    }

    reload("SELECT * FROM `activities`");

    $("#bar").click(function () {
        $(".navbare").toggleClass("active");
        $(this).toggleClass("fa-times");
    });
    
    $("#search").keyup(function(){
        value = $(this).val();
        sql ="SELECT * FROM `activities` WHERE `activity_name` like '%"+value+"%' || `activity_date` like '%"+value+
        "%' || `activity_Governorate` like '%"+value+"%' || `activity_area` like '%"+value+
        "%' || `activity_type` like '%"+value+"%' || `activity_details` like '%"+value+"%' || `program_name` like '%"+value+"%'";
        reload(sql);
    });


    $("table").on('click', '.click_btn', function () {

        id = $(this).data('id');
        
    });


});