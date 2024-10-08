const useTitle = (init) => {
  const [title, setTitle] = useState(init);

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }, [title]);

  return setTitle;
};

export { useTitle };
