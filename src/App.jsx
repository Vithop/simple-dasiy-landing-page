import { BasicLandingPage } from "./lib/landing-pages/basic-landing-page.jsx";
export default function App() {
  return (
    <BasicLandingPage
      title={"DaisyCorp"}
      titleIcon={TitleIcon}
      landingHeroTitle={"YOU MADE IT!"}
      landingHeroContent={
        "Yo lets get this party started. We making some crazy stuff you gotta try"
      }
      landingHeroCallToActionCallback={coolAlert}
      landingHeroCallToActionText="Become Cool"
      landingHeroImageUrl="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
    />
  );
}

function TitleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="inline-block h-5 w-5 stroke-current"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      ></path>
    </svg>
  );
}

const coolAlert = () => {
  alert("Hey cool person! Give me money!");
};
