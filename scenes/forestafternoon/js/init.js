/**
 * The js/init.js file gets called before the scene is loaded to the main window.
 * 
 * It must include the following four global function definitions:
 *              init();
 *              load();
 *              ontabout();
 *              ontabin();
 *  For more information on these functions, see their own documentation, or the
 *  contributing page reachable via a button on the game's UI.            
 *  
 *  Besides the four required functions, init.js should include all definitions
 *  for functions that you have need of. In order not to clutter the namespace,
 *  it is requested that you only declare functions within the scene object.
 *  
 *  As its name implies, init.js should be used for initialization. Any code in 
 *  this file is executed once prior to loading your scene. If you require any
 *  custom stylesheets, you should include them here via the loadStyleSheet
 *  function.
 */


////////////////////////////////////////////////////////////////////////////////
// MANDATORY FUNCTIONS                                                        //
// ALL OF THE FOLLOWING FUNCTIONS ARE MANDATORY FOR PROPER SCENE FUNCTIONALITY//
////////////////////////////////////////////////////////////////////////////////

/**
 * This function gets called when the scene gets loaded by another scene. The
 * sceneParams object will be available, yet it will be emptied directly after
 * this function exits. If you wish to make use of sceneParams data later, it is
 * recommended that you store it in your scene object.
 * 
 * Be sure to register all of your listeners within this function. It is best to
 * create a separate function for this, as you will also need to do this in the 
 * load() and the ontabin() functions.
 */
function init() {
    scene.registerListeners();
    // scene.passedParams = sceneParams; // If you wish to store scene parameters, uncomment this line.
}

/**
 * This function gets called when the scene gets loaded via a saved game. The
 * sceneParams object will be unavailable, yet the scene object will already
 * be loaded. In this function, you should read the data you kept in your scene
 * object to determine at what point in the scene you were, and then reconstruct
 * the scene to that point.
 * 
 * Be sure to register all of your listeners within this function. It is best to
 * create a separate function for this, as you will also need to do this in the 
 * init() and the ontabin() functions.
 */
function load() { 
   // LOAD STACK LOADING
    loadFromStack();

    scene.registerListeners();
}

/**
 * This function gets called when the scene gets tabbed out to another tab. Due
 * to the way tabbing works in Kobold Adventure, this means it will lose all of 
 * its assigned listeners. In this function, you must make sure that the scene
 * is ready to be tabbed out. Pause any realtime JavaScript application you may
 * be running, and ensure that everything is ready to be stored.
 */
function ontabout() {

}

/**
 * This function gets called when the scene gets tabbed back in. Due to the way 
 * tabbing works in Kobold Adventure, this means the scene has lost all of its 
 * assigned listeners. In this function, you must reattach all of your scene
 * listeners. It is best to create a separate function for this, as you will
 * also need to do this in the init() and the load() functions.
 */
function ontabin() {
    scene.registerListeners();
}

////////////////////////////////////////////////////////////////////////////////
// END MANDATORY FUNCTIONS                                                    //
////////////////////////////////////////////////////////////////////////////////


/**
 * Fetches the next scene once a gender has been selected. Doesn't need any
 * parameters. Takes the value it needs from the scene object directly. The
 * value was put there by the simpleChoice framework.
 */
scene.preCampFetchNext = function () {
    // Fetch value
    var value = scene.foreststartchoice;

    // Depending on the value, we load different scene parts  
    if(value === "stay")
        getFromSceneStorageAnimated("forestafternooncampstay")
    else if(value === "go")
        getFromSceneStorageAnimated("forestafternooncampgo");
    else
        getFromSceneStorageAnimated("forestafternooncampsneak");

    // Reregister listeners
    scene.registerListeners();
};

/**
 * Processes a selected pre camp action based on its value. Doesn't need any parameters.
 * Takes the value it needs from the scene object directly. The value was put
 * there by the simpleChoice framework.
 */
scene.preCampProcessChoice = function () {
    // Fetch value
    var value = scene.foreststartchoice;

    // Update kobold object to reflect choice
    

    // Save the game
    if(value === "stay")
        autoSave("Observing human camp.")
    else if(value === "go")
        autoSave("Circumventing human camp.");
    else
        autoSave("Sneaking towards human camp.");
};


////////////////////////////////////////////////////////////////////////////////
// HIGHLY RECOMMENDED FUNCTIONS                                               //
// ALL OF THE FOLLOWING FUNCTIONS ARE HIGHLY RECOMMENDED, BUT NOT MANDATORY.  //
// EXCLUDE THEM AT OWN RISK.                                                  //
////////////////////////////////////////////////////////////////////////////////

/**
 * Registers all required object listeners for this scene to function.
 */
scene.registerListeners = function () {
    registerSimpleChoice("foreststartchoice", scene.preCampProcessChoice, scene.preCampFetchNext);
};

/**
 * Cleans up any resource you used that wasn't contained in the scene object.
 * Prime candidates that come to mind are custom stylesheets, activated themes
 * and whatever function or variable you may have declared outside of the 
 * scene object. Remember to call this function prior to changing scenes.
 */
scene.cleanup = function () {
    //unloadStyleSheet(scene.cssPath); // Uncomment this if you load a custom CSS file.
    removeTheme(); // Uncomment this if you use a custom theme
};

// If you wish to load a custom CSS file, uncomment these lines, as well as the one in scene.cleanup.
// Don't forget to call cleanup yourself prior to changing scenes.
//scene.cssPath = "scenes/forestafternoon/css/custom.css";
//loadStyleSheet(scene.cssPath);  