import * as React from "react";
import { Global } from "@emotion/react";
import { reset, global } from "./theme";
import EditProfilePage from "./components/edit-profile-page/EditProfilePage";

export const App = (): JSX.Element => (
  <div>
    <Global styles={[global, reset]}></Global>
    <EditProfilePage />
  </div>
);
