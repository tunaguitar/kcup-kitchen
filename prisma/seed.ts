import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

const users = 
    [
        {email: "1@email.com" }
    ]

    const createUser = async () => {
        await prisma.user.createMany({ data: users });
    };

    const main = async () => {
        await createUser();
    };
    main().catch((err) => {
        console.warn("Error while generating seed: \n", err);
    });