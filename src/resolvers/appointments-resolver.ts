import { Appointment } from "./../dtos/models/appointment-model";
import { CreateAppointmentInput } from "./../dtos/inputs/create-appointment-input";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [];
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg("data") data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    return appointment;
  }
}
