/*
  Warnings:

  - Added the required column `cd_company` to the `movimentation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movimentation" ADD COLUMN     "cd_company" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "client" (
    "id_client" SERIAL NOT NULL,
    "ds_name" VARCHAR NOT NULL,
    "ds_cpf" VARCHAR NOT NULL,
    "cd_company" INTEGER NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id_client")
);

-- CreateTable
CREATE TABLE "mariner" (
    "id_mariner" SERIAL NOT NULL,
    "ds_name" VARCHAR NOT NULL,
    "ds_cpf" VARCHAR NOT NULL,
    "cd_company" INTEGER NOT NULL,

    CONSTRAINT "mariner_pkey" PRIMARY KEY ("id_mariner")
);

-- CreateTable
CREATE TABLE "ship" (
    "id_ship" SERIAL NOT NULL,
    "ds_ship" VARCHAR NOT NULL,
    "cd_company" INTEGER NOT NULL,

    CONSTRAINT "ship_pkey" PRIMARY KEY ("id_ship")
);

-- CreateTable
CREATE TABLE "shipMariner" (
    "id_clienteMariner" SERIAL NOT NULL,
    "cd_ship" INTEGER NOT NULL,
    "cd_mariner" INTEGER NOT NULL,

    CONSTRAINT "shipMariner_pkey" PRIMARY KEY ("id_clienteMariner")
);

-- CreateTable
CREATE TABLE "shipClient" (
    "id_clienteMariner" SERIAL NOT NULL,
    "cd_ship" INTEGER NOT NULL,
    "cd_client" INTEGER NOT NULL,

    CONSTRAINT "shipClient_pkey" PRIMARY KEY ("id_clienteMariner")
);

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_cd_company_fkey" FOREIGN KEY ("cd_company") REFERENCES "company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mariner" ADD CONSTRAINT "mariner_cd_company_fkey" FOREIGN KEY ("cd_company") REFERENCES "company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ship" ADD CONSTRAINT "ship_cd_company_fkey" FOREIGN KEY ("cd_company") REFERENCES "company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipMariner" ADD CONSTRAINT "shipMariner_cd_mariner_fkey" FOREIGN KEY ("cd_mariner") REFERENCES "mariner"("id_mariner") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipMariner" ADD CONSTRAINT "shipMariner_cd_ship_fkey" FOREIGN KEY ("cd_ship") REFERENCES "ship"("id_ship") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipClient" ADD CONSTRAINT "shipClient_cd_client_fkey" FOREIGN KEY ("cd_client") REFERENCES "client"("id_client") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipClient" ADD CONSTRAINT "shipClient_cd_ship_fkey" FOREIGN KEY ("cd_ship") REFERENCES "ship"("id_ship") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimentation" ADD CONSTRAINT "movimentation_cd_company_fkey" FOREIGN KEY ("cd_company") REFERENCES "company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;
