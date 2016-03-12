/* 
 * FoxPaw Entertainment proprietary code.
 */

function turnNavbarInactive(){
    $('.navbar').removeClass('navbaractive');
    $('.navbar').addClass('navbarinactive');
}

function turnNavbarActive(){
    $('.navbar').removeClass('navbarinactive');
    $('.navbar').addClass('navbaractive');
}

function turnNavbarHeaderInactive(){
    $(this).removeClass('navbarheaderactive');
    $(this).addClass('navbarheaderinactive');
}

function turnNavbarHeaderActive(){ 
    $(this).removeClass('navbarheaderinactive');
    $(this).addClass('navbarheaderactive');
}

function turnNavbarSubInactive(){
    $(this).parents('.navbarheader').removeClass('navbarheaderinactive');
    $(this).parents('.navbarheader').addClass('navbarheaderactive');
    
    $(this).removeClass('navbarsubactive');
    $(this).addClass('navbarsubinactive');
}

function turnNavbarSubActive(){
    $(this).removeClass('navbarsubinactive');
    $(this).addClass('navbarsubactive');
    
    $(this).parents('.navbarheader').removeClass('navbarheaderactive');
    $(this).parents('.navbarheader').addClass('navbarheaderinactive');
}

$('.navbar').hover(turnNavbarActive, turnNavbarInactive);
$('.navbarheader').hover(turnNavbarHeaderActive, turnNavbarHeaderInactive);
$('.navbarsub').hover(turnNavbarSubActive, turnNavbarSubInactive);
