
"use client";

import { useRef, useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
  Stars,
  Moon,
  Sun,
  Mail,
  RotateCcw,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const scenes = [
  {
    label: "A LITTLE BEGINNING",
    title: <>Every story<br />starts <i className="text-[var(--wine)]">somewhere.</i></>,
    copy: "Ours started with two people who had no idea how much they would come to mean to each other.",
    kind: "opening",
    next: "Come with me",
  },
  {
    label: "AND THEN, YOU",
    title: <>Somehow,<br /><i className="text-[var(--wine)]">it became you.</i></>,
    copy: "Out of all the people in this world, I'm so glad our paths crossed. I'm glad I got to know you, little by little.",
    kind: "you",
    next: "Keep going",
  },
  {
    label: "THE LITTLE THINGS",
    title: <>The moments<br />that became <i className="text-[var(--wine)]">ours.</i></>,
    copy: "The random talks. The silly jokes. The tiny things that might look ordinary to everyone else, but mean everything to me.",
    kind: "moments",
    next: "There's more",
  },
  {
    label: "NINE MONTHS",
    title: <>Nine months<br />of <i className="text-[var(--wine)]">us.</i></>,
    copy: "Nine months of learning, laughing, growing, and making a little world that feels like ours. And this is only one chapter.",
    kind: "nine",
    next: "One last thing",
  },
  {
    label: "IF I COULD TELL YOU ONE THING",
    title: <>You are my<br /><i className="text-[var(--wine)]">favourite part.</i></>,
    copy: "Not because every day is perfect, but because even the normal days feel a little more special with you in them.",
    kind: "heart",
    next: "Open your letter",
  },
  {
    label: "A LETTER FOR YOU",
    title: <>Just for<br /><i className="text-[var(--wine)]">you.</i></>,
    copy: "I wrote you a little something. Take your time.",
    kind: "letter",
    next: "The end",
  },
  {
    label: "OUR STORY CONTINUES",
    title: <>This isn't<br />the end. <i className="text-[var(--wine)]">♡</i></>,
    copy: "It's just one little page in a story I hope we keep writing together.",
    kind: "ending",
    next: "One last question",
  },
  {
    label: "BE HONEST WITH ME",
    title: <>Mein tumhara<br /><i className="text-[var(--wine)]">jaanu</i> hoon?</>,
    copy: "I have one very important question for you...",
    kind: "question",
    next: "Haan, obviously!",
  },
];

function FloatingScene() {
  const positions = [
    "left-[8%] top-[20%] text-2xl",
    "left-[24%] top-[76%] text-lg",
    "left-[42%] top-[10%] text-xl",
    "left-[70%] top-[75%] text-2xl",
    "left-[84%] top-[22%] text-lg",
    "left-[92%] top-[54%] text-3xl",
  ];

  return (
    <div className="scene" aria-hidden="true">
      {positions.map((p, i) => (
        <Heart
          key={i}
          fill="currentColor"
          strokeWidth={1}
          className={`heart-float ${p}`}
        />
      ))}
    </div>
  );
}

function SceneArt({ kind }) {
  if (kind === "opening") {
    return (
      <div className="story-art relative mx-auto flex aspect-square w-full max-w-[290px] items-center justify-center rounded-full">
        <div className="absolute inset-[9%] rounded-full border border-[rgba(120,55,71,.25)]" />
        <div className="absolute inset-[20%] rounded-full border border-dashed border-[rgba(120,55,71,.25)]" />
        <Heart
          size={68}
          strokeWidth={1}
          fill="rgba(120,55,71,.13)"
          className="text-[var(--wine)]"
        />
        <span className="absolute right-[13%] top-[16%] serif text-3xl text-[var(--wine)]">
          ✳
        </span>
      </div>
    );
  }

  if (kind === "you") {
    return (
      <div className="story-art relative mx-auto flex aspect-square w-full max-w-[290px] items-center justify-center rounded-full">
        <div className="absolute inset-[12%] rounded-full border border-[rgba(120,55,71,.24)]" />
        <div className="absolute inset-[25%] rounded-full border border-dashed border-[rgba(120,55,71,.24)]" />
        <div className="text-center">
          <Heart
            size={34}
            className="mx-auto text-[var(--wine)]"
            strokeWidth={1}
          />
          <p className="serif mt-3 text-5xl italic text-[var(--wine)]">
            you
          </p>
          <p className="eyebrow mt-2 text-[var(--wine)]">
            MY FAVOURITE PERSON
          </p>
        </div>
      </div>
    );
  }

  if (kind === "moments") {
    return (
      <div className="mx-auto grid w-full max-w-[300px] grid-cols-2 gap-3">
        <div className="story-art flex aspect-[.85] -rotate-3 flex-col items-center justify-center p-3 text-center shadow-lg">
          <Sun
            size={28}
            className="text-[var(--wine)]"
            strokeWidth={1}
          />
          <span className="serif mt-4 text-2xl italic">
            the laughs
          </span>
        </div>

        <div className="story-art mt-8 flex aspect-[.85] rotate-3 flex-col items-center justify-center p-3 text-center shadow-lg">
          <Moon
            size={28}
            className="text-[var(--wine)]"
            strokeWidth={1}
          />
          <span className="serif mt-4 text-2xl italic">
            the talks
          </span>
        </div>
      </div>
    );
  }

  if (kind === "nine") {
    return (
      <div className="story-art relative mx-auto flex aspect-square w-full max-w-[290px] items-center justify-center rounded-full">
        <div className="absolute inset-[8%] rounded-full border border-[rgba(120,55,71,.24)]" />
        <div className="absolute inset-[18%] rounded-full border border-dashed border-[rgba(120,55,71,.24)]" />

        <div className="text-center">
          <p className="serif text-8xl tracking-[-.08em] text-[var(--wine)]">
            09
          </p>
          <p className="eyebrow mt-1 text-[var(--wine)]">
            MONTHS OF US
          </p>
        </div>

        <Sparkles
          className="absolute right-[17%] top-[17%] text-[var(--wine)]"
          size={25}
        />
      </div>
    );
  }

  if (kind === "heart") {
    return (
      <div className="relative mx-auto flex aspect-square w-full max-w-[290px] items-center justify-center">
        <Heart
          size={190}
          strokeWidth={0.6}
          fill="rgba(120,55,71,.12)"
          className="text-[var(--wine)]"
        />
        <Heart
          size={76}
          strokeWidth={1}
          className="absolute text-[var(--wine)]"
        />
      </div>
    );
  }

  if (kind === "letter") {
    return (
      <div className="mx-auto flex aspect-square w-full max-w-[290px] items-center justify-center rounded-full bg-[#ead5cc]">
        <div className="flex h-36 w-36 items-center justify-center rounded-full border border-[var(--wine)]">
          <Mail
            size={48}
            strokeWidth={0.8}
            className="text-[var(--wine)]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="story-art relative mx-auto flex aspect-square w-full max-w-[290px] items-center justify-center rounded-full">
      <Stars
        size={64}
        strokeWidth={0.8}
        className="text-[var(--wine)]"
      />
      <span className="absolute bottom-[20%] serif text-3xl italic text-[var(--wine)]">
        to be continued
      </span>
    </div>
  );
}

export default function StoryExperience() {
  const [index, setIndex] = useState(0);
  const [letterOpen, setLetterOpen] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [direction, setDirection] = useState(1);

  const page = useRef(null);
  const current = scenes[index];

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(".animate-in");

      gsap.fromTo(
        targets,
        {
          autoAlpha: 0,
          y: direction > 0 ? 26 : -26,
          rotateX: direction > 0 ? 3 : -3,
        },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.75,
          stagger: 0.09,
          ease: "power3.out",
          clearProps: "transform",
        }
      );

      gsap.fromTo(
        ".art-in",
        {
          autoAlpha: 0,
          scale: 0.88,
          rotate: direction > 0 ? 4 : -4,
        },
        {
          autoAlpha: 1,
          scale: 1,
          rotate: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.12,
        }
      );
    },
    { dependencies: [index], scope: page }
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === "Enter") {
        if (index === 5 && !letterOpen) return;

        setDirection(1);
        setIndex((v) => (v + 1) % scenes.length);
        setLetterOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setDirection(-1);
        setIndex((v) => Math.max(0, v - 1));
        setLetterOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, letterOpen]);

  function goNext() {
    if (index === 5 && !letterOpen) {
      setLetterOpen(true);
      return;
    }

    if (index === 5 && letterOpen) {
      setDirection(1);
      setIndex(6);
      setLetterOpen(false);
      return;
    }

    if (index === 7) {
      setDirection(-1);
      setIndex(0);
      setLetterOpen(false);
      setAnswered(false);
      return;
    }

    setDirection(1);
    setIndex((v) => Math.min(scenes.length - 1, v + 1));
    setLetterOpen(false);
  }

  function goBack() {
    if (index > 0) {
      setDirection(-1);
      setIndex((v) => v - 1);
      setLetterOpen(false);
    }
  }

  return (
    <div className="story-shell" ref={page}>
      <FloatingScene />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-66px)] w-full max-w-6xl flex-col justify-center px-5 pb-24 pt-8 sm:px-10 sm:pb-28">
        <div className="mb-8 flex items-center justify-between">
          <span className="eyebrow text-[var(--wine)]">
            A STORY ABOUT US
          </span>

          <span className="eyebrow text-[var(--muted)]">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(scenes.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[1fr_.9fr] md:gap-14">
          <div className="order-2 md:order-1">
            <p className="animate-in eyebrow text-[var(--wine)]">
              {current.label}
            </p>

            <h1 className="animate-in serif mt-6 text-[clamp(3.5rem,8vw,6.8rem)] leading-[.88] tracking-[-.07em]">
              {current.title}
            </h1>

            <p className="animate-in mt-7 max-w-md text-base leading-7 text-[var(--muted)] sm:text-lg">
              {current.copy}
            </p>

            {current.kind === "letter" && letterOpen && (
              <div className="animate-in mt-8 border-l border-[var(--wine)] pl-5 text-left">
                <p className="serif text-2xl italic text-[var(--wine)]">
                  Hey, my love,
                </p>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  Happy nine months. Thank you for being part of my
                  life, for all the little moments we've shared, and
                  for being someone I keep choosing. I hope we get
                  to make so many more memories, laugh at a million
                  more silly things, and keep growing together. If I
                  could choose again, I'd still want this story with
                  you.
                </p>

                <p className="serif mt-5 text-2xl italic text-[var(--wine)]">
                  Always yours,
                </p>

                <p className="eyebrow mt-2 text-[var(--muted)]">
                  YOUR NAME HERE ♡
                </p>
              </div>
            )}

            {current.kind === "question" && (
              <div className="animate-in mt-8 flex flex-wrap gap-3">
                <button
                  className="story-button"
                  onClick={() => setAnswered(true)}
                >
                  Haan, obviously! ♡
                </button>

                <button
                  className="story-button"
                  onClick={() => setAnswered(true)}
                >
                  Bilkul, jaanuu! 💗
                </button>
              </div>
            )}

            {current.kind === "question" && answered && (
              <p className="animate-in mt-5 serif text-2xl italic text-[var(--wine)]">
                Hehe, I knew it! I love youuu ♡
              </p>
            )}

            <p className="animate-in mt-8 flex items-center gap-2 eyebrow text-[var(--muted)]">
              <Heart size={12} className="text-[var(--wine)]" />
              {index === 6
                ? "OUR NEXT CHAPTER IS WAITING"
                : index === 7
                  ? "I HOPE YOU SAID YES ♡"
                  : "TAKE YOUR TIME"}
            </p>
          </div>

          <div className="art-in order-1 flex items-center justify-center md:order-2">
            {current.kind === "letter" && letterOpen ? (
              <button
                className="letter-envelope open"
                onClick={() => setLetterOpen(false)}
                aria-label="Close letter"
              >
                <span className="letter-back" />
                <span className="letter-paper">
                  <span className="serif text-center text-2xl italic text-[var(--wine)]">
                    with love ♡
                  </span>
                </span>
                <span className="letter-front" />
                <span className="letter-flap" />
                <span className="absolute left-1/2 top-[45%] z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--wine)] text-[#fffaf3]">
                  <Heart size={20} fill="currentColor" />
                </span>
              </button>
            ) : (
              <SceneArt kind={current.kind} />
            )}
          </div>
        </div>

        {index === 0 && (
          <p className="animate-in mt-12 text-center serif text-lg italic text-[var(--muted)]">
            A little something I made just for you ↓
          </p>
        )}
      </div>

      <div className="story-controls">
        <button
          className="story-button"
          onClick={goBack}
          disabled={index === 0}
        >
          <ArrowLeft size={14} />
          <span className="hidden sm:inline">Back</span>
        </button>

        <div
          className="flex items-center justify-center gap-2"
          aria-label={`Page ${index + 1} of ${scenes.length}`}
        >
          {scenes.map((s, i) => (
            <span
              key={s.label}
              className={`story-dot ${i === index ? "active" : ""}`}
            />
          ))}
        </div>

        <button className="story-button" onClick={goNext}>
          {index === 7 ? (
            <>
              <RotateCcw size={14} /> Again
            </>
          ) : index === 5 && !letterOpen ? (
            <>
              <Mail size={14} /> Open letter
            </>
          ) : index === 5 && letterOpen ? (
            <>
              Continue <ArrowRight size={14} />
            </>
          ) : (
            <>
              {current.next} <ArrowRight size={14} />
            </>
          )}
        </button>
      </div>

      <div className="fixed bottom-[65px] left-0 right-0 z-20 h-[2px] bg-[rgba(120,55,71,.08)]">
        <div
          className="story-progress-fill"
          style={{
            width: `${((index + 1) / scenes.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
