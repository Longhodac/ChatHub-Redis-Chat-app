import React from "react";
import { Button } from "@/components/ui/button";

const AuthButtons = () => {
  return (
    <div className="flex gap-3 md:flex-row flex-col relative z-50 md:justify-start justify-center">
      <Button className="w-xs md:px-5" variant={"outline"}>
        Sign up
      </Button>
      <Button className="w-xs  md:px-5">Login</Button>
    </div>
  );
};

export default AuthButtons;
