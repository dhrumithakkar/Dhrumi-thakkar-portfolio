const data = {
    name: "Dhrumi Thakkar",
    role: "B.Tech CSE Student & Aspiring Developer",

    about: "I am a Computer Science Engineering student interested in web development, software development and programming. I enjoy building practical projects, solving programming problems and learning through hands-on development. I am continuously improving my technical skills through projects, courses and practical experience.",

    location: "Ahmedabad, Gujarat, India",
    email: "dhrumithakkar.24.cse@iite.indusuni.ac.in",
    phone: "9998300252",

    github: "https://github.com/dhrumithakkar",
    linkedin: "https://www.linkedin.com/feed/",

    skills: [
        {
            name: "HTML & Bootstrap",
            icon: "bi bi-filetype-html",
            description: "I use HTML for website structure and Bootstrap for clean and responsive interfaces."
        },
        {
            name: "JavaScript",
            icon: "bi bi-filetype-js",
            description: "I use JavaScript to create dynamic pages, handle events and build interactive web applications."
        },
        {
            name: "Python",
            icon: "bi bi-filetype-py",
            description: "I use Python for programming, data analysis and developing practical applications."
        },
        {
            name: "C & C++",
            icon: "bi bi-code-slash",
            description: "I use C and C++ for programming fundamentals, problem solving and data structure projects."
        },
        {
            name: "Java",
            icon: "bi bi-cup-hot",
            description: "I use Java to learn object-oriented programming and develop basic applications."
        },
        {
            name: "Git & GitHub",
            icon: "bi bi-github",
            description: "I use Git and GitHub to manage source code, track changes and maintain my projects."
        }
    ],

    education: [
        {
            title: "B.Tech in Computer Science Engineering",
            institute: "Indus University",
            year: "2024 - 2028",
            description: "Currently pursuing B.Tech in Computer Science Engineering with an interest in programming, web development and software technologies."
        },
        {
            title: "12th Standard",
            institute: "A-One School, Satellite",
            year: "Completed",
            description: "Completed higher secondary education with an interest in computer science and technology."
        }
    ],

    experience: [
        {
            title: "Python Foundation Intern",
            company: "HNTechno",
            duration: "2 Months",
            icon: "bi bi-briefcase-fill",
            description: "Worked on Python fundamentals and practical programming tasks while improving problem-solving and application development skills."
        }
    ],

    projects: [
        {
            title: "Bank Management System",
            description: "A C++ based application for managing bank accounts, customer information and basic banking operations.",
            technology: "C++",
            icon: "bi bi-bank",
            link: "https://github.com/dhrumithakkar/Bank-Management-System-"
        },
        {
            title: "Python Calculator",
            description: "A simple Python application that performs basic arithmetic operations through an easy-to-use program.",
            technology: "Python",
            icon: "bi bi-calculator",
            link: "https://github.com/dhrumithakkar/Python-Calculator"
        }
    ],

    certificates: [
        {
            title: "The Complete Full-Stack Web Development Bootcamp",
            issuer: "Udemy",
            year: "2025",
            icon: "bi bi-award-fill",
            file: "IU2441230337_Certificate.pdf"
        },
        {
            title: "Full Stack Mobile App Development using Flutter",
            issuer: "Indus University",
            year: "2025",
            icon: "bi bi-phone-fill",
            file: "IU2441230337 (3).pdf"
        }
    ]
};

const content = document.getElementById("content");
document.getElementById("name").innerText = data.name;
document.getElementById("role").innerText = data.role;
document.title = data.name + " | Portfolio";

const pages = {
    home: home,
    about: about,
    skills: skills,
    education: education,
    experience: experience,
    projects: projects,
    certificates: certificates,
    contact: contact
};

function openPage(page, button) {
    if (button) {
        document.querySelectorAll(".nav-link").forEach(function(item) {
            item.classList.remove("active");
        });
        button.classList.add("active");
    }
    pages[page]();
}

function stat(number, title, icon) {
    return `
        <div class="col-md-4">
            <div class="card border-0 shadow-sm text-center p-4 h-100">
                <i class="bi ${icon} text-primary fs-1"></i>
                <h2 class="fw-bold mt-2">${number}</h2>
                <p class="text-secondary mb-0">${title}</p>
            </div>
        </div>
    `;
}

