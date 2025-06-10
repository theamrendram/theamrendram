import BlogMeta from "@/components/blog-meta";
import CodeBlock from "@/components/code-block";
import { Dock } from "@/components/dock";
import Footer from "@/components/footer";
import { Index } from "@/components/index";
import Terminology from "@/components/terminologies";
const tocItems = [
  { id: "intro", text: "Introduction", level: 1 },
  { id: "setup", text: "why it is important to learn hooks", level: 2 },
  { id: "install", text: "basics of hooks", level: 3 },
  { id: "use-state", text: "useState Hook", level: 4 },
  { id: "use-effect", text: "useEffect Hook", level: 5 },
  { id: "use-context", text: "useContext Hook", level: 6 },
  { id: "use-ref  ", text: "useRef Hook", level: 6 },
];

import reactHooks from "@/public/blog/react-hooks.png";

function Page() {
  return (
    <section>
      <div className="min-h-screen">
        <div className="p-8 min-h-screen max-w-4xl mx-auto">
          <h1 className="font-bold text-3xl text-center mb-6">
            React Hook Interview Preparation
          </h1>
          <BlogMeta
            author="Kumar Amrendram"
            date="April 26, 2025"
            readingTime="15 min read"
            tags={["JavaScript", "Promises"]}
            thumbnail={reactHooks}
          />
          <aside className="">
            <Index contents={tocItems} />
          </aside>
          {/* Introduction */}
          <div className="py-4">
            <p className="font-bold text-xl mb-2">Introduction</p>
            <p>
              React is one of the most popular — if not the most
              popular—frontend libraries. To use it effectively, mastering React
              hooks is essential. In this blog, we&apos;ll explore the four most
              commonly used hooks:
              <code> useState</code>, <code>useEffect</code>,{" "}
              <code>useContext</code>, and
              <code> useRef</code>.
            </p>
            <p>
              Learning how to use these hooks effectively will not only help you
              become a better React developer but also give you an edge in
              frontend interviews, where hooks are among the most frequently
              asked topics.
            </p>
          </div>

          {/*  */}
          <div className="">
            <p>
              Let&apos;s get started with our one and only <code>useState</code>{" "}
              Hook.
            </p>
          </div>

          {/* Use state hook */}
          <div className="">
            <h3 className="text-lg font-semibold py-2">1. useState</h3>
            <p>
              <code>useState()</code> hook is the most used hook in any react
              application. It&apos;s primary purpose is to hold value and
              trigger render when the value is changed.
            </p>
            <div>
              <p className="text-md font-semibold py-2 text-gray-800 dark:text-gray-100">
                Syntax
              </p>

              <div className="space-y-2">
                <pre className="bg-gray-100 dark:bg-gray-800 p-2 font-medium font-mono text-gray-800 dark:text-white rounded overflow-x-auto">
                  <code>
                    <span className="text-green-700 dark:text-green-400">
                      const
                    </span>{" "}
                    [variable, doSomethingToVariable] ={" "}
                    <span className="text-green-700 dark:text-green-400">
                      useState
                    </span>
                    (initialValue)
                  </code>
                </pre>

                <div>
                  <p className="text-md text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">
                      variable:
                    </strong>{" "}
                    It is the const variable.
                  </p>
                  <p className="text-md text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">
                      doSomethingToVariable:
                    </strong>{" "}
                    It is the function to manipulate the value of{" "}
                    <code className="text-sm text-blue-700 dark:text-blue-300">
                      variable
                    </code>
                    . The best practice is to name function with &quot;set&quot;
                    prefix followed by variable name ie. &quot;setVariable&quot;
                  </p>
                  <p className="text-md text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">
                      initialValue:
                    </strong>
                    The initial value of the{" "}
                    <code className="text-sm text-blue-700 dark:text-blue-300">
                      variable
                    </code>
                    .
                  </p>
                </div>

                <div>
                  <p className="text-md font-semibold py-2 text-gray-800 dark:text-gray-100">
                    Usage
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                    <li>Adding state to a component</li>
                    <li>Updating the state based on the previous state</li>
                    <li>Persisting state across re-renders</li>
                    <li>Updating arrays or objects within the state</li>
                  </ul>
                </div>

                <CodeBlock
                  code={`import { useState } from "react";

const UseStateExample = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue(prev => prev + 1)}>Increment</button>
      <button onClick={() => setValue(prev => prev - 1)}>Decrement</button>
    </div>
  );
};

export default UseStateExample;
`}
                />

                <div>
                  <p className="text-gray-800 dark:text-gray-200">
                    The{" "}
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
                      useState
                    </code>{" "}
                    hook returns an array with exactly two elements:
                  </p>
                  <ul className="list-decimal list-inside space-y-1 text-gray-800 dark:text-gray-200 mt-2">
                    <li>
                      The <strong>current state value</strong> (value).
                    </li>
                    <li>
                      A <strong>function</strong> to update that
                      state(setValue).
                    </li>
                  </ul>
                </div>

                <Terminology
                  title={"Note:"}
                  description={
                    <ul className="list-disc list-inside space-y-2 text-justify">
                      <li>
                        React avoids re-rendering a component if the new state
                        value is the same as the current one. For example, if{" "}
                        <code>value = 0</code> and you call{" "}
                        <code>setValue(0)</code>, the component will not
                        re-render.
                      </li>
                      <li>
                        <code>useState</code> (and other hooks) can only be used
                        inside functional components — not in class components
                        or regular functions.
                      </li>
                      <li>
                        The <code>useState</code> hook can store any type of
                        data — numbers, strings, arrays, objects, booleans, etc.
                      </li>
                      <li>
                        Hooks must always be called at the top level of a
                        component. Never call them inside loops, conditions, or
                        nested functions.
                      </li>
                      <li>
                        You can use multiple <code>useState</code> hooks in a
                        single component to manage different pieces of state
                        independently.
                      </li>
                    </ul>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dock />
      <Footer />
    </section>
  );
}

export default Page;
