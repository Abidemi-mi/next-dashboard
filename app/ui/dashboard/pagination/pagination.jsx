"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);
  const page = searchParams.get("page") || 1;
  const ITEM_PER_PAGE = 3;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChange = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
      replace(`${pathName}?${params}`)
  };
  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        onClick={() => handleChange("prev")}
        className={styles.button}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={() => handleChange("next")}
        className={styles.button}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
