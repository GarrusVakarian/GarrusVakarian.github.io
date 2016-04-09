/**
 * This JavaScript file contains code that will be called upon the start of 
 * Kobold Adventure. It includes initialization steps such as initially
 * loading the load and save tab contents, initializing the kobold and the scene
 * objects, and handling various other one time only tasks.
 */

var kobold = new Object();

kobold.name = "";
kobold.gender = "";
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

/**
 * Adds functionality to the kobold. This functionality can't be stored via
 * AJAX, and thus it needs to be added manually.
 */
function makeMyKoboldDoStuff(){
    kobold.isNaked = isNaked;
    kobold.createPieceOfEquipment = createPieceOfEquipment;
    kobold.putOn = putOn;
    kobold.takeOff = takeOff;
    kobold.createItem = createItem;
    kobold.isWearing = isWearing;
    kobold.hasOrIsWearingHowMany = hasOrIsWearingHowMany;
    kobold.hasOrIsWearingItem = hasOrIsWearingItem;
    kobold.hasHowMany = hasHowMany;
    kobold.hasItem = hasItem;
    kobold.removeItem = removeItem;
    kobold.addItem = addItem;
}

makeMyKoboldDoStuff();

var scene = new Object();

var sceneParams = new Object();

var currentScene = "";
var sceneFolder = "scenes/";

function init(){
    
}

function load(){
    
}

function ontabout(){

}

function ontabin(){

}
