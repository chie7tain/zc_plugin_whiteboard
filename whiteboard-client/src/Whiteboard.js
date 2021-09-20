import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import ToolBar from "./components/ToolBar/ToolBar";
import SearchBar from "./components/TopBar/Searchbar/SearchBar";
import Zoom from "./components/Zoom/Zoom";
import Header from "./components/TopBar/Header/Header";
import StyledUrlUploadContainer from "./components/uploadTool/UrlUploadInput";
import { StyledImportFileContainer } from "./components/uploadTool/ImportFiles";
import {DisplayImports} from "./components/uploadTool/DisplayImports";
// import Collaborator from "../components/Collaborators/Collaborator";
// import Pointer from "../components/Collaborators/Pointer";
// import CollabData from "../components/Collaborators/collabData.js";

import Canvas from "./components/Canvas/Canvas";

const Temp = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100px);
`;

function Whiteboard() {
  const [displayUrl, setDisplayUrl] = useState(false);
  const [displayImport, setDisplayImport] = useState(false);
  const toggleDisplayUrlUploadHandler = () => {
    const display = displayUrl;
    setDisplayUrl(!display);
  };
  const toggleDisplayImportHandler = () => {
    const display = displayImport;
    setDisplayImport(!display);
  };
  return (
    <div className="App">
      <div className="top-bar">
        <SearchBar />
        <Header />
      </div>
      
      {displayImport ? <StyledImportFileContainer /> : null}
      <Canvas />
      {displayUrl ? <StyledUrlUploadContainer /> : null}
      <ToolBar
        showUrlContainer={toggleDisplayUrlUploadHandler}
        showImportContainer={toggleDisplayImportHandler}
      />
      <Zoom />
      {/*
      {CollabData.map(person=>{
        return (
         <Collaborator key={person.id} order={person.order} >
          <Pointer order={person.order} className="fas fa-mouse-pointer"/>
          {person.name}
        </Collaborator>
        )
      })}
     */}
    </div>
  );
}

export default Whiteboard;
