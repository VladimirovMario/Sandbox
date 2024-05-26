# Testing WebKit on Windows with Visual Studio Code and Playwright-CT in React

This README provides step-by-step instructions on how to test a WebKit browser on a Windows machine using Visual Studio Code and Playwright-CT in a React application.

## Prerequisites

Before getting started, ensure you have the following installed on your Windows machine:

- Node.js and npm (Node Package Manager)
- Visual Studio Code (or any code editor of your choice)
- Git (optional, for version control)

## Setup

1. Clone or download this React application from the repository.

2. Navigate to the project directory in your terminal.

3. Install dependencies by running:

   ```
   npm install
   ```

4. Initialize Playwright-CT by running the following command in the terminal and follow the instructions:

   ```
   npm init playwright@latest -- --ct
   ```

5. Install @playwright/test by running:

   ```
   npm install -D @playwright/test@latest
   ```

   ```markdown
   # Also download new browser binaries and their dependencies:

   npx playwright install --with-deps
   ```

6. Add a test file named `browser.test.js` to the project with the following content:

   ```javascript
   import { test } from "@playwright/test";

   test("should first", async ({ page }) => {
     await page.goto("http://localhost:3000");

     await page.pause();
   });
   ```

7. Add the following script to your `package.json` file:

   ```json
   "scripts": {
       "test:safari": "npx playwright test --headed --browser=webkit"
   }
   ```

## Testing with Playwright-CT

Now that everything is set up, follow these steps to test your React application using the WebKit browser:

1. Start your React application.

2. Run the following command in the terminal to launch the WebKit browser and run the test:

   ```
   npm run test:safari
   ```

3. Playwright-CT will open the WebKit browser and navigate to your React application. It will then pause execution, allowing you to manually inspect the layout and behavior.

4. Review the test results in the terminal.

## Running the Example Project

This example project is already set up with all dependencies installed. Follow these steps to run the project:

1. Open a terminal and navigate to the client folder:

   ```
   cd client
   npm start
   ```

2. Open another terminal and navigate to the server folder:

   ```
   cd server
   node server
   ```

3. Open a third terminal and navigate to the client folder again:

   ```
   cd client
   npm run test:safari
   ```

This will launch the WebKit browser and run the tests on your React application.

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Visual Studio Code Documentation](https://code.visualstudio.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## Troubleshooting

- If you encounter any issues during setup or testing, refer to the documentation provided by Playwright, Visual Studio Code, or React. You can also search for solutions online or ask for help on relevant forums or communities.

<!-- https://kailash-pathak.medium.com/lets-get-start-playwright-as-component-testing-4c82ffaadb7c -->
<!-- https://www.youtube.com/watch?v=pRpsi1Z5YY0 -->
