const useTabs = (initIndex = 0, tabs) => {
  // check type of tabs
  // must Array type
  if (!Array.isArray(tabs)) {
    console.log("%cplease pass array for tabs", "color: red");
    return {
      currentItem: null,
      changeItem: () => {},
    };
  }

  const [currentIndex, setCurrentIndex] = useState(initIndex);

  return {
    currentItem: tabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export { useTabs };
