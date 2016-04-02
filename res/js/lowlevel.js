/**
 * This JavaScript file defines a few functions required by many others all
 * throughout Kobold Adventure. If you are looking to write your own scene,
 * you should probably not be looking here but in useful.js instead. The
 * functions in useful.js are built atop of these low level functions to provide
 * a much simpler API.
 */


/** ANIMATION **/

// VERY FAST

/**
 * Adds the veryfasttransition CSS class to the passed elements.
 * @param elements The elements to which to add the veryfasttransition class.
 */
function addVeryFastTransition(elements) {
    $(elements).addClass("veryfasttransition");
}

/**
 * Removes the veryfasttransition CSS class from the passed elements 
 * immediately.
 * @param elements The elements from which to remove the veryfasttransition 
 * class.
 */
function removeVeryFastTransition(elements) {
    $(elements).removeClass("veryfasttransition");
}

/**
 * Removes the veryfasttransition CSS class from each of the passed elements 
 * after two hundred milliseconds, which should suffice for the animation to 
 * complete.
 * @param elements The elements of which to remove the veryfasttransition class.
 */
function removeVeryFastTransitionLater(elements) {
    setTimeout(function () {
        removeVeryFastTransition(elements);
    }, 200);
}

/**
 * Removes the veryfasttransition CSS class from each of the passed elements 
 * after a specified amount of time.
 * @param elements The elements of which to remove the veryfasttransition class.
 * @param time How long, in milliseconds, to wait before removal.
 */
function removeVeryFastTransitionLaterTimed(elements, time) {
    setTimeout(function () {
        removeVeryFastTransition(elements);
    }, time);
}

 /**
 * Adds the veryfasttransition CSS class to each of the passed elements after 
 * two hundred milliseconds, which should suffice for an animation to complete.
 * @param elements The elements to which to add the fasttransition class.
 */
function addVeryFastTransitionLater(elements) {
    setTimeout(function () {
        addVeryFastTransition(elements);
    }, 200);
}

/**
 * Adds the veryfasttransition CSS class to each of the passed elements 
 * after a specified amount of time.
 * @param elements The elements to which to add the veryfasttransition class.
 * @param time How long, in milliseconds, to wait before removal.
 */
function addVeryFastTransitionLaterTimed(elements, time) {
    setTimeout(function () {
        addVeryFastTransition(elements);
    }, time);
}

// FAST

/**
 * Adds the fasttransition CSS class to the passed elements.
 * @param elements The elements to which to add the fasttransition class.
 */
function addFastTransition(elements) {
    $(elements).addClass("fasttransition");
}

/**
 * Removes the fasttransition CSS class from the passed elements immediately.
 * @param elements The elements from which to remove the fasttransition class.
 */
function removeFastTransition(elements) {
    $(elements).removeClass("fasttransition");
}

/**
 * Removes the fasttransition CSS class from each of the passed elements after 
 * four hundred milliseconds, which should suffice for the animation to 
 * complete.
 * @param elements The elements of which to remove the fasttransition class.
 */
function removeFastTransitionLater(elements) {
    setTimeout(function () {
        removeFastTransition(elements);
    }, 400);
}

/**
 * Removes the fasttransition CSS class from each of the passed elements 
 * after a specified amount of time.
 * @param elements The elements of which to remove the fasttransition class.
 * @param time How long, in milliseconds, to wait before removal.
 */
function removeFastTransitionLaterTimed(elements, time) {
    setTimeout(function () {
        removeFastTransition(elements);
    }, time);
}

 /**
 * Adds the fasttransition CSS class to each of the passed elements after four 
 * hundred milliseconds, which should suffice for an animation to complete.
 * @param elements The elements to which to add the fasttransition class.
 */
function addFastTransitionLater(elements) {
    setTimeout(function () {
        addFastTransition(elements);
    }, 400);
}

/**
 * Adds the fasttransition CSS class to each of the passed elements 
 * after a specified amount of time.
 * @param elements The elements to which to add the fasttransition class.
 * @param time How long, in milliseconds, to wait before removal.
 */
