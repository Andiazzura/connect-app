"use client";
import { useEffect } from "react";
import useSWR from "swr";
import UserCard from "@/components/ui/user-card";
import { IconPlus } from "@tabler/icons-react";

export default function Location_Page() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const {
    data,
    error,
    isLoading
  } = useSWR("https://pokeapi.co/api/v2/location", fetcher);

  useEffect(() => {
    document.title = "Pokémon Locations";
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading location data</p>;

  const locations = data.results;

  return (
    <section id="content">
      <h1 className="text-xl font-bold mb-4">Daftar Lokasi Pokémon</h1>

      <div className="flex flex-col gap-4">
        {locations.map((loc, index) => (
          <UserCard
            key={index}
            fullname={loc.name.replace(/-/g, " ")} // ubah nama jadi lebih enak dibaca
            email={loc.url}
            role="Lokasi Pokémon"
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
