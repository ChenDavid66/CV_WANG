import React from "react";
import styled from "styled-components";
const StyledFooter = styled.footer({
  marginTop: "110px",
});

export class Footer extends React.Component {
  render() {
    return <StyledFooter className="footer"></StyledFooter>;
  }
}

export default Footer;
