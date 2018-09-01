/** 
 * Slate's current behaviour is to copy the data from from parent nodes.
 * this will filter that out though what we actually want to do is override that bahaviour 
 * as this 'solution' is neither clean nor performant
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
