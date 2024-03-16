const Hero = ({ img, title }: { img: string; title: string }) => {
  return (
    <section className="lg:container m-auto">
      <div
        className="lg:mx-40 my-8 px-12 py-12 lg:py-0 flex justify-center lg:justify-between items-center rounded-md 
      bg-gradient-to-r from-amber-400 to-yellow-200"
      >
        <div className="text-4xl font-bold text-slate-800 lg:w-[40%] my-4 text-center lg:text-start">
          {title}
        </div>
        <div className="hidden lg:block">
          <img src={img} alt={title} className="size-80" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
