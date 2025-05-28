import React from 'react';

const DesignPatternsPage = () => {
  return (
    <div>
        <header>
          <h1>React Design Patterns</h1>
          <p>
            Key concepts and patterns for building robust and maintainable React applications.
          </p>
        </header>

        <div>
          <section className="info-section">
            <h2>1. Single Responsibility Principle (SRP)</h2>
            <div>
              <p>
                This principle emphasizes creating React components with a single, well-defined responsibility.
                By doing so, components become more focused, easier to understand, test, and maintain.
                The video illustrates this by showing a <code>Homepage</code> component responsible for managing
                post states and data fetching, while delegating the task of rendering posts to a
                <code>PostFeed</code> component, and individual post rendering to a <code>PostCard</code> component.
                This separation of concerns leads to a cleaner and more modular codebase.
              </p>
            </div>
          </section>

          <section className="info-section">
            <h2>2. Page Components, Feature Components, and UI Components</h2>
            <div>
              <p>
                The video distinguishes between three primary types of components:
              </p>
              <ul>
                <li>
                  <strong>Page Components:</strong> Such as <code>SignInPage</code>, these components are responsible for
                  the logic specific to a particular page or route. This often includes fetching data required for the
                  page, handling page-level state, or tracking page views.
                </li>
                <li>
                  <strong>Feature Components:</strong> Components like <code>SignInForm</code> encapsulate a specific piece of
                  functionality (e.g., user authentication). They contain the logic directly related to that feature,
                  such as form validation, state management for the feature, and API interactions.
                </li>
                <li>
                  <strong>UI Components:</strong> These are presentational components like <code>Card</code> or <code>TextInput</code>.
                  Their sole responsibility is to render visual elements. They are typically stateless, receive data via props,
                  and do not contain business logic.
                </li>
              </ul>
            </div>
          </section>
          <section className="info-section">
            <h2>3. Compound Components</h2>
            <div>
              <p>
                Compound components are a pattern where a parent component works implicitly with its child
                sub-components to manage shared state and logic. This is often achieved using React's Context API.
                The video demonstrates this with a <code>Select</code> component and its <code>Select.Option</code>
                sub-components. The context ensures that <code>Option</code> components only function correctly
                when nested within a <code>Select</code> parent, allowing for a more expressive and cohesive API
                for complex UI elements.
              </p>
            </div>
          </section>
          <section className="info-section">
            <h2>4. Extracting Logic into Hooks</h2>
            <div>
              <p>
                This pattern involves extracting component logic, even if it's not reused elsewhere, into custom React Hooks.
                Doing so makes the original components smaller, cleaner, and easier to understand and test.
                The focus of the component shifts more towards presentation, while the hook encapsulates the behavior.
                The video shows an example where logic from the <code>SignInPage</code> component (like <code>useEffect</code> for
                data fetching or side effects) is moved into a custom hook named <code>useSignInPage</code>.
              </p>
            </div>
          </section>
        </div>

      <footer>
       
      </footer>
    </div>
  );
};

export default DesignPatternsPage;