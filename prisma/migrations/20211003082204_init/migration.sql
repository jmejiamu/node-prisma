-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "picture" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hobby" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
