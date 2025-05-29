export default function UserCard({fullname, email, role, status }) {
  return (
    <div className="border rounded p-4 flex justify-between">
      <div>
        <p className="font-bold">{fullname}</p>
        <p className="text-sm">{email}</p>
        <div className="flex gap-2 mt-2">
          <span className="text-xs bg-black text-white px-2 py-0.5 rounded">
            {role}
          </span>
        </div>
      </div>
      <div className="flex items-center font-semibold ml-auto">
        <p className="text-black">{status}</p>
      </div>
    </div>
  );
}
