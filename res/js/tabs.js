/* 
 * This JavaScript file defines the onclick handlers for the various tabs.
 * Furthermore, it contains the code required for switching between the tabs,
 * which involves a context switch where the new tab's storage is loaded to the
 * main content, while the old context is stored in its own appropriate storage.
 */

var koboldAdventureStorageManagerPreviousTab;
var koboldAdventureStorageManagerCurrentTab;
var koboldAdventureStorageManagerScrollPositions = [];


/**
 * Stores all elements which currently possess the koboldadventuretabactive CSS
 * class in the global variable koboldAdventureStorageManagerPreviousTab, so 
 * that they may be referred to later for context switching purposes.
 */
function storePreviousActiveTab(){
    var elements = $(".koboldadventuretabactive");
    koboldAdventureStorageManagerPreviousTab = elements;
}


/**
 * Stores all elements which currently possess the koboldadventuretabactive CSS
 * class in the global variable koboldAdventureStorageManagerCurrentTab, so 
 * that they may be referred to later for context switching purposes.
 */
function storeCurrentActiveTab(){
    var elements = $(".koboldadventuretabactive");
    koboldAdventureStorageManagerCurrentTab = elements;
}

/**
 * Removes the koboldadventureactive CSS class from all elements which currently
 * possess it, animating the changes in style.
 */
function removeCurrentActiveTab() {
    var elements = $(".koboldadventuretabactive");
    var classToRemove = "koboldadventuretabactive";
    animateRemoveClassFast(elements, classToRemove);
}

/**
 * Adds the koboldadventuretabactive CSS class to the passed elements, animating 
 * the changes in style.
 * @param elements The elements to which to add the class.
 */
function activateNewTab(elements) {
    var classToAdd = "koboldadventuretabactive";
    animateAddClassFast(elements, classToAdd);
}

/**
 * Basic onclick function for all tabs. Will remove the koboldadventuretabactive
 * class from any elements that possess it, animating the changes. It then adds
 * this class to the clicked element. This change is animated as well.
 * Will store the elements of which it removed using storePreviousActiveTab().
 * Will store the elements to which it added using storeCurrentActiveTab().
 */
function genericTabOnclick() {
    if ($(this).hasClass("koboldadventuretabactive"))
        return;

    storePreviousActiveTab();
    removeCurrentActiveTab();
    activateNewTab(this);
    storeCurrentActiveTab();
}

/**
 * The onclick function for the scene tab.
 */
function sceneTabOnclick() {
    //alert("scene");
}

/**
 * The onclick function for the stats tab.
 */
function statsTabOnclick() {
    //alert("stats");
}

/**
 * The onclick function for the status tab.
 */
function statusTabOnclick() {
    //alert("status");
}

/**
 * The onclick function for the inventory tab.
 */
function inventoryTabOnclick() {
    //alert("inventory");
}

/**
 * The onclick function for the save tab.
 */
function saveTabOnclick() {
    //alert("save");
}

/**
 * The onclick function for the load tab.
 */
function loadTabOnclick() {
    //alert("load");
}

/**
 * This function saves the current scroll position of the main content, using
 * the id of the passed tab as key. The used array is the global variable
 * koboldAdventureStorageManagerScrollPositions.
 * @param {type} tab The tab whose id to use as key.
 */
function saveScrollPosition(tab){
    var loc = tab.attr("id");
    var scrollamount = $(".koboldadventuremain").scrollTop();
    koboldAdventureStorageManagerScrollPositions[loc] = scrollamount;
}

/**
 * This function loads the current scroll position of the main content, using
 * the id of the passed tab as key. The used array is the global variable
 * koboldAdventureStorageManagerScrollPositions.
 * @param {type} tab The tab whose id to use as key.
 */
function loadScrollPosition(tab){
    var loc = tab.attr("id");
    var scrollamount = koboldAdventureStorageManagerScrollPositions[loc];
    if(scrollamount !== undefined)
        $(".koboldadventuremain").scrollTop(scrollamount);
}

/**
 * This function pushes a specified tab to its storage container by copying the
 * contents of the main area and putting them in the tab's storage container.
 * @param tab The tab to push to its storage container.
 */
function toStorage(tab){
    var storage = $("#" + tab.attr("id") + "storage");
    var main = $(".koboldadventuremain");
    storage.html(main.html());
}

/**
 * This function pulls a specified tab from its storage container by copying the
 * contents of the storage container and putting them in the main area.
 * @param tab The tab to pull from storage.
 */
function fromStorage(tab){
    var storage = $("#" + tab.attr("id") + "storage");
    var main = $(".koboldadventuremain");
    main.html(storage.html());
}

/**
 * Onclick function for all tabs that is meant to be called only after all other
 * relevant onclick functions have been called. 
 * 
 * This function will perform the context switch between the current main 
 * content and the storage of the clicked tab. It will first save the current 
 * main content to the previous tab's storage, and it will then load the clicked
 * tab's storage to the main content.
 * 
 * Furthermore, it will save the current scroll position using 
 * saveScrollPosition(), and load the new tab's scroll position using 
 * loadScrollPosition().
 */
function genericTabPostOnclick() {
    var oldTab = koboldAdventureStorageManagerPreviousTab;
    var newTab = koboldAdventureStorageManagerCurrentTab;
    saveScrollPosition(oldTab);
    toStorage(oldTab);
    fromStorage(newTab);
    loadScrollPosition(newTab);
}

// Adds a basic onclick listener to all tabs
function addGenericTabOnclick() {
    $(".koboldadventuretab").click(genericTabOnclick);
}

// Adds an onclick listener to the scene tab
function addSceneTabOnclick() {
    $("#koboldadventurescenetab").click(sceneTabOnclick);
}

// Adds an onclick listener to the stats tab
function addStatsTabOnclick() {
    $("#koboldadventurestatstab").click(statsTabOnclick);
}

// Adds an onclick listener to the status tab
function addStatusTabOnclick() {
    $("#koboldadventurestatustab").click(statusTabOnclick);
}

// Adds an onclick listener to the inventory tab
function addInventoryTabOnclick() {
    $("#koboldadventureinventorytab").click(inventoryTabOnclick);
}

// Adds an onclick listener to the save tab
function addSaveTabOnclick() {
    $("#koboldadventuresavetab").click(saveTabOnclick);
}

// Adds an onclick listener to the load tab
function addLoadTabOnclick() {
    $("#koboldadventureloadtab").click(loadTabOnclick);
}

// Adds an onclick listener to all tabs that will trigger only after 
// all other tab onclick listeners have been handled.
function addGenericTabPostOnclick() {
    $(".koboldadventuretab").click(genericTabPostOnclick);
}

addGenericTabOnclick();
addSceneTabOnclick();
addStatsTabOnclick();
addStatusTabOnclick();
addInventoryTabOnclick();
addSaveTabOnclick();
addLoadTabOnclick();
addGenericTabPostOnclick();