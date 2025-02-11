import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import SMIPage from "../../sections/Projects/SMI";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import lighttheme from "../../theme/app/themeStyles";
import { darktheme } from "../../theme/app/themeStyles";

const SMI = () => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Service Mesh Interface (SMI)"
          description="Layer5 is the maker of Meshery and Service Mesh Performance (SMP) and maintainers of Service Mesh Interface (SMI).
            We are the largest collection of cloud native projects and their maintainers in the world.
            Contact Layer5 for help with operating a service mesh."
          image="/images/servicemeshinterface-icon-color.png" />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <SMIPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default SMI;
