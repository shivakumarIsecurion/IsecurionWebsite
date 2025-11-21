<div
  className="relative w-full h-[600px] z-10"
  style={{
    backgroundImage: `url(${herobackground.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-[#0D1120]/90"></div>

  {/* circles layer */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    <div className="absolute top-20 left-40 w-80 h-80 rounded-full bg-[#29499E] blur-2xl opacity-75 animate-rotate-slow"></div>

    <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-[#0A1A2F] blur-3xl opacity-60 animate-rotate-reverse-slower"></div>

    <div className="absolute left-1/2 -translate-x-1/2 bottom-16 w-80 h-80 rounded-full bg-[#0A1A2F] blur-2xl opacity-70 animate-rotate-slower"></div>

    <div className="absolute -right-40 -bottom-20 w-[520px] h-[520px] rounded-full bg-[#29499E] blur-3xl opacity-50 animate-rotate-reverse-slow"></div>

  </div>

  {/* hero text top layer */}
  <div className="relative z-50 flex items-center justify-center h-full text-white text-center px-6">
    your text goes here
  </div>

</div>