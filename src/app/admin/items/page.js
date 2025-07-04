"use client";
import UserCard from "@/components/ui/user-card";
import { IconPlus } from "@tabler/icons-react";
import useSWR from "swr";

export default function Item_Page() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const {
    data,
    error,
    isLoading,
  } = useSWR(`https://pokeapi.co/api/v2/item`, fetcher);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Gagal memuat data item</p>
      </div>
    );
  }

  const items = data.results;

  return (
    <section id="content">
      <input
        type="text"
        placeholder="Cari Item"
        className="w-full border px-4 py-2 rounded mb-6 placeholder-gray-600 text-black"
      />

      <div id="list-items" className="flex flex-col gap-4">
        {items.map((item, index) => (
          <UserCard
            key={index}
            fullname={item.name.replace(/-/g, " ")} // ubah tampilannya jadi lebih readable
            email={item.url}
            role="Item Pokémon"
            status="Tersedia"
          />
        ))}
      </div>

      <button className="absolute bottom-6 right-6 bg-gray-200 hover:bg-gray-300 p-3 rounded shadow text-black">
        <IconPlus size={20} />
      </button>
    </section>
  );
}
