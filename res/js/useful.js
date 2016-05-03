/**
 * This JavaScript file defines a few useful functions which may be called from 
 * anywhere within your scene. Most, if not all of these functions are
 * documented in the Contributing page, so if you're looking for something you
 * should probably look there first.
 */


/** SCENE LOADING **/

var koboldAdventureSceneLoaderFromSave;

/**
 * Loads the scene, specified by the scenePath, to the main game window.
 * Discards the current scene in the process. 
 * If you wish to pass parameters to the new scene, use the sceneParams object.
 * Note that in save loading mode, the sceneParams object will be emptied, 
 * making it unavailable.
 * Sets the global variable currentScenePath.
 * @param scenePath The scene folder name.
 * @param fromSave Boolean. Whether or not the scene is being loaded from a 
 * save. Defaults to false.
 */
function loadScene(scenePath, fromSave) {
    if (typeof fromSave === 'undefined')
        fromSave = false;

    // Set whether we're loading from a save or not in a global variable so
    // we don't have to pass it down the entire chain of function calls.
    koboldAdventureSceneLoaderFromSave = fromSave;

    showLoadIcon();

    // Empty script storage
    $("#koboldadventurescriptstorage script").html("");

    // If we're loading from a save, clear sceneParams. Else clear scene.
    if (koboldAdventureSceneLoaderFromSave)
        sceneParams = new Object();
    else
        scene = new Object();

    currentScene = scenePath;
    $.get(buildSceneFilePath("js/init.js"))
            .done(doneLoadingInit)
            .fail(failedLoadingResource);
}


/** SAVING **/


/**
 * Saves the game to slot0, the autosave slot. Should be used frequently, to 
 * avoid progress loss for whatever reason.
 * @param comment The comment of the autosave. Should be indicative of the 
 * progress in the current scene.
 */
function autoSave(comment) {
    if (typeof comment === 'undefined')
        comment = "";

    saveGameToSlot(0, comment);
}

/** ANIMATION **/

// VERY FAST

/**
 * Animates the removal of a CSS class from a set of elements. This animation
 * doesn't take long at all to complete. It is near instantaneous.
 * @param elements The elements of which to remove the CSS class.
 * @param toRemove The CSS class to remove.
 */
function animateRemoveClassVeryFast(elements, toRemove) {
    addFastTransition(elements);
    removeClass(elements, toRemove);
    removeFastTransitionLater(elements);
}

/**
 * Animates the addition of a CSS class from a set of elements. This animation
 * doesn't take long at all to complete. It is neaar instantaneous.
 * @param elements The elements to which to add the CSS class.
 * @param toAdd The CSS class to add.
 */
function animateAddClassVeryFast(elements, toAdd) {
    addVeryFastTransition(elements);
    addClass(elements, toAdd);
    removeVeryFastTransitionLater(elements);
}

// FAST

/**
 * Animates the removal of a CSS class from a set of elements. This animation
 * doesn't take long to complete.
 * @param elements The elements of which to remove the CSS class.
 * @param toRemove The CSS class to remove.
 */
function animateRemoveClassFast(elements, toRemove) {
    addFastTransition(elements);
    removeClass(elements, toRemove);
    removeFastTransitionLater(elements);
}

/**
 * Animates the addition of a CSS class from a set of elements. This animation
 * doesn't take long to complete.
 * @param elements The elements to which to add the CSS class.
 * @param toAdd The CSS class to add.
 */
function animateAddClassFast(elements, toAdd) {
    addFastTransition(elements);
    addClass(elements, toAdd);
    removeFastTransitionLater(elements);
}

// REGULAR

/**
 * Animates the removal of a CSS class from a set of elements. This animation
 * takes a mediocre amount of time to complete.
 * @param elements The elements of which to remove the CSS class.
 * @param toRemove The CSS class to remove.
 */
function animateRemoveClass(elements, toRemove) {
    addTransition(elements);
    removeClass(elements, toRemove);
    removeTransitionLater(elements);
}

/**
 * Animates the addition of a CSS class from a set of elements. This animation
 * takes a mediocre amount of time to complete.
 * @param elements The elements to which to add the CSS class.
 * @param toAdd The CSS class to add.
 */
function animateAddClass(elements, toAdd) {
    addTransition(elements);
    addClass(elements, toAdd);
    removeTransitionLater(elements);
}

// SLOW

/**
 * Animates the removal of a CSS class from a set of elements. This animation
 * is rather slow.
 * @param elements The elements of which to remove the CSS class.
 * @param toRemove The CSS class to remove.
 */
function animateRemoveClassSlow(elements, toRemove) {
    addSlowTransition(elements);
    removeClass(elements, toRemove);
    removeSlowTransitionLater(elements);
}