function home() {
    content.innerHTML = `
        <div class="bg-white rounded-4 shadow-sm p-4 p-lg-5">
            <span class="badge bg-primary mb-3">Welcome to my portfolio</span>

            <h1 class="display-5 fw-bold">
                Hi, I'm ${data.name}
            </h1>

            <h4 class="text-primary">${data.role}</h4>

            <p class="lead text-secondary mt-3">
                ${data.about}
            </p>

            <button class="btn btn-primary me-2"
                onclick="openPage('projects')">
                <i class="bi bi-folder me-1"></i>
                View My Work
            </button>

            <button class="btn btn-outline-dark"
                onclick="openPage('contact')">
                Contact Me
            </button>
        </div>

        <div class="row g-4 mt-2">
            ${stat(data.projects.length, "Projects", "bi-folder2-open")}
            ${stat(data.skills.length, "Technologies", "bi-code-slash")}
            ${stat(data.certificates.length, "Certificates", "bi-award")}
        </div>
    `;
}

function about() {
    content.innerHTML = `
        <h1 class="fw-bold">About Me</h1>
        <p class="text-secondary">Get to know me</p>
        <hr>

        <div class="card border-0 shadow-sm p-4">

            <div class="text-center mb-3">
                <i class="bi bi-person-circle text-primary"
                    style="font-size:70px;"></i>
            </div>

            <h3 class="text-center">${data.name}</h3>

            <p class="text-primary text-center fw-semibold">
                ${data.role}
            </p>

            <p class="text-secondary">
                ${data.about}
            </p>

            <hr>

            <div class="row">

                <div class="col-md-6 mb-3">
                    <b>
                        <i class="bi bi-geo-alt text-primary me-2"></i>
                        Location
                    </b>
                    <p class="text-secondary">${data.location}</p>
                </div>

                <div class="col-md-6 mb-3">
                    <b>
                        <i class="bi bi-envelope text-primary me-2"></i>
                        Email
                    </b>
                    <p class="text-secondary">${data.email}</p>
                </div>

                <div class="col-md-6">
                    <b>
                        <i class="bi bi-telephone text-primary me-2"></i>
                        Phone
                    </b>
                    <p class="text-secondary">${data.phone}</p>
                </div>

                <div class="col-md-6">
                    <b>
                        <i class="bi bi-laptop text-primary me-2"></i>
                        Interests
                    </b>
                    <p class="text-secondary">
                        Web Development, Programming & Software Development
                    </p>
                </div>

            </div>
        </div>
    `;
}

function skills() {
    let html = `
        <h1 class="fw-bold">Skills & Technologies</h1>
        <p class="text-secondary">
            Technologies I use in my projects
        </p>
        <hr>
        <div class="row g-4">
    `;

    data.skills.forEach(function(skill) {
        html += `
            <div class="col-md-6 col-xl-4">
                <div class="card border-0 shadow-sm h-100 p-4">
                    <i class="${skill.icon} text-primary fs-1"></i>

                    <h4 class="mt-3">
                        ${skill.name}
                    </h4>

                    <p class="text-secondary mb-0">
                        ${skill.description}
                    </p>
                </div>
            </div>
        `;
    });

    content.innerHTML = html + "</div>";
}

function education() {
    let html = `
        <h1 class="fw-bold">Education</h1>
        <p class="text-secondary">My academic background</p>
        <hr>
    `;

    data.education.forEach(function(item) {
        html += `
            <div class="card border-0 shadow-sm p-4 mb-3">

                <div class="d-flex">

                    <i class="bi bi-mortarboard-fill
                        text-primary fs-2 me-3"></i>

                    <div>

                        <h4>${item.title}</h4>

                        <p class="text-primary mb-1">
                            ${item.institute}
                        </p>

                        <span class="badge bg-light text-dark">
                            ${item.year}
                        </span>

                        <p class="text-secondary mt-3 mb-0">
                            ${item.description}
                        </p>

                    </div>

                </div>

            </div>
        `;
    });

    content.innerHTML = html;
}

