import * as React from "react";
import { ControlType } from "framer";
import _FlipCard from '../lib/components/FlipCard'

// Define type of property
interface Props {
  title: string;
  subtitle: string;
  abstract: string;
  link: string;
}

export class FlipCard extends React.Component {

  // Set default properties
  static defaultProps = {
    title: "Hey eine Karte",
    subtitle: "Und ich kann mich drehen",
    abstract: "Abstract goes here",
    link: "https://www.zauberware.com",
  }

  // Items shown in property panel
  static propertyControls = {
    title: { type: ControlType.String, title: "Title" },
    subtitle: { type: ControlType.String, title: "Subtitle" },
    abstract: { type: ControlType.String, title: "Abstract" },
    link: { type: ControlType.String, title: "Link" },
  }

  render() {
    const {
      title,
      subtitle,
      abstract,
      link
    } = this.props
    return (
      <_FlipCard title={title} subtitle={subtitle} excerpt={abstract} link={link} />
    )
  }
}