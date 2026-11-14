
import { useEffect, useRef, useState } from "react";
const videos = [
  {
    src: "/birthday5.mp4",
    title: "Birthday Video 01",
  },
  {
    src: "/birthday1.mp4",
    title: "Birthday Video 02",
  },
  {
    src: "/birthday3.mp4",
    title: "Birthday Video 03",
  },
  {
    src: "/birthday4.mp4",
    title: "Birthday Video 04",
  },
  {
    src: "/birthday2.mp4",
    title: "Birthday Video 05",
  },
];


function Birthday() {
  const [opened, setOpened] = useState(false);
  const [loveBroken, setLoveBroken] = useState(false);
  const [showBirthdayMessage, setShowBirthdayMessage] = useState(false);
  const memoriesRef = useRef(null);
  const [showMemories, setShowMemories] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowMemories(true);
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  if (memoriesRef.current) {
    observer.observe(memoriesRef.current);
  }

  return () => observer.disconnect();
}, []);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff1f6] px-5 py-16">

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,#ffd1e5,transparent_35%),radial-gradient(circle_at_80%_80%,#e8d5ff,transparent_35%)]" />

      <div className="pointer-events-none absolute left-[8%] top-[8%] animate-bounce  text-5xl sm:text-[320px] [animation-duration:4s]">
        🎈
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[12%] animate-pulse text-4xl sm:text-[220px]">
        ✨
      </div>

      <div className="pointer-events-none absolute bottom-[15%] left-[5%] animate-pulse text-4xl sm:text-[220px]">
        💗
      </div>

      <div className="pointer-events-none absolute bottom-[20%] right-[8%] animate-bounce text-5xl sm:text-[220px] [animation-duration:3s]">
        🎀
      </div>



