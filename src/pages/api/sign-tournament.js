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
  const {
    teamName,
    phone,
    player0,
    player1,
    player2,
    player3,
    player4,
    player5,
  } = request.body;
  // validation
  if (
    !teamName ||
    !phone ||
    !player0 ||
    !player1 ||
    !player2 ||
    !player3 ||
    !player4 ||
    !player5
  ) {
    return response.status(422).json({ message: "Invalid input" });
  }
  // prisma create tournamentRequest
  const tournamentRequest = await prisma.tournamentRequest.create({
    data: {
      capitain: {
        connect: {
          id: session.user.id,
        },
      },
      teamName,
      phone,
      player0,
      player1,
      player2,
      player3,
      player4,
      player5,
    },
  });
  if (!tournamentRequest) {
    return response.status(500).json({ message: "Something went wrong" });
  }
  // response
  return response.status(201).json(tournamentRequest);
}
