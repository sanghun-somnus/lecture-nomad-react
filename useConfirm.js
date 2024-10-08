const useConfirm = (onConfirm, options = {}) => {
  if (typeof onConfirm !== "function") {
    return;
  }

  const message =
    typeof options.message === "string" ? options.message : "Are you sure";
  const onCancel =
    typeof options.onCancel === "function"
      ? options.onCancel
      : () => console.log("Cancel");

  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

export { useConfirm };
