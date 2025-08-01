
# Pure Components in React

## What is a Pure Component?

A **Pure Component** in React is a component that:

- Renders the same output given the same props and state.
- Implements a shallow comparison on props and state to decide whether a re-render is necessary.
- Avoids unnecessary rendering, which can improve performance in certain scenarios.

React provides `React.PureComponent` as a base class for class components to implement this behavior automatically. For functional components, this behavior can be achieved using `React.memo`.

---

## Why Use Pure Components?

Normal React components re-render whenever their parent re-renders, regardless of whether their props or state have changed. Pure Components optimize this by:

- Preventing re-render if props and state are shallowly equal.
- Improving performance especially in large component trees.

---

## Class Component Example Using `React.PureComponent`

```jsx
import React from 'react';

class MyComponent extends React.PureComponent {
  render() {
    console.log('Rendered MyComponent');
    return <div>{this.props.name}</div>;
  }
}

// Usage
<MyComponent name="Raveen" />
```

Explanation:

- `React.PureComponent` automatically implements `shouldComponentUpdate` with shallow prop and state comparison.
- If `name` prop does not change, the component does not re-render.

---

## Functional Component Example Using `React.memo`

```jsx
import React from 'react';

const MyFunctionalComponent = React.memo(function MyFunctionalComponent(props) {
  console.log('Rendered MyFunctionalComponent');
  return <div>{props.name}</div>;
});

// Usage
<MyFunctionalComponent name="Raveen" />
```

Explanation:

- `React.memo` is a higher-order component that memoizes the component.
- It prevents re-render if props are the same with shallow comparison.
- Can take a custom comparison function as a second argument for deep comparisons.

---

## When Not to Use Pure Components

- When props or state are complex objects that frequently change reference without value changes (due to shallow comparison limitations).
- When updates are necessary regardless of props/state changes.
- When the shallow comparison overhead outweighs performance gains (rare cases).

---

## Summary

| Aspect              | React.Component          | React.PureComponent / React.memo  |
|---------------------|-------------------------|----------------------------------|
| Rendering Behavior   | Always re-renders on parent update | Re-renders only if props/state change (shallow comparison) |
| Usage               | Default base class for components | Use for performance optimization |
| Suitable For        | Simple components or when state/props are highly dynamic | Components with stable props/state often unchanged |

---

If you want, I can include example projects or performance benchmarking code as well!

---

*This explanation provides a concise summary of Pure Components in React with practical code examples you can use in interviews or projects.*
