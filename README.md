# Polymath AI Task

This repository contains the code for the Polymath AI Task project.

## Project Description

The project is a web application built using Next.js, a React framework for server-side rendering. It allows users to view and select products from a list and save their selections to a Firebase database. The project also includes Firebase Google Authentication for user login.

## Getting Started

To run the development server, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/polymath-ai-task.git
   ```

2. Navigate to the project directory:

   ```bash
   cd polymath-ai-task
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```


   The application will be accessible at [http://localhost:3000](http://localhost:3000) in your browser.

## Code Features

- Firebase Google Authentication: The application utilizes Firebase Authentication for user login using Google accounts. Users can log in using their Google credentials, and their login state is managed by Firebase.

- Product Selection: Users can select individual products by checking the corresponding checkboxes. They can also use the "Select All" button to select all available products or deselect them if already selected.

- Saving Selected Products: The selected products are saved to a Firebase database using a POST request. The `fetch` function is used to send the data to the Firebase API.

- Toast Notifications: Toast notifications from the `react-toastify` package are displayed to provide feedback to the user when data is successfully saved or when an error occurs.

- Logout Functionality: The application includes a logout button that signs the user out from Firebase Authentication and redirects them to the login page.

- Tailwind CSS: The project utilizes Tailwind CSS for styling, providing a responsive design that adapts to different screen sizes and devices.

## Assumptions

1. Firebase Configuration: This includes adding the Firebase configuration object in the appropriate file and enabling Google Authentication in the Firebase console.

2. React useContext and API Data: implemented and provides the `apiData` array containing the products fetched from an API.

3. Firebase Realtime Database Integration: the provided Firebase API endpoint (`https://my-internship-11782-default-rtdb.firebaseio.com/users.json`) is valid.

4. UI Styling: UI styling classes and components from Tailwind CSS .

Please ensure that these assumptions are met and make any necessary adjustments to the code and configurations to fit your specific requirements.

## Learn More

To learn more about Next.js, refer to the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) for additional information and contribute to the project.

## Deployment

The easiest way to deploy a Next.js app is by using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Please refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details on deploying your application.

Live Host
The live hosted version of the application can be accessed at [check](https://polymath-ai-task-huleshjangde.vercel.app)
