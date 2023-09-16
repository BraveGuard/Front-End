import { useLocation } from "react-router-dom";

export const Tabs = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return null;
  }
  return (
    <div className="flex w-full p-4 bg-black rounded-t-md">
      <svg
        width={15}
        height={16}
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M7.43555 7.7168C9.35156 7.7168 10.9775 6.01172 10.9775 3.80566C10.9775 1.65234 9.34277 0 7.43555 0C5.51953 0 3.87598 1.67871 3.88477 3.82324C3.88477 6.01172 5.51074 7.7168 7.43555 7.7168ZM1.95117 15.8906H12.9023C14.3525 15.8906 14.8535 15.4512 14.8535 14.6426C14.8535 12.3838 11.9883 9.27246 7.42676 9.27246C2.87402 9.27246 0 12.3838 0 14.6426C0 15.4512 0.500977 15.8906 1.95117 15.8906Z"
          fill="white"
          fill-opacity="0.6"
        />
      </svg>
      <div className="w-[42.87px] h-[34.05px] rounded-[10px] bg-[#afb2b9]" />
      <div className="w-[37.05px] h-[29.7px] rounded-[10px] bg-[#2d2c2c]" />
      <svg
        width={22}
        height={22}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <mask id="path-1-inside-1_212_4625" fill="white">
          <path d="M11 22L5.33867 19.4126C3.72473 18.6767 2.37506 17.5779 1.43452 16.2342C0.493973 14.8905 -0.00193697 13.3527 5.68569e-06 11.7857V1.57143C0.000491039 1.15479 0.193801 0.75533 0.537513 0.46072C0.881224 0.16611 1.34726 0.000416017 1.83334 0H20.1667C20.6527 0.000416017 21.1188 0.16611 21.4625 0.46072C21.8062 0.75533 21.9995 1.15479 22 1.57143V11.7857C22.0019 13.3527 21.506 14.8905 20.5655 16.2342C19.6249 17.5779 18.2753 18.6767 16.6613 19.4126L11 22ZM1.83334 1.57143V11.7857C1.83182 13.0678 2.23768 14.3261 3.00737 15.4255C3.77706 16.5249 4.88151 17.4238 6.20217 18.0259L11 20.2188L15.7978 18.0266C17.1186 17.4245 18.2232 16.5255 18.9929 15.4259C19.7626 14.3264 20.1683 13.068 20.1667 11.7857V1.57143H1.83334Z" />
        </mask>
        <path
          d="M11 22L5.33867 19.4126C3.72473 18.6767 2.37506 17.5779 1.43452 16.2342C0.493973 14.8905 -0.00193697 13.3527 5.68569e-06 11.7857V1.57143C0.000491039 1.15479 0.193801 0.75533 0.537513 0.46072C0.881224 0.16611 1.34726 0.000416017 1.83334 0H20.1667C20.6527 0.000416017 21.1188 0.16611 21.4625 0.46072C21.8062 0.75533 21.9995 1.15479 22 1.57143V11.7857C22.0019 13.3527 21.506 14.8905 20.5655 16.2342C19.6249 17.5779 18.2753 18.6767 16.6613 19.4126L11 22ZM1.83334 1.57143V11.7857C1.83182 13.0678 2.23768 14.3261 3.00737 15.4255C3.77706 16.5249 4.88151 17.4238 6.20217 18.0259L11 20.2188L15.7978 18.0266C17.1186 17.4245 18.2232 16.5255 18.9929 15.4259C19.7626 14.3264 20.1683 13.068 20.1667 11.7857V1.57143H1.83334Z"
          fill="#ABABAB"
        />
        <path
          d="M11 22L9.33732 25.6381L11 26.3979L12.6627 25.6381L11 22ZM5.33867 19.4126L7.00135 15.7746L6.99829 15.7732L5.33867 19.4126ZM5.68569e-06 11.7857L4.00001 11.7907V11.7857H5.68569e-06ZM5.68569e-06 1.57143L-3.99999 1.56677V1.57143H5.68569e-06ZM1.83334 0V-4L1.82991 -4L1.83334 0ZM20.1667 0L20.1701 -4H20.1667V0ZM22 1.57143H26L26 1.56677L22 1.57143ZM22 11.7857H18L18 11.7907L22 11.7857ZM16.6613 19.4126L15.0017 15.7732L14.9987 15.7746L16.6613 19.4126ZM1.83334 1.57143V-2.42857H-2.16666V1.57143H1.83334ZM1.83334 11.7857L5.83334 11.7905V11.7857H1.83334ZM6.20217 18.0259L7.86498 14.3879L7.86135 14.3862L6.20217 18.0259ZM11 20.2188L9.33719 23.8568L10.9997 24.6167L12.6623 23.857L11 20.2188ZM15.7978 18.0266L14.1386 14.387L14.1355 14.3884L15.7978 18.0266ZM20.1667 11.7857H16.1667L16.1667 11.791L20.1667 11.7857ZM20.1667 1.57143H24.1667V-2.42857H20.1667V1.57143ZM12.6627 18.3619L7.00135 15.7746L3.67599 23.0507L9.33732 25.6381L12.6627 18.3619ZM6.99829 15.7732C5.97915 15.3084 5.20948 14.6519 4.71148 13.9404L-1.84245 18.528C-0.459361 20.5039 1.4703 22.0449 3.67905 23.0521L6.99829 15.7732ZM4.71148 13.9404C4.21914 13.237 3.99913 12.4954 4 11.7907L-3.99999 11.7808C-4.003 14.2099 -3.23119 16.544 -1.84245 18.528L4.71148 13.9404ZM4.00001 11.7857V1.57143H-3.99999V11.7857H4.00001ZM4 1.57609C3.999 2.43495 3.59571 3.10772 3.14068 3.49775L-2.06565 -2.57631C-3.2081 -1.59706 -3.99802 -0.12538 -3.99999 1.56677L4 1.57609ZM3.14068 3.49775C2.70461 3.87152 2.22832 3.99966 1.83676 4L1.82991 -4C0.466189 -3.99883 -0.94216 -3.5393 -2.06565 -2.57631L3.14068 3.49775ZM1.83334 4H20.1667V-4H1.83334V4ZM20.1632 4C19.7717 3.99966 19.2954 3.87152 18.8593 3.49775L24.0657 -2.57631C22.9422 -3.5393 21.5338 -3.99883 20.1701 -4L20.1632 4ZM18.8593 3.49775C18.4043 3.10772 18.001 2.43495 18 1.57609L26 1.56677C25.998 -0.125375 25.2081 -1.59706 24.0657 -2.57631L18.8593 3.49775ZM18 1.57143V11.7857H26V1.57143H18ZM18 11.7907C18.0009 12.4954 17.7809 13.237 17.2885 13.9404L23.8424 18.528C25.2312 16.544 26.003 14.2099 26 11.7808L18 11.7907ZM17.2885 13.9404C16.7905 14.6519 16.0209 15.3084 15.0017 15.7732L18.3209 23.0521C20.5297 22.0449 22.4594 20.5039 23.8424 18.528L17.2885 13.9404ZM14.9987 15.7746L9.33732 18.3619L12.6627 25.6381L18.324 23.0507L14.9987 15.7746ZM-2.16666 1.57143V11.7857H5.83334V1.57143H-2.16666ZM-2.16666 11.781C-2.1692 13.9254 -1.48735 15.9799 -0.269377 17.7196L6.28412 13.1314C5.96271 12.6723 5.83284 12.2103 5.83334 11.7905L-2.16666 11.781ZM-0.269377 17.7196C0.942941 19.4512 2.62746 20.7923 4.54299 21.6655L7.86135 14.3862C7.13555 14.0553 6.61118 13.5985 6.28412 13.1314L-0.269377 17.7196ZM4.53936 21.6639L9.33719 23.8568L12.6628 16.5808L7.86498 14.3879L4.53936 21.6639ZM12.6623 23.857L17.4601 21.6649L14.1355 14.3884L9.33768 16.5806L12.6623 23.857ZM17.457 21.6663C19.3727 20.793 21.0574 19.4517 22.2697 17.7199L15.716 13.132C15.3889 13.5992 14.8645 14.0561 14.1386 14.387L17.457 21.6663ZM22.2697 17.7199C23.4877 15.9799 24.1695 13.9251 24.1667 11.7804L16.1667 11.791C16.1672 12.2109 16.0374 12.6729 15.716 13.132L22.2697 17.7199ZM24.1667 11.7857V1.57143H16.1667V11.7857H24.1667ZM20.1667 -2.42857H1.83334V5.57143H20.1667V-2.42857Z"
          fill="#ABABAB"
          mask="url(#path-1-inside-1_212_4625)"
        />
      </svg>
      <svg
        width={27}
        height={27}
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[27px] h-[27px]"
        preserveAspectRatio="none"
      >
        <path
          d="M19.125 2.25H7.875C4.77 2.25 2.25 4.75875 2.25 7.8525V14.58V15.705C2.25 18.7987 4.77 21.3075 7.875 21.3075H9.5625C9.86625 21.3075 10.2712 21.51 10.4625 21.7575L12.15 23.9963C12.8925 24.9862 14.1075 24.9862 14.85 23.9963L16.5375 21.7575C16.7512 21.4762 17.0887 21.3075 17.4375 21.3075H19.125C22.23 21.3075 24.75 18.7987 24.75 15.705V7.8525C24.75 4.75875 22.23 2.25 19.125 2.25ZM14.625 15.4688H7.875C7.41375 15.4688 7.03125 15.0863 7.03125 14.625C7.03125 14.1637 7.41375 13.7812 7.875 13.7812H14.625C15.0863 13.7812 15.4688 14.1637 15.4688 14.625C15.4688 15.0863 15.0863 15.4688 14.625 15.4688ZM19.125 9.84375H7.875C7.41375 9.84375 7.03125 9.46125 7.03125 9C7.03125 8.53875 7.41375 8.15625 7.875 8.15625H19.125C19.5863 8.15625 19.9688 8.53875 19.9688 9C19.9688 9.46125 19.5863 9.84375 19.125 9.84375Z"
          fill="#ABABAB"
        />
      </svg>
      <div className="w-[19px] h-[3px] rounded-[20px] bg-[#4d94ff]" />
      <svg
        width={22}
        height={23}
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[20.58px] h-[22.5px]"
        preserveAspectRatio="none"
      >
        <path
          d="M7.90572 21.3799V17.9297C7.9057 17.0554 8.59032 16.345 9.43831 16.3395H12.552C13.4038 16.3395 14.0943 17.0515 14.0943 17.9297V21.3699C14.0943 22.1282 14.6877 22.7445 15.4232 22.75H17.5475C18.5396 22.7526 19.492 22.3481 20.1944 21.6258C20.8969 20.9034 21.2917 19.9226 21.2917 18.8997V9.09908C21.2916 8.27281 20.9364 7.48905 20.3217 6.95894L13.1049 1.00855C11.8434 -0.0322372 10.0417 0.00138423 8.81752 1.08856L1.75594 6.95894C1.11215 7.47342 0.727358 8.25951 0.708344 9.09908V18.8897C0.708344 21.0217 2.38467 22.75 4.45253 22.75H6.52832C6.88245 22.7526 7.22295 22.6095 7.47427 22.3522C7.72559 22.095 7.86693 21.745 7.86692 21.3799H7.90572Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
