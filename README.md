# Ryan Jacobs - Next.js Portfolio

www.ryanjacobs.io

Built with love using Next.js, Tailwind, and Sanity Headless CMS.

## Steps to run the project

### 1. Install dependencies:

```bash
npm install
# or
yarn install
```

### 2. Configure Sanity

- **`Make sure to have installed Sanity globally`**
  Check sanity docs for more info: https://www.sanity.io/docs/cli

- Create a `.env.local` file and enter the following:

1. `NEXT_PUBLIC_SANITY_URL=""`
2. `NEXT_PUBLIC_SANITY_TOKEN=""`
3. `NEXT_PUBLIC_SANITY_LATEST_PROJECTS=""`
4. `NEXT_PUBLIC_SANITY_ALL_PROJECTS=""`

**Note:** You need to create a token in Sanity Studio, and enter it for `NEXT_PUBLIC_SANITY_TOKEN`.

Also, items 3 & 4 are GROQ queries to get data from Sanity. It's up to you to create them.

### 3. Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

#### Happy coding
