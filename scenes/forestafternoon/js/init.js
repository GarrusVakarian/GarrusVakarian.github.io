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
 * Fetches the next scene once an action has been selected. Doesn't need any
 * parameters. Takes the value it needs from the scene object directly. The
 * value was put there by the simpleChoice framework.
 */
scene.preCampFetchNext = function () {
    // Fetch value
    var value = scene.foreststartchoice;

    // Depending on the value, we load different scene parts  
    if (value === "stay")
        getFromSceneStorageAnimated("forestafternooncampstay")
    else if (value === "go")
        getFromSceneStorageAnimated("forestafternooncampgo");
    else
        getFromSceneStorageAnimated("forestafternooncampsneak");

    // Reregister listeners
    scene.registerListeners();
};

/**
 * Processes a selected action based on its value. Doesn't need any parameters.
 * Takes the value it needs from the scene object directly. The value was put
 * there by the simpleChoice framework.
 */
scene.preCampProcessChoice = function () {
    // Fetch value
    var value = scene.foreststartchoice;

    // Update kobold object to reflect choice
    if (value === "stay") {
        clearStatusCategory("Mental");
        addStatusToCategory("Mental", "You are anxious.");
    }

    // Save the game
    if (value === "stay")
        autoSave("Observing human camp.")
    else if (value === "go")
        autoSave("Circumventing human camp.");
    else
        autoSave("Sneaking towards human camp.");
};

/**
 * Fetches the next scene once an action has been selected. Doesn't need any
 * parameters. Takes the value it needs from the scene object directly. The
 * value was put there by the simpleChoice framework.
 */
scene.campStayFetchNext = function () {
    // Fetch value
    var value = scene.forestcampstay;

    // Depending on the value, we load different scene parts  
    if (value === "stay")
        getFromSceneStorageAnimated("forestafternoondogstay")
    else if (value === "go")
        getFromSceneStorageAnimated("forestafternoondoggo");
    else
        getFromSceneStorageAnimated("forestafternoondogsneak");

    // Reregister listeners
    scene.registerListeners();
};

/**
 * Processes a selected action based on its value. Doesn't need any parameters.
 * Takes the value it needs from the scene object directly. The value was put
 * there by the simpleChoice framework.
 */
scene.campStayProcessChoice = function () {
    // Fetch value
    var value = scene.forestcampstay;

    // Update kobold object to reflect choice
    if (value === "stay") {
        addStatusToCategory("Physical", "The rollercoaster of emotions has left you feeling nauseous.");
        clearStatusCategory("Mental");
        addStatusToCategory("Mental", "You feel somewhat relieved.");
        addStatusToCategory("Sexual", "You are thinking dirty thoughts.");
    }

    // Save the game
    if (value === "stay")
        autoSave("Letting dog approach.")
    else if (value === "go")
        autoSave("Running from dog.");
    else
        autoSave("Scaring dog.");
};

/**
 * Fetches the next scene once an action has been selected. Doesn't need any
 * parameters. Takes the value it needs from the scene object directly. The
 * value was put there by the simpleChoice framework.
 */
scene.dogStayFetchNext = function () {
    // Fetch value
    var value = scene.forestcampdogstay;

    // Depending on the value, we load different scene parts  
    if (value === "stay")
        getFromSceneStorageAnimated("forestafternoondogpiss")
    else if (value === "pet")
        getFromSceneStorageAnimated("forestafternoondogpet");
    else if (value === "kiss") {
        getFromSceneStorageAnimated("forestafternoondogkiss");
    } else if (value === "push") {
        getFromSceneStorageAnimated("forestafternoondogpush");
    }

    // Reregister listeners
    scene.registerListeners();
};

/**
 * Processes a selected action based on its value. Doesn't need any parameters.
 * Takes the value it needs from the scene object directly. The value was put
 * there by the simpleChoice framework.
 */
scene.dogStayProcessChoice = function () {
    // Fetch value
    var value = scene.forestcampdogstay;

    // Update kobold object to reflect choice
    if (value === "stay") {
        kobold.hiddenstats.faith--;
        kobold.hiddenstats.animallove--;
        kobold.hiddenstats.animalattraction++;
        clearStatusCategory("Sexual");
        clearStatusCategory("Physical");
        addStatusToCategory("Physical", "The stench of dog piss is making you feel nauseous.");
        clearStatusCategory("Mental");
        addStatusToCategory("Mental", "You are mentally drained.");
        addStatusToCategory("Mental", "You are disgusted.");
        addStatusToCategory("Mental", "You are traumatized.");
        addMarking("Dog piss", "The thick, acrid scent of canine piss lingers on your scales. You'll be smelling like this until you find something to wash up with. You hope it won't attract any unwanted attention.", -2, true, true);
    } else if (value === "pet") {
        kobold.hiddenstats.faith++;
        kobold.hiddenstats.animallove++;
        clearStatusCategory("Sexual");
        clearStatusCategory("Physical");
        clearStatusCategory("Mental");
        addStatusToCategory("Mental", "You feel content.");
    } else if (value === "kiss") {

    } else if (value === "push") {

    }

    // Save the game
    if (value === "stay")
        autoSave("Staying perfectly still to hide from dog.")
    else if (value === "pet")
        autoSave("Petting dog.");
    else if (value === "kiss")
        autoSave("Kissing dog.");
    else if (value === "push")
        autoSave("Arousing dog.");
};

