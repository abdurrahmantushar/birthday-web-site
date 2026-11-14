
import { useRef,useEffect, useState } from "react";
import Birthday from "./compnents/Brithday";

function App() {
const [showBirthday, setShowBirthday] = useState(
  () => sessionStorage.getItem("showBirthday") === "true"
);

const [startVideo, setStartVideo] = useState(false);
const videoRef = useRef(null);
const audioRef = useRef(null);

const handleStart = async () => {
  const video = videoRef.current;

  if (!video) return;

  video.currentTime = 0;

  try {
    await video.play();
    setStartVideo(true);
  } catch (error) {
    console.log("Video playback failed:", error);
  }
};

const handleVideoEnd = () => {
  sessionStorage.setItem("showBirthday", "true");
  setShowBirthday(true);

  audioRef.current?.play().catch((error) => {
    console.log("Audio playback failed:", error);
  });
};

useEffect(() => {
  if (!showBirthday) return;

  const audio = audioRef.current;

  if (!audio) return;

  audio.volume = 0.3;

  const playAudio = () => {
    audio.play().catch(() => {});
  };

  playAudio();

  window.addEventListener("click", playAudio);
  window.addEventListener("touchstart", playAudio);

  return () => {
    window.removeEventListener("click", playAudio);
    window.removeEventListener("touchstart", playAudio);
  };
}, [showBirthday]);

  return (
    <main className="min-h-screen w-full overflow-hidden bg-black">
      <audio
        ref={audioRef}
        src="/bgAudio.m4a"
        loop
        preload="auto"
        volume={0.1}
      />
      {!showBirthday ? (
        <section className="relative h-screen w-full">
          <video
            ref={videoRef}
            src="/intro.mp4"
            playsInline
            muted={false}
            controls={false}
            onEnded={handleVideoEnd}
            className={`h-full w-full object-cover ${startVideo ? "block" : "hidden"
              }`}
          />


{!startVideo && (
  <div className="relative flex h-full min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#ffb6d5] via-[#f9c5e8] to-[#c9b6ff]">

\    <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-pink-300/50 blur-3xl" />
    <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-purple-300/50 blur-3xl" />
    <div className="absolute bottom-1/3 left-1/3 h-64 w-64 rounded-full bg-white/30 blur-3xl" />

    <div className="absolute left-[10%] top-[15%] animate-bounce text-5xl sm:text-6xl">
      🎈
    </div>

    <div className="absolute right-[12%] top-[20%] animate-pulse text-4xl sm:text-[120px]">
      ✨
    </div>

    <div className="absolute bottom-[18%] left-[15%] animate-pulse text-4xl sm:text-[120px]">
      🎁
    </div>

    <div className="absolute bottom-[15%] right-[12%] animate-bounce text-5xl sm:text-6xl">
      🎈
    </div>

    <div
      className="absolute left-3 top-8 z-10 w-24 animate-[float_5s_ease-in-out_infinite] sm:left-12 sm:top-12 sm:w-80"
      style={{ "--rotation": "-12deg" }}
    >
      <div className="rotate-[-12deg] rounded-xl border-[5px] border-white bg-white p-1 shadow-[0_15px_40px_rgba(0,0,0,0.22)] transition duration-500 hover:scale-110 hover:rotate-0">
        <img
          src="/image2.jpeg"
          alt="Beautiful Memory"
          className="h-34 w-full rounded-lg object-cover sm:h-120"
        />

        <p className="py-2 text-center text-[10px] font-bold text-pink-600 sm:text-xs">
          A Sweet Memory 💗
        </p>
      </div>
    </div>

    {/* Bottom Right Photo */}
    <div
      className="absolute bottom-8 right-3 z-10 w-24 animate-[float_6s_ease-in-out_infinite] sm:bottom-12 sm:right-12 sm:w-80"
      style={{ "--rotation": "12deg" }}
    >
      <div className="rotate-[12deg] rounded-xl border-[5px] border-white bg-white p-1 shadow-[0_15px_40px_rgba(0,0,0,0.22)] transition duration-500 hover:scale-110 hover:rotate-0">
        <img
          src="/image3.jpeg"
          alt="Special Memory"
          className="h-24 w-full rounded-lg object-cover sm:h-120"
        />

        <p className="py-2 text-center text-[10px] font-bold text-purple-600 sm:text-xs">
          Forever Special ✨
        </p>
      </div>
    </div>

    {/* Main Content */}
    <div className="relative z-20 flex flex-col items-center px-5 text-center">

      <div className="mb-5 animate-pulse text-7xl drop-shadow-lg sm:text-8xl">
        🎂
      </div>

      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-pink-700 sm:text-sm sm:tracking-[0.4em]">
        A Special Day Is Waiting
      </p>

      <h1 className="mb-3 text-4xl font-extrabold text-white drop-shadow-lg sm:text-6xl">
        Let's Celebrate!
      </h1>

      <p className="mb-9 max-w-sm text-sm font-medium text-purple-800 sm:text-lg">
        Something beautiful is waiting for you. Are you ready? 💖
      </p>

      <button
        onClick={handleStart}
        className="group rounded-full border-2 border-white/70 bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 text-base font-extrabold tracking-wide text-white shadow-[0_10px_35px_rgba(236,72,153,0.4)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_45px_rgba(236,72,153,0.6)] active:scale-95 sm:px-10 sm:text-lg"
      >
        <span className="transition group-hover:tracking-widest">
          Tap to Start ❤️
        </span>
      </button>

      <p className="mt-5 text-xs font-medium text-purple-700 sm:text-sm">
        Made with lots of love ✨
      </p>

    </div>

    {/* Floating Animation */}
    <style>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-12px);
        }
      }
    `}</style>

  </div>
)}

        </section>
      ) : (
        <Birthday/>
      )}
    </main>
  );
}

export default App;
