/**
 * Description
 * @authors Your Name (you@example.org)
 * @date    2021-04-29 01:59:18
 * @version 1.0.0
 */
 $(document).ready(function(){
    $(".m-next").click(function(){
        $(".m-next").css({"background-color":"white"});
        $(this).css({"background-color":"grey"});
        $(".m-end>span").html(($(this).index()+1));
    })
})