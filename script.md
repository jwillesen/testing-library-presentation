# Testing UIs with @testing-library

## Introduction

[title slide]

Hey everyone! Today I want to talk to about UI testing, specifically about how we can use the React Testing Library to give us high confidence that our UI code is working correctly for our users.

[toc slide]

To start, I want to review some fundamental concepts, go over some JavaScript history to get some context, give an overview of `@testing-library`, what it is, how to use it. We'll do some coding to exercise what we've learned, and then we'll wrap things up, with Q&A and discussion and whatnot.

## Fundamental Concepts

### Encapsulation

[key terms slide]

Audience participation: How would you define the concept of encapsulation?

**Encapsulation**: The practice of bundling data and methods that operate on that data within a module, class, or component, and exposing only a public interface while hiding the internal workings.

When we encapsulate our code and keep implementation details private, we get the following properties:

- **Modularity**: You can change internals of an encapsulated module without breaking code that depends on the public interface.
- **Abstraction**: Consumers only need to understand *what* the module does, not *how* it does it.

#### An example

[API wall image slide]

Think about a web service with a REST API. The users of the service don't really care whether the data is stored in Postgres, Mongo, or some other exotic database; all they care about is that when they call a particular endpoint, they get the records they expect back. You could replace the service completely and as long as the behavior of the REST API stays the same, the users won't care.

(Caveat: This isn't completely true; the *performance* of the API is a common property of the implementation that "leaks through" the encapsulation. There's always an exception to every rule.)

I'm not here to tell you that encapsulation is a good thing; I think we all know that. But it's relevant to everything that follows so I wanted to load it into your heads.

### Why Do We Write Automated Tests?

[question slide]

Audience participation: Why do we write automated tests? Obviously we need to test our code at least once to make sure it works, but why do we write *automated* tests and run them over and over again? It's extra code we have to write, it's extra computing resources we have to pay for, so why do we do it?

Desired answer:
- So that when we change the software, we can have confidence that it still works as intended.

[statistic slide]

There's an oft-cited statistic: ~40% of bug fixes introduce new bugs. What that means is that changing code is *risky*.

But here's the Catch-22: the automated tests are *also* code. Which means that whenever we change the tests, we have a chance of making those tests invalid by introducing testing bugs. It's surprisingly easy to write a test that always passes, which is why the red-green-refactor cycle is so important: you need to make sure that your test *can* fail, and that they're actually testing what you intend them to test.

[white and black box testing slide]

The upshot of this is that the principle of encapsulation *applies to the test code too*. It's better if the tests don't reach into internals of the module they're testing so that when you change the module but maintain the public interface, you don't *also* have to change the tests and risk introducing testing bugs.

## History Lesson

### In the Beginning


Ok, so now that we've talked about encapsulation and how that affects our testing strategies, I want to go over a little JavaScript history so you can understand where we are now in the context of where we've been.

[I was there slide, wait for laugh]

[Step through to 2001]

In the early 2000's Agile Methodologies like Extreme Programming became popular and made automated testing mainstream, but JavaScript and browsers weren't ready for it. UI testing was mostly a manual process of opening 5 different browsers, clicking around, and hoping for the best. Keeping a website working in both Internet Explorer and all the other browsers at the same time was a frustrating, full-time job.

[Step through Selenium, jquery, WebDriver, 2007]

Selenium came out in 2004, and we finally got a way to programmatically test a website. This focused on end-to-end testing and was flakey, slow, and brittle with complex selectors, but it was better than nothing.

Just for reference, jQuery was first released in 2006.

WebDriver standardized browser automation in 2007.

[2009 - Chrome, V8, QUnit, Node, npm, jsdom]

In 2008 and 2009 some significant things happened. Chrome introduces V8 and dramatically improves JavaScript performance. Really paves the way for web applications, rather than just augmented web pages.

[JavaScript Rennaissance slide - 2010]

With Node and NPM in place, things really started taking off and JavaScript really matured, but UI testing is still clunky

[2013 - React]

React was released in 2013. Huge because it really pushed the component-based UI paradigm. Also further pushes SPA.

[2014, 2015 - Jest, Enzyme]

Just a couple years later, we get Jest and Enzyme -- an all-in-one testing library, including the idea of taking "snapshots" of the JSDOM, and shallow rendering. This was huge because we could do UI testing without a browser! So much faster, easier, and more reliable than Selenium testing, and we can do unit testing on components, rather than just end-to-end testing.

[Enzyme testing slide]

Let's take a brief look at how an Enzyme test with shallow rendering looks like. Common things that would be done were finding elements with CSS selectors, examining and manipulating internal state, and taking snapshots of the shallow DOM and making sure they match.

Now, remember how I talked about Encapsulation before? These Enzyme tests and DOM snapshots are really white-box tests. They examine and muck with the component's inner state, and the snapshots change based on the implementation. If you change the implementation of the component, the test logic is going to have to be updated, and the snapshots are going change.

