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
    // If our gender selection choice is not empty, we have passed gender selection
    if(notEmpty(scene.introductiongenderchoice))
        loadSimpleChoice("introductiongenderchoice", scene.genderSelectionFetchNext); // And thus we may load the choice
    
    // If our name selection choice is not empty, we have passed name selection
    if(notEmpty(scene.introductionnameinput))
        loadSimpleTextInput("introductionnameinput", "introductionnameconfirm", scene.nameSelectionFetchNext); // And thus we may load the name
    
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
scene.genderSelectionFetchNext = function(){
    // Fetch value
    var value = scene.introductiongenderchoice;
    
    // Depending on the value, we load different scene parts
    if(value === "M")
        getFromSceneStorageAnimated("introductionmale");
    else
        getFromSceneStorageAnimated("introductionfemale");
    
    // Regardless of the value, we load the name ask dialogue
    getFromSceneStorageAnimated("introductionnameask");
    
    // Reregister listeners
    scene.registerListeners();
};

/**
 * Processes a selected gender based on its value. Doesn't need any parameters.
 * Takes the value it needs from the scene object directly. The value was put
 * there by the simpleChoice framework.
 */
scene.genderSelectionProcessChoice = function() {
    // Fetch value
    var value = scene.introductiongenderchoice;
    
    // Update kobold object to reflect choice
    if(value === "M"){
        kobold.gender = "Male";
        kobold.equipment["Groin"] = createPieceOfEquipment("Simple loincloth", "It covers your groin quite well.", "2", "0", "0", "0", "0");
    }
    else {
        kobold.gender = "Female";
        kobold.equipment["Chest"] = createPieceOfEquipment("Small chest wrap", "It barely covers your chest!", "1", "0", "0", "0", "0");
        kobold.equipment["Groin"] = createPieceOfEquipment("Ragged loincloth", "It's slowly unravelling.", "1", "0", "0", "0", "0");
    }
    
    // Update scene object to point towards the correct next scene
    if(value === "M")
        scene.nextScene = "varanarbusygatestart";
    else
        scene.nextScene = "foreststart";
    
    // Save the game
    autoSave("Gender picked.");
};

/**
 * Fetches the next scene once a name has been entered.
 */
scene.nameSelectionFetchNext = function() {
    alert("Fetching next. Entered name: " + scene.introductionnameinput);
};

/**
 * Processes an input name. Doesn't need any parameters.
 * Takes the value it needs from the scene object directly. The value was put
 * there by the simpleTextInput framework.
 */
scene.nameSelectionProcessChoice = function() {
    // Fetch value
    var value = scene.introductionnameinput;
    
    // Update kobold object to reflect choice
    kobold.name = value;
    
    // Save the game
    autoSave("Name chosen.");
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
    registerSimpleChoice("introductiongenderchoice", scene.genderSelectionProcessChoice, scene.genderSelectionFetchNext);
    registerSimpleTextInput("introductionnameinput", "introductionnameconfirm", scene.nameSelectionFetchNext, scene.nameSelectionProcessChoice, 2);
};

/**
 * Cleans up any resource you used that wasn't contained in the scene object.
 * Prime candidates that come to mind are custom stylesheets, activated themes
 * and whatever function or variable you may have declared outside of the 
 * scene object. Remember to call this function prior to changing scenes.
 */
scene.cleanup = function () {
    unloadStyleSheet(scene.cssPath); // Uncomment this if you load a custom CSS file.
};

// If you wish to load a custom CSS file, uncomment these lines, as well as the one in scene.cleanup.
scene.cssPath = "scenes/introduction/css/custom.css";
loadStyleSheet(scene.cssPath);  