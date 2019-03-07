$("button").click(function(){
    var Yourname = $('.name').val();
    var Youranswer =$('.color').val();
    
    var fullnameanswer;
    fullnameanswer = Yourname + "" + Youranswer ; 
    var Yournumber = $('.cars').val();
    
    var calculatedYournumber = Yournumber * 3;
    
    
    $('.result').text(" Well " + Yourname  + ", by the year of 2050 you will have " +  calculatedYournumber  + " cars that will be " + Youranswer );
});