/**
 * Animates the addition of a CSS class from a set of elements. This animation
 * is rather slow.
 * @param elements The elements to which to add the CSS class.
 * @param toAdd The CSS class to add.
 */
function animateAddClassSlow(elements, toAdd) {
    addSlowTransition(elements);
    addClass(elements, toAdd);
    removeSlowTransitionLater(elements);
}

// VERY SLOW

/**
 * Animates the removal of a CSS class from a set of elements. This animation
 * is VERY slow. It takes forever!
 * @param elements The elements of which to remove the CSS class.
 * @param toRemove The CSS class to remove.
 */
function animateRemoveClassVerySlow(elements, toRemove) {
    addVerySlowTransition(elements);
    removeClass(elements, toRemove);
    removeVerySlowTransitionLater(elements);
}

/**
 * Animates the addition of a CSS class from a set of elements. This animation
 * is VERY slow. It takes forever!
 * @param elements The elements to which to add the CSS class.
 * @param toAdd The CSS class to add.
 */
function animateAddClassVerySlow(elements, toAdd) {
    addVerySlowTransition(elements);
    addClass(elements, toAdd);
    removeVerySlowTransitionLater(elements);
}


/** THEMES **/

/**
 * Changes the theme to the passed CSS class. Animates the changes very slowly.
 * @param theme The CSS class to change to.
 */
function changeTheme(theme) {
    suspendAnimationVeryLong();
    addVerySlowTransition($("body, body *"));
    setClass($("body"), theme);
    removeVerySlowTransitionLater($("body, body *"));
}

/**
 * Changes the theme to the passed CSS class. Animates the changes very slowly.
 * @param theme The CSS class to change to.
 * @param callback The function to call after the theme has been changed.
 */
function changeThemeCallback(theme, callback) {
    suspendAnimationVeryLongCallback(callback);
    addVerySlowTransition($("body, body *"));
    setClass($("body"), theme);
    removeVerySlowTransitionLater($("body, body *"));
}

/**
 * Removes the current theme. Must be called prior to changing scenes. It is 
 * recommended you do not use this function, and instead use the version which 
 * accepts a callback.
 */
function removeTheme() {
    // If we have no theme, just exit
    if (typeof $("body").attr("class") === 'undefined' || $("body").attr("class") === "") {
        return;
    }

    // Else we animate the removal of the theme
    suspendAnimationVeryLong();
    addVerySlowTransition($("body, body *"));
    resetClass($("body"));
    removeVerySlowTransitionLater($("body, body *"));

}

/**
 * Removes the current theme. Must be called prior to changing scenes.
 * @param callback The function to call after removing the theme.
 */
function removeThemeCallback(callback) {
    // If we have no theme, just call the callback function and exit
    if (typeof $("body").attr("class") === 'undefined' || $("body").attr("class") === "") {
        callback();
        return;
    }

    // Else we animate the removal of the theme
    suspendAnimationVeryLongCallback(callback);
    addVerySlowTransition($("body, body *"));
    resetClass($("body"));
    removeVerySlowTransitionLater($("body, body *"));
}


/** TAB MANAGEMENT **/


/**
 * Switches to the specified tab.
 * @param tabName The name of the tab. "scene", "statss", "status", etc.
 */
function changeTab(tabName) {
    tabName = tabName.toLowerCase();
    var tabid = "koboldadventure" + tabName + "tab";
    var tab = $("#" + tabid);
    tab.click();
}


/** STYLESHEET MANAGEMENT **/


/**
 * Loads a CSS stylesheet. Note that the location passed to this function is 
 * relative to the root of the website. Be sure to unload it once you're done.
 * Avoid loading the same style sheet multiple times.
 * @param href The location of the stylesheet.
 */
function loadStyleSheet(href) {
    $("head").append('<link rel="stylesheet" type="text/css" href="' + href + '">');
}


/**
 * Unloads all copies of a CSS stylesheet. Note that the location passed to this 
 * function is relative to the root of the website.
 * @param href The location of the stylesheet.
 */
function unloadStyleSheet(href) {
    $('link[href="' + href + '"]').remove();
}


/** SIMPLE CHOICE FRAMEWORK **/


/**
 * Loads a simple choice group. Will automatically update the UI, and then call
 * fetchNext to allow the user to fetch the next segment.
 * @param choiceGroup The mutual class of the choicegroup.
 * @param fetchNext The scene-defined function to call to fetch the next segment
 * of the scene, depending on the choice that was made.
 */
function loadSimpleChoice(choiceGroup, fetchNext) {
    var value = scene[choiceGroup]; // Fetch the value
    var clicked = getChoiceByClassAndValue(choiceGroup, value); // Get the clicked element
    $(".koboldadventuremain ." + choiceGroup).not(".koboldadventurestorage").prop('disabled', true); // Disable the buttons
    selectedOptionStyling(clicked); // Style the clicked element
    fetchNext(); // Fetch the next segment
}

