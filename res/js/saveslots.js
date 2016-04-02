/* 
 * This JavaScript file defines the onclick handlers for the various functions
 * required to make saveslots work. Note that the actual saving itself is
 * handled elsewhere.
 */


/**
 * Makes a the next image tier visible when a save slot corner is hovered over.
 */
function makeHoverCornerVisible(){
    $(this).siblings(".koboldadventuresaveslotcornerhover").stop();
    $(this).siblings(".koboldadventuresaveslotcornerhover").fadeIn(400);
}

/**
 * Makes a the next image tier invisible when a save slot corner is no longer 
 * hovered over.
 */
function makeHoverCornerInvisible(){
    $(this).siblings(".koboldadventuresaveslotcornerhover").stop();
    $(this).siblings(".koboldadventuresaveslotcornerhover").fadeOut(400);
}

/**
 * Makes a the next image tier visible when a save slot corner is clicked.
 */
function makeClickCornerVisible(){
    $(this).siblings(".koboldadventuresaveslotcornerhover").stop(true); // Make hover skip to end of animation
    $(this).siblings(".koboldadventuresaveslotcornerclick").stop();
    $(this).siblings(".koboldadventuresaveslotcornerclick").fadeIn(100);
}

/**
 * Makes a the next image tier invisible when a save slot corner is no longer 
 * being clicked.
 */
function makeClickCornerInvisible(){
    $(this).siblings(".koboldadventuresaveslotcornerclick").stop();
    $(this).siblings(".koboldadventuresaveslotcornerclick").fadeOut(100);
}

/**
 * Binds the required functions to save slot elements to make them animate
 * properly.
 */
function bindSaveSlotUIFunctions(){
    var elements = $(".koboldadventuremain .koboldadventuresaveslotfilled .koboldadventurehorizontalcornertoptrigger, .koboldadventuremain .koboldadventuresaveslotfilled .koboldadventureverticalcornertoptrigger");
    elements.hover(makeHoverCornerVisible, makeHoverCornerInvisible);
    elements.mousedown(makeClickCornerVisible);
    elements.mouseup(makeClickCornerInvisible);
}

/**
 * Binds load functionality to save slots.
 */
function bindSaveToSaveSlots(){
    
}

/**
 * Binds save functionality to save slots.
 */
function bindLoadToSaveSlots(){
    
}
