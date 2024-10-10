import React from "react";

export default function page({ params }) {
  return (
    <div>
      <h1>Expertise</h1>
      <h1>{params.id}</h1>
    </div>
  );
}
