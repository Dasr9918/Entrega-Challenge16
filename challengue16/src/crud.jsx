import { useEffect, useState } from "react";
import { useCollection } from "./firebase/fireStore";

export const Crud = () => {
  const [user, setUser] = useState({ name: "" });
  const { add, getAll, isPending, results } = useCollection("users");

  const getAllDocs = async () => {
    await getAll([]);
  };

  const save = async () => {
    await add(user);
    await getAllDocs();
  };

  const handleSetUser = (event) => {
    setUser({ name: event.target.value });
  };

  useEffect(() => {
    getAllDocs();
  }, []);

  return (
    <>
      <input type="text" onChange={handleSetUser} value={user.name} />
      <button type="button" onClick={save}>
        {" "}
        Guardar{" "}
      </button>
      {isPending ? <span> Saving... </span> : ""}
      <ul>
        {results.map((item) => {
          return <li key={item.id}> {JSON.stringify(item)} </li>;
        })}
      </ul>
    </>
  );
};
