/** 
 * filter out parent data
*/
export function SimpleFilter() {
    return {
        onKeyDown(event, change) {
            if (event.keyCode === 13) {
                return change.splitBlock().setBlocks({ data: {} });
              }
              return undefined;
        }
    }
};

export default SimpleFilter;
