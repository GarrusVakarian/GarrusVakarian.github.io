/* 
 * FoxPaw Entertainment proprietary code.
 */

function turnLoginboxInactive(){
    // If a loginput is active, don't inactivate
    if($('.loginput').hasClass('loginputactive'))
        return;
    
    // If we're currently being hovered, don't inactivate
    if($('.loginbox').is(":hover"))
        return;
    
    $('.loginbox').removeClass('loginboxactive');
    $('.loginbox').addClass('loginboxinactive');
    $('.loginbutton').removeClass('loginbuttonactive');
    $('.loginbutton').addClass('loginbuttoninactive');
}

function turnLoginboxActive(){
    $('.loginbox').removeClass('loginboxinactive');
    $('.loginbox').addClass('loginboxactive');
    $('.loginbutton').removeClass('loginbuttoninactive');
    $('.loginbutton').addClass('loginbuttonactive');
}

function turnLoginFieldInactive(){
    $(this).removeClass('loginputactive');
    $(this).addClass('loginputinactive');
    
    // If both loginputs are inactive, deactivate loginbox
    if(!$('.loginput').hasClass('loginputactive'))
        turnLoginboxInactive();
}

function turnLoginFieldActive(){
    turnLoginboxActive();
    
    $(this).removeClass('loginputinactive');
    $(this).addClass('loginputactive');
}

$('.loginbox').hover(turnLoginboxActive, turnLoginboxInactive);
$('.loginput').focus(turnLoginFieldActive);
$('.loginput').blur(turnLoginFieldInactive);

