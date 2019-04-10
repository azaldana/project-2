var dairyPage = $(".dairy");
var meatPage = $(".meat");
var veggiesPage = $(".veggies");
var pantryPage = $(".pantry");
var seafoodPage = $(".seafood");
var fruitPage = $(".fruit");
var recipesPage = $(".recipe-content");

function homePage() {
    dairyPage.hide();
    meatPage.hide();
    veggiesPage.hide();
    pantryPage.hide();
    seafoodPage.hide();
    fruitPage.hide();
    recipesPage.hide();
}

homePage();

function dairy() {
    var dairyClicked = $(".dairyBtn");

    dairyClicked.on('click', function () {
        dairyPage.show();
        meatPage.hide();
        veggiesPage.hide();
        pantryPage.hide();
        seafoodPage.hide();
        fruitPage.hide();
        recipesPage.hide();
    })
}
dairy();

function meat() {
    var meatClicked = $(".meatBtn");

    meatClicked.on('click', function () {
        dairyPage.hide();
        meatPage.show();
        veggiesPage.hide();
        pantryPage.hide();
        seafoodPage.hide();
        fruitPage.hide();
        recipesPage.hide();
    })
}
meat();

function veggie() {
    var veggieClicked = $(".veggieBtn");

    veggieClicked.on('click', function () {
        dairyPage.hide();
        meatPage.hide();
        veggiesPage.show();
        pantryPage.hide();
        seafoodPage.hide();
        fruitPage.hide();
        recipesPage.hide();
    })
}
veggie();

function pantry() {
    var pantryClicked = $(".pantryBtn");

    pantryClicked.on('click', function () {
        dairyPage.hide();
        meatPage.hide();
        veggiesPage.hide();
        pantryPage.show();
        seafoodPage.hide();
        fruitPage.hide();
        recipesPage.hide();
    })
}
pantry();

function seafood() {
    var seafoodClicked = $(".seafoodBtn");

    seafoodClicked.on('click', function () {
        dairyPage.hide();
        meatPage.hide();
        veggiesPage.hide();
        pantryPage.hide();
        seafoodPage.show();
        fruitPage.hide();
        recipesPage.hide();
    })
}
seafood();

function fruits() {
    var fruitClicked = $(".fruitBtn");

    fruitClicked.on('click', function () {
        dairyPage.hide();
        meatPage.hide();
        veggiesPage.hide();
        pantryPage.hide();
        seafoodPage.hide();
        fruitPage.show();
        recipesPage.hide();
    })
}
fruits();

function findRecipes(){
    var submitClicked = $("#submit");

    submitClicked.on('click', function(){
        recipesPage.show();
    })
}

findRecipes();

function login(){
    var loginClicked = $(".login");

    loginClicked.on('click', function(){
        $(".modal1").modal();
    })
}

login();

function signup(){
    var signupClicked = $(".signup");

    signupClicked.on('click', function(){
        $(".modal2").modal();
    })
}

signup();

function clickSearch(){
    var searchClicked = $(".submit");

    searchClicked.on('click', function(){
        $(".modal3").modal();
    })
}

clickSearch();