# TDL Mindset Assessment

This is a Next.js application that implements Dr. Carol Dweck's Mindset assessment.

## Getting Started

### Prerequisites

Ensure you have Node.js installed (v18+ recommended).

### Installation

1.  Clone the repository or unzip the project.
2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The output will be in the `.next` folder. You can then start the production server with:

```bash
npm start
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

-   `app/`: Contains the main application code (Next.js App Router).
    -   `page.tsx`: The main page component which handles the entire assessment flow (About -> Quiz -> Results -> References).
    -   `globals.css`: Global styles and Tailwind CSS theme configuration (TDL colors).
    -   `layout.tsx`: Root layout with font configuration (Inter).
-   `lib/`: Utility functions and static data.
    -   `mindset.ts`: Contains the quiz questions, answer options, and scoring logic.

## Ignored Files

The `node_modules` directory is correctly ignored in `.gitignore`, ensuring it is not included in the repository. When sharing the project, you can simply zip the root folder (excluding `node_modules`, `.next`, and `.git` if preferred) and the recipient can run `npm install` to restore dependencies.
