import { TitleText } from "../Style/Component.Style";

function Title({ children, ...props }) {
  return <TitleText {...props}>{children}</TitleText>;
}

export default Title;
