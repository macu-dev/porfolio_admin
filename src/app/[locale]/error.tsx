'use client'; // Error boundaries must be Client Components

import Image from 'next/image';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="p-[20px]">
      <h2 className="h2-pretitle text-center text-3xl">
        Estamos teniendo algunos problemas técnicos
      </h2>
      <Image
        alt=""
        className="m-auto"
        height="440"
        src="/cafe.gif"
        width="440"
      />
      <h3 className="text mt-0 text-center">
        Nos pondremos a arreglarlo enseguida. Mientras tanto, relájate con un
        cafecito por nuestra cuenta.
      </h3>

      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
