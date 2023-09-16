import { Link } from "react-router-dom";
import { AnimalIcon, CarIcon, HomeIcon, PlaneIcon, TvIcon } from "./Icons";

//   vehicle: "bg-[#00A2FF6E]",
//   travel: "bg-[#9BE0DC]",

const buttons = [
  {
    name: "all",
    icon: "All",
  },
  {
    name: "vehicle",
    icon: CarIcon,
  },
  {
    name: "pet",
    icon: AnimalIcon,
  },
  {
    name: "travel",
    icon: PlaneIcon,
  },
  {
    name: "home",
    icon: HomeIcon,
  },
  {
    name: "tv",
    icon: TvIcon,
  },
];
export const CategoryButtons = ({
  onButtonClick,
  active = "all",
}: {
  onButtonClick: (name: string) => void;
  active: string;
}) => {
  return (
    <div className="flex gap-3 px-2 hidde">
      {buttons.map((b) => (
        <button
          onClick={() => onButtonClick(b.name)}
          className="min-h-[56px] max-h-[56px]  min-w-[56px] max-w-[56px]"
        >
          <CategoryButton active={active == b.name} icon={b.icon} />
        </button>
      ))}
    </div>
  );
};

const CategoryButton = ({
  icon,
  active = false,
}: {
  active?: boolean;
  icon: string | (() => JSX.Element);
}) => {
  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <div>{typeof icon == "string" ? icon : icon()}</div>
      <div className="absolute left-0 top-0">
        <Ring active={active}></Ring>
      </div>
    </div>
  );
};

const Ring = ({ active = false }: { active: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="56"
      viewBox="0 0 55 56"
      fill="none"
    >
      <path
        d="M4.56041 24.1052C4.56041 25.2547 3.645 26.1842 2.51291 26.1842H2.48854H2.48312C1.3402 26.1842 0.413954 25.2409 0.416662 24.0804V17.6949C0.416662 7.07993 6.94375 0.499176 17.3546 0.499176H37.6481C48.105 0.499176 54.5833 7.07993 54.5833 17.7032V38.3282C54.5833 48.9212 48.105 55.4992 37.6481 55.4992H17.3275C6.895 55.4992 0.416662 48.9212 0.419371 38.3199C0.419371 37.1594 1.34562 36.2162 2.49125 36.2162C3.63687 36.2162 4.56312 37.1594 4.56312 38.3199C4.56312 46.6634 9.08875 51.2834 17.3546 51.2834H37.6481C45.8896 51.2834 50.4396 46.6882 50.4396 38.3199V17.6949C50.4396 9.32668 45.9167 4.70668 37.6481 4.70668H17.3519C9.11041 4.70668 4.56041 9.32668 4.56041 17.6949V24.0557V24.1052Z"
        fill={active ? "#00A2FF6E" : "#68687D"}
      />
    </svg>
  );
};
