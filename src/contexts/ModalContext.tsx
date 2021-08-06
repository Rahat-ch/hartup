import * as React from 'react';

export const ModalContext = React.createContext(null);

export function ModalProvider({ children }) {
  const [open, setIsOpen] = React.useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <ModalContext.Provider
      value={{
        open,
        setIsOpen,
        closeModal,
        openModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
