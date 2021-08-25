import React, { FC } from "react";

/* Walkthrough */
/* 1st: What are hooks? */
/* 2nd: Native hooks (useState, useEffect, useLayoutEffect, useContext, useMemo, ) */
/* 3rd: Custom hooks */

/* Try it yourself */
/* 4th: Create a useButton hook that returns a hook that updates the state of the component that uses it */
/* 5th: BONUS: Create a hook that returns if the screen is currently mobile-, tablet- or desktop-sized */

const Header = () => {
  return <h1>Hooks Lesson! 🎣</h1>;
};

const Body = () => {
  return (
    <div>
      {/* Your code here */}
      {/* Your code here */}
    </div>
  );
};

export const App: FC = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
