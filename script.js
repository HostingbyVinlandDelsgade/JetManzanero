//tooltip



//Slideanim
$(document).ready(function() {
    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + $(window).height() - 50) {
                $(this).addClass("slide");
            }
        });
    });
});


//Send Message
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var form = event.target;
    var formData = new FormData(form);

    // Show a loading message or spinner (optional)
    var responseElement = document.getElementById('form-response');
    responseElement.innerText = "Sending your message...";
    responseElement.style.color = "blue";

    // Use Fetch API to send form data to Formspree
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            responseElement.innerText = "Thank you for your message!";
            responseElement.style.color = "green";
            form.reset(); // Reset form fields
        } else {
            responseElement.innerText = "Oops! There was a problem sending your message.";
            responseElement.style.color = "red";
        }
    }).catch(function(error) {
        responseElement.innerText = "Oops! There was a problem sending your message.";
        responseElement.style.color = "red";
    });
});


$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          900,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
});
