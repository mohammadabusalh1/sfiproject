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

    $("#search").keyup(function () {
        value = $(this).val();
        sql = "SELECT * FROM `activities` WHERE `activity_name` like '%" + value + "%' || `activity_date` like '%" + value +
            "%' || `activity_Governorate` like '%" + value + "%' || `activity_area` like '%" + value +
            "%' || `activity_type` like '%" + value + "%' || `activity_details` like '%" + value + "%' || `program_name` like '%" + value + "%'";
        reload(sql);
    });


    $("table").on('click', '.click_btn', function () {
        id = $(this).data('id');
        localStorage.setItem('name', id);
        window.location.replace("showReport.html");
    });

    $("#name").prop("disabled", true);
    $("#names").prop("disabled", true);
    $("#date").prop("disabled", true);
    $("#dates").prop("disabled", true);
    $("#gov").prop("disabled", true);
    $("#govs").prop("disabled", true);
    $("#area").prop("disabled", true);
    $("#areas").prop("disabled", true);
    $("#type").prop("disabled", true);
    $("#types").prop("disabled", true);
    $("#program").prop("disabled", true);
    $("#programs").prop("disabled", true);
    $("#project").prop("disabled", true);
    $("#projects").prop("disabled", true)

    $("#cb_name").click(function () {
        if ($(this).prop("checked")) {
            $("#name").prop("disabled", false);
            $("#names").prop("disabled", false);
        } else {
            $("#name").prop("disabled", true);
            $("#names").prop("disabled", true);
        }
    });

    $("#cb_date").click(function () {
        if ($(this).prop("checked")) {
            $("#date").prop("disabled", false);
            $("#dates").prop("disabled", false);
        } else {
            $("#date").prop("disabled", true);
            $("#dates").prop("disabled", true);
        }
    });

    $("#cb_gov").click(function () {
        if ($(this).prop("checked")) {
            $("#gov").prop("disabled", false);
            $("#govs").prop("disabled", false);
        } else {
            $("#gov").prop("disabled", true);
            $("#govs").prop("disabled", true);
        }
    });

    $("#cb_area").click(function () {
        if ($(this).prop("checked")) {
            $("#area").prop("disabled", false);
            $("#areas").prop("disabled", false);
        } else {
            $("#area").prop("disabled", true);
            $("#areas").prop("disabled", true);
        }
    });

    $("#cb_type").click(function () {
        if ($(this).prop("checked")) {
            $("#type").prop("disabled", false);
            $("#types").prop("disabled", false);
        } else {
            $("#type").prop("disabled", true);
            $("#types").prop("disabled", true);
        }
    });

    $("#cb_program").click(function () {
        if ($(this).prop("checked")) {
            $("#program").prop("disabled", false);
            $("#programs").prop("disabled", false);
        } else {
            $("#program").prop("disabled", true);
            $("#programs").prop("disabled", true);
        }
    });

    $("#cd_project").click(function () {
        if ($(this).prop("checked")) {
            $("#project").prop("disabled", false);
            $("#projects").prop("disabled", false);
        } else {
            $("#project").prop("disabled", true);
            $("#projects").prop("disabled", true);
        }
    });


    $("#next").click(function () {
        $("#attribute").toggle();
        $("#filter").toggle();
    });

});