import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { EdDelbtn, HideWrapper, EdDelbtnWrap } from "./BtnStyle";

export default function EditDeleteBtn() {
  const modal = useRef();

  const handleCloseModal = (event) => {
    if (modal.current || !modal.current.contains(event.target)) {
      setHide(false);
    }
  };

  return (
    <div onClick={handleCloseModal}>
      <form onSubmit={(e) => e.preventDefault()}>
        <EdDelbtnWrap ref={modal}>
          <EdDelbtn>edit</EdDelbtn>
          <EdDelbtn>delete</EdDelbtn>
        </EdDelbtnWrap>
      </form>
    </div>
  );
}
