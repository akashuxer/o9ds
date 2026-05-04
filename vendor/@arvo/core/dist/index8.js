function createActivationHandler(callback) {
  return {
    handleKeyDown(event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        callback(event);
      }
    }
  };
}
export {
  createActivationHandler
};
//# sourceMappingURL=index8.js.map
