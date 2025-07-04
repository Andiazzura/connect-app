"use client";
import UserCard from "@/components/ui/user-card";
import { IconPlus } from "@tabler/icons-react";
import useSWR from "swr";

export default function EncounterMethod_Page() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const {
    data,
    error,
    isLoading,
  } = useSWR(`https://pokeapi.co/api/v2/encounter-method`, fetcher);

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
        <p>Gagal mengambil data Encounter Methods</p>
      </div>
    );
  }

  const methods = data.results;

  console.log(methods); // cek isi data

  return (
    <section id="content">
      <input
        type="text"
        placeholder="Cari Encounter Method"
        className="w-full border px-4 py-2 rounded mb-6 placeholder-gray-600 text-black"
      />

      <div id="list-users" className="flex flex-col gap-4">
        {methods.map((method, index) => (
          <UserCard
            key={index}
            fullname={method.name}
            email={method.url}
            role="Metode Encounter"
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
