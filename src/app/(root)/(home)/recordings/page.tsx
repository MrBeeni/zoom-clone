import CallListContainer from "@/components/CallListContainer";
import React from "react";

const Recording = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Upcoming Meeting</h1>

      <CallListContainer type="recordings" />
    </section>
  );
};

export default Recording;
