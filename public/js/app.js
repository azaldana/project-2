var dairyPage = $(".dairy");
var meatPage = $(".meat");
var veggiesPage = $(".veggies");
var pantryPage = $(".pantry");
var seafoodPage = $(".seafood");
var fruitPage = $(".fruit");
var recipesPage = $(".recipe-content");
var submit = $(".submit");

function homePage() {
    dairyPage.hide();
    meatPage.hide();
    veggiesPage.hide();
    pantryPage.hide();
    seafoodPage.hide();
    fruitPage.hide();
    recipesPage.hide();
    submit.hide();
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
        submit.show();
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
        submit.show();
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
        submit.show();
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
        submit.show();
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
        submit.show();
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
        submit.show();
    })
}
fruits();

function findRecipes() {
    var submitClicked = $("#submit");

    submitClicked.on('click', function () {
        recipesPage.show();
    })
}

findRecipes();

function login() {
    var loginClicked = $(".login");

    loginClicked.on('click', function () {
        $(".modal1").modal();
    })
}

login();

function signup() {
    var signupClicked = $(".signup");

    signupClicked.on('click', function () {
        $(".modal2").modal();
    })
}

signup();

function clickSearch() {
    var searchClicked = $(".submit");

    searchClicked.on('click', function () {
        $(".modal3").modal();
    })
}

clickSearch();

$('#modal-login').click((event) => {
    $('#search').modal();
    $('#login').modal();
    $('#login').modal('open');
})

$('#modal-signup').click((event) => {
    $('#search').modal();
    $('#signup').modal();
    $('#signup').modal('open');
})

$("body").on("click", '.addition', function(event){
    event.preventDefault();
    var category = $(this).data('category');
    var inputId = category + '-ingredient'
    var input = $("#" + inputId).val().trim();
    var prependHere = $('.' + category + ' .prepend-here');
    var ingredMenu = $(`#${category}-ingred-menu`);
    //$('.add-ingred').remove();
    var checkbox = $(`
        <div class="col s12 l3">
            <form action="#">
            <p>
                <label>
                <input type="checkbox" />
                <span>${input}</span>
                </label>
            </p>
            </form>
        </div>
    `)

    checkbox.insertBefore(prependHere);
    // ingredMenu.append(checkbox);
    
    $(`#${category}-ingredient`).val('');
    $(`#${category}-ingredient`).focus();


    console.log(input);
})

$('body').on('click', 'input[type="checkbox"]', function() {
    console.log($(this).next().text());
    // var allChecked = $("input:checked");
    // console.log(allChecked);
    // allChecked.each(function(index, checked) {
    //     console.log($(checked).next().text());
    // });
});