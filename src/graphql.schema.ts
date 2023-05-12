import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  year: number;
}