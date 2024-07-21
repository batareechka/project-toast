import React from 'react';

function useEscapeKey(action) {
  function handleEscape(event) {
    if (event.key === 'Escape') {
      action();
    }
  }

  document.addEventListener('keydown', handleEscape);

  return () => {
    document.removeEventListener('keydown', handleEscape);
  };
}

export default useEscapeKey;
