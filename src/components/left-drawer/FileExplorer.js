import React, { useState, useRef, useEffect } from "react";
import styles from "./FileExplorer.module.css";

function FileExplorer({
  explorer,
  parentPath,
  setSelectedPath,
  selectedPath,
  flatExplorer,
}) {
  const [isExpand, setIsExpand] = useState(false);
  const folderRef = useRef(null);
  const CURRENT_PATH = `${parentPath}/${explorer.name}`;

  useEffect(() => {
    folderRef.current?.focus();
  }, [selectedPath]);

  const handleKeyDown = (event) => {
    const currentId = flatExplorer.findIndex(
      (item) => item.path === selectedPath
    );

    if (event.key === "Enter") {
      setIsExpand(!isExpand);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (currentId < flatExplorer.length - 1) {
        setSelectedPath(flatExplorer[currentId + 1].path);
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (currentId > 0) {
        setSelectedPath(flatExplorer[currentId - 1].path);
      }
    }
  };
  function handleClick(e) {
    setIsExpand(!isExpand);
    setSelectedPath(CURRENT_PATH);
  }

  return (
    <div>
      <div
        ref={selectedPath === CURRENT_PATH ? folderRef : null}
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={selectedPath === CURRENT_PATH ? styles.selected : ""}
      >
        {explorer.name}
      </div>
      <div className={styles.subFolderContainer}>
        {isExpand &&
          explorer.items.length > 0 &&
          explorer.items.map((item) => (
            <FileExplorer
              explorer={item}
              key={item.id}
              parentPath={`${parentPath}/${explorer.name}`}
              setSelectedPath={setSelectedPath}
              selectedPath={selectedPath}
              flatExplorer={flatExplorer}
            />
          ))}
      </div>
    </div>
  );
}

export default FileExplorer;