function addFastTransitionLaterTimed(elements, time) {
    setTimeout(function () {
        addFastTransition(elements);
    }, time);
}

// REGULAR

/**
 * Adds the transition CSS class to the passed elements.
 * @param elements The elements to which to add the transition class.
 */
function addTransition(elements) {
    $(elements).addClass("transition");
}

/**
 * Removes the transition CSS class from the passed elements immediately.
 * @param elements The elements from which to remove the transition class.
 */
function removeTransition(elements) {
    $(elements).removeClass("transition");
}

/**
 * Removes the transition CSS class from each of the passed elements after 
 * six hundred milliseconds, which should suffice for the animation to 
 * complete.
 * @param elements The elements of which to remove the transition class.
 */
function removeTransitionLater(elements) {
    setTimeout(function () {
        removeTransition(elements);
    }, 600);
}

/**
 * Removes the transition CSS class from each of the passed elements 
 * after a specified amount of time.
 * @param elements The elements of which to remove the transition class.
 * @param time How long, in milliseconds, to wait before removal.
 */
function removeTransitionLaterTimed(elements, time) {
    setTimeout(function () {
        removeTransition(elements);
    }, time);
}

 /**
 * Adds the transition CSS class to each of the passed elements after six 
 * hundred milliseconds, which should suffice for an animation to complete.
 * @param elements The elements to which to add the transition class.
 */
function addTransitionLater(elements) {
    setTimeout(function () {
        addTransition(elements);
    }, 600);
}

/**
 * Adds the transition CSS class to each of the passed elements 
 * after a specified amount of time.
 * @param elements The elements to which to add the transition class.
 * @param time How long, in milliseconds, to wait before removal.
 */
function addTransitionLaterTimed(elements, time) {
    setTimeout(function () {
        addTransition(elements);
    }, time);
}

// SLOW

/**
 * Adds the slowtransition CSS class to the passed elements.
 * @param elements The elements to which to add the slowtransition class.
 */
function addSlowTransition(elements) {
    $(elements).addClass("slowtransition");
}

/**
 * Removes the slowtransition CSS class from the passed elements immediately.
 * @param elements The elements from which to remove the slowtransition class.
 */
function removeSlowTransition(elements) {
    $(elements).removeClass("slowtransition");
}

/**
 * Removes the slowtransition CSS class from each of the passed elements after 
 * eight hundred milliseconds, which should suffice for the animation to 
 * complete.
 * @param elements The elements of which to remove the slowtransition class.
 */
function removeSlowTransitionLater(elements) {
    setTimeout(function () {
        removeSlowTransition(elements);
    }, 800);
}

/**
 * Removes the slowtransition CSS class from each of the passed elements 
 * after a specified amount of time.
 * @param elements The elements of which to remove the slowtransition class.
 * @param time How long, in milliseconds, to wait before removal.
 */
function removeSlowTransitionLaterTimed(elements, time) {
    setTimeout(function () {
        removeSlowTransition(elements);
    }, time);
}

 /**
 * Adds the slowtransition CSS class to each of the passed elements 
 * after eight hundred milliseconds, which should suffice for an animation to 
 * complete.
 * @param elements The elements to which to add the slowtransition class.
 */
function addSlowTransitionLater(elements) {
    setTimeout(function () {
        addSlowTransition(elements);
    }, 800);
}

/**
 * Adds the slowtransition CSS class to each of the passed elements 
 * after a specified amount of time.
 * @param elements The elements to which to add the slowtransition class.
 * @param time How long, in milliseconds, to wait before removal.
 */
function addSlowTransitionLaterTimed(elements, time) {
    setTimeout(function () {
        addSlowTransition(elements);
    }, time);
}

// VERY SLOW

/**
 * Adds the veryslowtransition CSS class to the passed elements.
 * @param elements The elements to which to add the veryslowtransition class.
 */
function addVerySlowTransition(elements) {
    $(elements).addClass("veryslowtransition");
}

/**
 * Removes the veryslowtransition CSS class from the passed elements 
 * immediately.
 * @param elements The elements from which to remove the veryslowtransition 
 * class.
 */
