import React from "react";

import {
  BiLogoFigma,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoSass,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoTrello,
  BiLogoBootstrap,
  BiLogoGithub,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMiro, SiRubyonrails } from "react-icons/si";

const iconComponents = {
  figma: BiLogoFigma,
  html: BiLogoHtml5,
  css: BiLogoCss3,
  sass: BiLogoSass,
  js: BiLogoJavascript,
  react: BiLogoReact,
  mongodb: BiLogoMongodb,
  trello: BiLogoTrello,
  bootstrap: BiLogoBootstrap,
  nextjs: TbBrandNextjs,
  miro: SiMiro,
  rails: SiRubyonrails,
  github: BiLogoGithub,
};

const Icon = ({ icon }) => {
  const IconComponent = iconComponents[icon.toLowerCase()];

  if (!IconComponent) {
    return null;
  }
  return <IconComponent color="#EB5939" size={48} />;
};

export default Icon;
