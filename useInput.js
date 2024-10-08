const useInput = (init, ...validators) => {
  const [value, setValue] = useState(init);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let isValid = true;

    // 검증
    if (validators.length > 0) {
      for (const validator of validators) {
        let prevIsValid = isValid;

        // 함수인지, 리턴 값이 불리안 타입인지 확인
        if (isValid && typeof validator === "function") {
          let currentIsValid = !!validator(value);
          isValid =
            typeof currentIsValid === "boolean" ? currentIsValid : prevIsValid;
        }
      }
    }

    // 업데이트
    if (isValid) {
      setValue(value);
    }
  };

  return {
    value,
    onChange,
  };
};

export { useInput };
