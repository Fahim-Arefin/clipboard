<h1 align="center">Course Registration</h1>

<p align="center">Welcome to the Course Registration web application project!</p>

## Table of Contents
- [Project Features](#project-features)
- [State Management](#state-management)

## 🚀 Project Features

This web application allows users to select courses from a database of fake course data. Some of its standout features include:

1. **Fetching and Displaying Course Data**
   - The project seamlessly fetches course data from an external JSON file using the fetch API and the useEffect hook.
   - This ensures that users always have access to the most up-to-date course information.
   - The fetched data is elegantly presented in the CourseList component, providing users with a user-friendly list of available courses to choose from.

2. **Course Selection and Credit Limit Checking**
   - The project empowers users to select courses for registration with a user-friendly interface.
   - The `handleSelectBtnClick` function allows users to add courses to their selected course list.
   - It also performs a credit limit check to ensure that the total credits of selected courses do not exceed 20.
   - If a user attempts to select more courses than the credit limit allows, a visually appealing toast notification is displayed to gently inform them of this constraint.

3. **Toast Notifications for User Feedback**
   - The project leverages the power of the react-toastify library to provide real-time feedback to users.
   - Toast notifications elegantly pop up to inform users about important events or errors.
   - For instance, when a user tries to select a course that's already in their selected course list or exceeds the credit limit, a stylish toast notification pops up to gracefully alert them to the issue.
   - This feature enhances the overall user experience by providing clear and immediate feedback.

## 🧐 State Management

The state management in this project is carefully crafted to provide a seamless user experience. Here's how we manage state:

1. **Course Data State (data)**
   - The `data` state variable is skillfully employed to store the course data fetched from an external JSON file.
   - It is thoughtfully initialized as an empty array using the `useState([])` hook.
   - This data is then meticulously passed down as a prop to child components and further via prop drilling to components responsible for displaying course cards.

2. **Selected Courses State (selectedCourse)**
   - The `selectedCourse` state variable is meticulously used to keep track of the courses that have been selected by the user.
   - It is gracefully initialized as an empty array.
   - This state effortlessly contains only unique courses, ensuring that no duplicate selections are found.

3. **Handling Toast Messages (handleToast)**
   - The `handleToast` function is stylishly defined to display toast notifications using the react-toastify library.
   - It accepts a message as a parameter and shows an error toast with the specified message.
   - The appearance and animations of these toast notifications provide an aesthetically pleasing user experience.

4. **Course Selection Logic (handleSelectBtnClick)**
   - The `handleSelectBtnClick` function is expertly responsible for managing the course selection process.
   - It skillfully checks whether the selected course is already in the
