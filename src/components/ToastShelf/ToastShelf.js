import React from 'react';

import { ToastContext } from '../ToastProvider/ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import useEscapeKey from '../../hooks/use-escape-key';

function ToastShelf({ toasts, handleDismiss }) {
  const { dismissAllToasts } = React.useContext(ToastContext);

  React.useEffect(() => {
    useEscapeKey(() => {
      dismissAllToasts();
    });
    // Note: this creates a "closure effect" with toasts,
    //       which works fine if the toasts are remove in Provider
  }, []);

  return (
    <div
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      <ol className={styles.toastList} role="list">
        {toasts.map(({ id, variant, message }) => {
          return (
            <li className={styles.toastWrapper} key={id}>
              <Toast id={id} variant={variant} handleDismiss={handleDismiss}>
                {message}
              </Toast>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ToastShelf;
