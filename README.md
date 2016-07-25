# Events.js
Custom object for adding and configuration events.

## Install
You don't need any install. Just include this JS file in your `html` file :)
```html
<script src="path/to/Events.js"></script>
<!-- Code that uses Events.js must go below script tag! -->
```

## Variables and functions
### Events#customEvents
Object with all custom events with its functionts created with new Events instance.
### Events#on(name, fn, el)
Creates new event.
* **name (String, Array)**: Name or group of events. You can also use custom, or built-in events.
```javascript
evt.on('click', fn, el);
evt.on(['click', 'customEvent', 'mouseover'], fn);
```
* **fn (Function)**: A function that executes with event.
* **el (Node, Array), optional**: A node or an array of nodes that events will be executed on. If not set, event will be automatically executed on `document`.
```javascript
evt.on('click', fn); // After clicking on document fn will be executed
evt.on('mouseout', fn, [el1, el2]); // fn will be applied on el1 and el2
```

### Events#on(name, props)
Executes functions of custom event.
* **name (String)**: Name of event.
* **props, optional**: Arguments for listening function to be executed.

## Examples
Example #1:
```javascript
var evt = new Events('webload', 'anotherEvent'); // Initialize Events with new custom events
evt.on('webload', function()
{
    alert('Page loaded!');
});

// code...

evt.event('webload'); // Page is loaded here, we will see alert message
```
Example #2:
```javascript
var evt = new Events();
evt.on('click', function()
{
    alert('Clicked!');
}, myDiv);
```
