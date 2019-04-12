var userId;
// What happens when you first get to the page
// Create temp user
// User post
// Set user variable to whatever the temp
// If POST returns id, take it, else GET

// What happens when you submit sign up
// Create permanent user
// Create object from the user input (name password)
// User POST with object
// Set user variable to whatever the temp
// If POST returns id, take it, else GET

// What happens when you submit log in
// Create object from user input (name password)
// User GET with that object based on object.name
// if user.password =  object.password
// Verified!
// Set user variable to user user.id
// GET fridge based on id
// Set all the ingredients to their fridge values
// Else: user or password incorrect

// What happens when you check on an ingredient
// GET Fridge to see if the object exists
// if it doesn't, POST fridge
// else nothing:
// then make the check checked

// What happens when you uncheck an ingredient
// GET fridge to see if it exists
// if it does, DELETE fridge
// Else nothing
// trhen make it unchecked

// What happens when you search for an ingredient
// Search for ingrediten in auto-complete
// If options exist
// present the options
// else we could nt find your ingedient

// What happens when you search for recipes by ingredient
// get from fridge
// use the response that you get from that to construct an array
// Put it in the query url
// get them results.

// Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  createUser: function(userObj) {
    return $.ajax({
      type: "POST",
      url: "/api/user",
      data: userObj,
      success: function(response) {
        localStorage.clear();
        localStorage.setItem("userId", response.id);
        userId = localStorage.getItem("userId");
        console.log(userId);
        // GET fridges
      }
    });
  },
  getUser: function(userName) {
    return $.ajax({
      url: "/api/user/" + userName,
      type: "GET",
      success: function(res) {
        console.log(res);
      }
    });
  },

  getFridge: function(userId) {
    return $.ajax({
      url: "/api/fridge/" + userId,
      type: "GET",
      success: function(response) {
        // check the necessary boxes
        console.log(response);
      }
    });
  },
  addToFridge: function(fridgeObj) {
    return $.ajax({
      url: "/api/fridge",
      type: "POST",
      data: fridgeObj,
      success: function(response) {
        // Make the box checked
        console.log(response);
      }
    });
  },
  deleteFromFridge: function(fridgeId) {
    return $.ajax({
      url: "/api/fridge/" + fridgeId,
      type: "DELETE",
      success: function(response) {
        // Uncheck the box?
        console.log(response);
      }
    });
  },

  getFavorites: function(userId) {
    return $.ajax({
      url: "/api/favorites/" + userId,
      type: "GET",
      success: function(response) {
        // create array of favorites
        console.log(response);
      }
    });
  },
  addToFavorites: function(favoritesObj) {
    return $.ajax({
      url: "/api/favorites",
      type: "POST",
      data: favoritesObj,
      success: function(response) {
        // Check heart
        console.log(response);
      }
    });
  },
  deleteFromFavorites: function(favoritesId) {
    return $.ajax({
      url: "/api/fridge/" + favoritesId,
      type: "DELETE",
      success: function(response) {
        // Uncheck the box?
        console.log(response);
      }
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

console.log(localStorage.getItem("userId"));
if (localStorage.getItem("userId") === null) {
  var tempUser = {
    name: "temp",
    password: ""
  };
  API.createUser(tempUser);
} else {
  userId = localStorage.getItem("userId");
  API.getFridge(userId);
}

$("#signUpSubmit").on("submit", function(event) {
  event.preventDefault();
  var signUp = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }
});