/**
 * Executes a simple choice selection. Will automatically update the UI to indicate
 * what was chosen. Calls fetchNext to allow the user to fetch the next segment.
 * Calls processChoice to allow the user to update the scene and kobold elements.
 * 
 * Sets scene[choiceGroup] to the selected value. This value can later be 
 * accessed via scene.choiceGroup. Note: do not change this value after it is 
 * set. If you must alter it, use a different field for that.
 * 
 * Will create the load stack if it does not yet exist, and will push the choice
 * to the load stack.
 * 
 * @param clicked The clicked object.
 * @param choiceGroup The mutual class of the choicegroup.
 * @param processChoice The scene-defined function to call to update the scene
 * and kobold objects, and potentially to autosave.
 * @param fetchNext The scene-defined function to call to fetch the next segment
 * of the scene, depending on the choice that was made.
 */
function simpleChoice(clicked, choiceGroup, processChoice, fetchNext) {
    $(".koboldadventuremain ." + choiceGroup).not(".koboldadventurestorage").prop('disabled', true); // Disable the buttons
    selectedOptionStyling(clicked); // Style the selected option
    scene[choiceGroup] = clicked.attr("value"); // Store value of the clicked element in scene object
    // Create load stack if not available
    makeLoadStackIfNotPresent();
    // Push choice to load stack
    scene.loadStack.push('loadSimpleChoice("' + choiceGroup + '", ' + fetchNext + ');');
    processChoice(); // Process the choice
    fetchNext(); // Fetch the next segment
}

/**
 * Registers a simple choice group. Will automatically update the UI to indicate
 * what was chosen. Calls fetchNext to allow the user to fetch the next segment.
 * Calls processChoice to allow the user to update the scene and kobold elements.
 * 
 * Sets scene[choiceGroup] to the selected value. This value can later be 
 * accessed via scene.choiceGroup. Note: do not change this value after it is 
 * set. If you must alter it, use a different field for that.
 * 
 * Should be called from registerListeners.
 * @param choiceGroup The mutual class of the choicegroup.
 * @param processChoice The scene-defined function to call to update the scene
 * and kobold objects, and potentially to autosave.
 * @param fetchNext The scene-defined function to call to fetch the next segment
 * of the scene, depending on the choice that was made.
 */
function registerSimpleChoice(choiceGroup, processChoice, fetchNext) {
    $(".koboldadventuremain ." + choiceGroup + ":not([disabled])").not(".koboldadventurestorage").click(function () {
        simpleChoice($(this), choiceGroup, processChoice, fetchNext);
    });
}

/**
 * Loads a simple textfield input. Will automatically update the UI, and then 
 * call fetchNext to allow the user to fetch the next segment.
 * @param textfieldClass The class of the textfield.
 * @param buttonClass The class of the button.
 * @param fetchNext The scene-defined function to call to fetch the next segment
 * of the scene, depending on the choice that was made.
 */
function loadSimpleTextInput(textfieldClass, buttonClass, fetchNext) {
    var textField = $(".koboldadventuremain ." + textfieldClass).not(".koboldadventurestorage");
    var button = $(".koboldadventuremain ." + buttonClass).not(".koboldadventurestorage");
    var value = scene[textfieldClass]; // Fetch the value
    textField.val(value); // Set the textfield value
    textField.prop('disabled', true); // Disable the textfield
    button.prop('disabled', true); // Disable the button
    fetchNext(); // Fetch the next segment
}

/**
 * Executes a simple text field input. Will automatically update the UI to 
 * indicate something was entered. Calls fetchNext to allow the user to fetch 
 * the next segment. Calls processChoice to allow the user to update the scene 
 * and kobold elements.
 * 
 * Sets scene[textfieldClass] to the input value. This value can later be 
 * accessed via scene.textfieldClass. Note: do not change this value after it is 
 * set. If you must alter it, use a different field for that.
 * 
 * Will create the load stack if it does not yet exist, and will push the choice
 * to the load stack.
 * 
 * @param textfieldClass The class of the textfield.
 * @param buttonClass The class of the button.
 * @param processChoice The scene-defined function to call to update the scene
 * and kobold objects, and potentially to autosave.
 * @param fetchNext The scene-defined function to call to fetch the next segment
 * of the scene, depending on the choice that was made.
 * @param minLength Optional parameter. The minimum length of the entered text.
 */
