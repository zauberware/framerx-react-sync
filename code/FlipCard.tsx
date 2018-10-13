import * as React from "react";
import { ControlType } from "framer";
import _FlipCard from '../lib/components/FlipCard'

// Define type of property
interface Props {
  title: string;
  subtitle: string;
  abstract: string;
  link: string;
  background: string;
}

export class FlipCard extends React.Component {

  // Set default properties
  static defaultProps = {
    title: "Hey, I am a styled component",
    subtitle: "imported from a production project.",
    abstract: "You wanna know how it works? Just follow the Setup guidelines.",
    link: "https://www.zauberware.com",
    background: "white",
  }

  // Items shown in property panel
  static propertyControls = {
    title: { type: ControlType.String, title: "Title" },
    subtitle: { type: ControlType.String, title: "Subtitle" },
    abstract: { type: ControlType.String, title: "Abstract" },
    link: { type: ControlType.String, title: "Link" },
    background: { type: ControlType.Color, title: "Background Color" },
  }

  render() {
    const {
      title,
      subtitle,
      abstract,
      link,
      background
    } = this.props
    return (
      <_FlipCard title={title} subtitle={subtitle} excerpt={abstract} link={link} background={background}/>
    )
  }
}