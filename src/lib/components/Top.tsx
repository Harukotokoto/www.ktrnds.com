import { Head } from './top/Head';
import { Profile } from '@/lib/components/top/Profile';
import { Languages } from '@/lib/components/top/Languages';
import { SNS } from '@/lib/components/top/SNS';

export const Top = () => {
  return (
    <>
      <Head />
      <Profile />
      <Languages />
      <SNS />
    </>
  );
};
