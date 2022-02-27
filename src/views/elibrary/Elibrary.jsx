import React from 'react';
import BG from '../../assets/images/books.jpg';
import EAuthor from '../../components/eAuthor/EAuthor';
import EUser from '../../components/eUser/EUser';
import Hero from '../../components/hero/Hero';

const Elibrary = () => {
  return (
    <div>
      <Hero
        texts={{
          title: 'E-Library Section',
          description:
            'Libraries always remind you that there are good things in this world.',
          bg: BG,
          buttons: [
            {
              url: '/dashboard/author',
              title: 'Donate E-Books',
            },
            {
              url: '/dashboard/user',
              title: 'Get E-Books',
            },
          ],
        }}></Hero>
      <br />
      <EAuthor headerOne='Authors' />
      <br />
      <EUser headerTwo='Readers' />
      <br />
    </div>
  );
};

export default Elibrary;
