
import { useRef, useEffect, useState } from "react";
import Birthday from "./compnents/Brithday";

function App() {
  const [showBirthday, setShowBirthday] = useState(
    () => sessionStorage.getItem("showBirthday") === "true"
  );

  const [startVideo, setStartVideo] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
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
    setIsTransitioning(true);

    setTimeout(() => {
      sessionStorage.setItem("showBirthday", "true");
      setShowBirthday(true);

      audioRef.current?.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }, 1000);
  };

  useEffect(() => {
    if (!showBirthday) return;

    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.3;

    const playAudio = () => {
      audio.play().catch(() => { });
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
            className={`h-full w-full object-contain transition-opacity duration-1000 ${startVideo ? "block" : "hidden"
              } ${isTransitioning ? "opacity-0" : "opacity-100"}`}
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
                  className="group relative mt-5 inline-flex min-h-[76px] items-center justify-center gap-4 overflow-hidden rounded-full border-[3px] border-white/90 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 px-14 py-6 text-xl font-black tracking-widest text-white shadow-[0_12px_40px_rgba(236,72,153,0.5)] animate-bounce hover:scale-110 hover:shadow-[0_15px_55px_rgba(236,72,153,0.7)] active:scale-95 sm:min-h-[88px] sm:px-16 sm:text-2xl">
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  <span className="relative text-4xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
                    🎁
                  </span>

                  <span className="relative transition-all duration-300 group-hover:tracking-[0.2em]">
                    CLICK TO START
                  </span>

                  <span className="relative text-4xl transition-transform duration-300 group-hover:scale-125">
                    ❤️
                  </span>
                </button>

                <p className="mt-5 text-xs font-medium text-purple-700 sm:text-sm">
                  Made with lots of love ✨
                </p>

              </div>


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
        <div className="animate-birthday-fade">
          <Birthday />
        </div>
      )}
    </main>
  );
}

export default App;
