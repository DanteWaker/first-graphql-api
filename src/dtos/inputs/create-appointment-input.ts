import { IsNotEmpty } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {
  @Field()
  @IsNotEmpty()
  customerId: string;

  @Field()
  @IsNotEmpty()
  startsAt: Date;

  @Field()
  @IsNotEmpty()
  endsAt: Date;
}
