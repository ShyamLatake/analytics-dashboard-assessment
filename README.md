# MapUp - Analytics Dashboard Assessment

## Overview

The objective of this assessment is to analyze the provided Electric Vehicle (EV) population data and create a frontend dashboard that visualizes key insights about the dataset. This repository contains the necessary data and instructions for you to demonstrate your analytical and dashboard creation skills. Feel free to use any tech stack you want to create the dashboard.

## Dataset

The Electric Vehicle Population dataset is available in the [Electric Vehicle Population Data (CSV)](./data-to-visualize/Electric_Vehicle_Population_Data.csv) within this repository, for more information about the dataset visit [kaggle dataset](https://www.kaggle.com/datasets/willianoliveiragibin/electric-vehicle-population).

**Note:** We've reduced the dataset in the repository to keep the data size small in the frontend bundle.

## Tasks

### Dashboard Creation:

- Create a frontend dashboard that presents key insights from the dataset.
- Design the dashboard to effectively communicate important metrics and visualizations.
- Include visual representations such as charts, graphs, or tables to showcase trends and relationships in the data.
- Ensure the dashboard is user-friendly and intuitive for exploring the dataset.

### Deployment:

- Deploy your frontend dashboard to a hosting platform of your choice.
- Make sure the dashboard is publicly accessible.

## Evaluation Criteria

Your submission will be evaluated based on:

- **Analytical Depth:** The depth of your analysis and insights derived from the dataset.
- **Dashboard Design:** Clarity, aesthetics, and usability of the frontend dashboard.
- **Insightfulness:** Effectiveness in conveying key insights about electric vehicles.

## Submission Guidelines

- Fork this repository to your GitHub account.
- Complete your analysis and create the frontend dashboard.
- Deploy the dashboard to a hosting platform.
- Update this [README.md](README.md) file with the URL to your live dashboard.
- **Repository Access:** Keep your repository private to avoid visibility by other candidates. Add the following email addresses as collaborators to the repository, these are our internal emails and will be evaluating your assessment:
  - vedantp@mapup.ai
  - ajayap@mapupa.ai
  - divyanshs@mapup.ai
- Finally, please fill out the google form that you received via email to submit the assessment for review.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
For the UI part i used shadcn lib
and for the css part i used tailwind 

