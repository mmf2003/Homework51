# Trade Tracker

Trade Tracker is a simple trading journal dashboard built with React and Vite.

The application allows users to add and delete trades, track trading statistics, receive notifications, and monitor user activity.

## Technologies

- React
- Vite
- React Icons
- React Toastify
- React Idle Timer
- JavaScript
- CSS

## Features

- Add new trades
- Delete trades
- Long and Short trade directions
- Automatic P&L calculation
- Total trades statistics
- Profitable trades statistics
- React Icons integration
- Success, error and warning notifications with React Toastify
- User activity tracking with React Idle Timer
- Active / Idle status
- Responsive design

## Libraries

### React Icons

Used for dashboard, trade direction, add and delete icons.

### React Toastify

Used to display notifications when:

- a trade is added
- a trade is deleted
- form validation fails
- the user becomes inactive

### React Idle Timer

Tracks user activity.

After 30 seconds of inactivity, the application changes the user status from `Active` to `Idle` and displays a warning notification.

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Repository

https://github.com/mmf2003/Homework51.git
