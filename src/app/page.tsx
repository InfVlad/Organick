import type { NextPage } from 'next';
import Text from '~/components/ui/Text';
import Button from '~/components/ui/Button';

const Home: NextPage = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-white'>
      {/* <Button submit>Buenos dias papuchos</Button> */}
      <Text variant='cursive'>Cursive</Text>
      <Button variant='noIcon' submit={false} text='Search Products' />
      <Button variant='yellow' submit={false} text='Search Products' />
    </main>
  );
};

export default Home;
