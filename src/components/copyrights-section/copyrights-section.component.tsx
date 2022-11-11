import { CopyrightSectionContainer } from "./copyrights-section.styles";

const date = new Date();
const year = date.getFullYear();

const CopyrightSection = () => {
  return (
    <CopyrightSectionContainer>
      Made with 💜 by me &copy;{year} All rights reserved
    </CopyrightSectionContainer>
  );
};

export default CopyrightSection;
