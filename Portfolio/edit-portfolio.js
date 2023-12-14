document.addEventListener("DOMContentLoaded", function () {
  const addExperienceButton = document.getElementById("addExperience");
  const experienceForm = document.getElementById("experienceForm");
  const saveExperienceButton = document.getElementById("saveExperience");
  const experiencesList = document.getElementById("experiencesList");

  let experiences = [];

  addExperienceButton.addEventListener("click", function () {
    experienceForm.style.display = "block";
  });

  saveExperienceButton.addEventListener("click", function () {

    const companyName = document.getElementById("companyName").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const description = document.getElementById("description").value;

    experiences.push({ companyName, startDate, endDate, description });

    displayExperiences();

    clearExperienceForm();
  });

  function displayExperiences() {
    experiencesList.innerHTML = "";
    experiences.forEach((exp) => {
      const experienceItem = document.createElement("div");
      experienceItem.classList.add("experience-item");
      experienceItem.innerHTML = `<p><strong>${exp.companyName}</strong></p>
                                   <p>${exp.startDate} - ${exp.endDate}</p>
                                   <p>${exp.description}</p>`;
      experiencesList.appendChild(experienceItem);
    });
  }

  function clearExperienceForm() {
    document.getElementById("companyName").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("description").value = "";
    experienceForm.style.display = "none";
  }
});