[Modern UI Testing - 2017 - Enzyme struggles]

Ok, so back to our history lesson, just two years later, Enzyme is struggling to keep up with React. React introduces functional components, hooks, context API. Shallow rendering was something that React was never intended to do, so Enzyme had to keep up with the React internals and provide its own renderer to keep working (more Encapsulation violations).

[2018 - Kent C. Dodds]

So this guy Kent C. Dodds looked at all this and basically said, "What happened to black-box testing and encapsulation?" and he writes react-testing-library to make his point, which really ushers in the modern way of doing UI testing.

[2020s - modern UI testing]

Test the interface. For users of an API, that means the public interface of a module. For UIs, it's really what the DOM presents to the user and how the user interacts with those elements. We focus on the DOM because it's not just about browsers -- there are all kinds of accessibility devices that really interact with a web page at a DOM level. The browser renders a visual representation of the DOM as a web page, but that's really only one mode of interacting with it. By focusing on the DOM, we can test for other modes of interaction as well by testing how well the rendered output conforms to the standards, or interface.

[introduction to testing library slide]

So @testing-library shifts from shallow rendering and poking at internals of a component to testing the component's interface, which includes both the programming interface -- the props that it takes -- and the output of it, which is the DOM representation. But it avoids snapshots and testing for specific DOM constructions. Rather, it looks for attributes of the DOM that browser and other accessibility devices look for, and interacts with the output as a user would, rather than requiring a specific DOM structure. There are lots of DOM structures that can accomplish a particular UI design, all with the typical tradeoffs that you might think of, including elements that are solely for visual layouts.

[proceed to layers]

@testing-library is made up of several libraries that are layered on top of each other. At the base we've got DOM Testing Library, which provides utilities for interacting with the DOM in a user-centric way. It's framework agnostic -- it doesn't depend on React or any specific testing framework. If you can get your component mounted in a DOM, you can interact with it DOM Testing Library.

On top of that base layer are the framework specific libraries, like React Testing Library, and there are others for Angular, Svelte and many others. These help get your components mounted into a DOM structure for testing.

Then there are some utility layers. Jest-dom adds some custom assertions so you can test attributes of the DOM more easily, and the User Event library adds utilities for interacting the DOM like a user does.

[DOM testing library example slide]

So here's what a test using the DOM Testing Library looks like. Instead of looking for CSS classes and specific DOM structures, it instead searches for DOM nodes based on things that are relevant to a user of the application, like the text on a button, or the type/role of the element, or by an element's label.

The selectors are broken into two parts a prefix and a selection type. The prefix has six flavors. Get goes out and finds one node and throws if it can't find a matching element, which makes the test fail with a nice readout of the DOM it examined so you can sew what was actually rendered and why it couldn't find it. Query allows for the element to not be found and just returns null if it can't find it -- useful if you're testing for the absence of something. The find prefix is for asynchronous detection -- it waits until a matching element appears in the DOM, or it throws when it times out. This is useful when your components do asynchronous operations, like loading data.

All of those expect there to be a single matching element and throw if they find more than one. There are also "all" versions of these that allow you to find multiple matching elements, if that's what you're expecting.

You combine those prefixes with a selector to create a complete function call. You can search for elements by text, by their label, by their role -- things that the user generally will be able to "see" either on their screen or through their accessibility devices, though there are some escape hatches if you need them.

The thing to note here is that you aren't enforcing any particular DOM structure. You're just finding elements on the page the way a user would. The user doesn't really care how the DOM is structured or how many nested divs there are -- they just want to click the Submit button.

[choose selectors slide]

So that's a lot of options -- what should you generally use? The top selector you should use is "ByRole". If you can't find an interactive element you're looking for by its role, then something might be wrong. Note that this doesn't mean you have to have a "role" attribute on everything -- buttons and other semantic DOM elements implicitly have roles that the DOM testing library knows about and looks for.

ByLabelText is your next go to, which is great for form inputs. Searching for role="input" isn't great if there are a lot of inputs on the page. But searching for an input with a particular label? That's good, and encourages you to put labels on all the inputs, even if they're not visible, because those labels benefit screen reader and other accessibility users.

ByText is good for when you're finding non-interactive text on the page. Like if you want to make sure a user's name is displayed on the page.

ByDisplayValue is good if you want to find a form field with a particular value. ByAltText for finding images.

ByTestId is your escape hatch. Sometimes you legitimately can't do anything else, throw a data-testid on the element and just look for it. Avoid generally because users don't see or care about these data-testid attributes, but it's there if you need it.

Don't use ByPlaceholderText -- you really should have a label, but if for some reason you don't, this is available.

ByTitle -- No. Just no.

[react testing library example slide]

[jest-dom library slide]

[user event library example]

[example slide - star rating]

Show the bug, open up the editor, do the coding exercise.
