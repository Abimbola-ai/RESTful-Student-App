// client/addCourse.js
const API_BASE_URL = 'http://localhost:9000';

async function addCourse() {
  const courseName = document.getElementById('courseName').value;
  const courseCode = document.getElementById('courseCode').value;

  const response = await fetch(`${API_BASE_URL}/courses/addCourse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: courseName,
      code: courseCode,
    }),
  });

  const result = await response.json();
  console.log(result); // You can handle the response as needed

  // Reset the form after adding a course
  document.getElementById('addCourseForm').reset();
}
