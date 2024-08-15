# Toast Component Project

This project is part of the "Joy of React" series, focusing on the development and implementation of a common UI element: the `<Toast>` message component. The goal of the project is to build an interactive and accessible toast notification system from scratch, covering various aspects of React development, including state management, custom hooks, and the "Provider component" pattern

![Screen recording showing 3 toast messages popping up from user input](./docs/toast-demo.gif)

## Getting Started

```bash
# Install dependencies:
npm install

# Run a development server:
npm run dev

# Deploy on GitHub pages
npm run deploy
```

To create new components, you can use this helper script. It saves you a bit of time, creating all the files and adding the standard code:

```bash
# Create a new component:
npm run new-component [TheNewComponentName]
```

## Accessibility

### Keyboard:

- **Keyboard Navigation:** All interactive elements within the app are fully navigable using the keyboard. Users should be able to move focus between elements using the `Tab` key, and use `Arrow` keys, `Enter` or `Space` to interact with buttons and controls.
- **Escape Key Dismissal:** Pressing the `Escape` key dismisses all active toast notifications without interfering with other ongoing interactions or disrupting the user's workflow.

### Screen Reader:

- **Polite Announcements:** New toast messages are announced politely by screen readers, allowing the user to complete their current task before the notification is read aloud.
- **Contextual Announcements:** Toast messages are announced by screen readers with the appropriate context, including the type of message (e.g., notice, success, warning, error). This ensures that users understand the nature of the notification.
- **Accessible Close Button:** The close button within each toast has a clear and concise accessible name, making it easily understandable and actionable for screen reader users.

## Demo

https://batareechka.github.io/project-toast/
