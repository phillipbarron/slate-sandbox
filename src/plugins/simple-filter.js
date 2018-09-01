/** 
 * remove all the data
*/
export function SimpleFilter() {
    return {
        onKeyDown(event, change) {
            if (event.key === "Enter") {
                const blocks = change.value.blocks;
                if (blocks) {
                    blocks.forEach(block => {
                        const existingData = block.get("data");
                        if (existingData) {
                            const updatedBlock = block.set('data', {});
                            change.setBlocks(updatedBlock);
                        }
                    });
                }
                console.log('and the current values is ', change.value.toJS());
            }
        }
    }
};

export default SimpleFilter;
