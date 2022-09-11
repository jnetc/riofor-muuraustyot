import Image from 'next/image';

export const RightSide = () => {
  return (
    <div className="illustration">
      <Image src="/images/riofor.svg" alt="riofor illustration" layout="fill" priority />
      <span className="riofor" />
    </div>
  );
};
