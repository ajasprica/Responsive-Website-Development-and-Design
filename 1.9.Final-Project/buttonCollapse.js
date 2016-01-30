 $(document).ready(function() {
    $("#but1").click(function(){
        $("#light").slideToggle("slow", function(){ 
            $("#but1").html($(this).is(":hidden") ? "Expand" : "Collapse");  
        });
    });
    });