function simpleTextInput(textfieldClass, buttonClass, processChoice, fetchNext, minLength) {
    var textField = $(".koboldadventuremain ." + textfieldClass).not(".koboldadventurestorage");
    var button = $(".koboldadventuremain ." + buttonClass).not(".koboldadventurestorage");

    // If we have a minimum length requirement, and the current value is smaller than the length, just return
    if (typeof minLength !== "undefined" && textField.val().length < minLength)
        return;

    // Create load stack if not available
    makeLoadStackIfNotPresent();
    // Push choice to load stack
    scene.loadStack.push('loadSimpleTextInput("' + textfieldClass + '", "' + buttonClass + '", ' + fetchNext + ');');

    button.prop('disabled', true); // Disable the button
    textField.prop('disabled', true); // Disable the textfield
    scene[textfieldClass] = textField.val(); // Store value of the textfield element in scene object
    processChoice(); // Process the choice
    fetchNext(); // Fetch the next segment
}

/**
 * Registers a simple textual input. Will automatically update the UI to 
 * indicate input was provided. Calls fetchNext to allow the user to fetch the 
 * next segment. Calls processChoice to allow the user to update the scene and 
 * kobold elements. Will also allow for the enter key to enter the choice.
 * 
 * Sets scene[textfieldClass] to the input value. This value can later be 
 * accessed via scene.textfieldClass. Note: do not change this value after it is 
 * set. If you must alter it, use a different field for that.
 * 
 * Should be called from registerListeners.
 * @param textfieldClass The class of the textfield.
 * @param buttonClass The class of the button.
 * @param processChoice The scene-defined function to call to update the scene
 * and kobold objects, and potentially to autosave.
 * @param fetchNext The scene-defined function to call to fetch the next segment
 * of the scene, depending on the choice that was made.
 * @param minLength Optional parameter. The minimum length of the entered text.
 */
function registerSimpleTextInput(textfieldClass, buttonClass, processChoice, fetchNext, minLength) {
    $(".koboldadventuremain ." + buttonClass + ":not([disabled])").not(".koboldadventurestorage").click(function () {
        simpleTextInput(textfieldClass, buttonClass, processChoice, fetchNext, minLength);
    });

    // On enter, simulate click
    $(".koboldadventuremain ." + textfieldClass + ":not([disabled])").not(".koboldadventurestorage").keypress(function (e) {
        if (e.which == 13) {
            $(".koboldadventuremain ." + buttonClass + ":not([disabled])").not(".koboldadventurestorage").click();
        }
    });
}

/**
 * Fetches the choice of the specified choicegroup (indicated by a CSS class), 
 * with the specified value. Usually used to fetch the choice which was selected
 * during choice processing.
 * @param choicegroup The class shared by all choices in this group.
 * @param value The value of the choice you are looking for.
 * @returns The requested element or an empty array.
 */
function getChoiceByClassAndValue(choicegroup, value) {
    return $('.koboldadventuremain .' + choicegroup + '[value="' + value + '"]');
}

/**
 * Styles a selected option by adding the koboldadventureselectedoption CSS class.
 * @param element The option that was selected.
 */
function selectedOptionStyling(element) {
    $(element).addClass("koboldadventureselectedoption");
}

/**
 * Loads the scene from the Load Stack. Requires the Load Stack to be enabled.
 */
function loadFromStack() {
    if (scene.loadStack === undefined)
        return;

    $.each(scene.loadStack, function (index, value) {
        eval(value);
    });
}

/** FETCH FROM STORAGE **/


/**
 * Fetch the contents from a specified scene storage container and appends them
 * to the current scene. A scene storage container can only be gotten once
 * using this method. If you wish to fetch a scene storage container multiple
 * times, use the Copy version of this function. The fetched segment is run 
 * through the preprocessor first.
 * @param containerClass The class of the container to fetch.
 */
function getFromSceneStorage(containerClass) {
    $(".koboldadventuremain .koboldadventurestorage ." + containerClass).html(preProcess($(".koboldadventuremain .koboldadventurestorage ." + containerClass).html()));
    $(".koboldadventuremain .koboldadventurestorage").before($(".koboldadventuremain .koboldadventurestorage ." + containerClass));
}

/**
 * Fetch the contents from a specified scene storage container and appends them
 * to the current scene, animating changes. A scene storage container can only 
 * be gotten once using this method. If you wish to fetch a scene storage 
 * container multiple times, use the Copy version of this function.
 * @param containerClass The class of the container to fetch.
 */
function getFromSceneStorageAnimated(containerClass) {
    $(".koboldadventuremain .koboldadventurestorage ." + containerClass).html(preProcess($(".koboldadventuremain .koboldadventurestorage ." + containerClass).html()));
    $(".koboldadventuremain .koboldadventurestorage").before($(".koboldadventuremain .koboldadventurestorage ." + containerClass));
    $(".koboldadventuremain ." + containerClass).fadeOut(0);
    $(".koboldadventuremain ." + containerClass).fadeIn(400);
}

