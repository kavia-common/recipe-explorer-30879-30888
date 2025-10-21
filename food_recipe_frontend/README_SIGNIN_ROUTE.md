Sign In Route Integration

- Route path: #/sign-in (hash-based routing used to avoid adding router dependencies)
- How to navigate in the running preview:
  1. Start the app: npm start
  2. Open: http://localhost:3000/#/sign-in
     or click the "Go to Sign In" link on the home screen.
- Assets:
  - CSS imported in src/pages/SignIn.jsx via ../../assets/sign-in-11-235.css (which re-imports from project /assets)
  - Image paths remain exactly as generated in the HTML (e.g., /assets/figmaimages/...), so ensure the server serves /assets.
- Logic:
  - Password visibility toggle implemented using useState.
  - Simple email validation on blur and submission.
  - Submit button shows a brief disabled state to simulate processing.