function removeVerySlowTransition(elements) {
    $(elements).removeClass("veryslowtransition");
}

/**
 * Removes the veryslowtransition CSS class from each of the passed elements 
 * after one thousand milliseconds, which should suffice for the animation to 
 * complete.
 * @param elements The elements of which to remove the veryslowtransition class.
 */
function removeVerySlowTransitionLater(elements) {
    setTimeout(function () {
        removeVerySlowTransition(elements);
    }, 1000);
}

/**
 * Removes the veryslowtransition CSS class from each of the passed elements 
 * after a specified amount of time.
 * @param elements The elements of which to remove the veryslowtransition class.
 * @param time How long, in milliseconds, to wait before removal.
 */
function removeVerySlowTransitionLaterTimed(elements, time) {
    setTimeout(function () {
        removeVerySlowTransition(elements);
    }, time);
}
    
 /**
 * Adds the veryslowtransition CSS class to each of the passed elements 
 * after one thousand milliseconds, which should suffice for an animation to 
 * complete.
 * @param elements The elements to which to add the veryslowtransition class.
 */
function addVerySlowTransitionLater(elements) {
    setTimeout(function () {
        addVerySlowTransition(elements);
    }, 1000);
}

/**
 * Adds the veryslowtransition CSS class to each of the passed elements 
 * after a specified amount of time.
 * @param elements The elements to which to add the veryslowtransition class.
 * @param time How long, in milliseconds, to wait before removal.
 */
function addVerySlowTransitionLaterTimed(elements, time) {
    setTimeout(function () {
        addVerySlowTransition(elements);
    }, time);
}


/**
 * Suspends all animation for a very long amount of time.
 */
function suspendAnimationVeryLong(){
    var time = 1050;
    var currentlyVeryFastAnimated = $(".veryfasttransition");
    var currentlyFastAnimated = $(".fasttransition");
    var currentlyAnimated = $(".transition");
    var currentlySlowlyAnimated = $(".slowtransition");
    var currentlyVerySlowlyAnimated = $(".veryslowtransition");
    
    removeVeryFastTransition(currentlyVeryFastAnimated);
    removeFastTransition(currentlyFastAnimated);
    removeTransition(currentlyAnimated);
    removeSlowTransition(currentlySlowlyAnimated);
    removeVerySlowTransition(currentlyVerySlowlyAnimated);
    
    addVeryFastTransitionLaterTimed(currentlyVeryFastAnimated, time);
    addFastTransitionLaterTimed(currentlyFastAnimated, time);
    addTransitionLaterTimed(currentlyAnimated, time);
    addSlowTransitionLaterTimed(currentlySlowlyAnimated, time);
    addVerySlowTransitionLaterTimed(currentlyVerySlowlyAnimated, time);
}

/**
 * Suspends all animation for a very long amount of time.
 * @param callback The function to call the moment animations have been 
 * reenabled.
 */
function suspendAnimationVeryLongCallback(callback){
    var time = 1050;
    var currentlyVeryFastAnimated = $(".veryfasttransition");
    var currentlyFastAnimated = $(".fasttransition");
    var currentlyAnimated = $(".transition");
    var currentlySlowlyAnimated = $(".slowtransition");
    var currentlyVerySlowlyAnimated = $(".veryslowtransition");
    
    removeVeryFastTransition(currentlyVeryFastAnimated);
    removeFastTransition(currentlyFastAnimated);
    removeTransition(currentlyAnimated);
    removeSlowTransition(currentlySlowlyAnimated);
    removeVerySlowTransition(currentlyVerySlowlyAnimated);
    
    addVeryFastTransitionLaterTimed(currentlyVeryFastAnimated, time);
    addFastTransitionLaterTimed(currentlyFastAnimated, time);
    addTransitionLaterTimed(currentlyAnimated, time);
    addSlowTransitionLaterTimed(currentlySlowlyAnimated, time);
    addVerySlowTransitionLaterTimed(currentlyVerySlowlyAnimated, time);
    
    setTimeout(callback, time);
}