/**
 * Fetch the contents from a specified scene storage container and appends them
 * to the current scene. Copies instead of cutting and pasting, preserving the
 * original scene object in storage. This allows it to be fetched repeatedly,
 * but consumes more memory. It also makes selecting the fetched scene fragment
 * a lot harder.
 * @param containerClass The class of the container to fetch.
 */
function getFromSceneStorageCopy(containerClass) {
    $(".koboldadventuremain .koboldadventurestorage ." + containerClass).html(preProcess($(".koboldadventuremain .koboldadventurestorage ." + containerClass).html()));
    $(".koboldadventuremain .koboldadventurestorage").before($(".koboldadventuremain .koboldadventurestorage ." + containerClass).clone());
}

/**
 * Fetch the contents from a specified scene storage container and appends them
 * to the current scene, animating changes. Copies instead of cutting and 
 * pasting, preserving the original scene object in storage. This allows it to 
 * be fetched repeatedly, but consumes more memory. It also makes selecting the
 * fetched scene fragment a lot harder.
 * @param containerClass The class of the container to fetch.
 */
function getFromSceneStorageAnimatedCopy(containerClass) {
    $(".koboldadventuremain .koboldadventurestorage ." + containerClass).html(preProcess($(".koboldadventuremain .koboldadventurestorage ." + containerClass).html()));
    $(".koboldadventuremain .koboldadventurestorage").before($(".koboldadventuremain .koboldadventurestorage ." + containerClass).clone());
    $(".koboldadventuremain ." + containerClass).not($(".koboldadventuremain .koboldadventurestorage ." + containerClass)).fadeOut(0);
    $(".koboldadventuremain ." + containerClass).not($(".koboldadventuremain .koboldadventurestorage ." + containerClass)).fadeIn(400);
}


/** GENERAL **/


/**
 * Returns true if the passed variable is not null and is not empty. Returns 
 * false otherwise. Can be used to check whether or not a scene has passed a
 * certain point by testing the selected option value for that point.
 * @param variable The variable to check.
 * @returns True if the passed variable exists. Returns false otherwise.
 */
function notEmpty(variable) {
    return notNull(variable) && variable !== "";
}


/** STATUS **/


/**
 * Removes a status by name from the specified category. Does nothing if the
 * status category doesn't exist.
 * @param toRemove The exact contents of the status to remove.
 * @param categoryName The name of the status category to remove the status from.
 */
function removeStatusFromCategory(toRemove, categoryName) {
    // If the category doesn't exist, do nothing.
    if (!statusCategoryExists(categoryName))
        return;

    // Run through the category array and remove all occurrences of toRemove.
    for (var i = kobold.status[categoryName].length - 1; i >= 0; i--) {
        if (kobold.status[categoryName][i] === toRemove) {
            kobold.status[categoryName].splice(i, 1);
        }
    }
}

/**
 * Removes a status by name, from all categories.
 * @param toRemove The exact contents of the status to remove.
 */
function removeStatus(toRemove) {
    // For each category, remove the status
    $.each(kobold.status, function (index, value) {
        removeStatusFromCategory(toRemove, index);
    });
}

/**
 * Removes a status by something it contains from the specified category. Does 
 * nothing if the status category doesn't exist.
 * @param toRemove Something the status you want to remove contains.
 * @param categoryName The name of the status category to remove the status from.
 */
function removeStatusFromCategoryContains(toRemove, categoryName) {
    // If the category doesn't exist, do nothing.
    if (!statusCategoryExists(categoryName))
        return;

    // Run through the category array and remove all occurrences of toRemove.
    for (var i = kobold.status[categoryName].length - 1; i >= 0; i--) {
        if (kobold.status[categoryName][i].indexOf(toRemove) !== -1) {
            kobold.status[categoryName].splice(i, 1);
        }
    }
}

/**
 * Removes a status by something it contains, from all categories.
 * @param toRemove Something the status you want to remove contains.
 */
function removeStatusContains(toRemove) {
    // For each category, remove the status
    $.each(kobold.status, function (index, value) {
        removeStatusFromCategoryContains(toRemove, index);
    });
}

/**
 * Completely removes a status category. Note that the mental and physical 
 * categories are protected and may NOT be removed under ANY circumstances.
 * @param categoryName The name of the category to remove. May NOT be "Physical" 
 * or "Mental".
 */
function removeStatusCategory(categoryName) {
    if (categoryName === "Physical" || categoryName === "Mental") {
        return;
    }

    if (statusCategoryExists(categoryName))
        delete kobold.status[categoryName];
}

/**
 * Clears a status category.
 * @param categoryName The name of the category to clear.
 */
function clearStatusCategory(categoryName) {
    if (!statusCategoryExists(categoryName))
        return;
    kobold.status[categoryName] = [];
}

/**
 * Checks whether or not the category with the passed name exists.
 * @param categoryName The name of the category.
 * @returns True if the category exists, false otherwise.
 */
