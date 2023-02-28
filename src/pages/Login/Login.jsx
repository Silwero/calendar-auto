import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../store/users/userSlice';

export const Login = () => {
  const { userName } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeName('Petya'));
  }, [dispatch]);

  return (
    <div>Login as {userName}</div>
  );
};