/** CLASS WARFARE **/

// REMOVAL

/**
 * Removes the specified class from the passed elements.
 * @param {type} elements The elements from which to remove the class.
 * @param {type} toRemove The class to remove.
 */
function removeClass(elements, toRemove){
    $(elements).removeClass(toRemove);
}

// ADDITION

/**
 * Adds the specified class to the passed elements.
 * @param elements The elements to which to add the class.
 * @param toAdd The class to add.
 */
function addClass(elements, toAdd){
    $(elements).addClass(toAdd);
}

// SETTING

/**
 * Sets the class of the passed elements to exactly the passed class. In order
 * to clarify: this will remove every CSS class from the passed elements, and 
 * then add the passed CSS class to it. This procedure will wipe all CSS classes
 * but the passed one from the passed elements.
 * @param elements The elements of which to set the class.
 * @param toSet The CSS class to which to set the elements.
 */
function setClass(elements, toSet){
    $(elements).attr("class", toSet);
}

// RESETTING

/**
 * Resets the class of the passed elements, removing all CSS classes from it
 * completely.
 * @param elements The elements for which to reset the class.
 */
function resetClass(elements){
    $(elements).attr("class", "");
}


/** PROGRESS ICONS **/


// SHOW SAVE

/**
 * This function shows the save icon, stopping any animation it is currently
 * undergoing prior to revealing it.
 */
function showSaveIcon(){
    $(".koboldadventuresaving").stop(true);
    $(".koboldadventuresaving").show(400);
}

// HIDE SAVE

/**
 * This function hides the save icon, stopping any animation it is currently
 * undergoing prior to hiding it.
 */
function hideSaveIcon(){
    $(".koboldadventuresaving").stop(true);
    $(".koboldadventuresaving").hide(400);
}

// SHOW LOAD

/**
 * This function shows the load icon, stopping any animation it is currently
 * undergoing prior to revealing it.
 */
function showLoadIcon(){
    $(".koboldadventureloading").stop(true);
    $(".koboldadventureloading").show(400);
}

// HIDE LOAD

/**
 * This function hides the load icon, stopping any animation it is currently
 * undergoing prior to hiding it.
 */
function hideLoadIcon(){
    $(".koboldadventureloading").stop(true);
    $(".koboldadventureloading").hide(400);
}


/** SCENE LOADING **/


// SUCCESSFULLY

/**
 * Function to be used as callback for successful afterload loading.
 * Appends the loaded javascript to the script storage. It will immediately be
 * executed.
 * Will hide the loading icon after execution.
 * @param data The fetched Javascript.
 */
function doneLoadingAfterload(data){
    $("#koboldadventurescriptstorage script").append(data);
    hideLoadIcon();
}

/**
 * Discards the old scene, replacing it with the new one. Then makes the new one
 * visible. Afterwords, fetches the scene's afterload.js.
 * @param data The new scene.
 */
function switchAndShowSceneContent(data){
    $(".koboldadventuremain").html(data);
    $("#koboldadventurescenetabstorage").html(data);
    $(".koboldadventuremain .koboldadventurecontent").fadeOut(0);
    $(".koboldadventuremain .koboldadventurecontent").fadeIn(400);
    $.get(buildSceneFilePath("/js/afterload.js"))
            .done(doneLoadingAfterload)
            .fail(failedLoadingResource);
}

/**
 * Function to be used as callback for successful scene loading. 
 * Will first fade out the current content, then replace it with the new content,
 * then show it once more.
 * @param data The fetched scene.
 */
function doneLoadingScene(data){
    $(".koboldadventuremain .koboldadventurecontent").fadeOut(400, function(){switchAndShowSceneContent(data);});  // Needs to be called in an anonymous callback to avoid trouble
}

/**
 * Function to be used as callback for successful init script loading.
 * Will place the init script inside of script tags in the script storage. It
 * will immediately be executed.
 * Will then continue by loading the scene.
 * @param data The loaded JavaScript.
 */
