**Project Overview:**

This project is a cross-platform application built using a **monorepo** structure (managed with **Yarn Workspaces**). The primary goal is to create a consistent user experience across **iOS, Android, and the Web**, while maximizing code reuse for core logic, data handling, and UI components. It consists of native mobile apps built with Expo/React Native and a modern web application built with Next.js, specifically targeting Server-Side Rendering (SSR).

**Architecture & Packages:**

1.  **`app-expo` (Expo / React Native App):**

    - The native mobile application for iOS and Android.
    - Uses **Expo** for the development workflow, build services, and access to native capabilities.
    - Employs **Expo Router** for file-based routing and navigation (including tab bars and nested stacks).
    - Renders UI components shared from `atomic-library` and `app-core`.
    - Uses **NativeWind** to apply **Tailwind CSS** classes for styling.
    - Requires `<SafeAreaProvider>` for handling device notches/safe areas.

2.  **`app-next` (Next.js Web App):**

    - The web application targeting modern browsers.
    - Built with **Next.js (App Router)**, focusing on leveraging **Server-Side Rendering (SSR)** for performance and SEO.
    - Uses **Turbopack** (during development, configured via `next.config.ts`) or Webpack (if `--turbo` is omitted) as the bundler.
    - Renders shared UI components by utilizing **`react-native-web`**. This requires specific configuration in `next.config.ts` (`resolveAlias` for `react-native` and potentially others like `react-native-svg`; `transpilePackages`; `nohoist` in root `package.json`) to bridge the gap between native component expectations and web rendering.
    - Uses **NativeWind** to apply **Tailwind CSS** classes for styling.

3.  **`app-core` (Shared Core Logic):**

    - A shared library containing the application's core business logic, data fetching (repositories, data sources), domain models, and potentially shared presentation logic (ViewModels, context providers) that might include React Native components.
    - Follows **MVVM (Model-View-ViewModel) + Clean Architecture** principles.
    - Contains the abstract `NavigationService` interface, defining platform-agnostic navigation actions.
    - Contains shared context providers like `AuthProvider` and `NavigationProvider`.
    - Uses **NativeWind** to apply **Tailwind CSS** classes for styling React Native components (if any) that are shared in this package.

4.  **`atomic-library` (Shared UI Components):**

    - A shared library containing reusable, low-level UI components (like `AtButton`) built using **React Native primitives** (`View`, `Text`, `Pressable`) and styled with **Tailwind CSS classes via NativeWind**.
    - These components are designed to be rendered correctly on both native (via React Native) and web (via React Native Web). Requires careful attention to the `tailwind.config.js` to ensure theme consistency and accurate `content` paths.

**Key Technologies & Concepts:**

- **Monorepo:** Yarn Workspaces for managing multiple packages.
- **Cross-Platform:** React Native, Expo, Next.js, React Native Web.
- **UI & Styling:** React Native primitives, **NativeWind**, **Tailwind CSS**.
- **Routing:** Expo Router (mobile), Next.js App Router (web).
- **Navigation Abstraction:** A custom `NavigationService` interface in `app-core` with platform-specific implementations (`useMobileNavigationHandler`, `useWebNavigationHandler`) in each app using the respective router's hooks (`useRouter` from expo-router / next/navigation).
- **State Management:** React Context (`AuthProvider`, `NavigationProvider`, potentially others).
- **Architecture:** MVVM + Clean Architecture in `app-core`.
- **Language:** TypeScript.
- **Build/Bundling:** Expo CLI (Metro), Next.js CLI (Turbopack/Webpack).
- **Deployment (Web):** Vercel.

**Key Changes and Considerations with NativeWind/Tailwind CSS:**

- **`tailwind.config.js`:** A central `tailwind.config.js` file at the root of the monorepo defines the shared Tailwind CSS configuration. It's crucial to maintain accurate `content` paths in this file to ensure that _all_ components in _all_ packages are correctly styled.
- **NativeWind:** NativeWind is used throughout the monorepo.
- **CSS Files and `input.css`:** You should no longer be using the `input.css` files in NativeWind v4, and the `tailwind` script should not be used either.
- **Web Implementation:** The `app-next` project relies on React Native Web and Nativewind for cross-platform code sharing.
- **Dynamic Styles:** For dynamic styles that cannot be directly expressed with Tailwind CSS classes (e.g., styles that depend on runtime values), you can use inline styles in components.
- **Theme Consistency:** It's essential to maintain theme consistency between your React Native and web projects. You can customize your Tailwind CSS theme to match your existing design tokens.
- **`.babelrc.js`:** With NativeWind v4, special babel configuration is no longer required.

**What it Achieves:**

- **Code Reusability:** Significantly reduces redundant code by sharing core logic, data handling, UI components (`atomic-library`), and presentation patterns (`app-core`) across mobile and web platforms.
- **Platform-Optimized Experiences:** Leverages the strengths of Expo/React Native for native mobile features and feel, while utilizing Next.js/SSR for a high-performance, SEO-friendly web experience.
- **Maintainability:** Organizes code logically within the monorepo, making it easier to manage, test, and scale compared to separate codebases.
- **Consistent (but adapted) UI:** Allows for a consistent design language across platforms via the `atomic-library`, while still permitting platform-specific tweaks where necessary.
- **Modern Development Workflow:** Utilizes current, popular frameworks and tooling for building robust applications.
