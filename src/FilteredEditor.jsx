import React, {Component} from 'react';
import {Editor} from 'slate-react';
import {Value} from 'slate';
import {FilterData} from './plugins/slate-data-filter';

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                data: {
                    blockId: 42
                },
                nodes: [
                    {
                        object: 'text',
                        leaves: [
                            {
                                text: 'A line of text in a paragraph.'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
const plugins = [
    FilterData()
  ]
  

class FilteredEditor extends Component {
    state = {
        value: initialValue
    }
    onChange = ({value}) => {
        this.setState({value})
    }
    render() {
        return <Editor
            value={this.state.value}
            onChange={this.onChange}
            plugins={plugins}
        />
    }
}

export default FilteredEditor;