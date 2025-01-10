// Reference the course list array
const courses = [
    { code: "CSE 110", name: "Programming Building Blocks", credits: 3, completed: false },
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
    { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: true },
    { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: false },
    { code: "WDD 131", name: "Responsive Web Design", credits: 3, completed: false },
    { code: "WDD 231", name: "Intermediate Web Development", credits: 3, completed: true },
  ];
  
  // Dynamically display the current copyright year
  document.querySelector("footer p").innerHTML = `© ${new Date().getFullYear()} Nicolas E. Morise Silva 🌍 Brazil`;
  
  // Dynamically display the document's last modified date
  const lastModified = document.createElement("p");
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
  document.querySelector("footer").appendChild(lastModified);
  
  // Filter courses dynamically
  function filterCourses(filter) {
    const filteredCourses = filter === "all"
      ? courses
      : courses.filter(course => course.code.startsWith(filter));
    displayCourses(filteredCourses);
  }
  
  // Display courses dynamically
  function displayCourses(courseList) {
    const container = document.querySelector(".courses");
    container.innerHTML = ""; // Clear current courses
  
    courseList.forEach(course => {
      const courseDiv = document.createElement("div");
      courseDiv.classList.add("course");
      courseDiv.style.backgroundColor = course.completed ? "#4caf50" : "#a0522d"; // Differentiate styles
  
      courseDiv.textContent = `${course.code} - ${course.name} (${course.credits} credits)`;
      container.appendChild(courseDiv);
    });
  
    // Update the total credits
    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
    document.querySelector(".certificates h2").textContent = `Total Credits: ${totalCredits}`;
  }
  
  // Set up the filter buttons
  document.querySelectorAll(".filters button").forEach(button => {
    button.addEventListener("click", () => {
      filterCourses(button.textContent === "All" ? "all" : button.textContent);
    });
  });
  
  // Initial display of all courses
  displayCourses(courses);
  