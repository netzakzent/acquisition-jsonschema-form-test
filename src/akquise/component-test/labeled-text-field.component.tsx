import * as React from 'react';
import { Form, Input, InputOnChangeData } from 'semantic-ui-react'

export interface ILabeledTextProps {
  label: string;
  placeholder: string;
  fluid?: boolean;
  required?: boolean,
  value: string
}

export interface ILabeledTextState {
  value: string;
}

class LabeledTextField extends React.Component<ILabeledTextProps, ILabeledTextState> {
   
  public constructor(props: ILabeledTextProps) {
    super(props);
    
  }

  public render() {
    return (
      <Form.Field required={this.props.required}>
        <label>{this.props.label}</label>
        <Input fluid={this.props.fluid} placeholder={this.props.placeholder} value={this.props.value} onChange={this.handleChange} />
      </Form.Field>     
    );
  }

  public componentDidMount() {
    this.setState({value: this.props.value});
  }

  private handleChange = (e: React.SyntheticEvent<HTMLElement>, data: InputOnChangeData) => this.setState({value: data.value});
}

export default LabeledTextField;