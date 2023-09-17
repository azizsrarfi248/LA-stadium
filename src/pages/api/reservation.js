import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { prisma } from "@/utils/db";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  if (!request.method === "post") {
    return response.status(405).json({ Message: "method not allowed" });
  }
  if (!session) {
    return response.status(401).json({ Message: "Unauthorized" });
  }
  // data
  const { phone, reservationDate, stadium } = request.body;

  console.log(request.body);

  // validation
  if (!phone || !reservationDate || !stadium) {
    return response.status(422).json({ message: "Invalid input" });
  }
  // prisma create reservation
  const reservation = await prisma.reservation.create({
    data: {
      user: {
        connect: {
          id: session.user.id,
        },
      },
      phone,
      reservationDate,
      stadium,
    },
  });
  if (!reservation) {
    return response.status(500).json({ message: "Something went wrong" });
  }
  // response
  return response.status(201).json(reservation);
}
