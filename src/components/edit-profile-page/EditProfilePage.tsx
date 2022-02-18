import { EditProfileForm } from "../edit-profile-form/EditProfileForm";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Content, Wrapper } from "./EditProfilePage.css";

const EditProfilePage = (): JSX.Element => (
  <Wrapper>
    <Sidebar />
    <Content>
      <Header />
      <EditProfileForm />
    </Content>
  </Wrapper>
);

export default EditProfilePage;
