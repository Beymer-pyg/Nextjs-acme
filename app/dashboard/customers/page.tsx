import React from "react";
import Table from "@/app/ui/customers/table";
import { fetchAllCustomers } from "@/app/lib/data";
import Search from "@/app/ui/search";

export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const customers = await fetchAllCustomers();
  console.log(customers);
  return (
    <div>
      <h2>Curstomers Page</h2>
      <Table customers={customers} />
    </div>
  );
}
