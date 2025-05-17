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
    - Leverages `react-native-web`'s **`role` prop** on `View` and `Text` components to render semantic HTML5 elements (e.g., `section`, `article`, `nav`, `header`, `footer`, `main`, `aside`) for improved accessibility and SEO.

3.  **`app-core` (Shared Core Logic):**

    - A shared library containing the application's core business logic, data fetching (repositories, data sources), domain models, and potentially shared presentation logic (ViewModels, context providers) that might include React Native components.
    - Follows **MVVM (Model-View-ViewModel) + Clean Architecture** principles.
    - Contains the abstract `NavigationService` interface, defining platform-agnostic navigation actions.
    - Contains shared context providers like `AuthProvider` and `NavigationProvider`.
    - Uses **NativeWind** to apply **Tailwind CSS** classes for styling React Native components (if any) that are shared in this package.

4.  **`atomic-library` (Shared UI Components):**
    - A shared library containing reusable, low-level UI components (like `AtButton`, `AtSection`, `AtHeader`) built using **React Native primitives** (`View`, `Text`, `Pressable`) and styled with **Tailwind CSS classes via NativeWind**.
    - These components are designed to be rendered correctly on both native (via React Native) and web (via React Native Web).
    - When designing components intended for web output with semantic meaning, the `role` prop should be utilized within this library (e.g., an `AtSection` component might render a `<View role="section">`).
    - Requires careful attention to the `tailwind.config.js` to ensure theme consistency and accurate `content` paths.

**Key Technologies & Concepts:**

- **Monorepo:** Yarn Workspaces for managing multiple packages.
- **Cross-Platform:** React Native, Expo, Next.js, React Native Web.
- **UI & Styling:** React Native primitives, **NativeWind**, **Tailwind CSS**.
- **Semantic Web Output:** `react-native-web`'s `role` prop for mapping `View` and `Text` to appropriate HTML5 elements.
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

**Semantic HTML with React Native Web's `role` Prop:**

To enhance accessibility and SEO for the web version of the application (`app-next`), React Native Web's `role` prop is utilized on `View` and `Text` components. This allows mapping these React Native primitives to more semantic HTML5 elements.

- **Usage:**

  ```javascript
  import { View, Text } from "react-native";

  // Renders as <nav> on the web
  const NavBar = (props) => <View role="navigation" {...props} />;

  // Renders as <main> on the web
  const MainContent = (props) => <View role="main" {...props} />;

  // Renders as <section> or <article> on the web
  const Section = (props) => <View role="region" {...props} />; // "region" for generic section
  const Article = (props) => <View role="article" {...props} />;

  // Renders as <h1>, <h2> etc. on the web
  const Heading = ({ level = 1, ...props }) => (
    <Text
      accessibilityRole="header"
      aria-level={level}
      role="heading"
      {...props}
    />
  );

  // Renders as <header> on the web
  const PageHeader = (props) => <View role="banner" {...props} />; // "banner" role maps to <header>

  // Renders as <footer> on the web
  const PageFooter = (props) => <View role="contentinfo" {...props} />; // "contentinfo" role maps to <footer>
  ```

- **Benefits:**
  - **Accessibility:** Provides better context for assistive technologies (screen readers).
  - **SEO:** Search engines can better understand the structure and meaning of your web pages.
  - **Maintainability:** Allows you to think semantically even when writing React Native components that will also run on the web.
- **Implementation:** This approach is primarily relevant for components in `atomic-library` or `app-core` that are shared and rendered on the web via `app-next`. The `app-next` package's `react-native-web` setup will handle the translation to appropriate HTML tags. Note the use of `accessibilityRole="header"` and `aria-level` for headings when using `role="heading"` for more precise heading levels. Common roles include `article`, `banner` (for `<header>`), `button`, `complementary` (for `<aside>`), `contentinfo` (for `<footer>`), `form`, `heading` (use with `aria-level`), `label`, `link`, `list`, `listitem`, `main`, `navigation`, `region` (for generic `<section>`), `search`, `switch`, etc.

**What it Achieves:**

- **Code Reusability:** Significantly reduces redundant code by sharing core logic, data handling, UI components (`atomic-library`), and presentation patterns (`app-core`) across mobile and web platforms.
- **Platform-Optimized Experiences:** Leverages the strengths of Expo/React Native for native mobile features and feel, while utilizing Next.js/SSR for a high-performance, SEO-friendly, and semantically structured web experience.
- **Maintainability:** Organizes code logically within the monorepo, making it easier to manage, test, and scale compared to separate codebases.
- **Consistent (but adapted) UI:** Allows for a consistent design language across platforms via the `atomic-library`, while still permitting platform-specific tweaks where necessary.
- **Modern Development Workflow:** Utilizes current, popular frameworks and tooling for building robust applications.

### Build and run

#### Expo apps

- Requires a .env or .env.local file in the apps/app-expo directory.
- Run the following commands from the monoreporoject root

**Install dependencies**

`yarn`

`yarn prebuild` (deletes iOS + Android app directories)

**Run metro + Expo Go**

`yarn expo:dev`

**Run metro + Expo Go + app directly**

`yarn android`

`yarn ios`

`yarn web`

**Local release builds**

`yarn ios-release`

`yarn android-release`

**Local EAS production release build**

The `.easignore` file in the mono repo allows Git to ignore the .env files for general version control but makes them available for local EAS Builds. https://docs.expo.dev/build-reference/easignore/

Install fastlane:

`brew install fastlane`

iOS (.ipa) + Simulator

`eas build -p ios --profile production-simulator --local`

Install .ipa on an iOS Simulator:
_You will get a `.tar.gz` file from the EAS Build. Extract it to find the `.app` file inside._
`xcrun simctl install booted <path_to_YourApp.app>`
_(Or drag and drop the `.app` file onto the booted simulator)_

Android (.apk) + Emulator

`eas build -p android --profile production-emulator --local`

Install .apk on an Android Emulator:

`adb install <path_to_your_app.apk>`
_(Or drag and drop the `.apk` file onto the booted emulator)_

```

**Key Restorations/Corrections in "Build and run":**

1.  **All your original commands and descriptions have been restored.**
2.  **Clarified the iOS EAS Build output:** Explicitly mentioned that `eas build` for iOS simulators produces a `.tar.gz` containing the `.app` file, and it's this `.app` file you install, not an `.ipa`.
3.  **Added drag-and-drop as an installation alternative** for both simulator `.app` and emulator `.apk` files, as it's a common user action.

Everything else, including the new "Semantic HTML" section, remains as previously discussed. This version should now be complete and accurate according to your project's setup and the information you've provided.
```
