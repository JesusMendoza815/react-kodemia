import UserItem from "./UserItem";
import '../styles/List.css';
const users = [
  {
    id: 1, 
    name: "John",
    lastName: "Smith",
    age: 21,
    location: "Washington",
  },
  {
    id: 2,
    name: "Samuel",
    lastName: "García",
    age: 22,
    location: "Durango",
  },
  {
    id: 3,
    name: "Pedro",
    lastName: "Castillo",
    age: 23,
    location: "Querétaro",
  },
];

function List() {
  return (
    <>
      <ul>
        {users.map((user) => {
          return (
            <>
              <UserItem data={user} />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default List;