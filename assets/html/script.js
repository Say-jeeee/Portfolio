
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const email = document.getElementById("email").value;
    if (email.trim() === "") {
      alert("Please enter an email address.");
      return;
    }
    alert("Thank you! Submitted email: " + email);
    this.reset();
});