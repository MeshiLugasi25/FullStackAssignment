export { SortDescriptor } from './sort-descriptor';
export { GroupDescriptor, GroupResult } from './grouping/group-descriptor.interface';
export { FilterDescriptor, CompositeFilterDescriptor, isCompositeFilterDescriptor } from './filtering/filter-descriptor.interface';
export { toODataString } from './odata.operators';
export { toDataSourceRequestString, DataSourceRequestState, toDataSourceRequest } from './mvc/operators';
export { translateDataSourceResultGroups, ServerGroupResult, translateAggregateResults } from './mvc/deserialization';
export { State } from './state';
export { orderBy, process, distinct } from './array.operators';
export { getter } from './accessor';
export { filterBy, compileFilter } from './filtering/filter-expression.factory';
export { groupBy } from './grouping/group.operators';
export { Comparer, composeSortDescriptors } from './sorting/sort-array.operator';
export { normalizeFilters } from './filtering/filter.operators';
export { normalizeGroups } from './grouping/group.operators';
export { DataResult } from './data-result.interface';
export { aggregateBy, AggregateDescriptor } from './grouping/aggregate.operators';
export { AggregateResult } from './transducers';