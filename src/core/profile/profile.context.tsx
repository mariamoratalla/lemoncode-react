import React from "react";

interface Context {
  username: string;
  setUserProfile: (username: string) => void;
}

const noUserLogin = "no user login";

const ProfileContext = React.createContext<Context>({
  username: noUserLogin,
  setUserProfile: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ProfileProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [userProfile, setUserProfile] = React.useState("");

  return (
    <ProfileContext.Provider
      value={{ username: userProfile, setUserProfile: setUserProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => React.useContext(ProfileContext);