<section className="relative z-10 mx-auto flex min-h-[80vh] max-w-4xl items-center justify-center px-4 py-10">
  <div
    className={`w-full rounded-[35px] border border-white/80 bg-white/60 px-6 text-center shadow-[0_20px_80px_rgba(230,120,170,0.2)] backdrop-blur-xl transition-all duration-1000 ease-in-out sm:px-12 ${
      opened ? "-translate-y-5 py-10 sm:py-12" : "translate-y-0 py-12 sm:py-16"
    }`}
  >
    <div className="mb-5 inline-flex rounded-full border border-pink-200 bg-white/80 px-5 py-2 text-sm font-bold tracking-widest text-pink-500">
      ✨ A SPECIAL DAY ✨
    </div>

    <div className="mb-6 animate-bounce text-7xl [animation-duration:3s] sm:text-8xl">
      🎂
    </div>

    <p className="mb-3 text-sm font-bold tracking-[0.3em] text-pink-400">
      TODAY IS ALL ABOUT YOU
    </p>

    <h1 className="font-serif text-5xl font-bold leading-tight text-[#e85d9e] sm:text-7xl">
      Happy
      <br />
      Birthday!
    </h1>

    <div className="my-6 flex items-center justify-center gap-3 text-pink-300">
      <span>────</span>
      <span className="text-2xl">♡</span>
      <span>────</span>
    </div>

    <p className="mx-auto max-w-md text-base leading-8 text-[#987187] sm:text-lg">
      A little magic, a little love, and a whole lot of happiness.
      Someone special deserves something beautiful today.
    </p>

    <div className="my-9 flex justify-center">
      <div className="relative">
        {!opened && (
          <div className="absolute -inset-5 animate-pulse rounded-full bg-pink-300/40 blur-2xl" />
        )}

        <div className={`relative flex h-28 w-28 items-center justify-center rounded-[30px] border border-white bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 text-7xl shadow-[0_15px_40px_rgba(236,72,153,0.3)] transition duration-500 ${
          opened ? "scale-90" : "animate-bounce hover:rotate-12 hover:scale-110 [animation-duration:2s]"
        }`}>
          🎁
        </div>

        {!opened && (
          <span className="absolute -right-3 -top-3 animate-ping text-2xl">✨</span>
        )}
      </div>
    </div>

    {!opened && (
      <div className="mb-4 animate-pulse">
        <p className="text-sm font-extrabold tracking-[0.2em] text-pink-500">
          👇 TAP THE BUTTON BELOW 👇
        </p>
        <p className="mt-1 text-xs font-medium text-[#b77c9e]">
          A little surprise is waiting for you!
        </p>
      </div>
    )}

    <button
      onClick={() => {
        const nextState = !opened;
        setOpened(nextState);

        if (nextState) {
          setTimeout(() => {
            window.scrollBy({ top: 480, behavior: "smooth" });
          }, 300);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className={`group relative overflow-hidden rounded-full px-10 py-5 text-base font-extrabold tracking-wide text-white shadow-[0_10px_35px_rgba(236,72,153,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 ${
        opened
          ? "bg-gradient-to-r from-[#bd83e9] to-[#f472a8]"
          : "animate-pulse bg-gradient-to-r from-[#ec4899] via-[#e85d9e] to-[#a855f7] ring-4 ring-pink-200/70"
      }`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      <span className="relative">
        {opened ? "Close Your Surprise ♡" : "CLICK TO OPEN YOUR GIFT 🎁"}
      </span>
    </button>

    <div
      className={`grid transition-all duration-1000 ease-in-out ${
        opened
          ? "mt-8 grid-rows-[1fr] opacity-100"
          : "mt-0 grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <div className={`transition-all duration-1000 ${
          opened ? "translate-y-0 scale-100" : "translate-y-10 scale-95"
        }`}>
          <h2 className="font-serif text-3xl font-bold text-pink-500">
            You are truly special! ❤️
          </h2>

          <p className="mt-3 text-[#987187]">
            May your life always be filled with love, laughter and magic.
          </p>

          <div className="mx-auto mt-8 max-w-[280px] rounded-2xl bg-white p-3 shadow-[0_10px_40px_rgba(236,72,153,0.25)] transition duration-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_15px_50px_rgba(236,72,153,0.4)]">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/image1.jpeg"
                alt="A special memory"
                className="h-[320px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <p className="mt-3 font-serif text-lg italic text-pink-500">
              A beautiful memory ❤️
            </p>
          </div>
        </div>
      </div>
    </div>

    <p className="mt-10 text-xs font-semibold tracking-widest text-pink-300">
      MADE WITH LOVE ♡
    </p>
  </div>
</section>




<section
  ref={memoriesRef}
  className="relative z-10 mx-auto max-w-[1350px] py-16"
>
  <div
    className={`mb-12 text-center transition-all duration-1000 ${
      showMemories
        ? "translate-y-0 opacity-100"
        : "translate-y-10 opacity-0"
    }`}
  >
    <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-pink-400">
      BEAUTIFUL MOMENTS
    </p>

    <h2 className="font-serif text-4xl font-bold text-[#e85d9e] sm:text-5xl">
      Special Memories
    </h2>

    <p className="mt-4 text-[#987187]">
      A collection of beautiful moments, just for you ❤️
    </p>
  </div>

  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
    {videos.map((video, index) => (
      <div
        key={video.src}
        style={{
          transitionDelay: showMemories ? `${index * 150}ms` : "0ms",
        }}
        className={`group relative overflow-hidden rounded-xl border border-white/70 bg-pink-100 shadow-lg shadow-pink-200/20 transition-all duration-1000 ease-out ${
          showMemories
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        } ${index === 1 ? "sm:col-span-2" : ""}`}
      >
        <div className="h-[250px] w-full sm:h-[280px] lg:h-[450px]">
          <video
            src={video.src}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full"
          />
        </div>

        <div className="flex items-center justify-between bg-white/70 px-4 py-3">
          <div>
            <h3 className="font-semibold text-[#d95791]">
              {video.title}
            </h3>
            <p className="mt-1 text-xs text-[#aa8299]">
              A beautiful moment ♡
            </p>
          </div>

          <span className="text-2xl transition duration-300 group-hover:scale-125">
            {index % 2 === 0 ? "💗" : "🎀"}
          </span>
        </div>
      </div>
    ))}
  </div>
</section>





<section className="relative z-10 flex min-h-[90vh] w-full flex-col items-center justify-center py-20 text-center">

  {!showBirthdayMessage ? (
    <>
      <p className="mb-12 text-sm font-semibold tracking-[0.4em] text-pink-400">
        A LITTLE SURPRISE FOR YOU
      </p>

      <button
        onClick={() => setLoveBroken(true)}
        disabled={loveBroken}
        aria-label="Break the heart"
        className={`relative h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-120 ${
          loveBroken ? "cursor-default" : "cursor-pointer animate-heartbeat"
        }`}
      >
        <span
          className={`absolute inset-0 ${
            loveBroken ? "animate-love-left" : ""
          }`}
          style={{ clipPath: "inset(0 50% 0 0)" }}
        >
          <svg viewBox="0 0 24 24" className="h-full w-full">
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <path
              fill="url(#heartGradient)"
              d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z"
            />
          </svg>
        </span>

        <span
          className={`absolute inset-0 ${
            loveBroken ? "animate-love-right" : ""
          }`}
          style={{ clipPath: "inset(0 0 0 50%)" }}
          onAnimationEnd={() => {
            if (loveBroken) setShowBirthdayMessage(true);
          }}
        >
          <svg viewBox="0 0 24 24" className="h-full w-full">
            <defs>
              <linearGradient id="heartGradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <path
              fill="url(#heartGradientRight)"
              d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z"
            />
          </svg>
        </span>

        {loveBroken && (
          <>
            <div className="pointer-events-none absolute inset-0 z-10 animate-heart-flash rounded-full" />

            <svg
              viewBox="0 0 100 100"
              className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
            >
              <defs>
                <filter id="crackGlow">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#crackGlow)"
                className="animate-crack-appear"
              >
                <path
                  d="M50 2 L46 12 L53 19 L44 28 L52 35 L43 43 L51 50 L42 59 L53 67 L45 76 L51 84 L46 98"
                  stroke="white"
                  strokeWidth="2.5"
                />

                <path
                  d="M46 12 L37 17 L34 25 L27 29
                     M44 28 L34 31 L29 40
                     M43 43 L32 46 L25 54
                     M42 59 L33 65 L29 74
                     M45 76 L35 82 L32 91
                     M53 19 L63 22 L68 30 L75 34
                     M52 35 L63 39 L69 47
                     M51 50 L63 55 L72 62
                     M53 67 L64 73 L70 82
                     M51 84 L61 90 L65 97"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />

                <path
                  d="M34 25 L30 20 M29 40 L22 36 M25 54 L18 58
                     M68 30 L75 25 M69 47 L78 43 M72 62 L81 68"
                  stroke="#f9a8d4"
                  strokeWidth="1.2"
                />
              </g>
            </svg>

            <div className="pointer-events-none absolute inset-0 z-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-pink-100 shadow-[0_0_12px_#fff] animate-heart-particle"
                  style={{
                    "--angle": `${i * 22.5}deg`,
                    "--distance": `${80 + (i % 4) * 25}px`,
                    animationDelay: `${(i % 4) * 0.04}s`,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </button>

      {!loveBroken && (
        <p className="mt-12 animate-pulse text-lg font-medium tracking-widest text-pink-400">
          CLICK THE HEART ❤️
        </p>
      )}
    </>
  ) : (
    <div className="animate-birthday-reveal px-4">
      <div className="mb-8 text-7xl sm:text-8xl">
        🎂💗🎉
      </div>

      <h2 className="font-serif text-5xl font-black leading-tight text-[#e85d9e] sm:text-8xl">
        HAPPY
        <br />
        BIRTHDAY!
        <br/>
        RIDHAN
      </h2>

      <p className="mt-8 text-lg text-[#987187] sm:text-2xl">
        Wishing you endless happiness and love! ❤️
      </p>
    </div>
  )}

</section>



      <footer className="relative z-10 py-8 text-center text-xs tracking-widest text-pink-300">
        MADE WITH LOVE ♡ FOREVER SPECIAL
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </main>
  );
}

export default Birthday;
