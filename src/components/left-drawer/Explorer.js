import React, { useState, useMemo } from "react";
import { explorer } from "../../assets/data/ExplorerFolders";
import FileExplorer from "./FileExplorer";
import useExplorer from "../../hooks/explorer/useFileExplorer";

function Explorer() {
  const [selectedPath, setSelectedPath] = useState("");
  const { flattenExplorer } = useExplorer();

  const flatExplorer = useMemo(() => {
    const res = flattenExplorer(explorer, "");
    setSelectedPath(res[0].path);
    return res;
  }, []);

  return (
    <div>
      <FileExplorer
        explorer={explorer}
        parentPath={""}
        setSelectedPath={setSelectedPath}
        selectedPath={selectedPath}
        flatExplorer={flatExplorer}
      />
    </div>
  );
}

export default Explorer;
