
/** 
 * clear all data where set
*/
export function ClearData() {
    return {
        onKeyDown(event, change) {
            if (event.keyCode === 13) {
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
            }
        }
    }
};

export default ClearData;


 