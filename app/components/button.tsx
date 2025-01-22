import { signIn } from "@/auth";
import React from "react";

const Button = () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button type="submit">SignIn with GitHub</button>
      </form>
    </div>
  );
};

export default Button;
