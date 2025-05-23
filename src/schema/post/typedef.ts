import { mergeTypeDefs } from '@graphql-tools/merge';
import { postType } from './type';
import { postQuery } from './query';
import { postMutation } from './mutation';

export const typeDefs = mergeTypeDefs([postType, postQuery, postMutation]);


