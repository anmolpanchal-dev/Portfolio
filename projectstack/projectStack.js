const projects = [
  {
    title: "Todo Website",
    description: "A Simple todo page that enable to save your todos with date",
    image: "../images/todo1.png",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://anmolpanchal-dev.github.io/Todo-App/"
  },
  {
    title: "Stone Paper Scissor Game",
    description: "A simple game between you and computer.",
    image: "../images/StonePaperScissor.png",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://stone-paper-scissorgames.netlify.app/"
  },
  {
    title: "Sign Up Page",
    description: "A Simple Sign Page that also check for existing username.",
    image: "../images/SignUpPage.png",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://sign-up-page-js.netlify.app/"
  },
  {
    title: "Tic Tac Toe Game",
    description: "Logic-based game with clean UI & smooth gameplay.",
    image: "../images/tictactoe.png",
    stack: ["HTML","CSS","JavaScript"],
    link: "https://tic-tac-toe-bjjozrrgy-anmolpanchal05s-projects.vercel.app/"
  },
  {
    title: "Calculator",
    description: "Logic based Calculator.",
    image: "../images/Calc.png",
    stack: ["HTML","CSS","JavaScript"],
    link: "https://one-modern-calculator.netlify.app/"
  },{
    title: "Weather App",
    description: "Weather app using API.",
    image: "../images/weather.png",
    stack: ["HTML","CSS","JavaScript"],
    link: "https://anmolpanchal-dev.github.io/Weather-App/"
  },
  {
    title: "Character Counter",
    description: "A simple character counter that counts the number of characters in a given text input.",
    image: "../images/characterCounter.png",
    stack: ["HTML","CSS","JavaScript"],
    link: "https://anmolpanchal-dev.github.io/CharacterCounter/"
  },

];

const container = document.getElementById("projectContainer");
const searchInput = document.getElementById("searchInput");
const projectCount = document.getElementById("projectCount");

function renderProjects(data) {
  container.innerHTML = "";
  projectCount.innerText = `${data.length} Projects`;

  if (data.length === 0) {
    container.innerHTML = `<p class="text-center mt-5 text-muted">No projects found ❌</p>`;
    return;
  }

  data.forEach(project => {
    container.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="card project-card h-100">
          <img src="${project.image}" class="card-img-top" alt="${project.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-semibold">${project.title}</h5>
            <p class="card-text text-muted small">${project.description}</p>

            <div class="mb-3">
              ${project.stack.map(
                tech => `<span class="badge tech-badge">${tech}</span>`
              ).join("")}
            </div>

            <a href="${project.link}" target="_blank"
              class="btn btn-outline-primary mt-auto">
              View Project →
            </a>
          </div>
        </div>
      </div>
    `
  });
}

function filterStack(tech) {
  tech === "All"
    ? renderProjects(projects)
    : renderProjects(projects.filter(p => p.stack.includes(tech)));
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  renderProjects(projects.filter(p =>
    p.title.toLowerCase().includes(value)
  ));
});

renderProjects(projects);

document.getElementById("previouspage").addEventListener("click", function() {
    window.location.href = "../index.html";
});