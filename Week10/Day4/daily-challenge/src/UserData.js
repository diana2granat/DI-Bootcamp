// "src/UserData.js"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, ageUpAsync, ageDownAsync } from './userSlice';

const UserData = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const age = useSelector((state) => state.user.age);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {userData && (
        <div>
          <h2>User Data</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
      <div>
        <h3>Age: {age}</h3>
        <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
        <button onClick={() => dispatch(ageDownAsync())}>Age Down</button>
      </div>
    </div>
  );
};

export default UserData;