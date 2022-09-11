import Image from 'next/image';

export const LeftSide = () => {
  return (
    <div className="illustration">
      <Image src="/images/riofor-houses.svg" alt="riofor illustration" layout="fill" />
      <span className="houses" />
    </div>
  );
};
