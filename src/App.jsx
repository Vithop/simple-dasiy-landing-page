import { BasicLandingPage } from "./lib/landing-pages/basic-landing-page.jsx";
import { CoolCorpIcon } from "./cool-corp-logo.jsx";
// import { BasicLandingPage } from "./lib/landing-pages/simple-react-dasiy-landing-page.js";

export default function App() {
  return (
    <BasicLandingPage
      title={"DaisyCorp"}
      titleIcon={CoolCorpIcon}
      landingHeroTitle={"YOU MADE IT!"}
      landingHeroContent={
        "Yo lets get this party started. We making some crazy stuff you gotta try"
      }
      landingHeroCallToActionCallback={coolAlert}
      landingHeroCallToActionText="Become Cool"
      landingHeroImageUrl="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      footerTitleContent="Making people cool since you were born"
      twitterURL="https://x.com/knowyourmeme?lang=en"
      youTubeURL="https://www.youtube.com/user/vsauce"
      faceBookURL="https://en.wikipedia.org/wiki/Splendid_fairywren"
    >
      <CoolCorpIcon />
    </BasicLandingPage>
  );
}

const coolAlert = () => {
  alert("Hey cool person! Give me money!");
};
