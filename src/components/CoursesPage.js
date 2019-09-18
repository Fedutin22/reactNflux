import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
function CoursesPage() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		// Get courses from the API.
		// When the call completes, store the array of courses in state

		getCourses().then(_courses => setCourses(_courses));
	}, []);

	return (
		<>
			<h2>CoursesPage</h2>
			<Link className="btn btn-primary" to="/course">
				Add Course
			</Link>
			<CourseList courses={courses} />
		</>
	);
}

export default CoursesPage;
