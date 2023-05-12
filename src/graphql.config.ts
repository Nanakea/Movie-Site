import { GqlModuleOptions } from '@nestjs/graphql';
import { join } from 'path';

const graphqlConfig: GqlModuleOptions = {
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
};

export default graphqlConfig;