'use client';
import UserCard from "@/components/ui/user-card";
import { dataUser } from "@/mock/data-user";
import useSWR from 'swr';

export default function NewsPage(){
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  
  const {
     data: users, 
     error, 
     isLoading
     } = useSWR(`https://jsonplaceholder.typicode.com/posts`,fetcher);

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
    return(
        <section id="content" className="bg-white w-80%" >
        <div className="flex justify-center h-30 py-8">
        <input
          type="text"
          placeholder="Cari user"
          className="border-2 border-gray p-5 w-385 rounded-lg text-black "
        />
        </div>
        {users.map((Employee, index) => (
        <UserCard
          key={index}
          fullname={Employee.title}
          email={Employee.body}
          role={Employee.UserId}
          status={Employee.id}
        />
        ))}
        </section>
  );
}
