"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import CodeBlock from "@/components/code-block";
import Footer from "@/components/footer";
import Image from "next/image";
import propDrillingImage from "@/public/images-port/prop-drilling.png";
const SingleBlog = () => {
  const params = useParams();
  const slug = params.slug;
  console.log("Blog Slug:", slug);

  return (
    <section className="">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4">
        {/* Blog Title */}
        <h1 className="text-3xl font-bold text-center mt-6">
          A Beginner&apos;s Guide to State Management in React
        </h1>

        {/* Introduction */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p className="py-2">
            If you’re new to React, you might have heard the term{" "}
            <strong>{"state management"}</strong> but aren&apos;t sure what it
            means or why it’s important. In simple terms, state refers to the
            data or information that determines how a component behaves and
            renders on the screen.
          </p>
          <p className="py-2">
            React components can be dynamic, meaning they update when data
            changes. However, managing that data effectively is key to building
            smooth and scalable applications. This guide will walk you through
            the fundamentals of React state, why it matters, common challenges,
            and different ways to manage it efficiently.
          </p>
        </div>

        {/* What is State? */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">What is State in React?</h2>
          <p className="py-2">
            In React, <strong>state</strong> is like a component’s memory. It
            stores values that can change over time. Unlike regular JavaScript
            variables, when state updates, React re-renders the component to
            reflect those changes.
          </p>
          <p className="py-2">
            Let’s take an example of a counter app. When you click a button to
            increase the count, the number displayed updates. That’s because the
            component’s state changes and triggers a re-render.
          </p>

          {/* Code Example: useState */}
          <CodeBlock
            code={`import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // State initialized with 0

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};`}
            language="javascript"
          />
        </div>

        {/* Why is State Management Important? */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">
            Why is State Management Important?
          </h2>
          <p className="py-2">
            State management ensures that your application updates correctly and
            efficiently when data changes. Without it, handling user
            interactions or dynamic content would be messy and unorganized.
          </p>
          <p className="py-2">Here’s why state management matters:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Consistency:</strong> Keeps the UI and data in sync.
            </li>
            <li>
              <strong>Scalability:</strong> Makes large applications easier to
              manage.
            </li>
            <li>
              <strong>Performance:</strong> Prevents unnecessary re-renders,
              keeping the app fast.
            </li>
            <li>
              <strong>Predictability:</strong> Helps in debugging by making
              state changes trackable.
            </li>
          </ul>
        </div>

        {/* Challenges in State Management */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">
            Challenges in State Management
          </h2>
          <p className="py-2">
            Managing state in small apps is easy, but as your application grows,
            you might face challenges such as:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Prop Drilling:</strong> Passing state through multiple
              levels of components makes the code harder to manage.
              <div className="mx-auto flex items-center justify-center p-4">
                <Image
                  src={propDrillingImage}
                  alt="Prop Drilling"
                  height={150}
                  width={600}
                />
              </div>
            </li>
            <li>
              <strong>Performance Issues:</strong> Unnecessary updates can slow
              down the app.
            </li>
            <li>
              <strong>Complexity:</strong> Managing global state across multiple
              components becomes tricky.
            </li>
          </ul>
        </div>

        {/* Different Approaches to State Management */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">
            Different Ways to Manage State in React
          </h2>
          <p className="py-2">
            Depending on the size of your application, React offers different
            state management techniques:
          </p>

          {/* 1. Local State */}
          <h3 className="font-semibold mt-4">
            1. Local State (useState, useReducer)
          </h3>
          <p className="py-2">
            Local state is confined to a single component and managed using{" "}
            <code>useState</code> or <code>useReducer</code>.
          </p>

          <CodeBlock
            code={`import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>{isOn ? "ON" : "OFF"}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
};`}
            language="javascript"
          />

          {/* 2. Global State */}
          <h3 className="font-semibold mt-4">
            2. Global State (Context API, Redux)
          </h3>
          <p className="py-2">
            When multiple components need to share the same state, you can use
            the Context API or Redux.
          </p>

          {/* Context API Example */}
          <h4 className="font-semibold mt-2">Using Context API</h4>
          <CodeBlock
            code={`import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ChildComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ChildComponent />
  </ThemeProvider>
);`}
            language="javascript"
          />

          {/* Redux Example */}
          <h4 className="font-semibold mt-2">Using Redux</h4>
          <CodeBlock
            code={`import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT": return { count: state.count + 1 };
    case "DECREMENT": return { count: state.count - 1 };
    default: return state;
  }
};

const store = createStore(reducer);

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);`}
            language="javascript"
          />
        </div>

        {/* Conclusion */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Conclusion</h2>
          <p>
            Mastering state management is crucial for building dynamic and
            scalable React applications. Start with <code>useState</code> for
            simple cases and explore Context API or Redux for larger apps.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SingleBlog;