function doneLoadingInit(data){
    $("#koboldadventurescriptstorage script").html(data);
    $.get(buildSceneFilePath("index.html"))
            .done(doneLoadingScene)
            .fail(failedLoadingResource);
}

// UNSUCCESSFULLY

/**
 * Function to be used as callback for unsuccessful scene loading.
 * Will notify the user that something broke, then hide the loading icon.
 */
function failedLoadingResource(){
    alert("Loading failed! This probably broke everything. Please reload the page and try again. If the problem persists," +
            " please do notify TinkeringTurian. Keep in mind that it may just be your internet connection acting up!");
    hideLoadIcon();
}

// SCENE PATH BUILDING

/**
 * Builds a scene path using the current scene's name and the global sceneFolder
 * variable.
 * @returns A path to the root directory of the current scene.
 */
function buildScenePath(){
    return sceneFolder + currentScene + '/';
}

/**
 * Builds a path to a specified file within the current scene.
 * @param file The path to the file, relative to the root directory of the scene
 * you wish to have a path to.
 * @returns A path to the requested file within the current scene.
 */
function buildSceneFilePath(file){
    return buildScenePath() + file;
}


/** SAVING AND LOADING **/


// CONSTANT DEFINITION

var koboldAdventureSaveManagerKoboldLocation = "kobold";
var koboldAdventureSaveManagerSceneLocation = "scene";
var koboldAdventureSaveManagerSceneNameLocation = "scenename";
var koboldAdventureSaveManagerCommentLocation = "comment";


// SAVE TO A SLOT

/**
 * Saves the kobold object to the appropriate location.
 * @param slotName The name of the slot to which to save.
 */
function saveKoboldToSlot(slotName){
    localStorage.setItem(slotName + koboldAdventureSaveManagerKoboldLocation, JSON.stringify(kobold));
}

/**
 * Saves the scene object to the appropriate location.
 * @param slotName The name of the slot to which to save.
 */
function saveSceneToSlot(slotName){
    localStorage.setItem(slotName + koboldAdventureSaveManagerSceneLocation, JSON.stringify(scene));
}

/**
 * Saves the currentScene variable to the appropriate location.
 * @param slotName The name of the slot to which to save.
 */
function saveSceneNameToSlot(slotName){
    localStorage.setItem(slotName + koboldAdventureSaveManagerSceneNameLocation, currentScene);
}

/**
 * Saves the user's comment to the appropriate location.
 * @param slotName The name of the slot to which to save.
 * @param comment The user's comment.
 */
function saveCommentToSlot(slotName, comment){
    localStorage.setItem(slotName + koboldAdventureSaveManagerCommentLocation, comment);
}

/**
 * Saves the current game state to a slot.
 * @param slotNumber The number of the slot to save the game to.
 * @param comment An optional user specified comment.
 */
function saveGameToSlot(slotNumber, comment){
    if(typeof comment === 'undefined')
        comment = "";
    
    var slotName = "slot" + slotNumber;
    saveKoboldToSlot(slotName);
    saveSceneToSlot(slotName);
    saveSceneNameToSlot(slotName);
    saveCommentToSlot(slotName, comment);
}

// LOAD FROM A SLOT

/**
 * Loads the kobold object from the appropriate location.
 * @param slotName The name of the slot from which to load.
 * @returns The requested kobold object, or null if the save file does not exist or is corrupted.
 */
function loadKoboldFromSlot(slotName){
    var fetched = localStorage.getItem(slotName + koboldAdventureSaveManagerKoboldLocation);
    
    if(fetched === null)
        return fetched;
    
    return JSON.parse(fetched);
}

/**
 * Loads the scene object from the appropriate location.
 * @param slotName The name of the slot from which to load.
 * @returns The requested scene object, or null if the save file does not exist or is corrupted.
 */
function loadSceneFromSlot(slotName){
    var fetched = localStorage.getItem(slotName + koboldAdventureSaveManagerSceneLocation);
    
    if(fetched === null)
        return fetched;
    
    return JSON.parse(fetched);
}

/**
 * Loads the scene name from the appropriate location.
 * @param slotName The name of the slot from which to load.
 * @returns The requested scene name, or null if the save file does not exist or is corrupted.
 */
