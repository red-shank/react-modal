# @redshank/react-modal

> **_NOTE:_** This package working with React 18.

This package was created due to the lack of really good options for modals in reactjs, this is a library with zero
dependencies in which you can render modals from anywhere, either through the API or from its component. With a nice UI
design.

## How to install

Install from:

- `npm install @redshank/react-modal`

or

- `yarn add @redshank/react-modal`


## How to use:

import css in first file to project

index.js

```jsx
import '@redshank/react-modal/lib/styles/style.css';
```

Now use the API.

# Notifications

```js
import Modal from '@redshank/react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}>
        Open
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Corporis esse expedita,
          libero maxime placeat quam sunt tenetur? 
          Eos illum laudantium nisi provident quaerat.
          Cupiditate dolorum eius natus neque nulla
          praesentium!</p>
      </Modal>
    </div>
  );
}
```

## Notification Props

|   prop   | type   |  default   |                                                           description                                                           |
|:--------:|--------|:----------:|:-------------------------------------------------------------------------------------------------------------------------------:|
|  title   | string |     ""     |                                                 Required. Title of notification                                                 |
| message  | string |     ""     |                                                Required. Message of notification                                                |
|   type   | enum   | "success"  |                        Optional. defines the type of notification. "success", "info", "warning", "error"                        |
| position | enum   | "topRight" | Optional. defines the position of notification. "topRight", "topLeft", "topCenter", "bottomRight", "bottomLeft", "bottomCenter" |
| duration | number |    7000    |                          Optional. Defines the time that the notification will be active on the screen                          |

## Message Props

|   prop   | type             |   default   |                                                           description                                                           |
|:--------:|------------------|:-----------:|:-------------------------------------------------------------------------------------------------------------------------------:|
| message  | string           |     ""      |                                                Required. Message of notification                                                |
|   type   | enum             |  "success"  |                        Optional. defines the type of notification. "success", "info", "warning", "error"                        |
| position | enum             | "topCenter" | Optional. defines the position of notification. "topRight", "topLeft", "topCenter", "bottomRight", "bottomLeft", "bottomCenter" |
| duration | number           |    7000     |                          Optional. Defines the time that the notification will be active on the screen                          |
|   key    | number or string |      -      |                                      Optional. Message key, useful to update the message.                                       |

## Notification Render

```jsx
const render = ({
                  title,
                  message,
                  icon,
                  type,
                  id,
                  onRemove,
                  className,
                  style,
                  onClick
                }) => {
  return (
    <div style={style} className={className} onClick={onClick}>
      <h5>{title}</h5>
      <p>{message}</p>
    </div>
  );
};
```

# Credits

### Kevin Rivas (Author)
[Portfolio](https://kevin-rivas.com)
[Linkedin](https://www.linkedin.com/in/kevin-rivas-frontend-developer)

### Daniel Tejada (Collaborator)
[Portfolio](#)
[Linkedin](#)

Create with Love ❤️ by [Kevin Rivas](https://kevin-rivas.vercel.app).
