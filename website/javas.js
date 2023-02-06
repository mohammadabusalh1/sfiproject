$(document).on('click', '.remove-btn', function () {
    id = $(this).data('id');
    table = "activities";
    feild = "activity_name";
    sql = "DELETE FROM `" + table + "` WHERE `" + feild + "` = '" + id + "'";
    $.ajax({
        url: "../controlPanal/phpFile/remove.php",
        data: { sql: sql },
        type: "post",
        success: function (out) {
            reload("SELECT * FROM `activities`");
        }
    });
});

let id;
$(document).on('click', '.edit-btn', function () {

    function openInNewTab(url) {
        var a = document.createElement("a");
        a.target = "_blank";
        a.href = url;
        a.click();
    }

    id = $(this).data('id');
    openInNewTab("activityEdit.html?name=" + id);
});

function reload(sql) {
    $.ajax({
        url: "../controlPanal/phpFile/show.php",
        data: { sql: sql },
        dataType: "json",
        type: "post",
        success: function (data) {
            ht = "<tr> <th>إسم النشاط</th> <th> تاريخ النشاط</th> <th>المحافظة</th> <th>المنطقة</th>  <th>النوع</th> <th>التفاصيل</th> <th>البرنامج</th> <th>المشروع</th> <th>الحذف</th><th>النعديل</th></tr>";
            for (i = 0; i < data.length; i++) {
                ht += "<tr><td>" + data[i].activity_name + "</td><td>" + data[i].activity_date
                    + "</td><td>" + data[i].activity_Governorate + "</td><td>" + data[i].activity_area
                    + "</td><td>" + data[i].activity_type + "</td><td>" + data[i].activity_details
                    + "</td><td>" + data[i].program_name + "</td><td>" + data[i].project_name
                    + "</td>" + "<td><button data-id=" +
                    data[i].activity_name + " class=\"remove-btn\">حذف</button></td> <td><button data-id=" +
                    data[i].activity_name + " class=\"edit-btn\">تعديل</button></td></tr>";
            }
            $(".table").html(ht);
        }
    });
}

$(document).ready(function () {
    reload("SELECT * FROM `activities`");
});

