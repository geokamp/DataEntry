"use client";
import Button from "@/components/button/Button";
import CreateForm from "@/components/createForm/CreateForm";
import { useState } from "react";

export default function Dashboard() {

    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleClick = () => {
      setIsFormOpen(true);
    };

  return (
    <>
      <Button onClick={handleClick} />
      {isFormOpen && <CreateForm />}
    </>
  );
}
