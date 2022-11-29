import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="text-center text-lg">
      <h1>Ooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Going back to the
        <Link href="/" className='text-blue-600'> Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
