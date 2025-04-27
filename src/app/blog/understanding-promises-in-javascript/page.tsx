import BlogMeta from "@/components/blog-meta";
import CodeBlock from "@/components/code-block";
import { Dock } from "@/components/dock";
import Footer from "@/components/footer";
import Terminology from "@/components/terminologies";
import { FloatingDock } from "@/components/ui/floating-dock";
import React from "react";

const Page = () => {
  return (
    <section>
      <div className="p-8 min-h-screen max-w-4xl mx-auto">
        <h1 className="font-bold text-3xl text-center mb-6">
          Understanding Promises in JavaScript
        </h1>
        <BlogMeta
          author="Kumar Amrendram"
          date="April 26, 2025"
          readingTime="15 min read"
          tags={["JavaScript", "Promises"]}
        />
        {/* Introduction */}
        <div className="py-4">
          <p className="font-bold text-xl mb-2">Introduction</p>
          <p>
            JavaScript is a single-threaded language, yet it can perform
            asynchronous tasks efficiently using Promises and Async/Await. These
            concepts can be challenging for beginners, but understanding them is
            essential for writing modern JavaScript. In this guide, we&apos;ll
            break down these concepts in a way that makes them easy to grasp.
            Let&apos;s get started!
          </p>
        </div>

        {/* What is a Promise */}
        <div className="py-4">
          <p className="font-bold text-xl mb-2">What is a Promise?</p>
          <p>
            A Promise represents a value that may be available now, in the
            future, or never. It&apos;s a way to handle asynchronous operations.
            When a Promise is successful, it’s called <strong>fulfilled</strong>
            ; when it fails, it’s called <strong>rejected</strong>.
          </p>
          <p className="mt-4">Here&apos;s an example:</p>
          <div className="my-4">
            <CodeBlock
              code={`const promise = new Promise((resolve, reject) => {
  const success = true; // Change this to false to test rejection

  if (success) {
    resolve("The operation was successful!");
  } else {
    reject("The operation failed.");
  }
});

promise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
`}
            />
          </div>
          <div className="pb-4">
            <p className="mt-4">In the example above, note a few key points:</p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>
                We create a new Promise using the <code>new Promise</code>{" "}
                constructor.
              </li>
              <li>
                The Promise takes a function with two arguments:{" "}
                <code>resolve</code> and <code>reject</code>.
              </li>
              <li>
                Inside the Promise, we simulate a success or failure using a
                simple condition.
              </li>
              <li>
                If the condition is true, we call <code>resolve()</code> to
                indicate <span className="text-green-500">success</span>.
              </li>
              <li>
                If the condition is false, we call <code>reject()</code> to
                indicate an <span className="text-red-500">error</span>.
              </li>
              <li>
                We handle the result using <code>.then()</code> for success and{" "}
                <code>.catch()</code> for errors.
              </li>
            </ol>
          </div>
          <p className="">A Promise has three states in its lifecycle:</p>
          <ol className="list-decimal list-inside space-y-3 mt-4">
            <li>
              <strong>Pending:</strong>
              <span className="ml-1">
                The initial state of a Promise — it&apos;s still waiting,
                neither fulfilled nor rejected.
              </span>
            </li>
            <li>
              <strong>Fulfilled:</strong>
              <span className="ml-1">
                The operation completed successfully, and the Promise has a
                result (resolved value).
              </span>
            </li>
            <li>
              <strong>Rejected:</strong>
              <span className="ml-1">
                The operation failed, and the Promise now holds a reason for the
                failure (error).
              </span>
            </li>
            <li>
              <strong>Settled:</strong>
              <span className="ml-1">
                Settled is not a Promise state. It only indicates that a Promise
                is either fulfilled or rejected and can no longer change its
                state.
              </span>
            </li>
          </ol>

          <Terminology
            title={"Note: "}
            description={
              <p>
                Promise result values are immutable; once a Promise is resolved
                or rejected, its state and value cannot be changed. In the above
                example, once the promise is resolved, the value of{" "}
                <code>(const promise)</code> cannot be changed
              </p>
            }
          />
          <p className="mt-4">
            While you can&apos;t directly access a Promise&apos;s internal state
            (like checking if it&apos;s <strong>&quot;pending&quot;</strong>{" "}
            without handling it), you can use <code>.then()</code>,{" "}
            <code>.catch()</code>, and <code>.finally()</code> to handle each
            outcome:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <code>.then()</code> is called when the Promise is fulfilled.
            </li>
            <li>
              <code>.catch()</code> is called when the Promise is rejected.
            </li>
            <li>
              <code>.finally()</code> is called no matter what — after
              fulfillment or rejection.
            </li>
          </ul>
          <Terminology
            title="So what is Promise ?"
            description={
              <p>
                a Promise is a JavaScript object that represents the outcome of
                an asynchronous operation. It can be in one of three states:
                pending, fulfilled, or rejected. Promises are useful for
                handling asynchronous tasks and help keep your code clean and
                organized.
              </p>
            }
          />
        </div>
        <div className="">
          <p className="font-bold text-xl mb-2">Promise APIs</p>
          <p className="mt-6">
            Now that we understand what a Promise is, how it works, and how to
            handle success and failure, let&apos;s take things a step further.
            JavaScript provides a set of built-in methods—known as{" "}
            <strong>Promise APIs</strong>—that make it easier to manage multiple
            Promises and handle more complex asynchronous flows. These methods
            help us run Promises in parallel, wait for all of them to finish, or
            just pick the fastest one. Let&apos;s explore them one by one.
          </p>

          <div className="my-4">
            <p className="font-bold"> 1. Promise.all()</p>
            <ul className="list-inside mt-2 space-y-1">
              <li>
                - Takes iterable(array) of Promises and returns a single Promise
                that resolves
              </li>
              <li>
                - Resolves when all of the promises are resolved or any one of
                them is rejected
              </li>
              <li>
                - If all promises are resolved, the result is an array of their
                results in the same order as the input promises
              </li>
              <li>
                - If any promise is rejected, the returned promise is rejected
                with the reason of the first promise that was rejected
              </li>
            </ul>

            <CodeBlock
              code={`const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 resolved');
    }, 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 resolved');
    }, 3000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3 resolved');
    }, 4000);
});
// Using Promise.all to wait for all promises to resolve
const allPromise = Promise.all([p1, p2, p3]);

allPromise
  .then((values) => {
    console.log('All promises resolved:', values);
  })
  .catch((error) => {
    console.error('One or more promises rejected:', error);
  });
`}
            />
          </div>

          <div className="my-4">
            <p className="font-bold"> 2. Promise.allSettled()</p>
            <ul className="list-inside mt-2 space-y-1">
              <li>
                - Similar to <code>Promise.all()</code>, but it waits for all
                promises to settle (either resolve or reject)
              </li>
              <li>
                - Returns an array of objects, each representing the outcome of
                each promise
              </li>
              <li>
                - Each object contains <code>status</code> (either{" "}
                <strong>fulfilled</strong> or <strong>rejected</strong>) and{" "}
                <code>value</code> (for fulfilled promises) or{" "}
                <code>reason</code> (for rejected promises)
              </li>
              <li>
                - Useful when you want to know the outcome of all promises,
                regardless of whether they were successful or not
              </li>
            </ul>

            <CodeBlock
              code={`const p1 = new Promise((resolve, reject) => {
// do something
});
const p2 = new Promise((resolve, reject) => {
  // do something
});
const p3 = new Promise((resolve, reject) => {
 // do something
});

const allSettledPromise = Promise.allSettled([p1, p2, p3]);
allSettledPromise
  .then((results) => {
    console.log("All promises settled:", results);
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log("Result:", result.value);
      } else {
        console.log("Error:", result.reason);
      }
    });
  })
  .catch((error) => {
    console.error("Error in allSettledPromise:", error);
  });
`}
            />
          </div>
          <div className="my-4">
            <p className="font-bold"> 3. Promise.any()</p>
            <ul className="list-inside mt-2 space-y-1">
              <li>- Takes array of Promises and returns a single Promise</li>
              <li>
                - Resolves when any of the promises in the array are resolved
              </li>
              <li>
                - If all promises are rejected, it returns an AggregateError
              </li>
              <li>
                - Useful when you want to get the result of the first successful
                promise
              </li>
            </ul>
            <CodeBlock
              code={`const p1 = new Promise((resolve, reject) => {
// do something
});
const p2 = new Promise((resolve, reject) => {
// do something
});
const p3 = new Promise((resolve, reject) => {
// do something
});

const promise = Promise.any([p1, p2, p3]);
promise
  .then((result) => {
    console.log("Promise settled:", result);
  })
  .catch((error) => {
    console.error("Error in promise:", error);
  });
`}
            />
          </div>

          <div className="my-4">
            <p className="font-bold">4. Promise.race()</p>
            <ul className="list-inside mt-2 space-y-1">
              <li>
                - Takes an iterable of Promises and returns a single Promise
              </li>
              <li>
                - Resolves or rejects as soon as one of the promises in the
                iterable resolves or rejects
              </li>
              <li>
                - The result is the value or reason of the first settled promise
              </li>
              <li>
                - Useful when you want to get the result of the first promise
                that settles, regardless of whether it was fulfilled or rejected
              </li>
            </ul>
            <CodeBlock
              code={`const p1 = new Promise((resolve, reject) => {
  // do something
});
const p2 = new Promise((resolve, reject) => {
  // do something
});
const p3 = new Promise((resolve, reject) => {
  // do something
});

const promise = Promise.race([p1, p2, p3]);
promise
  .then((result) => {
    console.log("Promise settled:", result);
  })
  .catch((error) => {
    console.error("Error in promise:", error);
  });
            `}
            />
          </div>
        </div>
        <div className="">
          <p className="font-semibold text-lg">Conclusion </p>
          <p>
            Promises are key to handling asynchronous operations in JavaScript.
            By understanding their states and using APIs like{" "}
            <code>Promise.all()</code>, <code>Promise.allSettled()</code>,
            <code>Promise.any()</code>, and <code>Promise.race()</code>, you can
            write cleaner and more efficient code. Mastering Promises will make
            your asynchronous tasks easier to manage and your applications more
            reliable. Keep experimenting and coding!
          </p>
        </div>
      </div>
      <Dock />
      <Footer />
    </section>
  );
};

export default Page;
