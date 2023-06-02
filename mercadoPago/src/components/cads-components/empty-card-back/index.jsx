import { useSelector } from "react-redux";

const EmptyCardBack = ({ dataForm }) => {
  const { colorCard } = useSelector((state) => state.newCard);

  return (
    <div className="relative">
      <div className="absolute bottom-4 left-4 min-w-[58px] h-[32px] rounded bg-[#333333]/80 flex justify-center px-2 items-center">
        <p className="text-white font-semibold text-sm leading-[17px]">
          {dataForm?.cvv}
        </p>
      </div>
      <svg
        width="328"
        height="216"
        viewBox="0 0 328 216"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_916_1645)">
          <rect
            width="328"
            height="216"
            rx="10"
            transform="matrix(-1 0 0 1 328 0)"
            fill="url(#paint0_linear_916_1645)"
          />
          <circle
            cx="180"
            cy="180"
            r="180"
            transform="matrix(-1 0 0 1 231 -20)"
            fill="url(#paint1_linear_916_1645)"
          />
          <circle
            cx="180"
            cy="180"
            r="180"
            transform="matrix(-1 0 0 1 157 26)"
            fill="url(#paint2_linear_916_1645)"
          />
          <rect y="32" width="328" height="49" fill="#333333" />
          <rect
            x="16"
            y="168"
            width="38"
            height="32"
            rx="4"
            fill="none"
            fillOpacity="0.7"
          />
          <path
            d="M30.2901 187.134C30.0288 187.134 29.7815 187.069 29.5481 186.938C29.3148 186.807 29.1281 186.63 28.9881 186.406C28.8575 186.173 28.7921 185.907 28.7921 185.608C28.7921 185.319 28.8575 185.062 28.9881 184.838C29.1281 184.605 29.3148 184.423 29.5481 184.292C29.7815 184.161 30.0288 184.096 30.2901 184.096C30.5701 184.096 30.8221 184.161 31.0461 184.292C31.2795 184.423 31.4615 184.605 31.5921 184.838C31.7321 185.062 31.8021 185.319 31.8021 185.608C31.8021 185.907 31.7321 186.173 31.5921 186.406C31.4615 186.63 31.2795 186.807 31.0461 186.938C30.8221 187.069 30.5701 187.134 30.2901 187.134ZM34.9933 187.134C34.7319 187.134 34.4846 187.069 34.2513 186.938C34.0179 186.807 33.8313 186.63 33.6913 186.406C33.5606 186.173 33.4953 185.907 33.4953 185.608C33.4953 185.319 33.5606 185.062 33.6913 184.838C33.8313 184.605 34.0179 184.423 34.2513 184.292C34.4846 184.161 34.7319 184.096 34.9933 184.096C35.2733 184.096 35.5253 184.161 35.7493 184.292C35.9826 184.423 36.1646 184.605 36.2953 184.838C36.4353 185.062 36.5053 185.319 36.5053 185.608C36.5053 185.907 36.4353 186.173 36.2953 186.406C36.1646 186.63 35.9826 186.807 35.7493 186.938C35.5253 187.069 35.2733 187.134 34.9933 187.134ZM39.6964 187.134C39.4351 187.134 39.1877 187.069 38.9544 186.938C38.7211 186.807 38.5344 186.63 38.3944 186.406C38.2637 186.173 38.1984 185.907 38.1984 185.608C38.1984 185.319 38.2637 185.062 38.3944 184.838C38.5344 184.605 38.7211 184.423 38.9544 184.292C39.1877 184.161 39.4351 184.096 39.6964 184.096C39.9764 184.096 40.2284 184.161 40.4524 184.292C40.6857 184.423 40.8677 184.605 40.9984 184.838C41.1384 185.062 41.2084 185.319 41.2084 185.608C41.2084 185.907 41.1384 186.173 40.9984 186.406C40.8677 186.63 40.6857 186.807 40.4524 186.938C40.2284 187.069 39.9764 187.134 39.6964 187.134Z"
            fill="none"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_916_1645"
            x1="0"
            y1="0"
            x2="328"
            y2="216"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={colorCard?.color1} />
            <stop offset="1" stopColor={colorCard?.color1} />
          </linearGradient>
          <linearGradient
            id="paint1_linear_916_1645"
            x1="12.5"
            y1="81"
            x2="116.5"
            y2="150"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={colorCard?.color2} />
            <stop offset="1" stopColor={colorCard?.color2} />
          </linearGradient>
          <linearGradient
            id="paint2_linear_916_1645"
            x1="10.5"
            y1="52"
            x2="165.5"
            y2="197"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={colorCard?.color3} />
            <stop offset="1" stopColor={colorCard?.color3} />
          </linearGradient>
          <clipPath id="clip0_916_1645">
            <rect
              width="328"
              height="216"
              rx="10"
              transform="matrix(-1 0 0 1 328 0)"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default EmptyCardBack;
