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
function suspendAnimationVeryLong() {
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
function suspendAnimationVeryLongCallback(callback) {
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
function removeClass(elements, toRemove) {
    $(elements).removeClass(toRemove);
}

// ADDITION

/**
 * Adds the specified class to the passed elements.
 * @param elements The elements to which to add the class.
 * @param toAdd The class to add.
 */
function addClass(elements, toAdd) {
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
function setClass(elements, toSet) {
    $(elements).attr("class", toSet);
}

// RESETTING

/**
 * Resets the class of the passed elements, removing all CSS classes from it
 * completely.
 * @param elements The elements for which to reset the class.
 */
function resetClass(elements) {
    $(elements).attr("class", "");
}


/** PROGRESS ICONS **/


// SHOW SAVE

/**
 * This function shows the save icon, stopping any animation it is currently
 * undergoing prior to revealing it.
 */
function showSaveIcon() {
    $(".koboldadventuresaving").stop(true);
    $(".koboldadventuresaving").show(400);
}

// HIDE SAVE

/**
 * This function hides the save icon, stopping any animation it is currently
 * undergoing prior to hiding it.
 */
function hideSaveIcon() {
    $(".koboldadventuresaving").stop(true);
    $(".koboldadventuresaving").hide(400);
}

// SHOW LOAD

/**
 * This function shows the load icon, stopping any animation it is currently
 * undergoing prior to revealing it.
 */
function showLoadIcon() {
    $(".koboldadventureloading").stop(true);
    $(".koboldadventureloading").show(400);
}

// HIDE LOAD

/**
 * This function hides the load icon, stopping any animation it is currently
 * undergoing prior to hiding it.
 */
function hideLoadIcon() {
    $(".koboldadventureloading").stop(true);
    $(".koboldadventureloading").hide(400);
}


/** SCENE LOADING **/


// SUCCESSFULLY

/**
 * Function to be used as callback for successful afterload loading.
 * Appends the loaded javascript to the script storage. It will immediately be
 * executed. Then the sceneParams object will be emptied.
 * Will hide the loading icon after execution.
 * @param data The fetched Javascript.
 */
function doneLoadingAfterload(data) {
    $("#koboldadventurescriptstorage script").append(data);
    sceneParams = new Object();
    hideLoadIcon();
}

/**
 * Switches tabs, discards the old scene, replacing it with the new one. Then 
 * makes the new one visible. 
 * Then, the starting content of the scene is preprocessed.
 * After preprocessing, the scene-defined init() or load() function will be called depending on
 * whether the scene was loaded from another scene or from a save.
 * Then clears the sceneParams object, as it is no longer needed.  
 * Afterwards, fetches the scene's afterload.js.
 * @param data The new scene.
 */
function switchAndShowSceneContent(data) {
    // Switch to the scene tab
    changeTabInstantNoStore("scene");

    $(".koboldadventuremain").html(data);
    $("#koboldadventurescenetabstorage").html(data);

    // Preprocess scene
    $(".koboldadventuremain").not(".koboldadventurestorage").html(preProcess($(".koboldadventuremain").not(".koboldadventurestorage").html()));

    if (koboldAdventureSceneLoaderFromSave)
        load();
    else
        init();

    sceneParams = new Object();

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
function doneLoadingScene(data) {
    $(".koboldadventuremain .koboldadventurecontent").fadeOut(400, function () {
        switchAndShowSceneContent(data);
    });  // Needs to be called in an anonymous callback to avoid trouble
}

/**
 * Function to be used as callback for successful init script loading.
 * Will place the init script inside of script tags in the script storage. It
 * will immediately be executed. Continues by loading the scene.
 * @param data The loaded JavaScript.
 */
function doneLoadingInit(data) {
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
function failedLoadingResource() {
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
function buildScenePath() {
    return sceneFolder + currentScene + '/';
}

/**
 * Builds a path to a specified file within the current scene.
 * @param file The path to the file, relative to the root directory of the scene
 * you wish to have a path to.
 * @returns A path to the requested file within the current scene.
 */
function buildSceneFilePath(file) {
    return buildScenePath() + file;
}


/** SAVING AND LOADING **/


// CONSTANT DEFINITION

var koboldAdventureSaveManagerKoboldLocation = "kobold";
var koboldAdventureSaveManagerSceneLocation = "scene";
var koboldAdventureSaveManagerSceneNameLocation = "scenename";
var koboldAdventureSaveManagerCommentLocation = "comment";


// REMOVE A SAVE

function removeSave(slotNumber) {
    var slotName = "slot" + slotNumber;
    localStorage.removeItem(slotName + koboldAdventureSaveManagerKoboldLocation);
    localStorage.removeItem(slotName + koboldAdventureSaveManagerSceneLocation);
    localStorage.removeItem(slotName + koboldAdventureSaveManagerSceneNameLocation);
    localStorage.removeItem(slotName + koboldAdventureSaveManagerCommentLocation);
}

// SAVE TO A SLOT

/**
 * Saves the kobold object to the appropriate location.
 * @param slotName The name of the slot to which to save.
 */
function saveKoboldToSlot(slotName) {
    localStorage.setItem(slotName + koboldAdventureSaveManagerKoboldLocation, JSON.stringify(kobold));
}

/**
 * Saves the scene object to the appropriate location.
 * @param slotName The name of the slot to which to save.
 */
function saveSceneToSlot(slotName) {
    localStorage.setItem(slotName + koboldAdventureSaveManagerSceneLocation, JSON.stringify(scene));
}

/**
 * Saves the currentScene variable to the appropriate location.
 * @param slotName The name of the slot to which to save.
 */
function saveSceneNameToSlot(slotName) {
    localStorage.setItem(slotName + koboldAdventureSaveManagerSceneNameLocation, currentScene);
}

/**
 * Saves the user's comment to the appropriate location.
 * @param slotName The name of the slot to which to save.
 * @param comment The user's comment.
 */
function saveCommentToSlot(slotName, comment) {
    localStorage.setItem(slotName + koboldAdventureSaveManagerCommentLocation, comment);
}

/**
 * Saves the current game state to a slot.
 * @param slotNumber The number of the slot to save the game to.
 * @param comment An optional user specified comment.
 */
function saveGameToSlot(slotNumber, comment) {
    showSaveIcon();

    if (typeof comment === 'undefined')
        comment = "";

    var slotName = "slot" + slotNumber;
    saveKoboldToSlot(slotName);
    saveSceneToSlot(slotName);
    saveSceneNameToSlot(slotName);
    saveCommentToSlot(slotName, comment);

    unbindSaveSlotFunctions();
    populateSaveSlots($(".koboldadventuremain .koboldadventuresaveslot"));
    bindSaveSlotUIFunctions();
    bindSaveToSaveSlots();

    // Delay hiding the save icon so the user definitely saw his game getting saved
    setTimeout(hideSaveIcon, 600);
}

// LOAD FROM A SLOT

/**
 * Loads the kobold object from the appropriate location.
 * @param slotName The name of the slot from which to load.
 * @returns The requested kobold object, or null if the save file does not exist or is corrupted.
 */
function loadKoboldFromSlot(slotName) {
    var fetched = localStorage.getItem(slotName + koboldAdventureSaveManagerKoboldLocation);

    if (fetched === null)
        return fetched;

    return JSON.parse(fetched);
}

/**
 * Loads the scene object from the appropriate location.
 * @param slotName The name of the slot from which to load.
 * @returns The requested scene object, or null if the save file does not exist or is corrupted.
 */
function loadSceneFromSlot(slotName) {
    var fetched = localStorage.getItem(slotName + koboldAdventureSaveManagerSceneLocation);

    if (fetched === null)
        return fetched;

    return JSON.parse(fetched);
}

/**
 * Loads the scene name from the appropriate location.
 * @param slotName The name of the slot from which to load.
 * @returns The requested scene name, or null if the save file does not exist or is corrupted.
 */
function loadSceneNameFromSlot(slotName) {
    var fetched = localStorage.getItem(slotName + koboldAdventureSaveManagerSceneNameLocation);
    return fetched;
}

/**
 * Loads the comment from the appropriate location.
 * @param slotName The name of the slot from which to load.
 * @returns The requested comment, or null if the save file does not exist or is corrupted.
 */
function loadCommentFromSlot(slotName) {
    var fetched = localStorage.getItem(slotName + koboldAdventureSaveManagerCommentLocation);
    return fetched;
}

/**
 * Loads all the required data for the game to properly be initiated from the
 * specified save slot.
 * @param slotName The name of the slot from which to load.
 * @returns True if successful, false otherwise.
 */
function loadEverythingFromSlot(slotName) {
    var foundKobold = loadKoboldFromSlot(slotName);
    var foundScene = loadSceneFromSlot(slotName);
    var foundSceneName = loadSceneNameFromSlot(slotName);

    if (foundKobold === null || foundScene === null || foundSceneName === null)
        return false;

    kobold = foundKobold;
    scene = foundScene;
    currentScene = foundSceneName;
    return true;
}

/**
 * Loads a game from the specified save slot slot.
 * @param slotNumber The number of the save slot to load.
 */
function loadGameFromSlot(slotNumber) {
    showLoadIcon();

    var slotName = "slot" + slotNumber;

    if (!loadEverythingFromSlot(slotName)) {
        alert("Save slot loading failed! Perhaps the save slot is empty, or maybe the data is corrupted.");
        hideLoadIcon();
        return;
    }

    makeMyKoboldDoStuff();

    loadScene(currentScene, true);
}

// READ BASIC INFORMATION ABOUT A SAVE FROM A SLOT

/**
 * This function reads basic information about a save slot, and returns it in
 * the form of an object. It returns undefined if the save slot is not currently
 * being used.
 * @param slotName The name of the slot from which to load
 * @returns An object containing the save slot data.
 */
function readSaveSlot(slotName) {
    var foundKobold = loadKoboldFromSlot(slotName);
    var foundSceneName = loadSceneNameFromSlot(slotName);
    var foundComment = loadCommentFromSlot(slotName);

    if (foundKobold === null || foundSceneName === null || foundComment === null) {
        return null;
    }

    var data = new Object();
    data.name = foundKobold.name;
    data.gender = foundKobold.gender;
    data.sceneName = foundSceneName;
    data.comment = foundComment;

    return data;
}

// POPULATE SAVE SLOTS

/**
 * Will populate the passed saveslots by reading data from permanent storage.
 * @param slots The slots to populate.
 */
function populateSaveSlots(slots) {
    slots.each(populateSaveSlot);
}

/**
 * Populates the saveslot passed internally by reading data from permanent 
 * storage.
 */
function populateSaveSlot() {
    // Strip each save slot of its contents.
    stripSaveSlot(this);
    // Grab the final letter of the id. That's our slot number.
    var slotNumber = $(this).attr('id').slice(-1);
    // The slot name is the slot number with "slot" in front of it.
    var slotName = "slot" + slotNumber;
    // Read the slot's contents.
    var data = readSaveSlot(slotName);
    // If the save slot had contents, populate the element with them.
    if (data !== null)
        populateSaveSlotWithData(this, data);
    // Else, set the element to empty.
    else {
        makeSaveSlotInactive(this);
    }

}

/**
 * Populates the passed save slot with elements from the passed data object.
 * @param slot The save slot to populate.
 * @param data The data object received from the readSaveSlot function.
 */
function populateSaveSlotWithData(slot, data) {
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
function makeSaveSlotInactive(slot) {
    $(slot).addClass("koboldadventuresaveslotempty");
    $(slot).find(".koboldadventuresaveslotcorner").addClass("hidden");
}

/**
 * Strips a saveslot of all content, reducing it to its base.
 * @param slot The save slot to strip.
 */
function stripSaveSlot(slot) {
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


/** TAB MANAGEMENT **/


/**
 * Clears the stats tab of status.
 */
function unpopulateStatsTab() {
    var stats = $(".koboldadventuremain .koboldadventurestatscontainer");
    stats.html("");
}

/**
 * Returns a well formatted HTML string representing the kobold's attributes, 
 * with a fitting header.
 * @returns a well formatted HTML string representing the kobold's attributes, 
 * with a fitting header.
 */
function populateStatsTabGetAttributes() {
    var toReturn = '<h2 class="koboldadventuresubtitle">' + "Attributes" + '</h2>';

    $.each(kobold.stats.attr, function (index, value) {
        toReturn += '<div class="koboldadventurehalf"><span class="bold">' + index + '</span>: ' + value + '</div>';
    });

    return toReturn;
}

/**
 * Returns a well formatted HTML string representing the kobold's derived 
 * attributes, with a fitting header.
 * @returns a well formatted HTML string representing the kobold's derived 
 * attributes, with a fitting header.
 */
function populateStatsTabGetDerivedAttributes() {
    var toReturn = '<h2 class="koboldadventuresubtitle">' + "Derived Attributes" + '</h2>';

    return toReturn;
}

/**
 * Returns a well formatted HTML string representing how many times the kobold 
 * has been fucked, with a fitting header.
 * @returns a well formatted HTML string representing how many times the kobold 
 * has been fucked, with a fitting header.
 */
function populateStatsTabGetSex() {
    var toReturn = '<h2 class="koboldadventuresubtitle">' + "Sexual" + '</h2>';

    if (kobold.stats.consensual === 0)
        toReturn += "<p>You haven't ever had consensual sex.</p>";
    if (kobold.stats.consensual === 1)
        toReturn += "<p>You have had consensual sex before.</p>";
    if (kobold.stats.consensual > 1)
        toReturn += "<p>You had consensual sex " + kobold.stats.consensual + " times.</p>";

    if (kobold.stats.formoney === 0)
        toReturn += "<p>You haven't ever had sex for money.</p>";
    if (kobold.stats.formoney === 1)
        toReturn += "<p>You have had sex for money once before.</p>";
    if (kobold.stats.formoney > 1)
        toReturn += "<p>You have had sex for money " + kobold.stats.formoney + " times.</p>";

    if (kobold.stats.prostitute === 0)
        toReturn += "<p>You haven't ever fucked a prostitute.</p>";
    if (kobold.stats.prostitute === 1)
        toReturn += "<p>You've fucked a prostitute once before.</p>";
    if (kobold.stats.prostitute > 1)
        toReturn += "<p>You have fucked " + kobold.stats.prostitute + " hookers.</p>";

    if (kobold.stats.beenraped === 0)
        toReturn += "<p>You've never been raped before.</p>";
    if (kobold.stats.beenraped === 1)
        toReturn += "<p>You've been raped once before.</p>";
    if (kobold.stats.beenraped > 1)
        toReturn += "<p>You have been raped " + kobold.stats.beenraped + " times.</p>";

    if (kobold.stats.rape === 0)
        toReturn += "<p>You haven't ever raped someone.</p>";
    if (kobold.stats.rape === 1)
        toReturn += "<p>You've raped someone before.</p>";
    if (kobold.stats.rape > 1)
        toReturn += "<p>You have raped " + kobold.stats.rape + " people.</p>";
    
    if (kobold.stats.came.Times === 0)
        toReturn += "<p>You haven't climaxed recently.</p>";
    if (kobold.stats.cameTimes === 1)
        toReturn += "<p>You've reached your climax recently.</p>";
    if (kobold.stats.came.Times > 1)
        toReturn += "<p>You have came " + kobold.stats.came.Times + " times recently.</p>";


    toReturn += '<h3 class="koboldadventuresubsubtitle">' + "Receiving" + '</h3>';

    if (kobold.stats.sex.Hands === 0)
        toReturn += "<p>You haven't ever given a handjob.</p>";
    if (kobold.stats.sex.Hands === 1)
        toReturn += "<p>You have given one handjob before.</p>";
    if (kobold.stats.sex.Hands > 1)
        toReturn += "<p>You have given " + kobold.stats.sex.Hands + " handjobs.</p>";

    if (kobold.stats.sex.Mouth === 0)
        toReturn += "<p>You haven't ever given a blowjob.</p>";
    if (kobold.stats.sex.Mouth === 1)
        toReturn += "<p>You have given one blowjob before.</p>";
    if (kobold.stats.sex.Mouth > 1)
        toReturn += "<p>You have given " + kobold.stats.sex.Mouth + " blowjobs.</p>";

    if (kobold.gender === "Male") {
        if (kobold.stats.sex.Cockslit === 0)
            toReturn += "<p>You haven't ever been fucked in your cockslit.</p>";
        if (kobold.stats.sex.Cockslit === 1)
            toReturn += "<p>You have been fucked in your cockslit once before.</p>";
        if (kobold.stats.sex.Cockslit > 1)
            toReturn += "<p>Your cockslit been fucked " + kobold.stats.sex.Cockslit + " times.</p>";
    }

    if (kobold.gender === "Female") {
        if (kobold.stats.sex.Cunt === 0)
            toReturn += "<p>You haven't ever been fucked.</p>";
        if (kobold.stats.sex.Cunt === 1)
            toReturn += "<p>You have been fucked once before.</p>";
        if (kobold.stats.sex.Cunt > 1)
            toReturn += "<p>You have been fucked " + kobold.stats.sex.Cunt + " times.</p>";
    }

    if (kobold.stats.sex.Ass === 0)
        toReturn += "<p>You haven't ever had anal sex.</p>";
    if (kobold.stats.sex.Ass === 1)
        toReturn += "<p>You've been fucked up the butt once.</p>";
    if (kobold.stats.sex.Ass > 1)
        toReturn += "<p>You have been fucked in the ass " + kobold.stats.sex.Ass + " times.</p>";

    if (kobold.stats.sex.Tail === 0)
        toReturn += "<p>You haven't ever given a tailjob.</p>";
    if (kobold.stats.sex.Tail === 1)
        toReturn += "<p>You have given one tailjob before.</p>";
    if (kobold.stats.sex.Tail > 1)
        toReturn += "<p>You have given " + kobold.stats.sex.Tail + " tailjobs.</p>";

    if (kobold.stats.sex.Other === 0)
        toReturn += "<p>You haven't ever had unconventional sex.</p>";
    if (kobold.stats.sex.Other === 1)
        toReturn += "<p>You have had unconventional sex once before.</p>";
    if (kobold.stats.sex.Other > 1)
        toReturn += "<p>You have had unconventional sex " + kobold.stats.sex.Other + " times.</p>";

    if (kobold.stats.cum.Face === 0)
        toReturn += "<p>You haven't ever received a facial.</p>";
    if (kobold.stats.cum.Face === 1)
        toReturn += "<p>You have had unconventional sex once before.</p>";
    if (kobold.stats.cum.Face > 1)
        toReturn += "<p>You have had unconventional sex " + kobold.stats.sex.Other + " times.</p>";

    if (kobold.stats.cum.Body === 0)
        toReturn += "<p>Your body has never been came on.</p>";
    if (kobold.stats.cum.Body === 1)
        toReturn += "<p>You've been came on before.</p>";
    if (kobold.stats.cum.Body > 1)
        toReturn += "<p>You've been came on " + kobold.stats.cum.Body + " times.</p>";

    if (kobold.gender === "Male") {
        if (kobold.stats.cum.Cockslit === 0)
            toReturn += "<p>Your cockslit has never been came in before.</p>";
        if (kobold.stats.cum.Cockslit === 1)
            toReturn += "<p>Your cockslit has been came in before.</p>";
        if (kobold.stats.cum.Cockslit > 1)
            toReturn += "<p>Your cockslit has been came in " + kobold.stats.cum.Cockslit + " times before.</p>";
    }
    
    if (kobold.gender === "Female") {
        if (kobold.stats.cum.Cunt === 0)
            toReturn += "<p>You have has never been came in before.</p>";
        if (kobold.stats.cum.Cunt === 1)
            toReturn += "<p>You have been came in before.</p>";
        if (kobold.stats.cum.Cunt > 1)
            toReturn += "<p>You have been came in " + kobold.stats.cum.Cunt + " times before.</p>";
    }
    
    if (kobold.stats.cum.Ass === 0)
        toReturn += "<p>Your ass has never been came in.</p>";
    if (kobold.stats.cum.Ass === 1)
        toReturn += "<p>Your ass has been came in before.</p>";
    if (kobold.stats.cum.Ass > 1)
        toReturn += "<p>Your ass has been came in " + kobold.stats.cum.Ass + " times.</p>";
    
    if (kobold.stats.cum.Feet === 0)
        toReturn += "<p>Your feet have never been came on.</p>";
    if (kobold.stats.cum.Feet === 1)
        toReturn += "<p>Your feet have been came on before.</p>";
    if (kobold.stats.cum.Feet > 1)
        toReturn += "<p>Your feet have been came on " + kobold.stats.cum.Feet + " times.</p>";
    
    
    if (kobold.stats.gotfucked.male.Human === 0)
        toReturn += "<p>You've never been fucked by a man.</p>";
    if (kobold.stats.gotfucked.male.Human === 1)
        toReturn += "<p>You've been fucked by a single man.</p>";
    if (kobold.stats.gotfucked.male.Human > 1)
        toReturn += "<p>You've been fucked by " + kobold.stats.gotfucked.male.Human + " men.</p>";
    
    if (kobold.stats.gotfucked.female.Human === 0)
        toReturn += "<p>You've never been fucked by a woman before.</p>";
    if (kobold.stats.gotfucked.female.Human === 1)
        toReturn += "<p>You've been fucked by a single woman.</p>";
    if (kobold.stats.gotfucked.female.Human > 1)
        toReturn += "<p>You've been fucked by " + kobold.stats.gotfucked.female.Human + " women.</p>";
    
    if (kobold.stats.gotfucked.male.Kobold === 0)
        toReturn += "<p>You've never been fucked by a male kobold.</p>";
    if (kobold.stats.gotfucked.male.Kobold === 1)
        toReturn += "<p>You've been fucked by a male kobold before.</p>";
    if (kobold.stats.gotfucked.male.Kobold > 1)
        toReturn += "<p>You've been fucked by " + kobold.stats.gotfucked.male.Kobold + " male kobolds.</p>";
    
    if (kobold.stats.gotfucked.female.Kobold === 0)
        toReturn += "<p>You've never been fucked by a female kobold.</p>";
    if (kobold.stats.gotfucked.female.Kobold === 1)
        toReturn += "<p>You've been fucked by a female kobold before.</p>";
    if (kobold.stats.gotfucked.female.Kobold > 1)
        toReturn += "<p>You've been fucked by " + kobold.stats.gotfucked.female.Kobold + " female kobolds.</p>";
    
    if (kobold.stats.gotfucked.male.Dragon === 0)
        toReturn += "<p>You've never been fucked by a male dragon.</p>";
    if (kobold.stats.gotfucked.male.Dragon === 1)
        toReturn += "<p>You've been fucked by a male dragon before.</p>";
    if (kobold.stats.gotfucked.male.Dragon > 1)
        toReturn += "<p>You've been fucked by " + kobold.stats.gotfucked.male.Dragon + " male dragons.</p>";
    
    if (kobold.stats.gotfucked.female.Dragon === 0)
        toReturn += "<p>You've never been fucked by a female dragon.</p>";
    if (kobold.stats.gotfucked.female.Dragon === 1)
        toReturn += "<p>You've been fucked by a female dragon before.</p>";
    if (kobold.stats.gotfucked.female.Dragon > 1)
        toReturn += "<p>You've been fucked by " + kobold.stats.gotfucked.female.Dragon + " female dragons.</p>";
    
    if (kobold.stats.gotfucked.male.Beast === 0)
        toReturn += "<p>You've never been fucked by a male beast.</p>";
    if (kobold.stats.gotfucked.male.Beast === 1)
        toReturn += "<p>You've been fucked by a male beast before.</p>";
    if (kobold.stats.gotfucked.male.Beast > 1)
        toReturn += "<p>You've been fucked by " + kobold.stats.gotfucked.male.Beast + " male beasts.</p>";
    
    if (kobold.stats.gotfucked.female.Beast === 0)
        toReturn += "<p>You've never been fucked by a female beast.</p>";
    if (kobold.stats.gotfucked.female.Beast === 1)
        toReturn += "<p>You've been fucked by a female beast before.</p>";
    if (kobold.stats.gotfucked.female.Beast > 1)
        toReturn += "<p>You've been fucked by " + kobold.stats.gotfucked.female.Beast + " female beasts.</p>";
    

    toReturn += '<h3 class="koboldadventuresubsubtitle">' + "Giving" + '</h3>';

    if (kobold.stats.fucked.male.Human === 0)
        toReturn += "<p>You've never fucked a man before.</p>";
    if (kobold.stats.fucked.male.Human === 1)
        toReturn += "<p>You've fucked a single man.</p>";
    if (kobold.stats.fucked.male.Human > 1)
        toReturn += "<p>You've fucked " + kobold.stats.fucked.male.Human + " men.</p>";
    
    if (kobold.stats.fucked.female.Human === 0)
        toReturn += "<p>You've never fucked a woman before.</p>";
    if (kobold.stats.fucked.female.Human === 1)
        toReturn += "<p>You've fucked a single woman.</p>";
    if (kobold.stats.fucked.female.Human > 1)
        toReturn += "<p>You've fucked " + kobold.stats.fucked.female.Human + " women.</p>";
    
    if (kobold.stats.fucked.male.Kobold === 0)
        toReturn += "<p>You've never fucked a male kobold.</p>";
    if (kobold.stats.fucked.male.Kobold === 1)
        toReturn += "<p>You've fucked a male kobold before.</p>";
    if (kobold.stats.fucked.male.Kobold > 1)
        toReturn += "<p>You've fucked " + kobold.stats.fucked.male.Kobold + " male kobolds.</p>";
    
    if (kobold.stats.fucked.female.Kobold === 0)
        toReturn += "<p>You've never fucked a female kobold.</p>";
    if (kobold.stats.fucked.female.Kobold === 1)
        toReturn += "<p>You've fucked a female kobold before.</p>";
    if (kobold.stats.fucked.female.Kobold > 1)
        toReturn += "<p>You've fucked " + kobold.stats.fucked.female.Kobold + " female kobolds.</p>";
    
    if (kobold.stats.fucked.male.Dragon === 0)
        toReturn += "<p>You've never fucked a male dragon.</p>";
    if (kobold.stats.fucked.male.Dragon === 1)
        toReturn += "<p>You've fucked a male dragon before.</p>";
    if (kobold.stats.fucked.male.Dragon > 1)
        toReturn += "<p>You've fucked " + kobold.stats.fucked.male.Dragon + " male dragons.</p>";
    
    if (kobold.stats.fucked.female.Dragon === 0)
        toReturn += "<p>You've never fucked a female dragon.</p>";
    if (kobold.stats.fucked.female.Dragon === 1)
        toReturn += "<p>You've fucked a female dragon before.</p>";
    if (kobold.stats.fucked.female.Dragon > 1)
        toReturn += "<p>You've fucked " + kobold.stats.fucked.female.Dragon + " female dragons.</p>";
    
    if (kobold.stats.fucked.male.Beast === 0)
        toReturn += "<p>You've never fucked a male beast.</p>";
    if (kobold.stats.fucked.male.Beast === 1)
        toReturn += "<p>You've fucked a male beast before.</p>";
    if (kobold.stats.fucked.male.Beast > 1)
        toReturn += "<p>You've fucked " + kobold.stats.fucked.male.Beast + " male beasts.</p>";
    
    if (kobold.stats.fucked.female.Beast === 0)
        toReturn += "<p>You've never fucked a female beast.</p>";
    if (kobold.stats.fucked.female.Beast === 1)
        toReturn += "<p>You've fucked a female beast before.</p>";
    if (kobold.stats.fucked.female.Beast > 1)
        toReturn += "<p>You've fucked " + kobold.stats.fucked.female.Beast + " female beasts.</p>";

    return toReturn;
}

/**
 * Populates the stats tab.
 */
function populateStatsTab() {
    var stats = $("#koboldadventurestatstabstorage .koboldadventurestatscontainer");
    var content = "";

    content += populateStatsTabGetAttributes();
    content += populateStatsTabGetDerivedAttributes();
    content += populateStatsTabGetSex();

    stats.html(content);
}

/**
 * Clears the status tab of statuses.
 */
function unpopulateStatusTab() {
    var status = $(".koboldadventuremain .koboldadventurestatuscontainer");
    status.html("");
}

/**
 * Gets the contents of the category, formatted as a string.
 * @param category The category array/pseudoobject. The empty string if the
 * category is not an array. 'You are feeling fine.' if the category is empty.
 * @returns The category formatted as a string.
 */
function getStatusCategoryContent(category) {
    var toReturn = "";

    // If it's not an array, return the empty string.
    if (!(category instanceof Array)) {
        return toReturn;
    }

    // If it's empty, return 'You are feeling fine.'
    if (category.length <= 0) {
        return "You are feeling fine.";
    }

    // If it's an array and it's not empty, iterate over it and return every 
    // value concatenated.
    $.each(category, function (index, value) {
        toReturn += value;
        toReturn += " ";
    });

    return toReturn;
}

/**
 * Populates the status tab.
 */
function populateStatusTab() {
    var status = $("#koboldadventurestatustabstorage .koboldadventurestatuscontainer");
    var content = "";
    // For each status category
    $.each(kobold.status, function (index, value) {
        // Add the category title
        content += '<h2 class="koboldadventuresubtitle">' + index + '</h2>';
        content += '<p class="koboldadventuretext">' + getStatusCategoryContent(value) + '</p>';
    });
    status.html(content);
}

/**
 * Populates the inventory tab with weapons.
 */
function populateInventoryTabWeapons() {
    var weapons = $("#koboldadventureinventorytabstorage .koboldadventureweapons");
    if (kobold.weapons.length <= 0) {
        weapons.html('<p class="koboldadventuresubtitle center"><span class="bold">You have no weapons.</span></p>');
        return;
    }

    var toAppend = '<ul>';
    $.each(kobold.weapons, function (index, value) {
        toAppend += '<li>';
        toAppend += '<span class="bold">' + value.name + '</span>' + '&emsp;&emsp;' + value.desc + ' Tags: ';
        $.each(value.tags, function (index, value) {
            toAppend += '[' + value + '] ';
        });
        toAppend += '</li>';
    });
    toAppend += '</ul>';
    weapons.append(toAppend);
}

/**
 * Populates the inventory tab with equipment.
 */
function populateInventoryTabEquipment() {
    var equipment = $("#koboldadventureinventorytabstorage .koboldadventureequipment");
    if (isNaked()) {
        equipment.html('<p class="koboldadventuresubtitle center"><span class="bold">You are completely naked.</span></p>');
        return;
    }

    var toAppend = '<ul>';
    $.each(kobold.equipment, function (index, value) {
        if (notEmpty(value)) {
            toAppend += '<li>';
            toAppend += '<span class="bold">' + value.name + '</span>' + '&emsp;&emsp;' + value.desc;
            toAppend += '</li>';
        }
    });
    toAppend += '</ul>';
    equipment.append(toAppend);
}

/**
 * Populates the inventory tab with items.
 */
function populateInventoryTabItems() {
    var inventory = $("#koboldadventureinventorytabstorage .koboldadventureinventory");
    if (!hasItems()) {
        inventory.html('<p class="koboldadventuresubtitle center"><span class="bold">You have no belongings on you.</span></p>');
        return;
    }

    var toAppend = '<ul>';
    $.each(kobold.inventory, function (index, value) {
        toAppend += '<li>';
        toAppend += '<span class="bold">' + value.name + '</span>' + '&emsp;&emsp;' + value.desc;
        toAppend += '</li>';
    });
    toAppend += '</ul>';
    inventory.append(toAppend);
}

/**
 * Populates the inventory tab with equipment, items and weapons.
 */
function populateInventoryTab() {
    populateInventoryTabEquipment();
    populateInventoryTabItems();
    populateInventoryTabWeapons();
}

/**
 * Clears the inventory tab of equipment and items.
 */
function unpopulateInventoryTab() {
    $(".koboldadventuremain .koboldadventureinventory").html("");
    $(".koboldadventuremain .koboldadventureequipment").html("");
    $(".koboldadventuremain .koboldadventureweapons").html("");
}

/**
 * Instantly switches to the specified tab. Doesn't store the current tab in 
 * storage. For reasons. You probably shouldn't be using this function.
 * @param tabName The name of the tab. "scene", "statss", "status", etc.
 */
function changeTabInstantNoStore(tabName) {
    tabName = tabName.toLowerCase();
    var tabid = "koboldadventure" + tabName + "tab";
    var tab = $("#" + tabid);

    storePreviousActiveTab();
    removeCurrentActiveTab();
    activateNewTab(tab);
    storeCurrentActiveTab();

    var oldTab = koboldAdventureStorageManagerPreviousTab;
    var newTab = koboldAdventureStorageManagerCurrentTab;
    saveScrollPosition(oldTab);
    fromStorage(newTab);

    // If the next tab is the scene tab, then we need to call the scene's own ontabin function.
    if (koboldAdventureStorageManagerCurrentTab.attr("id") === 'koboldadventurescenetab') {
        ontabin();
    }

    // If the previous tab was the inventory tab, then we need to clear it.
    if (koboldAdventureStorageManagerPreviousTab.attr("id") === 'koboldadventureinventorytab') {
        unpopulateInventoryTab();
    }
}


/** INVENTORY MANAGEMENT **/


/**
 * Returns true if the kobold has items. False otherwise.
 * @returns True if the kobold has items. False otherwise.
 */
function hasItems() {
    var hasStuff = false;
    $.each(kobold.inventory, function (index, value) {
        if (notEmpty(value) && value > 0)
            hasStuff = true;
    });
    return hasStuff;
}

/**
 * Gets the index of an item. Returns -1 if the item was not found.
 * @param item The item or the name of the item to look for.
 * @returns The index of the item or -1 if the item was not found.
 */
function getItemIndex(item) {
    var needle;
    if (typeof item === "string")
        needle = item;
    else
        needle = item.name;

    // The result
    var result = -1;

    // For each item in the inventory
    $.each(kobold.inventory, function (index, value) {
        // If the item is what we're looking for
        if (value.name === needle) {
            // Set our result
            result = index;
            // Break from the $.each
            return false;
        }
    });

    return result;
}

/**
 * Gets the slot of a piece of equipment. Returns an empty string if the 
 * kobold is not wearing the piece of equipment.
 * @param equipment The piece of equipment, or the name of the piece of 
 * equipment.
 * @returns The slot the piece of equipment is being worn in, or the empty
 * string if the kobold does not have the piece of equipment equipped.
 */
function getEquipmentSlot(equipment) {
    var needle;

    if (typeof equipment === "string")
        needle = equipment;
    else
        needle = equipment.name;

    // The result
    var slot = "";

    // For each piece of equipment
    $.each(kobold.equipment, function (index, value) {
        // If the piece of equipment is what we're looking for
        if (value.name === needle) {
            // Set our result
            slot = index;
            // Break from the $.each
            return false;
        }
    });

    return slot;
}

/**
 * Gets the index of a weapon Returns -1 if the kobold does not have the weapon.
 * @param weapon The weapon, or the name of the weapon.
 * @returns The index of the weapon, or -1 if the kobold does not have the 
 * weapon.
 */
function getWeaponIndex(weapon) {
    var needle;

    if (typeof weapon === "string")
        needle = weapon;
    else
        needle = weapon.name;

    // The result
    var toReturn = -1;

    // For each piece of equipment
    $.each(kobold.weapons, function (index, value) {
        // If the weapon is what we're looking for
        if (value.name === needle) {
            // Set our result
            toReturn = index;
            // Break from the $.each
            return false;
        }
    });

    return toReturn;
}

/**
 * Gets the index of a weapon by its tag. Returns -1 if the kobold does not 
 * have the weapon.
 * @param tag The tag to search for.
 * @returns The index of the tag, or -1 if the kobold does not have the 
 * weapon.
 */
function getWeaponIndexByTag(tag) {
    // The result
    var toReturn = -1;

    // For each piece of equipment
    $.each(kobold.weapons, function (index, value) {
        // If the weapon is what we're looking for
        if ($.inArray(tag, value.tags)) {
            // Set our result
            toReturn = index;
            // Break from the $.each
            return false;
        }
    });

    return toReturn;
}


/** GENERAL **/


/**
 * Returns true if the passed variable exists. Returns false otherwise.
 * @param variable The variable to check.
 * @returns True if the passed variable exists. Returns false otherwise.
 */
function exists(variable) {
    return typeof variable !== "undefined";
}

/**
 * Returns true if the passed variable exists and is not null. Returns false 
 * otherwise.
 * @param variable The variable to check.
 * @returns True if the passed variable exists. Returns false otherwise.
 */
function notNull(variable) {
    return exists(variable) && variable !== null;
}


/** PREPROCESSOR **/

var koboldAdventurePreprocessorAliasTranslation =
        {
            "$pri(": "$print(", "$p(": "$print(", "$show(": "$print(", "$sh(": "$print(", "$function(": "$print(", "$fun(": "$print(", "$unf(": "$print(",
            "$meth(": "$method(", "$do(": "$method(", "$d(": "$method(",
            "$kob(": "$kobold(", "$k(": "$kobold(",
            "$nob(": "$nobold(", "$n(": "$nobold(",
            "$sc(": "$scene(", "$s(": "$scene(",
            "$scenedo(": "$scenem(", "$scdo(": "$scenem(", "$sdo(": "$scenem(", "$sc2(": "$scenem(", "$s2(": "$scenem("
        };

/**
 * Exacutes the JavaScript code passed as a string.
 * @param js A string containing JavaScript code.
 * @returns The result of the JavaScript code.
 */
function execute(js) {
    return eval(js);
}


/**
 * Replaces all occurences of toReplace in text with replacement.
 * @param text The text in which to replace.
 * @param toReplace The string to replace.
 * @param replacement The replacement value.
 * @returns The text, with all occurences toReplace replaced.
 */
function replaceAll(text, toReplace, replacement) {
    return text.split(toReplace).join(replacement);
}

/**
 * Replaces all preprocessor method aliases with their base names.
 * @param text The text in which to replace.
 * @returns The text, with method aliases replaced.
 */
function preProcessorReplaceAlias(text) {
    var processedText = text;
    $.each(koboldAdventurePreprocessorAliasTranslation, function (index, value) {
        processedText = replaceAll(processedText, index, value);
    });
    return processedText;
}

/**
 * Gets the first index of a preprocessor token.
 * @param text The text in which to search.
 * @returns The first index of a preprocessor token in the passed text. -1 if
 * no preprocessor tokens were found.
 */
function preProcessorGetFirstIndex(text) {
    var printIndex = text.indexOf("$print(");
    var methodIndex = text.indexOf("$method(");
    var koboldIndex = text.indexOf("$kobold(");
    var noboldIndex = text.indexOf("$nobold(");
    var sceneIndex = text.indexOf("$scene(");
    var scenemIndex = text.indexOf("$scenem(");

    // If we only have -1, return -1
    if (Math.max(printIndex, methodIndex, koboldIndex, noboldIndex, sceneIndex, scenemIndex) === -1)
        return -1;

    // Else we get the minimum of the values that isn't -1
    var minSet = false;
    var min = -1;

    if (printIndex !== -1) {
        if (!minSet) {
            min = printIndex;
            minSet = true;
        } else {
            min = Math.min(printIndex, min);
        }
    }

    if (methodIndex !== -1) {
        if (!minSet) {
            min = methodIndex;
            minSet = true;
        } else {
            min = Math.min(methodIndex, min);
        }
    }

    if (koboldIndex !== -1) {
        if (!minSet) {
            min = koboldIndex;
            minSet = true;
        } else {
            min = Math.min(koboldIndex, min);
        }
    }

    if (noboldIndex !== -1) {
        if (!minSet) {
            min = noboldIndex;
            minSet = true;
        } else {
            min = Math.min(noboldIndex, min);
        }
    }

    if (sceneIndex !== -1) {
        if (!minSet) {
            min = sceneIndex;
            minSet = true;
        } else {
            min = Math.min(sceneIndex, min);
        }
    }

    if (scenemIndex !== -1) {
        if (!minSet) {
            min = printIndex;
            minSet = true;
        } else {
            min = Math.min(scenemIndex, min);
        }
    }

    return min;
}

/**
 * Returns the index of the final parenthesis of the part to process, or -1 if
 * an error occurs. Note that any unclosed parenthesis will break this.
 * @param text The text, beginning at the start of the part to process.
 * @returns The index of the closing parenthesis. -1 if a parenthesis error is found.
 */
function preProcessorGetEndIndex(text) {
    var localText = text;
    var index = localText.indexOf("(") + 1;
    localText = localText.substr(localText.indexOf("(") + 1); // Get right after the (
    var unclosedPar = 1; // How many unclosed parenthesis we have

    while (unclosedPar > 0) {
        var nextClosing = localText.indexOf(")");
        var nextOpening = localText.indexOf("(");

        // If we still have parenthesis to close, yet no more closing parenthesis, then we have an error
        if (nextClosing === -1)
            return -1;

        // If we have no more opening parenthesis, we skip past the next closing parenthesis and update our index
        if (nextOpening === -1) {
            index += nextClosing + 1;
            unclosedPar--; // We of course have one less closing parenthesis after this.
            localText = localText.substr(nextClosing + 1);
            continue;
        }

        // If we have both opening and closing parenthesis remaining, we skip past the next set of parenthesis and update our index
        if (nextOpening < nextClosing) {
            index += nextOpening + 1;
            unclosedPar++; // We of course have one more unclosed parenthesis after this.
            localText = localText.substr(nextOpening + 1);
        } else {
            index += nextClosing + 1;
            unclosedPar--; // We of course have one less closing parenthesis after this.
            localText = localText.substr(nextClosing + 1);
        }
    }

    return index;
}

/**
 * Returns the type of the token, being method or function.
 * @param token The token whose type to return.
 * @returns The type of the token: method or function.
 */
function preProcessorGetType(token) {
    if (token === "$scenem" || token === "$nobold" || token === "$method")
        return "method";
    else
        return "function";
}

/**
 * Returns what must be prepended to the JavaScript based on the token.
 * @param token The token.
 * @returns What should be prepended to the JavaScript prior to execution.
 */
function preProcessorGetPrepend(token) {
    if (token === "$scenem" || token === "$scene")
        return "scene.";

    if (token === "$kobold" || token === "$nobold")
        return "kobold.";

    return "";
}

/**
 * Executes the passed JavaScript. Returns either the JavaScript's result or
 * an empty string, depending on the token. Note that this function will return
 * the empty string regardless of the token if the JavaScript returned undefined.
 * @param token The preprocessor token, with $ but without any parenthesis.
 * @param js The JavaScript to execute.
 * @returns The executed JavaScript's result, or the empty string depending on 
 * the token. The empty string if the JavaScript returned undefined.
 */
function preProcessorExecute(token, js) {
    var type = preProcessorGetType(token);

    var prepend = preProcessorGetPrepend(token);
    js = prepend.concat(js);

    var result = eval(js);

    if (typeof result === "undefined")
        return "";

    if (type === "method")
        return "";

    return result;
}

/**
 * Executes all preprocessor main tag enclosed JavaScript statements as defined
 * on the contribution page.
 * @param text The text in which to execute statements.
 * @returns The text, after preprocessor execution.
 */
function preProcessorExecuteAndReplace(text) {
    var processedText = "";
    var index = -1;

    // While we have things to execute
    while ((index = preProcessorGetFirstIndex(text)) !== -1) {
        processedText = processedText.concat(text.substr(0, index)); // Add text before the to process part to processedText
        text = text.substr(index); // Cut to right in front of the to process token
        var startIndex = text.indexOf("("); // Where the JavaScript begins
        var endIndex = preProcessorGetEndIndex(text); // Where the JavaScript ends
        // If the JavaScript doesn't end, we have a problem.
        if (endIndex === -1) {
            alert("Kobold Preprocessor error! No closing parenthesis found. Did you use ( or ) within a string? Location:" + text);
            break;
        }
        var token = text.substr(0, startIndex); // Extract the token
        var javaScript = text.substr(startIndex + 1, endIndex - startIndex - 2); // Extract the JavaScript
        processedText = processedText.concat(preProcessorExecute(token, javaScript)); // Execute the JavaScript and concatenate
        text = text.substr(endIndex); // Substring until right after the JavaScript's end and continue
    }

    processedText = processedText.concat(text); // Add the last bit of text
    return processedText; // Return
}

/**
 * Preprocesses a piece of text. Executes all JavaScript in it as defined by the
 * preprocessor definition on the contribution page.
 * @param text The text which to preprocess.
 * @returns The preprocessed text.
 */
function preProcess(text) {
    text = preProcessorReplaceAlias(text);
    text = preProcessorExecuteAndReplace(text);
    return text;
}