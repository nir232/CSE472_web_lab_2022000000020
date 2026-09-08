

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#register form");
  const dateInput = document.getElementById("date");
  const tbody = document.getElementById("students-tbody");
  const clearBtn = document.getElementById("clear-students-btn");

  // Set min date to today
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  // Load existing data when page loads
  renderStudentsTable();

  // Form submit handler
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const studentId = document.getElementById("studentId").value.trim();
      const email = document.getElementById("email").value.trim();
      const preferredDate = document.getElementById("date").value;
      const shiftSelected = document.querySelector('input[name="shift"]:checked');

      // Collect checked skills
      const skills = [];
      if (document.getElementById("html")?.checked) skills.push("HTML");
      if (document.getElementById("css")?.checked) skills.push("CSS");
      if (document.getElementById("js")?.checked) skills.push("JavaScript");

      // Validation
      if (!name || !studentId || !email || !preferredDate || !shiftSelected) {
        alert("Please fill in all required fields.");
        return;
      }

      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Create new student object
      const newStudent = {
        name,
        studentId,
        email,
        date: preferredDate,
        shift: shiftSelected.value,
        skills: skills.length > 0 ? skills.join(", ") : "None"
      };

      // Save to localStorage
      saveStudent(newStudent);

      // Re-render table & reset form
      renderStudentsTable();
      form.reset();

      alert(`Registration successful for ${name}!`);
    });
  }

  // Clear data handler
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear all registered student records?")) {
        localStorage.removeItem("registeredStudents");
        renderStudentsTable();
      }
    });
  }

  // Helper: Retrieve array from LocalStorage
  function getStudents() {
    return JSON.parse(localStorage.getItem("registeredStudents")) || [];
  }

  // Helper: Save item to LocalStorage
  function saveStudent(student) {
    const students = getStudents();
    students.push(student);
    localStorage.setItem("registeredStudents", JSON.stringify(students));
  }

  // Helper: Render table rows dynamically
  function renderStudentsTable() {
    if (!tbody) return;

    const students = getStudents();
    tbody.innerHTML = "";

    if (students.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="no-data">No students registered yet.</td>
        </tr>
      `;
      return;
    }

    students.forEach((student, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${escapeHtml(student.name)}</td>
        <td>${escapeHtml(student.studentId)}</td>
        <td>${escapeHtml(student.email)}</td>
        <td>${escapeHtml(student.date)}</td>
        <td style="text-transform: capitalize;">${escapeHtml(student.shift)}</td>
        <td>${escapeHtml(student.skills)}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Helper: Basic input escaping to prevent XSS
  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m]));
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});