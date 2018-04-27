import * as React from 'react';
import { Input } from 'semantic-ui-react'

export interface ILabeledTextProps {
  label: string;
  placeholder: string;
  fluid?: boolean;
}

class LabeledText extends React.Component<ILabeledTextProps, {}> {

  public constructor(props: ILabeledTextProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <Input fluid={this.props.fluid} placeholder={this.props.placeholder}  />
      </div>
      // <Input label={this.props.label} placeholder={this.props.placeholder} />
    );
  }
}

export default LabeledText;
