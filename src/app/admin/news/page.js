"use client";
import UserCard from "@/components/ui/user-card";
import { dataUser } from "@/mock/data-user";
import { IconPlus } from "@tabler/icons-react";
import useSWR from "swr";

export default function Users_Page() {
  const data = dataUser;
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const {
     data: users, 
     error, 
     isLoading
     } = useSWR(`https://jsonplaceholder.typicode.com/post`, fetcher);

    if(isLoading) {
      return(
        <div>
          <p>loading...</p>
        </div>
      );
    }

    if(error) {
      return(
        <div>
          <p>Gagal membuat data</p>
        </div>
      )
    }

    console.log(users);

  return (
      <section id="content" >
        <input
          type="text"
          placeholder="Cari Users"
          className="w-full border px-4 py-2 rounded mb-6 placeholder-gray-600 text-black"
        />
        <div id="list-users" className="flex flex-col gap-4">
          {users.map((employee, index) => (
            <UserCard
              key={index}
              fullname={employee.title}
              email={employee.body}
              role={employee.address.UserId}
              status={employee.id}
            />
          ))}
        </div>
        <button className="absolute bottom-6 right-6 bg-gray-200 hover:bg-gray-300 p-3 rounded shadow text-black">
          <IconPlus size={20} />
        </button>
      </section>

  );
}
