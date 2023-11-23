"use client";
import { signOut } from "next-auth/react";
import { BiLogOutCircle } from "react-icons/bi";

export function LogOut() {
  return (
    <button
      type="button"
      onClick={() => {
        signOut();
      }}
    >
      <BiLogOutCircle size={25} />
    </button>
  );
}

export default LogOut;
