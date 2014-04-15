 $(window).on('load resize', function () {
     $('body').css({
         "padding-top": $(".navbar").height() + 30 + "px"
     });
 });

 $(document).ready(function () {

     initialize();
     var countChecked = function () {
         // console.log("c");
         var checked = $('input:checked');
         var checkedID = [];
         var checkselect = '';
         // console.log("checkedID");
         checked.each(function () {
             checkedID.push(this.id);
         });

         console.log(checkedID);

         $.each(checkedID, function (index, value) {
             checkselect = checkselect + '.' + value;
         });
         console.log(checkselect);

         var rows = $('table.table.table-striped tr');
         console.log(rows);

         var shows = rows.filter(checkselect);
         console.log(shows);
         shows.show();
         rows.not(shows).hide();

         if(checkselect.indexOf("tech-g")>=0)
             myFunctionQuery_G();
         if(checkselect.indexOf("tech-f1")>=0)
             myFunctionQuery_1();
         if(checkselect.indexOf("tech-f2")>=0)
             myFunctionQuery_2();
         if(checkselect.indexOf("tech-f3")>=0)
             myFunctionQuery_3();
         if(checkselect.indexOf("tech-f4")>=0)
             myFunctionQuery_4();
         
     };

     $(":radio").change(countChecked);

     $("#view-list").on('click', function () {
         console.log("list");
         $('#list').show();
         $('#map').hide();
     });
     $("#view-map").on('click', function () {
         console.log("map");
         $('#map').show();
         $('#list').hide();
     })


     $("#x1").raty({
         readOnly: true,
         score: 3
     });
     // console.log($('tbody').children().length);

     // $('tbody').children().each(function(){
     //     $(this).attr({
     //         data-toggle : "modal",
     //         data-target : "#details"
     //     });
     // });

 });


 function initialize() {
    $('#list').hide();
     var column_stars = $("#stars").index();
     $('tbody').children().each(function () {
         $(this).find('td').eq(column_stars).raty({
             readOnly: true,
             score: 3
         });

     })
     $('.raty').raty();


 }