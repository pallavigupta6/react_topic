import React from "react";

function ItemList() {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ItemList;
// In this example, each list item gets a unique key.
//  Ideally, the key should be a stable,
//  unique identifier for each item
//  (like an ID from a database), not just the array index, as the index can change.

// Purpose of the key Attribute
// Identification of Elements:

// Each key must be unique among siblings. This allows React to distinguish elements from each other.

// React uses the key to match and compare virtual DOM elements to the real DOM.

// Efficient Updates:

// With key, React can re-render only the elements that have actually changed, rather than the entire list. This improves performance.

// Avoiding Bugs:

// Without a key (or with incorrect usage, like using the index of the array as the key), React may reuse elements incorrectly, leading to unexpected behaviors.
