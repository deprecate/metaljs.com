---
title: "Nested Components"
description: ""
layout: "guide"
weight: 3
---

###### {$page.description}

## Nested Components

<article id="1">

The ability to reference components inside templates can be very
useful. It enables the developer to correctly place the child
component at the right position inside the parent in an intuitive way.

This can certainly be done with <strong>Metal.js</strong> components.
For example, let's say we've already built a simple component called
<strong>Button</strong>.

Now we're building a <strong>Modal</strong> component, and we want it
to render some buttons inside the footer. In <strong>Modal</strong>'s
template file we could do the following:

```soy
<div class="footer">
  {foreach $button in $buttons}
    {call Button.render}
      {param label: $button /}
    {/call}
  {/foreach}
</div>
```

```JSX
var buttons = this.props.buttons.map(button => {
  return <Button label={button} />;
});
return <div class="footer">{buttons}</div>;
```

When Modal is rendered, the buttons also will be, at the specified
position. Besides this, <strong>Button</strong> components will be
automatically instantiated for these elements.

### Accessing sub component instances

But what if we need to access the created instances? That's possible
by using <strong>ref</strong>. Let's add one to the previous example
and see what happens:

```soy
{foreach $button as $buttons}
  {call Button.render}
    {param label: $button /}
    {param ref: 'button' + index($button) /}
  {/call}
{/foreach}
```

```JSX
var buttons = this.props.buttons.map((button, index) => {
  return <Button label={button} ref={'button' + index} />;
});
```

Now you'll be able to access your sub components through
your instance's <code>refs</code> property, like this:

```JSX
modal.refs.button0 // The instance for first button
modal.refs.button1 // The instance for second button
```