/**
 * Fetches the next scene once an action has been selected. Doesn't need any
 * parameters. Takes the value it needs from the scene object directly. The
 * value was put there by the simpleChoice framework.
 */
scene.dogPissFetchNext = function () {
    // Fetch value
    var value = scene.forestcampdogpiss;

    // Depending on the value, we load different scene parts  
    if (value === "home")
        getFromSceneStorageAnimated("forestafternoonpostpisshome")
    else if (value === "river")
        getFromSceneStorageAnimated("forestafternoonpostpissriver");
    else if (value === "forest") {
        getFromSceneStorageAnimated("forestafternoonpostpissforest");
    }

    // Reregister listeners
    scene.registerListeners();
};

/**
 * Processes a selected action based on its value. Doesn't need any parameters.
 * Takes the value it needs from the scene object directly. The value was put
 * there by the simpleChoice framework.
 */
scene.dogPissProcessChoice = function () {
    // Fetch value
    var value = scene.forestcampdogpiss;

    // Update kobold object to reflect choice
    if (value === "home") {
        
    } else if (value === "river") {

    } else if (value === "forest") {

    }

    // Save the game
    if (value === "home")
        autoSave("Going home.")
    else if (value === "river")
        autoSave("Going to the river.");
    else if (value === "forest")
        autoSave("Running through the forest.");
};

/**
 * Fetches the next scene once an action has been selected. Doesn't need any
 * parameters. Takes the value it needs from the scene object directly. The
 * value was put there by the simpleChoice framework.
 */
scene.dogPetFetchNext = function () {
    // Fetch value
    var value = scene.forestcampdogpet;

    // Depending on the value, we load different scene parts  
    if (value === "home")
        getFromSceneStorageAnimated("forestafternoonsatisfiedhome")
    else if (value === "campevening")
        getFromSceneStorageAnimated("forestafternoonsatisfiedcamp");
    else if (value === "forest") {
        getFromSceneStorageAnimated("forestafternoonsatisfiedforest");
    }

    // Reregister listeners
    scene.registerListeners();
};

/**
 * Processes a selected action based on its value. Doesn't need any parameters.
 * Takes the value it needs from the scene object directly. The value was put
 * there by the simpleChoice framework.
 */
scene.dogPetProcessChoice = function () {
    // Fetch value
    var value = scene.forestcampdogpiss;

    // Update kobold object to reflect choice
    if (value === "home") {
        
    } else if (value === "river") {

    } else if (value === "forest") {

    }

    // Save the game
    if (value === "home")
        autoSave("Going home.")
    else if (value === "river")
        autoSave("Going to the river.");
    else if (value === "forest")
        autoSave("Running through the forest.");
};

/**
 * Cleans up the scene's assets and loads the home scene.
 */
scene.cleanupAndLoadHomeTraumatized = function(){
    scene.cleanup();
    sceneParams.mood = "Traumatized";
    loadScene('homeeveningbandit');
};

/**
 * Cleans up the scene's assets and loads the river scene.
 */
scene.cleanupAndLoadRiverTraumatized = function(){
    scene.cleanup();
    sceneParams.mood = "Traumatized";
    loadScene('rivernightthief');
};

/**
 * Cleans up the scene's assets and loads the forest scene.
 */
scene.cleanupAndLoadForestTraumatized = function(){
    scene.cleanup();
    sceneParams.mood = "Traumatized";
    loadScene('forestnightwolf');
};

/**
 * Cleans up the scene's assets and loads the home scene.
 */
scene.cleanupAndLoadHomeSatisfied = function(){
    scene.cleanup();
    sceneParams.mood = "Satisfied";
    loadScene('homeeveningbandit');
};

/**
 * Cleans up the scene's assets and loads the river scene.
 */
scene.cleanupAndLoadCampEveningSatisfied = function(){
    scene.cleanup();
    sceneParams.mood = "Satisfied";
    loadScene('rivernightthief');
};

/**
 * Cleans up the scene's assets and loads the forest scene.
 */
scene.cleanupAndLoadForestSatisfied = function(){
    scene.cleanup();
    sceneParams.mood = "Satisfied";
    loadScene('forestnightwolf');
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
    registerSimpleChoice("forestcampstay", scene.campStayProcessChoice, scene.campStayFetchNext);
    registerSimpleChoice("forestcampdogstay", scene.dogStayProcessChoice, scene.dogStayFetchNext);
    registerSimpleChoice("forestcampdogpiss", scene.dogPissProcessChoice, scene.dogPissFetchNext);
    registerSimpleChoice("forestcampdogpet", scene.dogPetProcessChoice, scene.dogPetFetchNext);
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