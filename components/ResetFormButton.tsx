"use client";

import Link from "next/link";

const ResetFormButton = () => {
  // reset Form Data Function
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return (
    <button type="reset" onClick={reset}>
      <Link href={"/"} className="search-btn text-white">
        X
      </Link>
    </button>
  );
};

export default ResetFormButton;
