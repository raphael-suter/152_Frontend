import React from "react";
import styled from "styled-components";
import { Plus } from "react-bootstrap-icons";

const Container = styled.div`
  position: relative;
  height: 250px;
  padding: 1rem;
  overflow: hidden;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlusIcon = styled(Plus)`
  font-size: 100px;
`;

const Upload = () => {
  return (
    <Container>
      <input type="file" id="upload" />
      <Label for="upload" className="btn btn-warning">
        <PlusIcon />
      </Label>
    </Container>
  );
};

export default Upload;
