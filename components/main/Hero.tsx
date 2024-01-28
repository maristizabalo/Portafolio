const Hero = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <video
        autoPlay
        muted
        loop
        className='w-full h-full object-cover fixed inset-0 z-[-1]'
      >
        <source src='/blackhole2.webm' type='video/webm' />
      </video>
    </div>
  );
};

export default Hero