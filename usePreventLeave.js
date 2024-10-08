const usePreventLeave = () => {
  const stopHandler = (e) => {
    e.preventDefault();

    if (e.defaultPrevented) {
      console.log("prevent");
    }
  };
  const enablePrevent = () =>
    window.addEventListener("beforeunload", stopHandler);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", stopHandler);

  return {
    enablePrevent,
    disablePrevent,
  };
};

export { usePreventLeave };
