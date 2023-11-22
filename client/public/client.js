//client/client.js
const API_BASE_URL = 'http://localhost:9000';

let courses = [];

async function populateCourseCheckboxes() {
  const coursesCheckboxContainer = document.getElementById('coursesCheckboxContainer');

  try {
      const response = await fetch(`${API_BASE_URL}/courses/getCourses`);
      const coursesData = await response.json();

      // Clear existing checkboxes
      coursesCheckboxContainer.innerHTML = '';

      // Populate checkboxes for each course
      coursesData.forEach(course => {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.name = 'coursesCheckbox';
          checkbox.value = course._id;

          const label = document.createElement('label');
          label.appendChild(checkbox);
          label.appendChild(document.createTextNode(course.name));

          coursesCheckboxContainer.appendChild(label);
      });
  } catch (error) {
      console.error('Error fetching courses:', error.message);
  }
}


async function addStudent() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const id = document.getElementById('id').value;
  const semester = document.getElementById('semester').value;

  const checkboxes = document.getElementsByName('coursesCheckbox');
  const selectedCourses = [];

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const label = checkbox.parentElement; // Get the label element
      selectedCourses.push({
        id: checkbox.value,
        name: label.textContent.trim(), // Use textContent of the label
      });
    }
  });
  

  const response = await fetch(`${API_BASE_URL}/students/addStudent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      id,
      semester,
      courses: selectedCourses,
    }),
  });

  const result = await response.json();
  console.log(result); // You can handle the response as needed

  // Reset the form after adding a student
  document.getElementById('addStudentForm').reset();
}



// Populate the course checkboxes when the page loads
populateCourseCheckboxes();
