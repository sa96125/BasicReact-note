export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = window.addEventListener(BeforeUnloadEvent, listener);
  const disablePrevent = window.removeEventListener(
    BeforeUnloadEvent,
    listener
  );

  return { enablePrevent, disablePrevent };
};
