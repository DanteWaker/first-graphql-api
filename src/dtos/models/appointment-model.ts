import { IsDateString } from "class-validator";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Appointment {
  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}
