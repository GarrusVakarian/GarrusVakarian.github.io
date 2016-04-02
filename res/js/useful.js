/**
 * This JavaScript file defines a few useful functions which may be called from 
 * anywhere within your scene. Most, if not all of these functions are
 * documented in the Contributing page, so if you're looking for something you
 * should probably look there first.
 */


/** SCENE LOADING **/


/**
 * Loads the scene, specified by the scenePath, to the main game window.
 * Discards the current scene in the process. Clears the current scene object.
 * If you wish to pass parameters to the new scene, use the sceneParams object.
 * Sets the global variable currentScenePath.
 * @param scenePath The scene folder name.
 */
function loadScene(scenePath) {
    showLoadIcon();
    scene = new Object();
    currentScene = scenePath;
    $.get(buildSceneFilePath("js/init.js"))
            .done(doneLoadingInit)
            .fail(failedLoadingResource);
}


/** SAVING **/


function autoSave(){
    
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