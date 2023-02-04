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
        $("#he1").toggle();
        $("#he2").toggle();

        sqlAdd = "INSERT INTO `activities`(`activity_name`, `activity_date`, `activity_Governorate`, `activity_area`, `activity_type`, `activity_details`, `program_name`, `project_name`) VALUES " +
            "('" + name1 + "','" + date + "','" + gov + "','" + area + "','" + type + "','" + det + "','" + prog + "','" + pro + "')";
        add(sqlAdd);


        $("#bt_parti").click(function () {
            partName = $("#partName").val();
            nick = $("#nick").val();

            sqlAdd2 = "INSERT INTO `act_part`(`participant_name`, `activity_name`) VALUES " +
                "('" + partName + "','" + name1 + "')";
            add(sqlAdd2);

            alert("تمت الاضافة");

        });

        $("#next2").click(function () {
            $("#he2").toggle();
            $("#he3").toggle();

            $("#bt_empname").click(function () {

                empName = $("#empName").val();
                sqlAddempName = "INSERT INTO `employees`(`emp_name`) VALUES ('" + empName + "')";
                add(sqlAddempName);
    
                sqlMax = "SELECT MAX(`emp_id`) as idMax FROM `employees`";
                $.ajax({
                    url:"../controlPanal/phpFile/show.php",
                    type:"post",
                    dataType: "json",
                    data:{sql:sqlMax},
                    success:function(output){
                      empMax = output[0].idMax;
                    }
                });
    
    
                addEmpAct = "INSERT INTO `act_emp`(`emp_id`, `activity_name`) VALUES ('"+empMax+"','"+name1+"')";
                add(addEmpAct);
    
    
            });

            $("#bt_bbniName").click(function () {
                bini = $("#bini").val();
                biniAge = $("#biniAge").val();
                biniSex = $("#biniSex").val();

                sqlAdd6 = "INSERT INTO `beneficiaries`(`beneficiarie_name`, `beneficiarie_age`, `beneficiarie_male`) VALUES" +
                    " ('" + bini + "','" + biniAge + "','" + biniSex + "')";
                add(sqlAdd6);

                sqlAdd7 = "INSERT INTO `activ_bene`(`activity_name`, `beneficiarie_name`) VALUES" +
                    " ('" + name1 + "','" + bini + "')";
                add(sqlAdd7);
                alert("تمت الاضافة");
            });

            $("#next3").click(function () {
                $("#he3").toggle();
                $("#he4").toggle();

                $("#bt_link").click(function () {
                    links = $("#links").val();

                    sqlAdd8 = "INSERT INTO `links`(`link`, `activity_name`) VALUES" +
                        " ('" + links + "','" + name1 + "')";
                    add(sqlAdd8);
                    alert("تمت الاضافة");
                });

                $("#bt_att").click(function () {

                    var pic = $("#file").prop('files')[0];
                    add("INSERT INTO `attachments`(`attachment`, `activity_name`) VALUES ('" + pic + "','"+nam1+"')");
                    alert("تمت الاضافة");
                });

                $("#bt_chall").click(function () {
                    chall = $("#chall").val();

                    sqlAdd9 = "INSERT INTO `challenges`(`challenge`) VALUES" +
                        " ('" + chall + "')";
                    add(sqlAdd9);

                    show("SELECT `challenge_id` FROM `challenges` WHERE `challenge`='" + chall + "'");

                    sqlAdd10 = "INSERT INTO `activ_chall`(`challenge_id`, `activity_name`) VALUES" +
                        " ('" + empId + "','" + name1 + "')";
                    add(sqlAdd10);
                    alert("تمت الاضافة");

                });

                $("#next4").click(function () {
                    $("#he4").toggle();
                    $("#he1").toggle();
                });

            });

        });

    });


    $("#next").prop("disabled", true);

    $("#next").css({
        "cursor": "auto"
    });

    $("#name,#date,#gov,#area,#type,#det").keyup(function () {
        if ($("#name").val() == "" || $("#date").val() == ""|| $("#gov").val() == "" || $("#area").val() == ""|| $("#type").val() == ""|| $("#det").val() == "") {

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



});