function statusCategoryExists(categoryName) {
    return kobold.status[categoryName] !== undefined;
}

/**
 * Creates a status category in the kobold's status object. Does nothing if a 
 * category by that name already exists.
 * @param categoryName The name of the new category.
 */
function createStatusCategory(categoryName) {
    if (statusCategoryExists(categoryName))
        return;

    kobold.status[categoryName] = [];
}

/**
 * Adds a status to a status category. Will create the status if it does not exist.
 * @param categoryName The name of the category.
 * @param status The status to add.
 */
function addStatusToCategory(categoryName, status) {
    if (!statusCategoryExists(categoryName))
        createStatusCategory(categoryName);

    kobold.status[categoryName].push(status);
}


/** INVENTORY **/


/**
 * Removes EVERYTHING from the kobold. Inventory, weapons and equipment will ALL
 * be cleared.
 */
function removeEverything() {
    kobold.inventory = [];
    kobold.equipment = {};
    kobold.equipment["Arms"] = "";
    kobold.equipment["Legs"] = "";
    kobold.equipment["Chest"] = "";
    kobold.equipment["Upper body"] = "";
    kobold.equipment["Groin"] = "";
    kobold.equipment["Feet"] = "";
    kobold.equipment["Tail"] = "";
    kobold.equipment["Hands"] = "";
    kobold.equipment["Back"] = "";
    kobold.equipment["Shoulders"] = "";
    kobold.equipment["Head"] = "";
    kobold.equipment["Face"] = "";
    kobold.weapons = [];
}

/**
 * Removes all equipment from the kobold.
 */
function stripNaked() {
    kobold.equipment = {};
    kobold.equipment["Arms"] = "";
    kobold.equipment["Legs"] = "";
    kobold.equipment["Chest"] = "";
    kobold.equipment["Upper body"] = "";
    kobold.equipment["Groin"] = "";
    kobold.equipment["Feet"] = "";
    kobold.equipment["Tail"] = "";
    kobold.equipment["Hands"] = "";
    kobold.equipment["Back"] = "";
    kobold.equipment["Shoulders"] = "";
    kobold.equipment["Head"] = "";
    kobold.equipment["Face"] = "";
}

/**
 * Removes all weapons from the kobold.
 */
function disarm() {
    kobold.weapons = [];
}

/**
 * Removes all items from the kobold.
 */
function loseItems() {
    kobold.inventory = [];
}

/**
 * Adds a certain item to the inventory. Will simply increase the item count
 * if the same item is already present. Note that there is no amount parameter
 * because the item object should already have an amount.
 * @param toAdd The item to add.
 */
function addItem(toAdd) {
    // If the kobold already has the item, increase the item count.
    if (hasItem(toAdd)) {
        var index = getItemIndex(toAdd);
        var item = kobold.inventory[index];
        item.amount = item.amount + toAdd.amount;
        kobold.inventory[index] = item;
    } else {
        // Else, add the item.
        kobold.inventory.push(toAdd);
    }
}

/**
 * Removes a certain item to the inventory. If the resulting amount is less than
 *  or equal to 0, the item is removed completely. If howMany is not set, will 
 *  remove all of the matching items.
 * @param toRemove The item to remove. May be a string or an object.
 * @param howMany Optional parameter. How many of the item to remove.
 */
function removeItem(toRemove, howMany) {
    // If we don't have the item, return
    if (!hasItem(toRemove))
        return;

    // Get the index of the item
    var index = getItemIndex(toRemove);

    // If no amount was passed, just delete the item
    if (typeof howMany === "undefined") {
        kobold.inventory.splice(index, 1);
    } else {
        // Get the item
        var item = kobold.inventory[index];
        // Decrease the count
        item.amount = item.amount - howMany;
        // If the resulting amount if less than or equal to 0, remove it completely
        if (item.amount <= 0)
            kobold.inventory.splice(index, 1);
        else
            kobold.inventory[index] = item;
    }
}

/**
 * Returns true if the kobold has the item. False otherwise.
 * @param item The item. May be the item name as a string, or the item object.
 * @returns True if the kobold has the item. False otherwise.
 */
function hasItem(item) {
    return getItemIndex(item) !== -1;
}

/**
 * Returns how many of the item the kobold has.
 * @param item The item. May be the item name as a string, or the item object.
 * @returns How much of the item the kobold has. 0 if the kobold does not have 
 * the item.
 */
function hasHowMany(item) {
    // If we don't have the item, return 0
    if (!hasItem(item))
        return 0;
    // Else fetch the index
    var index = getItemIndex(item);
    // Fetch the item
    var item = kobold.inventory[index];
    // Return the amount
    return item.amount;
}

/**
 * Returns true if the kobold has or is wearing the item. False otherwise.
 * @param item The item. May be the item name as a string, or the item object.
 * @returns True if the kobold has the item. False otherwise.
 */
