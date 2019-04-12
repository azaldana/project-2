var localUser = {};
var loginCheck = {};

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
        localUser.id = localStorage.getItem("userId");
        console.log(localUser.id);
        // GET fridges
      }
    });
  },
  getUser: function(userName) {
    return $.ajax({
      url: "/api/user/" + userName,
      type: "GET",
      success: function(res) {
        loginCheck.id = res.id;
        loginCheck.password = res.password;
        console.log(res);
      }
    });
  },
  updateUser: function(userObj) {
    return $.ajax({
      url: "/api/user/" + userObj.id,
      type: "PUT",
      data: userObj
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

// What happens when you first get to the page
console.log(localStorage.getItem("userId"));

if (localStorage.getItem("userId") === null) {
  // Create temp user
  var tempUser = {
    name: "temp",
    password: ""
  };
  localUser.name = tempUser.name;
  // User post
  API.createUser(tempUser);
} else {
  localUser.id = localStorage.getItem("userId");
  API.getFridge(localUser.id);
}

// What happens when you submit sign up
// Right now, you are able to sign up with the same user name as someone else
$("#signup_submit").on("click", function(event) {
  event.preventDefault();
  console.log("button pressed");
  console.log(
    $("#user_name_signup")
      .val()
      .trim()
  );
  console.log($("#password_signup").val());
  // create user object
  var signUp = {
    name: $("#user_name_signup")
      .val()
      .trim(),
    password: $("#password_signup")
      .val()
      .trim()
  };
  var confirm = $("#password_confirm")
    .val()
    .trim();

  console.log(signUp.name + " " + signUp.password + " " + confirm);
  // check to make sure both inputs are present
  if (!(signUp.name && signUp.password)) {
    alert("You must enter an example text and description!");
    return;
  } else if (signUp.password !== confirm) {
    alert("Password did not match");
  } else {
    // Create permanent user
    if (localUser.name === "temp") {
      signUp.id = localUser.id;
      API.updateUser(signUp);
    } else {
      API.createUser(signUp);
    }
  }
});

// What happens when you submit log in
$("#login_submit").on("click", function(event) {
  event.preventDefault();
  // Create object from user input (name password)
  var login = {
    name: $("#user_name_login")
      .val()
      .trim(),
    password: $("#password_login")
      .val()
      .trim()
  };
  // User GET with that object based on object.name
  API.getUser(login.name);
  if (login.password === loginCheck.password) {
    localStorage.setItem("userId", login.id);
    alert("Welcome, " + login.name + "!");
  } else {
    alert("Username or password did not match.");
  }
  // GET fridge based on id
  // Set all the ingredients to their fridge values
});
