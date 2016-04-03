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
function init(){
    scene.registerListeners();
    //scene.passedParams = sceneParams; // If you wish to store scene parameters, uncomment this line.
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
function load(){
    scene.registerListeners();
}

/**
 * This function gets called when the scene gets tabbed out to another tab. Due
 * to the way tabbing works in Kobold Adventure, this means it will lose all of 
 * its assigned listeners. In this function, you must make sure that the scene
 * is ready to be tabbed out. Pause any realtime JavaScript application you may
 * be running, and ensure that everything is ready to be stored.
 */
function ontabout(){

}

/**
 * This function gets called when the scene gets tabbed back in. Due to the way 
 * tabbing works in Kobold Adventure, this means the scene has lost all of its 
 * assigned listeners. In this function, you must reattach all of your scene
 * listeners. It is best to create a separate function for this, as you will
 * also need to do this in the init() and the load() functions.
 */
function ontabin(){
    scene.registerListeners();
}

////////////////////////////////////////////////////////////////////////////////
// END MANDATORY FUNCTIONS                                                    //
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// HIGHLY RECOMMENDED FUNCTIONS                                               //
// ALL OF THE FOLLOWING FUNCTIONS ARE HIGHLY RECOMMENDED, BUT NOT MANDATORY.  //
// EXCLUDE THEM AT OWN RISK.                                                  //
////////////////////////////////////////////////////////////////////////////////

/**
 * Registers all requires object listeners for this scene to function.
 */
scene.registerListeners = function(){
    
};