function loadSceneNameFromSlot(slotName){
    var fetched = localStorage.getItem(slotName + koboldAdventureSaveManagerSceneNameLocation);
    return fetched;
}

/**
 * Loads the comment from the appropriate location.
 * @param slotName The name of the slot from which to load.
 * @returns The requested comment, or null if the save file does not exist or is corrupted.
 */
function loadCommentFromSlot(slotName){
    var fetched = localStorage.getItem(slotName + koboldAdventureSaveManagerCommentLocation);
    return fetched;
}


function loadGameFromSlot(){
    makeMyKoboldDoStuff();
}

// READ BASIC INFORMATION ABOUT A SAVE FROM A SLOT

/**
 * This function reads basic information about a save slot, and returns it in
 * the form of an object. It returns undefined if the save slot is not currently
 * being used.
 * @param slotName The name of the slot from which to load
 * @returns An object containing the save slot data.
 */
function readSaveSlot(slotName){
    var kobold = loadKoboldFromSlot(slotName);
    var sceneName = loadSceneNameFromSlot(slotName);
    var comment = loadCommentFromSlot(slotName);
    
    if(kobold === null || scene === null || sceneName === null || comment === null){
        return null;
    }
    
    var data = new Object();
    data.name = kobold.name;
    data.gender = kobold.gender;
    data.sceneName = sceneName;
    data.comment = comment;
    
    return data;
}

// POPULATE SAVE SLOTS

/**
 * Will populate the passed saveslots by reading data from permanent storage.
 * @param slots The slots to populate.
 */
function populateSaveSlots(slots){
    slots.each(populateSaveSlot);
}

/**
 * Populates the saveslot passed internally by reading data from permanent 
 * storage.
 */
function populateSaveSlot(){
    // Strip each save slot of its contents.
    stripSaveSlot(this);
    // Grab the final letter of the id. That's our slot number.
    var slotNumber = $(this).attr('id').slice(-1);
    // The slot name is the slot number with "slot" in front of it.
    var slotName = "slot" + slotNumber;
    // Read the slot's contents.
    var data = readSaveSlot(slotName);
    // If the save slot had contents, populate the element with them.
    if(data !== null)
        populateSaveSlotWithData(this, data);
    // Else, set the element to empty.
    else{
        makeSaveSlotInactive(this);
    }
    
}

/**
 * Populates the passed save slot with elements from the passed data object.
 * @param slot The save slot to populate.
 * @param data The data object received from the readSaveSlot function.
 */
function populateSaveSlotWithData(slot, data){
    $(slot).addClass("koboldadventuresaveslotfilled");
    $(slot).find(".koboldadventuresaveslotname").html(data.name);
    $(slot).find(".koboldadventuresaveslotgender").html(data.gender);
    $(slot).find(".koboldadventuresaveslotscene").html(data.sceneName);
    $(slot).find(".koboldadventuresaveslotcomment").html(data.comment);
}

/**
 * Makes the passed save slot inactive.
 * @param slot The save slot to inactivate.
 */
function makeSaveSlotInactive(slot){
    $(slot).addClass("koboldadventuresaveslotempty");
    $(slot).find(".koboldadventuresaveslotcorner").addClass("hidden");
}

/**
 * Strips a saveslot of all content, reducing it to its base.
 * @param slot The save slot to strip.
 */
function stripSaveSlot(slot){
    // Remove filled and empty classes from the slot itself.
    $(slot).removeClass("koboldadventuresaveslotfilled");
    $(slot).removeClass("koboldadventuresaveslotempty");
    // Remove hidden class from the corner adornments.
    $(slot).find(".koboldadventuresaveslotcorner").removeClass("hidden");
    // Remove any stored names, genders, scenes and comments.
    $(slot).find(".koboldadventuresaveslotname").html("");
    $(slot).find(".koboldadventuresaveslotgender").html("");
    $(slot).find(".koboldadventuresaveslotscene").html("");
    $(slot).find(".koboldadventuresaveslotcomment").html("");
}
