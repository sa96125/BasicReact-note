export const useConfirm = (message = "", resolve, rejection) => {
  if (typeof callback !== "function") return;

  const confirmAction = () => {
    if (window.confirm(message)) {
      resolve();
    } else {
      rejection();
    }
  };

  return confirmAction;
};
