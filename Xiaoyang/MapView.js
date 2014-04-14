 $(window).on('load resize', function () {
        $('body').css({
            "padding-top": $(".navbar").height() + 30 + "px"
        });
    });

    $(document).ready(function () {

        var countChecked = function () {
            // console.log("c");
            var checked = $('input:checked');
            var checkedID = [];
            var checkselect ='';
            // console.log("checkedID");
            checked.each(function(){
                checkedID.push(this.id);
            });

            console.log(checkedID);
            $.each(checkedID,function(index,value){
                checkselect = checkselect+'.'+value;
            });
            console.log(checkselect);
            var rows = $('table.table.table-striped tr');
            console.log(rows);

            var shows= rows.filter(checkselect);
            console.log(shows);
            shows.show();
            rows.not(shows).hide();

        };

        $(":radio").change(countChecked);

        $("#view-list").on('click',function(){
            console.log("list");
            $('#list').show();
            $('#map').hide();
        });
        $("#view-map").on('click',function(){
            console.log("map");
            $('#map').show();
            $('#list').hide();
        })
});