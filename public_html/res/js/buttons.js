/* 
 * FoxPaw Entertainment proprietary code.
 */

function addTransition(elements) {
    $(elements).addClass("transition");
}

function removeTransition(elements) {
    $(elements).removeClass("transition");
}

function removeTransitionLater(elements) {
    setTimeout(function () {
        $(elements).removeClass("transition");
    }, 400);
}

function removeActiveTabClass(elements) {
    $(elements).removeClass("koboldadventuretabactive");
}

function removeCurrentActiveTab() {
    var elements = $(".koboldadventuretabactive")

    addTransition(elements);
    removeActiveTabClass(elements);
    removeTransitionLater(elements);
}

function addActiveTabClass(elements) {
    $(elements).addClass("koboldadventuretabactive");
}

function activateNewTab(elements){
    var toActivate = $(elements);
    
    addTransition(toActivate);
    addActiveTabClass(toActivate);
    removeTransitionLater(toActivate);
}

function genericTabOnclick() {
    if ($(this).hasClass("koboldadventuretabactive"))
        return;

    removeCurrentActiveTab();
    activateNewTab(this);
}

function sceneTabOnclick() {
    //alert("scene");
}

function statsTabOnclick() {
    //alert("stats");
}

function statusTabOnclick() {
    //alert("status");
}

function inventoryTabOnclick() {
    //alert("inventory");
}

function saveTabOnclick() {
    //alert("save");
}

function loadTabOnclick() {
    //alert("load");
}

function addGenericTabOnclick() {
    $(".koboldadventuretab").click(genericTabOnclick);
}

function addSceneTabOnclick() {
    $("#koboldadventurescenetab").click(sceneTabOnclick);
}

function addStatsTabOnclick() {
    $("#koboldadventurestatstab").click(statsTabOnclick);
}

function addStatusTabOnclick() {
    $("#koboldadventurestatustab").click(statusTabOnclick);
}

function addInventoryTabOnclick() {
    $("#koboldadventureinventorytab").click(inventoryTabOnclick);
}

function addSaveTabOnclick() {
    $("#koboldadventuresavetab").click(saveTabOnclick);
}

function addLoadTabOnclick() {
    $("#koboldadventureloadtab").click(loadTabOnclick);
}

addGenericTabOnclick();
addSceneTabOnclick();
addStatsTabOnclick();
addStatusTabOnclick();
addInventoryTabOnclick();
addSaveTabOnclick();
addLoadTabOnclick();