/** 
 * Slate's current behaviour is to copy the data from from parent nodes.
 * this will filter that out though what we actually want to do is override that bahaviour 
 * as this 'solution' is neither clean nor performant
*/
export function FilterData() {
    return {
        onKeyDown(event, change) {
            if (event.key === "Enter") {
                const existingIds = [];
                change
                    .value
                    .document
                    .nodes
                    .forEach(node => {
                        const existingNodeData = node.get('data');
                        if (existingNodeData && existingNodeData.has('blockId')) {
                            existingIds.push(existingNodeData.get('blockId'));
                        }
                    });
                console.log('existingIds', existingIds);
                const blocks = change.value.blocks;
                if (blocks) {
                    blocks.forEach(block => {
                        const existingData = block.get("data");
                        if (existingData && existingData.has('blockId')) {
                            if (existingIds.includes(existingData.get('blockId'))) {
                                console.log('we are removing the things');
                                const updatedBlock = block.set('data', {});
                                change.setBlocks(updatedBlock);
                            } else {
                                //add to exisingIds
                                existingIds.push(existingData.get('blockId'));
                            }
                        }
                    });
                }

                console.log('and the current values is ', change.value.toJS());
            }
        }
    }
};

export default FilterData;
