import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  layout('./layouts/app-layout.tsx', [
    ...prefix('/', [
      index('./routes/home.tsx'),
      route('about', './routes/about.tsx'),
      route('contact-us', 'routes/contact-us.tsx'),

      ...prefix('countries', [
        index('./routes/countries.tsx'),
        route(':countryName', 'routes/country.tsx'),
      ]),

      ...prefix('blogs', [
        index('./routes/blogs.tsx'),
        route(':blogId', 'routes/blog.tsx'),
        route('new', 'routes/new-blog.tsx'),
        route('edit/:blogId', 'routes/edit-blog.tsx'),
      ]),

      ...prefix('recipes', [
        index('./routes/recipes.tsx'),
        route(':recipeId', 'routes/recipe.tsx'),
      ]),
    ]),
  ]),

  layout('./layouts/admin-layout.tsx', [
    ...prefix('admin', [
      route('dashboard', 'routes/admin/dashboard-home.tsx'),
      route('settings', 'routes/admin/settings.tsx'),
      route('projects', 'routes/admin/projects.tsx'),
      route('users', 'routes/admin/users.tsx'),
    ]),
  ]),

  layout('./layouts/auth-layout.tsx', [
    ...prefix('auth', [
      route('sign-in', 'routes/auth/sign-in.tsx'),
      route('sign-up', 'routes/auth/sign-up.tsx'),
    ]),
  ]),
] satisfies RouteConfig;