function experience() {
    let html = `
        <h1 class="fw-bold">Experience</h1>
        <p class="text-secondary">My practical experience</p>
        <hr>
    `;

    data.experience.forEach(function(item) {
        html += `
            <div class="card border-0 shadow-sm p-4 mb-3">

                <div class="d-flex">

                    <i class="${item.icon}
                        text-primary fs-2 me-3"></i>

                    <div>

                        <h4>${item.title}</h4>

                        <h6 class="text-primary">
                            ${item.company}
                        </h6>

                        <span class="badge bg-light text-dark">
                            ${item.duration}
                        </span>

                        <p class="text-secondary mt-3 mb-0">
                            ${item.description}
                        </p>

                    </div>

                </div>

            </div>
        `;
    });

    content.innerHTML = html;
}

function projects() {
    let html = `
        <h1 class="fw-bold">Projects</h1>
        <p class="text-secondary">Some of my projects</p>
        <hr>
        <div class="row g-4">
    `;

    data.projects.forEach(function(project) {
        html += `
            <div class="col-md-6">

                <div class="card border-0 shadow-sm h-100">

                    <div class="bg-primary text-white
                        text-center p-4">

                        <i class="${project.icon}"
                            style="font-size:55px;"></i>

                    </div>

                    <div class="card-body">

                        <h4>${project.title}</h4>

                        <p class="text-secondary">
                            ${project.description}
                        </p>

                        <small class="text-primary">
                            <i class="bi bi-tools me-1"></i>
                            ${project.technology}
                        </small>

                    </div>

                    <div class="card-footer
                        bg-white border-0 p-3">

                        <a href="${project.link}"
                            target="_blank"
                            class="btn btn-primary w-100">

                            <i class="bi bi-github me-1"></i>
                            View Project

                        </a>

                    </div>

                </div>

            </div>
        `;
    });

    content.innerHTML = html + "</div>";
}

function certificates() {
    let html = `
        <h1 class="fw-bold">Certificates</h1>
        <p class="text-secondary">
            My certifications and completed courses
        </p>
        <hr>
        <div class="row g-4">
    `;

    data.certificates.forEach(function(certificate) {
        html += `
            <div class="col-md-6">

                <div class="card border-0 shadow-sm h-100">

                    <div class="bg-warning-subtle
                        text-center p-4">

                        <i class="${certificate.icon}"
                            style="font-size:60px;"></i>

                    </div>

                    <div class="card-body">

                        <h4>${certificate.title}</h4>

                        <p class="text-secondary mb-1">
                            <b>Issued By:</b>
                            ${certificate.issuer}
                        </p>

                        <p class="text-secondary">
                            <b>Year:</b>
                            ${certificate.year}
                        </p>

                    </div>

                    <div class="card-footer
                        bg-white border-0 p-3">

                        <a href="${certificate.file}"
                            target="_blank"
                            class="btn btn-outline-primary w-100">

                            <i class="bi bi-eye me-1"></i>
                            View Certificate

                        </a>

                    </div>

                </div>

            </div>
        `;
    });

    content.innerHTML = html + "</div>";
}

function contact() {
    content.innerHTML = `
        <h1 class="fw-bold">Contact Me</h1>
        <p class="text-secondary">Let's connect</p>
        <hr>

        <div class="row g-4">

            <div class="col-md-6">

                <div class="card border-0 shadow-sm p-4 h-100">

                    <h4>Contact Information</h4>

                    <hr>

                    <p>
                        <i class="bi bi-envelope
                            text-primary me-2"></i>
                        ${data.email}
                    </p>

                    <p>
                        <i class="bi bi-telephone
                            text-primary me-2"></i>
                        ${data.phone}
                    </p>

                    <p>
                        <i class="bi bi-geo-alt
                            text-primary me-2"></i>
                        ${data.location}
                    </p>

                </div>

            </div>

            <div class="col-md-6">

                <div class="card border-0 shadow-sm p-4 h-100">

                    <h4>Connect With Me</h4>

                    <hr>

                    <a href="${data.github}"
                        target="_blank"
                        class="btn btn-dark mb-2">

                        <i class="bi bi-github me-2"></i>
                        GitHub

                    </a>

                    <a href="${data.linkedin}"
                        target="_blank"
                        class="btn btn-primary">

                        <i class="bi bi-linkedin me-2"></i>
                        LinkedIn

                    </a>

                </div>

            </div>

        </div>
    `;
}

openPage("home", document.querySelector(".nav-link"));