# Course Registration

## Project features

This is a web application project for selecting courses from fake data. Some features are:

1._Fetching and Displaying Course Data_: The project fetches course data from an external JSON file using the fetch API and the useEffect hook. This feature ensures that the latest course information is available to users. The fetched data is then displayed in the CourseList component, providing users with a list of available courses to choose from.

2._Course Selection and Credit Limit Checking_: One of the primary features of the project is the ability for users to select courses for registration. The handleSelectBtnClick function allows users to add courses to their selected course list. However, it also includes a credit limit check to ensure that the total credits of selected courses do not exceed 20. If a user attempts to select more courses than the credit limit allows, a toast notification is displayed to inform them of this constraint.

3. _Toast Notifications for User Feedback_: The project utilizes the react-toastify library to provide real-time feedback to users. Toast notifications are displayed to inform users of important events or errors. For example, when a user attempts to select a course that is already in their selected course list or exceeds the credit limit, a toast notification is shown to alert them to the issue. This feature enhances the user experience by providing clear and immediate feedback.

## How I managed the state in my assignment project:

1. _Course Data State (data)_: The data state variable is used to store the course data fetched from an external JSON file. It is initialized as an empty array using the useState([]).It will then passed down as a prop to child and passed further
   via prop drilling to a component which is responsible for show card.

2. _Selected Courses State (selectedCourse)_: The selectedCourse state variable is used to keep track of the courses that have been selected by the user. It is initialized as an empty array.This state contains unique course. No dupicate selection are found in this state.

3. _Handling Toast Messages (handleToast)_: The handleToast function is defined to display toast notifications using the react-toastify library. It accepts a message as a parameter and shows an error toast with the specified message.

4. _Course Selection Logic (handleSelectBtnClick)_: The handleSelectBtnClick function is responsible for managing the course selection process. It checks whether the selected course is already in the selectedCourse array. If it's not found, it proceeds with the selection process.

Before adding a course to the selected courses list, it calculates the sum of credits of the currently selected courses (selectedCourse). It also calculates the next sum if the new course is added to ensure that the total credits do not exceed a limit (in this case, 20 credits).

If the next sum exceeds the credit limit, it displays a toast message to inform the user that they can't take more than 20 credits. Otherwise, it adds the selected course to the selectedCourse array using setSelectedCourse.

5. _Fetching Data with useEffect_: The useEffect hook is used to fetch the course data from an external JSON file when the component is mounted. This ensures that the data is loaded only once when the component is initially rendered. The fetched data is then stored in the data state variable using setData.
