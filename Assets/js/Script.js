$(document).ready(function(){
    $(document).on('click', '#closeSuperDept .closeSuperDept', function(){ 
        $('#departmentMenu').hide();
        //$('#departmentMenuBg').hide();
        return false;
    });
    $(document).on('click', '#closeSubDept .closeSubDept', function(){ 
        $('#departmentMenu').show();
        $('#subDepartmentMenu').hide();
        //$('#departmentMenuBg').show();

        return false;
    });
    $(document).on('click', '#closeAisle .closeAisle', function(){ 
        $('#subDepartmentMenu').show();
        $('#aisle').hide();
        //$('#departmentMenuBg').show();
        return false;
    });

    $(document).on('click', '#departmentMenu .dropdown-toggle', function () {
    var $breadcrumb = $("#departmentMenu li:first"); 
    if ($breadcrumb.hasClass('closeSuperDept')) {
        
        if($('.closeSuperDept').css('display') == 'block')
        {
            $('#departmentMenu').hide();
            $("html, body").animate({ scrollTop: $('#navigationMenu').offset().top }, 1000);
        }        
    }
    });
    $(document).on('click', '#subDepartmentMenu .dropdown-toggle', function () {
    var $breadcrumb = $("#subDepartmentMenu li:first"); 
    if ($breadcrumb.hasClass('closeSubDept')) {
       
        if($('.closeSuperDept').css('display') == 'block')
        {
            $('#subDepartmentMenu').hide();
             $("html, body").animate({ scrollTop: $('#navigationMenu').offset().top }, 1000);
        }        
    }
    });
    $(document).on('click', '#aisle .dropdown-toggle', function () {
    var $breadcrumb = $("#aisle li:first"); 
    if ($breadcrumb.hasClass('closeSubDept')) {
       
        if($('.closeSuperDept').css('display') == 'block')
        {
             $("html, body").animate({ scrollTop: $('#navigationMenu').offset().top }, 1000);
        }        
    }
    });

});