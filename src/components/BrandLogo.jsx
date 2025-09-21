import React from "react";

function BrandLogo({ className = "" }) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="202"
        height="35"
        viewBox="0 0 202 35"
        fill="none"
      >
        <g filter="url(#filter0_f_573_286)">
          <path
            d="M101.175 27.06C152.703 27.06 194.475 22.5694 194.475 17.03C194.475 11.4906 152.703 7 101.175 7C49.6468 7 7.875 11.4906 7.875 17.03C7.875 22.5694 49.6468 27.06 101.175 27.06Z"
            fill="url(#paint0_radial_573_286)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_573_286"
            x="0.875"
            y="0"
            width="200.6"
            height="34.0601"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.5"
              result="effect1_foregroundBlur_573_286"
            />
          </filter>
          <radialGradient
            id="paint0_radial_573_286"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(101.158 17.3184) rotate(90) scale(9.8433 82.0275)"
          >
            <stop stop-color="white" />
            <stop offset="0.06" stop-color="#FCFFF8" stop-opacity="0.82" />
            <stop offset="0.13" stop-color="#F9FFF2" stop-opacity="0.63" />
            <stop offset="0.2" stop-color="#F7FFED" stop-opacity="0.47" />
            <stop offset="0.27" stop-color="#F5FFE8" stop-opacity="0.33" />
            <stop offset="0.35" stop-color="#F3FFE5" stop-opacity="0.23" />
            <stop offset="0.42" stop-color="#F2FFE2" stop-opacity="0.16" />
            <stop offset="0.5" stop-color="#F2FFE1" stop-opacity="0.11" />
            <stop offset="0.58" stop-color="#F2FFE1" stop-opacity="0.1" />
            <stop offset="1" stop-color="#EFFFDB" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export default BrandLogo;
