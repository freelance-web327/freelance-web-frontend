import React ,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, banUser } from "../../../../features/actions/adminActions";

/**
 * Users component.
 * @returns {JSX.Element} Users UI.
 */
const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleBanUser = (userId) => {
    dispatch(banUser(userId));
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.email})
            {!user.isBanned && (
              <button onClick={() => handleBanUser(user._id)}>Ban</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
