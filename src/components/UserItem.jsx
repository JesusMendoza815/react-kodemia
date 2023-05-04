import '../styles/UserItem.css';
import style from '../styles/modules/UserItem.module.scss';

function UserItem(props) {
  let { id, name, lastName, age, location } = props.data;
  return (
    <>
      <li id={id} key={id} className={ style } >
        <h3>
          <b>Name: </b>
          {name}
        </h3>
        <p>
          <b>Last Name: </b>
          {lastName}
        </p>
        <p>
          <b>Age: </b>
          {age} years old
        </p>
        <p>
          <b>Location: </b>
          {location}
        </p>
      </li>
    </>
  );
}

export default UserItem;