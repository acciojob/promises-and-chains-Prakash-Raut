const form = document.getElementById("userform");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

    function checkVotingEligibility(name, age) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age >= 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = nameInput.value.trim();
      const ageValue = ageInput.value.trim();

      // Validation
      if (name === "" || ageValue === "") {
        alert("Please enter valid details");
        return;
      }

      const age = Number(ageValue);

      checkVotingEligibility(name, age)
        .then((msg) => alert(msg))
        .catch((err) => alert(err));
    });