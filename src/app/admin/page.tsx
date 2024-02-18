import LoginForm from '@/components/domain/LoginForm';

import { Typography } from '../components/Typography/Typography';

const AdminPage = () => {
  return (
    <section>
      <Typography component="h1">Login</Typography>
      <LoginForm />
    </section>
  );
};

export default AdminPage;
