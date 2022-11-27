
import { CartCard } from "../App";
import React, { useContext } from "react";

export default function LoginSummary() {
    const numberOfMessages = localStorage.getItem('messages')
  return (
    <>
      <span>Notification ({numberOfMessages})</span>
    </>
  );
}
