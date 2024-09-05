# Next.js + Supabase SaaS Boilerplate

This boilerplate provides a solid foundation for building modern SaaS applications using Next.js, Supabase, and other powerful technologies.

## Features

- **Next.js 14**: Utilizing the latest features of Next.js for optimal performance and developer experience.
- **Supabase Integration**: For authentication and database management.
- **Stripe Integration**: Ready-to-use payment system for your SaaS.
- **TanStack Query**: For efficient server state management.
- **Tailwind CSS**: For rapid and responsive UI development.
- **Shadcn UI**: Pre-built accessible and customizable UI components.
- **Dark Mode Support**: Built-in theme switching capabilities.
- **SEO Optimized**: Includes a reusable SEO component for better search engine visibility.
- **Responsive Design**: Mobile-first approach ensuring great UX across all devices.
- **TypeScript**: For type-safe code and enhanced developer productivity.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/next-supabase-saas-boilerplate.git
   cd next-supabase-saas-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Supabase and Stripe credentials

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app`: Next.js app router pages and layouts
- `/components`: Reusable React components
- `/lib`: Utility functions and shared logic
- `/public`: Static assets
- `/styles`: Global styles and Tailwind CSS configuration

## Key Components

- `SEO.tsx`: Customizable SEO component for better search engine optimization
- `TypingTitle.tsx`: Animated typing effect for headings
- `ThemeProvider.tsx`: Manages application-wide theming
- `QueryProvider.tsx`: Sets up React Query for the application

## Customization

- Tailwind CSS: Customize the `tailwind.config.js` file to match your brand colors and styling preferences.
- Components: Modify or extend the components in the `/components` directory to fit your specific needs.
- SEO: Update the default metadata in `components/SEO.tsx` to reflect your SaaS details.

## Supabase Setup

To set up Supabase for local development and production:

1. Create a Supabase project at [https://supabase.com](https://supabase.com)
2. Follow the Supabase CLI guide for local development: [Supabase Local Development](https://supabase.com/docs/guides/cli/local-development)
3. Use the provided migration scripts to set up your database schema

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API.
- [Supabase Documentation](https://supabase.com/docs) - Learn about Supabase features and API.
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework.
- [TanStack Query](https://tanstack.com/query/latest/) - Powerful asynchronous state management.
- [Shadcn UI](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
