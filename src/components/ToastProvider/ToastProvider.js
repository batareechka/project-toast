import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastMessages, setToastMessages] = React.useState([]);

  function dismissToast(id) {
    if (!id) {
      throw new Error('dismissToast requires an id');
    }

    const updatedToasts = toastMessages.filter((toast) => toast.id !== id);
    setToastMessages(updatedToasts);
  }

  function addToast(message, variant) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };

    setToastMessages([...toastMessages, newToast]);
  }

  return (
    <ToastContext.Provider
      value={{
        toastMessages,
        dismissToast,
        addToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
