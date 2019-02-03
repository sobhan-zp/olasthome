$(document).ready(function() {
    $(".main_date_picker").pDatepicker({
        format: 'YYYY/MM/DD'
    });

    $('#sidebarCollapse').click(function () {
        $('#content').toggleClass('goshad');
        $('#sidebar').toggleClass('makhfi');
    });


});