/* 
 * This JavaScript file defines the onclick handlers for the various functions
 * required to make saveslots work. Note that the actual saving itself is
 * handled elsewhere.
 */


/**
 * Makes a the next image tier visible when a save slot corner is hovered over.
 */
function makeHoverCornerVisible() {
    $(this).siblings(".koboldadventuresaveslotcornerhover").stop();
    $(this).siblings(".koboldadventuresaveslotcornerhover").fadeIn(400);
}

/**
 * Makes a the next image tier invisible when a save slot corner is no longer 
 * hovered over.
 */
function makeHoverCornerInvisible() {
    $(this).siblings(".koboldadventuresaveslotcornerhover").stop();
    $(this).siblings(".koboldadventuresaveslotcornerhover").fadeOut(400);
}

/**
 * Makes a the next image tier visible when a save slot corner is clicked.
 */
function makeClickCornerVisible() {
    $(this).siblings(".koboldadventuresaveslotcornerhover").stop(true); // Make hover skip to end of animation
    $(this).siblings(".koboldadventuresaveslotcornerclick").stop();
    $(this).siblings(".koboldadventuresaveslotcornerclick").fadeIn(100);
}

/**
 * Makes a the next image tier invisible when a save slot corner is no longer 
 * being clicked.
 */
function makeClickCornerInvisible() {
    $(this).siblings(".koboldadventuresaveslotcornerclick").stop();
    $(this).siblings(".koboldadventuresaveslotcornerclick").fadeOut(100);
}

/**
 * Onclick function for save slots triggers that will save the game.
 */
function saveSlotOnclick() {
    // If this is an active save slot, ask the user if he's sure about this
    if ($(this).parent().hasClass("koboldadventuresaveslotfilled") && !confirm('Are you sure you want to overwrite this save?'))
        return;

    // Get save slot id
    var id = $(this).parent().attr("id");
    // Get last character of id. This is our save slot number.
    var slotNumber = id.slice(-1);
    // Get the comment.
    var comment = $(this).siblings(".koboldadventuresaveslotcommentinput").val();
    // Save the game to the passed slot.
    saveGameToSlot(slotNumber, comment);
}

/**
 * Onclick function for save slot triggers that will load the game.
 */
function loadSlotOnclick() {
    // If we're currently playing the game, ask the user if he's sure about this
    if (currentScene !== "" && !confirm('Are you sure you want to load this save? You will lose all current unsaved progress!'))
        return;

    // Get save slot id
    var id = $(this).parent().attr("id");
    // Get last character of id. This is our save slot number.
    var slotNumber = id.slice(-1);
    // Load the game from the passed slot.
    loadGameFromSlot(slotNumber);
}

/**
 * Unbinds saveslot hover, mousedown and mouseup functions.
 */
function unbindSaveSlotFunctions() {
    var elements = $(".koboldadventuremain .koboldadventurehorizontalcornertoptrigger, .koboldadventuremain .koboldadventureverticalcornertoptrigger");
    elements.unbind('mouseenter mouseleave mousedown mouseup');
}

/**
 * Binds the required functions to save slot elements to make them animate
 * properly.
 */
function bindSaveSlotUIFunctions() {
    var elements = $(".koboldadventuremain .koboldadventuresaveslotfilled .koboldadventurehorizontalcornertoptrigger, .koboldadventuremain .koboldadventuresaveslotfilled .koboldadventureverticalcornertoptrigger");
    elements.hover(makeHoverCornerVisible, makeHoverCornerInvisible);
    elements.mousedown(makeClickCornerVisible);
    elements.mouseup(makeClickCornerInvisible);
}

/**
 * Gets all active save slot trigger elements in the main panel.
 * @returns All active save slots in the main panel.
 */
function getActiveSaveSlotTriggers() {
    return $(".koboldadventuremain .koboldadventuresaveslotfilled .koboldadventurehorizontalcornertoptrigger, .koboldadventuremain .koboldadventuresaveslotfilled .koboldadventureverticalcornertoptrigger");
}

/**
 * Gets all emty save slot trigger elements in the main panel.
 * @returns All empty save slots in the main panel.
 */
function getEmptySaveSlotTriggers() {
    return $(".koboldadventuremain .koboldadventuresaveslotempty .koboldadventurehorizontalcornertoptrigger, .koboldadventuremain .koboldadventuresaveslotempty .koboldadventureverticalcornertoptrigger");
}

/**
 * Gets all save slot trigger elements in the main panel.
 * @returns All empty save slots in the main panel.
 */
function getSaveSlotTriggers() {
    return $(".koboldadventuremain .koboldadventurehorizontalcornertoptrigger, .koboldadventuremain .koboldadventureverticalcornertoptrigger");
}


/**
 * Gets all save slot corners in the main panel.
 * @returns All  save slot corners in the main panel.
 */
function getSaveSlotCorners() {
    return $(".koboldadventuremain .koboldadventuresaveslotcorner");
}

/**
 * Binds animation functions to empty save slots elements.
 */
function bindSaveSlotUIFunctionsToEmptySaveSlots() {
    var elements = getEmptySaveSlotTriggers();
    elements.hover(makeHoverCornerVisible, makeHoverCornerInvisible);
    elements.mousedown(makeClickCornerVisible);
    elements.mouseup(makeClickCornerInvisible);
}

/**
 * Makes the corners of empty save slots visible.
 */
function makeEmptySaveSlotCornersVisible() {
    var elements = getSaveSlotCorners();
    elements.removeClass("hidden");
}

/**
 * Copies the comment sections' contents and places them in input fields.
 */
function copyCommentSectionContent() {
    var comments = $(".koboldadventuremain .koboldadventuresaveslotcomment");
    comments.each(function () {
        var commentField = $(this).siblings(".koboldadventuresaveslotcommentinput");
        commentField.val($(this).html());
    });
}

/**
 * Binds save functionality to save slots. Will also make unused save slot
 * corners visible and active. Furthermore, copies the comment section contents
 * to comment text input boxes.
 */
function bindSaveToSaveSlots() {
    bindSaveSlotUIFunctionsToEmptySaveSlots();
    makeEmptySaveSlotCornersVisible();
    copyCommentSectionContent();
    var elements = getSaveSlotTriggers();
    elements.mouseup(saveSlotOnclick);
}

/**
 * Binds load functionality to save slots.
 */
function bindLoadToSaveSlots() {
    var elements = getActiveSaveSlotTriggers();
    elements.mouseup(loadSlotOnclick);
}
