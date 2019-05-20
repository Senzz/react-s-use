import { useEffect } from "react";

interface IUseTitle {
  (title: string): void
}

const useTitle: IUseTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useTitle;
