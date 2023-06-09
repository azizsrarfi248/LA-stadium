export default async function hundle(request, response) {
  if (!request.method === "post") {
    return response.status(405).json({ Message: "method not allowed" });
  }
  // data
  const {
    teamName,
    captinName,
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
    !captinName ||
    !phone ||
    !player0 ||
    !player1 ||
    !player2 ||
    !player3 ||
    !player4 ||
    !player5
  ) {
    return response.status(422).json({ message: "Invalid input" });
    // prisma create user
    const user = await prisma.user.create({
      data: {
        teamName,
        captinName,
        phone,
        player0,
        player1,
        player2,
        player3,
        player4,
        player5,
      },
    });
    if (!user) {
      return response.status(500).json({ message: "Something went wrong" });
    }
    // response
    return response.status(201).json(user);
  }
}
