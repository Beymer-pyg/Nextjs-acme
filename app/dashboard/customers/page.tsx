import React from "react";
import Table from "@/app/ui/customers/table";
import { fetchAllCustomers } from "@/app/lib/data";
import { fetchFilteredCustomers } from "@/app/lib/data";

export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  // const customers = await fetchAllCustomers();
  const customers = await fetchFilteredCustomers(query);

  return (
    <div>
      <h2>Curstomers Page</h2>
      <Table customers={customers} />
    </div>
  );
}