function hasOrIsWearingItem(item) {
    return isWearing(item) || hasItem(item);
}

/**
 * Returns how many of the item the kobold has, including what he/she is wearing.
 * @param item The item. May be the item name as a string, or the item object.
 * @returns How much of the item the kobold has, including wearables.
 */
function hasOrIsWearingHowMany(item) {
    var amount = hasHowMany(item);
    if (isWearing(item))
        amount++;
    return amount;
}

/**
 * Returns true if the kobold is wearing the piece of equipment.
 * @param equipment The piece of equipment or the name of the piece of equipment
 * to check for.
 * @returns True if the kobold is wearing the piece of equipment, false 
 * otherwise.
 */
function isWearing(equipment) {
    return notEmpty(getEquipmentSlot(equipment));
}

/**
 * Creates a new inventory item and returns it.
 * @param amount How much of the item to make.
 * @param name The name of the piece of equipment.
 * @param description The description of the piece of equipment.
 * @param value The value of the item, in coins.
 * @param thickness The thickness of the piece of equipment. How thick it is. Zero for underwear. 1-3 for cloth, 3-5 for leather, 5-7 for chainmail, 7-10 for plate.
 * @param coarseness The coarseness of the piece of equipment. How rough it is. Zero for underwear. 3-5 for cloth. 1-3 for leather. 5-7 for chainmail. 5-7 for plate.
 * @param intimidation The intimidation factor of the piece of equipment. Negative values for humiliating apparel. Positive values for armor pieces.
 * @param defence The defence value of the piece of equipment. Zero for underwear, 1-3 for cloth, 3-5 for leather, 5-7 for chainmail, 7-10 for plate.
 * @returns The created item.
 */
function createItem(amount, name, description, value, thickness, coarseness, intimidation, defence) {
    var item = {};
    item.amount = amount;
    item.name = name;
    item.desc = description;
    item.val = value;
    item.thick = thickness;
    item.coarse = coarseness;
    item.intim = intimidation;
    item.defence = defence;
    return item;
}

/**
 * Take off a piece of clothing. It is added to the inventory.
 * @param bodyArea What body area to take clothing off of.
 */
function takeOff(bodyArea) {
    var equipment = kobold.equipment[bodyArea];
    kobold.equipment[bodyArea] = "";
    var item = createItem(1, equipment.name, equipment.desc, equipment.val, equipment.thick, equipment.coarse, equipment.intim, equipment.defence);
    addItem(item);
}

/**
 * Puts on a certain item. Takes the item from the inventory. If you want to
 * put on a new item, use the kobold.equipment associative array/object 
 * directly. Will discard the current worn item. Take it off first if you want
 * to keep it.
 * @param bodyArea What body area to put the item on.
 * @param item The item to put on. Must be in the inventory. Can be the name
 * of the item, or an object representing the item.
 */
function putOn(bodyArea, item) {
    var equipment = createEquipment(item.name, item.desc, item.val, item.thick, item.coarse, item.intim, item.defence);
    kobold.equipment[bodyArea] = equipment;
    removeItem(item, 1);
}

/**
 * Creates a new piece of equipment and returns it.
 * @param name The name of the piece of equipment.
 * @param description The description of the piece of equipment.
 * @param value The value of the item, in coins.
 * @param thickness The thickness of the piece of equipment. How thick it is. Zero for underwear. 1-3 for cloth, 3-5 for leather, 5-7 for chainmail, 7-10 for plate.
 * @param coarseness The coarseness of the piece of equipment. How rough it is. Zero for underwear. 3-5 for cloth. 1-3 for leather. 5-7 for chainmail. 5-7 for plate.
 * @param intimidation The intimidation factor of the piece of equipment. Negative values for humiliating apparel. Positive values for armor pieces.
 * @param defence The defence value of the piece of equipment. Zero for underwear, 1-3 for cloth, 3-5 for leather, 5-7 for chainmail, 7-10 for plate.
 * @returns The created piece of equipment.
 */
function createPieceOfEquipment(name, description, value, thickness, coarseness, intimidation, defence) {
    var equipment = {};
    equipment.name = name;
    equipment.desc = description;
    equipment.val = value;
    equipment.thick = thickness;
    equipment.coarse = coarseness;
    equipment.intim = intimidation;
    equipment.defence = defence;
    return equipment;
}

/**
 * Removes a weapon. The passed weapon may be a weapon object or a string
 * denoting the weapon's name.
 * @param weapon An object of type weapon or a string containing the weapon's name.
 */
function removeWeapon(weapon) {
    // If we don't have the weapon, return
    if (!hasItem(weapon))
        return;

    // Get the index of the weapon
    var index = getWeaponIndex(weapon);

    // Delete the weapon
    kobold.inventory.splice(index, 1);
}

