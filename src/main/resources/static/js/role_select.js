$(window).on("load", function () {
    $("#role").on("change", function () {
        let val = $("#role").val();
        let id = $("#user_id").val();
        $("#role_icon").html("<i class='fas fa-spinner fa-pulse'></i>")
        let token = $("meta[name='_csrf']").attr("content");
        if (val == "2") {
            $.ajax({
                method:"POST",
                url:"/users/change/id/"+id,
                headers: {
                    "X-CSRF-TOKEN":token,
                },
                data:{
                    role:val,
                }
            }).then(function(result){
                $("#role_icon").html("<i class='fas fa-check-double'></i>")
            })
        } else if (val == "3") {
            $.ajax({
                method:"POST",
                url:"/users/change/id/"+id,
                headers: {
                    "X-CSRF-TOKEN":token,
                },
                data:{
                    role:val,
                }
            }).then(function(result){
                $("#role_icon").html("<i class='fas fa-check-double'></i>")
            })
        }
    })
});