"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import CodeBlock from '@/components/code-block';

const SingleBlog = () => {
  const params = useParams();
  const slug = params.slug;
  console.log(slug, params)
  return (
    <section className='--font-'>
      <Navbar />
      <div className="max-w-4xl mx-auto h-screen">
        <h1 className='text-2xl text-center font-semibold'>
          A Guide to State Management in React
        </h1>

        <div className="">

          <h2 className='text-lg font-semibold pt-4'>What is a state in react?</h2>
          <p className='py-2'>Components often need to change what&apos;s on the screen in response to user interactions. For example, typing into a form should update the input field, and clicking &quot;buy&quot; should add a product to the shopping cart. Components need to remember things like the current input value and the shopping cart contents. In React, this kind of component memory is called state.

            In simple terms, a component&apos;s state is data that can change throughout the component&apos;s lifetime.</p>

          <p className='py-2'>
            State management is a fundamental concept in React that ensures smooth user interactions and dynamic UI updates. Whether you&apos;re handling form inputs, toggling themes, or managing complex app-wide data, having a structured approach to state management is crucial. This guide will take you through everything you need to know about handling state effectively in React. </p>

        </div>

        <div className="">

          <h2 className='text-lg font-semibold pt-4'>Why state management is important?</h2>
          <p>
            State management is crucial for preserving current states, handling state changes when new events occur, and passing states between parent and child components. While this isn&apos;t particularly challenging for small-scale applications, it can become complex in larger applications.
          </p>

          <ol className='list-decimal list-inside py-2'>
            <li> <span className='font-semibold'>Scalability and Organization: </span>State management streamlines data handling and makes applications easier to maintain while improving overall organization and scalability.</li>
            <li> <span className='font-semibold'>Performance: </span>Efficient state management enhances performance by reducing unnecessary re-renders.</li>
            <li><span className='font-semibold'>Data Sharing: </span>It enables smooth data sharing between components while preventing inconsistencies and discrepancies. </li>
            <li>
              <span className='font-semibold'>Predictable and Consistent State Updates:</span> Libraries like Redux provide strict rules for state updates, ensuring predictable and consistent state changes.
            </li>
          </ol>
        </div>

        <div className="py-6">
          <h2 className='text-lg font-semibold'>State management challenges</h2>

          <p className='py-2'>
            as rightly said by uncle ben “with great powers comes great responsibilities”. here a few issues faced by state management
          </p>

          <ol className='list-decimal list-inside py-2'>
            <li> <span className='font-semibold'>Prop Drilling:</span> When in react the state passed down to multiple layers of nested components. This makes the code difficult to maintain, scale and understand when components grows significantly.</li>
            <li> <span className='font-semibold'>Performance Issues:</span> Inefficient state management often leads to performance bottle neck, unnecessary re-renders and a sluggish user experience. as the application grows state management becomes more complex.
            </li>
          </ol>
        </div>

        <div className="py-6">
          <h2 className='text-lg font-semibold'>Different approaches to manage state in react</h2>

          <span className='font-semibold'>1. Local State:</span> By local state we mean state associated at a individual component level, useState and useReducer hooks are used to manage the state at this level.
          <div className='my-2'>

            <CodeBlock code={`// use state 
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
    </form>
  );
};`} language='javascript' />

            <CodeBlock code={`// use reducer 
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};`} language='javascript' />


            <div className="py-4">
              <p className='py-2 font-semibold text-lg'>2. Global State Management</p>
              <p>For managing state across multiple components, React provides built-in and third-party solutions:</p>

              <div className="p-6">
                <p> <span className='py-2 font-semibold '>1. Context API (built in React Solution): </span>
                  The Context API allows you to share state across components without prop drilling. It provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
                <CodeBlock code={`import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe", age: 25 });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const Profile = () => {
  const { user } = useContext(UserContext);
  return <h2>User: {user.name}</h2>;
};

const App = () => (
  <UserProvider>
    <Profile />
  </UserProvider>
);`} language='javascript' />
              </div>

              <div className="p-6">
                <p className='py-2 font-semibold'>2. Redux (Popular third-party state management library): </p>
                Redux provides a centralized store and follows a strict unidirectional data flow, ensuring predictable state updates.                <CodeBlock code={`import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

const initialState = { count: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
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
);`} language='javascript' />
              </div>

              <div className="">
                <p className='py-2 font-semibold'>When Should You Use Global State?</p>

                <div>
                  <p>                  While local state is sufficient for most cases, global state becomes necessary when:
                  </p>
                  <ul className='list-disc py-2 px-4'>
                    <li>
                      Multiple components need access to the same state (e.g., authentication status, theme settings).
                    </li>
                    <li>
                      Prop drilling becomes unmanageable.
                    </li>
                    <li>
                      State logic is complex and needs to be reusable across different parts of the app.
                    </li>
                  </ul>
                </div>
              </div>


            </div>
          </div>

        </div>


        <div className="py-6">
          <h2 className='text-lg font-semibold'>Conclusion</h2>
          <p>
            State management in React is an essential concept that ensures smooth user interactions, consistent UI updates, and maintainable applications. While local state (useState, useReducer) is sufficient for small applications, and larger applications benefit from global state management solutions like the Context API or Redux. </p>

          <p>Understanding when to use each approach depends on the scale and complexity of your application. You can build efficient, scalable, and high-performing React applications by mastering state management!
          </p>
        </div>
      </div>
    </section>
  )
}

const page = () => {

  return (
    <SingleBlog />
  )
}

export default page