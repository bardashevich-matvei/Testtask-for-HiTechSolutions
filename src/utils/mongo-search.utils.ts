import { SearchRequest } from '@dto/search/SearchRequest.dto';
import { FilterQuery, QueryOptions } from 'mongoose';

const requestForbidenChar = '()+[*';

const normalizeSearchRegExp = (value: string) => {
  return value
    .split('')
    .map((char) => {
      if (requestForbidenChar.includes(char)) {
        return `\\${char}`;
      }
      if (char === '\\') {
        return '(.*)';
      }
      return char;
    })
    .join('');
};

export function mapSearchRequestForMongo(searchModel: SearchRequest) {
  const queryOptions: QueryOptions = {
    limit: searchModel.limit || 10,
    skip: searchModel.offset || 0,
  };

  if (searchModel.sortField) {
    queryOptions.sort = {
      [searchModel.sortField]: !searchModel.descending ? 1 : -1,
    };
  }

  const filterQuery: FilterQuery<unknown> = {};

  if (searchModel.stringFilters) {
    searchModel.stringFilters.forEach((item) => {
      filterQuery[item.operation] = filterQuery[item.operation] || [];
      filterQuery[item.operation].push({
        [item.fieldName]: {
          $in: item.values.map((value) => {
            if (item.exactMatch) {
              return value;
            }
            return new RegExp(normalizeSearchRegExp(value), 'i');
          }),
        },
      });
    });
  }

  return {
    queryOptions,
    filterQuery,
  };
}
