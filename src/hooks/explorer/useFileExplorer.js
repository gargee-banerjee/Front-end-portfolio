export default function useExplorer(){
    function flattenExplorer(explorer, parent, result = []) {
        let path = `${parent}/${explorer.name}`;
        result.push({ path, isFolder: explorer.isFolder });
        if (explorer.items.length > 0) {
          explorer.items.forEach((expl) => {
            flattenExplorer(expl, path, result);
          });
        }
        return result;
      }

      return {flattenExplorer}
}