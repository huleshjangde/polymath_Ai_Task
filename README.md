## Project Description

The project is a web application built using Next.js, a React framework for server-side rendering. It allows users to view and select products from a list and save their selections to a Firebase database. The project also includes Google login integration for authentication.

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

- Google Login Integration: The application allows users to log in using their Google accounts. It utilizes the `react-google-login` package to handle the login process.

- Product Selection: Users can select individual products by checking the corresponding checkboxes. They can also use the "Select All" button to select all available products or deselect them if already selected.

- Saving Selected Products: The selected products are saved to a Firebase database using a POST request. The `fetch` function is used to send the data to the Firebase API.

- Toast Notifications: Toast notifications from the `react-toastify` package are displayed to provide feedback to the user when data is successfully saved or when an error occurs.

- Logout Functionality: The application includes a logout button that clears the login cookies and redirects the user to the login page.

## Assumptions

The code assumes the following:

1. Google Sign-In API: The setup and configuration of the Google Sign-In API have been completed outside of this codebase.

2. React Context and API Data: The code assumes that the `AppContext` is correctly implemented and provides the `apiData` array containing the products fetched from an API.

3. Firebase Database Integration: It is assumed that the Firebase database integration is set up correctly and that the provided Firebase API endpoint (`https://my-internship-11782-default-rtdb.firebaseio.com/users.json`) is valid.

4. UI Styling: The code assumes that the required UI styling classes and components, such as `bg`, `px`, `rounded`, and `text`, are defined and imported correctly from the respective libraries or CSS files.

Please ensure that these assumptions are met and make any necessary adjustments to the code and configurations to fit your specific requirements.

## Learn More

To learn more about Next.js, refer to the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) for additional information and contribute to the project.

## Deployment

The easiest way to deploy a Next.js app is by using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Please refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details on deploying your application.

---

This README file provides an overview of the Polymath AI Task project, highlights its features and assumptions, and offers instructions for running and deploying the
