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
        $(elements).removeClass("veryfasttransition");
    }, 200);
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
        $(elements).removeClass("fasttransition");
    }, 400);
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
        $(elements).removeClass("transition");
    }, 600);
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
        $(elements).removeClass("slowtransition");
    }, 800);
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
        $(elements).removeClass("veryslowtransition");
    }, 100);
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