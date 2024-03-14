const Hero = ({ img, title }: { img: string; title: string }) => {
  return (
    <section className="container m-auto">
      <div
        className=" mx-40 my-8 px-12 flex justify-between items-center rounded-md 
      bg-gradient-to-r from-amber-400 to-yellow-200"
      >
        <div className="text-4xl font-bold text-slate-800 w-[40%] ">
          {title}
        </div>
        <div>
          <img src={img} alt={title} className="size-80" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
