import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

export function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="bg-dark_purple text-pink flex flex-col items-center justify-center gap-2 h-[100px]">
      <div className="flex">
        <a href="https://github.com/sam-grs">
          <GithubLogo size={30} />
        </a>
        <a href="https://www.linkedin.com/in/samira-grossi/">
          <LinkedinLogo size={30} />
        </a>
      </div>
      <h4>Galactka {date}</h4>
    </div>
  );
}
