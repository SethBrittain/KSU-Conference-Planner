type ButtonProps = {
    text: string;
}
const Button = ({ text }: ButtonProps): React.JSX.Element => <button>{ text }</button>;

export default Button;