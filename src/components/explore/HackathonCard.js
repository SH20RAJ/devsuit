import React from "react";

export default function HackathonCard({
  title = "Hackathon Title",
  description = "Hackathon Description",
  image = "https://via.placeholder.com/300",
  date = "2024-01-01",
  location = "Hackathon Location",
  prize = "Hackathon Prize",
  participants = 0,
  teams = 0,
  status = "Hackathon Status",
  id = "hackathon-id",
  bgColor ,
}) {
  return (
    <div>
      <article className={`card mx-auto w-full max-w-[300px] bg-[${bgColor}] rounded-xl p-2 text-[#d5d5f3]`}>
        <section className="card__hero  border-b hover:border-b-4 transition-all duration-300 cursor-pointer rounded-t-xl p-6 text-sm">
          <header className="card__hero-header flex justify-between items-center gap-4 font-bold">
            <span>{prize}</span>
            <div className="card__icon">
              <svg
                height={20}
                width={20}
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </header>
          <p className="card__job-title my-8 text-2xl font-semibold pr-8">
            {title}
          </p>
        </section>
        <footer className="card__footer flex flex-col justify-start items-start p-3 gap-4 font-bold text-sm md:flex-row md:items-center md:justify-between">
          <div className="card__job-summary flex items-center gap-3">
            <div className="card__job-icon">
              <svg
                height={35}
                width={28}
                viewBox="0 0 250 250"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                />
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                />
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                />
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                />
              </svg>
            </div>
            <div className="card__job">
              <p className="card__job-title">{title}</p>
            </div>
          </div>
          <button className="card__btn w-full font-normal border-none block cursor-pointer text-center p-2.5 rounded-xl bg-[#141417] text-white text-lg md:w-auto">
            view
          </button>
        </footer>
      </article>
    </div>
  );
}