/**
 * Adds a weapon. The passed weapon must be a weapon
 * @param weapon An object of type weapon or a string containing the weapon's name.
 */
function addWeapon(weapon) {
    kobold.weapons.push(weapon);
}

/**
 * Returns true if the kobold has the weapon, or false otherwise.
 * @param weapon An object of type weapon or a string containing the weapon's 
 * name.
 * @return True if the kobold has the weapon, or false otherwise.
 */
function hasWeapon(weapon) {
    return getWeaponIndex(weapon) !== -1;
}

/**
 * Returns true if the kobold has a weapon with the specified tag, or false 
 * otherwise.
 * @param tag The tag to search for.
 * @return True if the kobold has such a weapon. False otherwise.
 */
function hasWeaponWithTag(tag) {
    return getWeaponIndexByTag(tag) !== -1;
}

/**
 * Returns a weapon the kobold has with the specified tag, or null if no such 
 * weapon exists.
 * @param tag The tag to search for.
 * @return A weapon the kobold has with the specified tag, or null if no such
 * weapon exists.
 */
function getWeaponWithTag(tag) {
    var index = getWeaponIndexByTag(tag);
    // If we don't have the weapon, return null
    if (index === -1)
        return null;
    // Return the weapon
    return kobold.weapons[index];
}



/**
 * Creates a new weapon and returns it.
 * @param name The name of the weapon.
 * @param description The description of the weapon.
 * @param value The value of the weapon, in coins.
 * @param tags The tags of the weapon. Be sure to include plenty of these.
 * @param intimidation The intimidation factor of the piece of equipment. Negative values for humiliating apparel. Positive values for armor pieces.
 * @returns The created weapon.
 */
function createWeapon(name, description, value, tags, intimidation) {
    var weapon = {};
    weapon.name = name;
    weapon.desc = description;
    weapon.val = value;
    weapon.tags = tags;
    weapon.intim = intimidation;
    return weapon;
}

/**
 * Returns true if the kobold is naked. False otherwise.
 * @returns True if the kobold is naked. False otherwise.
 */
function isNaked() {
    var naked = true;
    $.each(kobold.equipment, function (index, value) {
        if (notEmpty(value))
            naked = false;
    });
    return naked;
}


/** DERIVED STATS **/


/**
 * Returns the total intimidation value of the kobold.
 * @eturn The total intimidation value of the kobold.
 */
function calculateIntimidation() {
    // Calculate intimidation in function of strength and all item and mark modifiers
    return kobold.stats.attr.Strength + countTotalGearAndMarkIntimidation();
}

/**
 * Returns the total reflexes of the kobold.
 * @returns The reflexes of the kobold.
 */
function calculateReflexes() {
    return kobold.stats.attr.Agility + countTotalGearThickness();
}


/**
 * Returns how slick the kobold is.
 * @returns How slick the kobold is.
 */
function calculateSlickness() {
    return kobold.stats.attr.Agility - countTotalGearCoarseness();
}

/**
 * Returns how powerful the kobold is.
 * @returns How powerful the kobold is.
 */
function calculateProwess() {
    return kobold.stats.attr.Strength + kobold.stats.attr.Agility + kobold.stats.attr.Endurance + kobold.stats.attr.Stamina + kobold.stats.attr.Magic * 10;
}


/** STATUS **/


/**
 * Adds a new marking to the kobold.
 * @param name The name of the marking.
 * @param description The description of the marking.
 * @param intimidation The intimidation factor of the marking. Ussually 
 * negative.
 * @param easilywashable Boolean. Whether or not the marking will be removed 
 * upon contact with water.
 * @param washable Boolean. Whether or not the marking can be removed by 
 * intently washing up.
 */
function addMarking(name, description, intimidation, easilywashable, washable) {
    var mark = {};
    mark.name = name;
    mark.desc = description;
    mark.intim = intimidation;
    mark.easy = easilywashable;
    mark.wash = washable;

    kobold.markings.push(mark);
}

/**
 * Removes all easily washable markings from the kobold.
 */
function inWater() {
    // Run through the markings array and remove all washable marks.
    for (var i = kobold.markings.length - 1; i >= 0; i--) {
        if (notEmpty(kobold.markings[i]) && kobold.markings[i].easy) {
            kobold.markings.splice(i, 1);
        }
    }
}

/**
 * Removes all easily washable and all washable markings from the kobold.
 */
function washUp() {
    // Run through the markings array and remove all washable or easily washable marks.
    for (var i = kobold.markings.length - 1; i >= 0; i--) {
        if (notEmpty(kobold.markings[i]) && (kobold.markings[i].easy || kobold.markings[i].wash)) {
            kobold.markings.splice(i, 1);
        }
    }
}