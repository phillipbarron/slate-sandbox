### Sandboxing plugin behaviour for keydown in slateJs

the is a create-react-app sandbox for testing slate-js plugins

#### Current list
+ [Filter parent data](https://github.com/phillipbarron/slate-sandbox/blob/master/src/plugins/filter-data.js) well, filters the parent data
+ [Clear data](https://github.com/phillipbarron/slate-sandbox/blob/master/src/plugins/clear-data.js) clear all the data - sounds extreme but there might be a valid use case for this!

This stripping of data on enter is only effective for hitting enter. Users may also edit by copying & pasting which would retain existing data properties. Ensuring that these data are removed would need to be handled separately for those events.


