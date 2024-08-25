import PropTypes from "prop-types";

BasicLandingPage.propTypes = {
  title: PropTypes.string.isRequired,
  titleIcon: PropTypes.elementType.isRequired,
  landingHeroTitle: PropTypes.string.isRequired,
  landingHeroContent: PropTypes.string.isRequired,
  landingHeroCallToActionCallback: PropTypes.func,
  landingHeroCallToActionText: PropTypes.string.isRequired,
  landingHeroImageUrl: PropTypes.string,
};

export function BasicLandingPage({
  title,
  titleIcon,
  landingHeroTitle,
  landingHeroContent,
  landingHeroCallToActionCallback,
  landingHeroCallToActionText,
  landingHeroImageUrl,
}) {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">{title}</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            {titleIcon()}
            <svg></svg>
          </button>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">{landingHeroTitle}</h1>
            <p className="py-6">{landingHeroContent}</p>
            <button
              className="btn btn-primary"
              onPointerDown={landingHeroCallToActionCallback}
            >
              {landingHeroCallToActionText}
            </button>
            <img
              src={landingHeroImageUrl}
              className="hero py-8 rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
