"use client";

import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();

  return (
    <div>
      <h2>
        Welcome My Page {user?.user?.name}
        {JSON.stringify(user)}{" "}
      </h2>
    </div>
  );
};

export default HomePage;
