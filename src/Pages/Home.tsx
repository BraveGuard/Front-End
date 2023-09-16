import { useState } from "react";
import { ArticleCard } from "../components/Article";
import { CategoryButtons } from "../components/CategoryButtons";
import { Conversation } from "../components/Conversation";
import { ProfileCard } from "../components/Profile";
import { Policies } from "./Policies";
import { Tabs } from "../components/Tabs";

export const Home = () => {
  const [policyState, setPolicyState] = useState("");

  const onButtonClick = (name: string) => {
    setPolicyState(name);
  };
  return (
    <div className="flex  flex-col h-full ">
      <div className="flex-1 overflow-hidden">
        <div className="flex  py-2  px-4 flex-col gap-6 bg-white">
          <ProfileCard></ProfileCard>

          <span className="text-md font-bold">Browse by Category</span>
          <div className="overflow-y-scroll">
            <CategoryButtons
              active={policyState}
              onButtonClick={onButtonClick}
            ></CategoryButtons>
          </div>
          {!policyState ? (
            <>
              <Conversation
                title="Last Audi what not"
                type="vehicle"
                date={new Date()}
              ></Conversation>
              <Conversation
                title="last travel to mallorca"
                type="travel"
                date={new Date()}
              ></Conversation>

              <span className="text-md font-bold">Travel Articles</span>

              <div className="flex gap-2 flex-wrap">
                {articles.map((a, index) => (
                  <div key={index} className="flex-1 ">
                    <ArticleCard title={a.title} src={a.src} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <Policies />
          )}
        </div>
      </div>
      <Tabs onHomeClick={() => onButtonClick("")}></Tabs>
    </div>
  );
};

const articles = [
  { title: "A really cool place", src: "/one.png" },
  { title: "No matter what", src: "/two.png" },
];
