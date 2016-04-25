/**
 * This JavaScript file contains code that will be called upon the start of 
 * Kobold Adventure. It includes initialization steps such as initially
 * loading the load and save tab contents, initializing the kobold and the scene
 * objects, and handling various other one time only tasks.
 */

var kobold = new Object();

kobold.name = "";
kobold.gender = "";
kobold.stats = {};
kobold.stats.attr = {};
kobold.stats.attr["Strength"] = 3;
kobold.stats.attr["Agility"] = 6;
kobold.stats.attr["Intelligence"] = 4;
kobold.stats.attr["Magic"] = 0;
kobold.stats.attr["Endurance"] = 4;
kobold.stats.attr["Stamina"] = 5;
kobold.stats.consensual = 0;
kobold.stats.formoney = 0;
kobold.stats.prostitute = 0;
kobold.stats.raped = 0;
kobold.stats.beenraped = 0;
kobold.stats.sex = {};
kobold.stats.sex["Hands"] = 0;
kobold.stats.sex["Mouth"] = 0;
kobold.stats.sex["Cockslit"] = 0;
kobold.stats.sex["Cunt"] = 0;
kobold.stats.sex["Ass"] = 0;
kobold.stats.sex["Tail"] = 0;
kobold.stats.sex["Feet"] = 0;
kobold.stats.sex["Other"] = 0;
kobold.stats.cum = {};
kobold.stats.cum["Face"] = 0;
kobold.stats.cum["Body"] = 0;
kobold.stats.cum["Cockslit"] = 0;
kobold.stats.cum["Cunt"] = 0;
kobold.stats.cum["Ass"] = 0;
kobold.stats.cum["Feet"] = 0;
kobold.stats.came = {};
kobold.stats.came["Times"] = 0;
kobold.stats.gotfucked = {};
kobold.stats.gotfucked.male = {};
kobold.stats.gotfucked.male["Human"] = 0;
kobold.stats.gotfucked.male["Kobold"] = 0;
kobold.stats.gotfucked.male["Dragon"] = 0;
kobold.stats.gotfucked.male["Beast"] = 0;
kobold.stats.gotfucked.female = {};
kobold.stats.gotfucked.female["Human"] = 0;
kobold.stats.gotfucked.female["Kobold"] = 0;
kobold.stats.gotfucked.female["Dragon"] = 0;
kobold.stats.gotfucked.female["Beast"] = 0;
kobold.stats.fucked = {};
kobold.stats.fucked.male = {};
kobold.stats.fucked.male["Human"] = 0;
kobold.stats.fucked.male["Kobold"] = 0;
kobold.stats.fucked.male["Dragon"] = 0;
kobold.stats.fucked.male["Beast"] = 0;
kobold.stats.fucked.female = {};
kobold.stats.fucked.female["Human"] = 0;
kobold.stats.fucked.female["Kobold"] = 0;
kobold.stats.fucked.female["Dragon"] = 0;
kobold.stats.fucked.female["Beast"] = 0;
kobold.status = {};
kobold.status["Physical"] = [];
kobold.status["Mental"] = [];
kobold.markings = [];
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
 * DISABLED TEMPORARILY. NEEDS TO BE ADDED TO.
 */
function makeMyKoboldDoStuff(){
    /*
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
    */
    // NEEDS TO BE ADDED TO
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
