import data from "@/data.json";
import React from "react";
import DataFromID from "@/components/Jobs/ID/DataFromID";

export default function ID({ params }: { params: { id: string } }) {
  return (
    <section className="horizontal-padding">
      <DataFromID id={Number(params.id)} data={data} />
    </section>
  );
}
