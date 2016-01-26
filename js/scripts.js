function Contact(firstName, lastName, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.newAddresses = [];
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName + " " + this.address;
};

function Address(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
}

Address.prototype.fullAddress = function() {
    return this.street + " " + this.city + " " + this.state;
}

$(document).ready(function() {

  });


    $("#add-address").click(function() {
        $("#new-addresses").append('<div class="new-address keep">' +
            '<div class="form-group">' +
            '<label for="new-street">Street</label>' +
            '<input type="text" class="form-control new-street">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-city">City</label>' +
            '<input type="text" class="form-control new-city">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-state">State</label>' +
            '<input type="text" class="form-control new-state">' +
            '</div>' +
            '</div>').hide().fadeIn(2000);
    });

    $("form#new-contact").submit(function(event) {


        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
        var inputtedAddress = $("input#new-address").val();
        var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress);

        $(".new-address").each(function() {
            var inputtedStreet = $(this).find("input.new-street").val();
            var inputtedCity = $(this).find("input.new-city").val();
            var inputtedState = $(this).find("input.new-state").val();
            var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
            newContact.newAddresses.push(newAddress)
        })

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $("input#new-address").val("");
        event.preventDefault();


        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.fullName());
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
            $(".address").text(newContact.address);
            $("ul#new").text("");
            newContact.newAddresses.forEach(function(x) {
                $("ul#new").append("<li>" + x.fullAddress() + "</li>")
            })
        });

        $("input").not(".keep")
            .css("display", "none");
        $("label").not(".keep")
            .css("display", "none");
    });



});
