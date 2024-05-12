import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <div>Meeting Number # {params.id}</div>;
};

export default page;