$(document).ready(function () {

    $("#bar").click(function () {
        $(".navbare").toggleClass("active");
        $(this).toggleClass("fa-times");
    });

    function add(sql) {
        $.ajax({
            url: "../controlPanal/phpFile/add.php",
            data: { sqlAdd: sql },
            type: "post",
            success: function (out) {
            }
        });
    }


    function ReloadPro(sql) {
        $.ajax({
            url: "../controlPanal/phpFile/show.php",
            data: { sql: sql },
            dataType: "json",
            type: "post",
            success: function (data) {
                ht = "";
                for (i = 0; i < data.length; i++) {
                    ht += "<option value=\"" + data[i].project_name + "\">" + data[i].project_name + "</option>";
                }
                $("#pro").html(ht);
            }
        });
    }
    ReloadPro("SELECT project_name FROM `project`");

    function ReloadProg(sql) {
        $.ajax({
            url: "../controlPanal/phpFile/show.php",
            data: { sql: sql },
            dataType: "json",
            type: "post",
            success: function (data) {
                ht = "";
                for (i = 0; i < data.length; i++) {
                    ht += "<option value=\"" + data[i].program_name + "\">" + data[i].program_name + "</option>";
                }
                $("#prog").html(ht);
            }
        });
    }
    ReloadProg("SELECT program_name FROM `programs`");

    function Reloadpart(sql) {
        $.ajax({
            url: "../controlPanal/phpFile/show.php",
            data: { sql: sql },
            dataType: "json",
            type: "post",
            success: function (data) {
                ht = "";
                for (i = 0; i < data.length; i++) {
                    ht += "<option value=\"" + data[i].participants_name + "\">" + data[i].participants_name + "</option>";
                }
                $("#partName").html(ht);
            }
        });
    }
    Reloadpart("SELECT participants_name FROM `participants`");

    function Reloadnick(sql) {
        $.ajax({
            url: "../controlPanal/phpFile/show.php",
            data: { sql: sql },
            dataType: "json",
            type: "post",
            success: function (data) {
                ht = "";
                for (i = 0; i < data.length; i++) {
                    ht += "<option value=\"" + data[i].nickname + "\">" + data[i].nickname + "</option>";
                }
                $("#nick").html(ht);
            }
        });
    }
    Reloadnick("SELECT nickname FROM `nicknames`");


    $("#next").click(function () {
        name1 = $("#name").val();
        pro = $("#pro").val();
        prog = $("#prog").val();
        date = $("#date").val();
        gov = $("#gov").val();
        area = $("#area").val();
        type = $("#type").val();
        det = $("#det").val();

        sqlAdd = "INSERT INTO `activities`(`activity_name`, `activity_date`, `activity_Governorate`, `activity_area`, `activity_type`, `activity_details`, `program_name`, `project_name`) VALUES " +
            "('" + name1 + "','" + date + "','" + gov + "','" + area + "','" + type + "','" + det + "','" + prog + "','" + pro + "')";

        $.ajax({
            url: "../controlPanal/phpFile/add.php",
            data: { sqlAdd: sqlAdd },
            type: "post",
            success: function (out) {
                if (out == "successfully") {
                    $("#he1").toggle();
                    $("#he2").toggle();
                } else {
                    alert(out);
                }
            }
        });


        $("#bt_parti").click(function () {
            partName = $("#partName").val();

            sqlAdd2 = "INSERT INTO `act_part`(`participant_name`, `activity_name`) VALUES " +
                "('" + partName + "','" + name1 + "')";

            $.ajax({
                url: "../controlPanal/phpFile/add.php",
                data: { sqlAdd: sqlAdd2 },
                type: "post",
                success: function (out) {
                    if (out == "successfully") {
                        partName = $("#partName").val("");
                        alert("تمت الاضافة");
                    } else {
                        alert(out);
                    }
                }
            });

        });

        $("#next2").click(function () {
            $("#he2").toggle();
            $("#he3").toggle();

            $("#bt_empname").click(function () {

                empName = $("#empName").val();
                sqlAddempName = "INSERT INTO `employees`(`emp_name`) VALUES ('" + empName + "')";


                $.ajax({
                    url: "../controlPanal/phpFile/add.php",
                    data: { sqlAdd: sqlAddempName },
                    type: "post",
                    success: function (out) {

                        sqlMax = "SELECT MAX(`emp_id`) as idMax FROM `employees`";
                        $.ajax({
                            url: "../controlPanal/phpFile/show.php",
                            type: "post",
                            dataType: "json",
                            data: { sql: sqlMax },
                            success: function (output) {
                                empMax = output[0].idMax;

                                addEmpAct = "INSERT INTO `act_emp`(`emp_id`, `activity_name`) VALUES ('" + empMax + "','" + name1 + "')";
                                $.ajax({
                                    url: "../controlPanal/phpFile/add.php",
                                    data: { sqlAdd: addEmpAct },
                                    type: "post",
                                    success: function (out) {
                                        empName = $("#empName").val("");
                                        alert("تمت الاضافة")
                                    }
                                });

                            }
                        });

                    }
                });


            });

            $("#bt_bbniName").click(function () {
                bini = $("#bini").val();
                biniAge = $("#biniAge").val();
                biniSex = $("#biniSex").val();

                sqlAdd6 = "INSERT INTO `beneficiaries`(`beneficiarie_name`, `beneficiarie_age`, `beneficiarie_male`) VALUES" +
                    " ('" + bini + "','" + biniAge + "','" + biniSex + "')";


                $.ajax({
                    url: "../controlPanal/phpFile/add.php",
                    data: { sqlAdd: sqlAdd6 },
                    type: "post",
                    success: function (out) {

                        if (out == "successfully") {
                        } else {
                            alert(out);
                        }

                        sqlAdd7 = "INSERT INTO `activ_bene`(`activity_name`, `beneficiarie_name`) VALUES" +
                            " ('" + name1 + "','" + bini + "')";

                        $.ajax({
                            url: "../controlPanal/phpFile/add.php",
                            data: { sqlAdd: sqlAdd7 },
                            type: "post",
                            success: function (out) {
                                bini = $("#bini").val("");
                                biniAge = $("#biniAge").val("");
                                biniSex = $("#biniSex").val("");
                                alert("تمت الاضافة");
                            }
                        });
                    }
                });
            });

            $("#next3").click(function () {
                $("#he3").toggle();
                $("#he4").toggle();

                $("#bt_link").click(function () {
                    links = $("#links").val();

                    sqlAdd8 = "INSERT INTO `links`(`link`, `activity_name`) VALUES" +
                        " ('" + links + "','" + name1 + "')";

                    $.ajax({
                        url: "../controlPanal/phpFile/add.php",
                        data: { sqlAdd: sqlAdd8 },
                        type: "post",
                        success: function (out) {
                            if (out == "successfully") {
                                links = $("#links").val("");
                                alert("تمت الاضافة");
                            } else {
                                alert(out);
                            }
                        }
                    });
                });

                $("#bt_att").click(function () {

                    var pic = $("#file").prop('files')[0];
                    pisSql = "INSERT INTO `attachments`(`attachment`, `activity_name`) VALUES ('" + pic + "','" + name1 + "')";
                    $.ajax({
                        url: "../controlPanal/phpFile/add.php",
                        data: { sqlAdd: pisSql },
                        type: "post",
                        success: function (out) {
                            if (out == "successfully") {
                                alert("تمت الاضافة");
                            } else {
                                alert(out);
                            }
                        }
                    });
                });
            });

            $("#bt_chall").click(function () {
                chall = $("#chall").val();
                alert(chall);

                sqlAdd9 = "INSERT INTO `challenges`(`challenge`) VALUES ('" + chall + "')";


                $.ajax({
                    url: "../controlPanal/phpFile/add.php",
                    data: { sqlAdd: sqlAdd9 },
                    type: "post",
                    success: function (out) {
                        alert(out);
                        sqlMax = "SELECT MAX(`challenge_id`) AS ms FROM `challenges`";
                        $.ajax({
                            url: "../controlPanal/phpFile/show.php",
                            type: "post",
                            dataType: "json",
                            data: { sql: sqlMax },
                            success: function (output) {
                                challMax = output[0].ms;

                                addChallAct = "INSERT INTO `activ_chall`(`challenge_id`, `activity_name`) VALUES ('" + challMax + "','" + name1 + "')";
                                $.ajax({
                                    url: "../controlPanal/phpFile/add.php",
                                    data: { sqlAdd: addChallAct },
                                    type: "post",
                                    success: function (out) {
                                        if (out == "successfully") {
                                            alert("تمت الاضافة");
                                            chall = $("#chall").val("");
                                        } else {
                                            alert(out);
                                        }
                                    }
                                });

                            }
                        });

                    }
                });

            });

            $("#next4").click(function () {
                $("#he4").toggle();
                $("#he1").toggle();

                name1 = $("#name").val("");
                pro = $("#pro").val("");
                prog = $("#prog").val("");
                date = $("#date").val("");
                gov = $("#gov").val("");
                area = $("#area").val("");
                type = $("#type").val("");
                det = $("#det").val("");
                chall = $("#chall").val("");
                links = $("#links").val("");
                bini = $("#bini").val("");
                biniAge = $("#biniAge").val("");
                biniSex = $("#biniSex").val("");
                partName = $("#partName").val("");
                empName = $("#empName").val("");
            });

        });

    });

});


$("#next").prop("disabled", true);

$("#next").css({
    "cursor": "auto"
});

$("#name,#date,#gov,#area,#type,#det").keyup(function () {
    if ($("#name").val() == "" || $("#date").val() == "" || $("#gov").val() == "" || $("#area").val() == "" || $("#type").val() == "" || $("#det").val() == "") {

        $("#next").prop("disabled", true);
        $("#next").css({
            "cursor": "auto"
        });

    } else {
        $("#next").prop("disabled", false);
        $("#next").css({
            "cursor": "pointer"
        });
    }
});

$("#date").change(function () {
    if ($("#name").val() == "" || $("#date").val() == "" || $("#gov").val() == "" || $("#area").val() == "" || $("#type").val() == "" || $("#det").val() == "") {

        $("#next").prop("disabled", true);
        $("#next").css({
            "cursor": "auto"
        });

    } else {
        $("#next").prop("disabled", false);
        $("#next").css({
            "cursor": "pointer"
        });
    }
});