/*
  Warnings:

  - You are about to drop the column `cd_moveStatus` on the `movimentation` table. All the data in the column will be lost.
  - You are about to drop the `navagationPlan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shipClient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shipMariner` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cd_move_status` to the `movimentation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "movimentation" DROP CONSTRAINT "movimentation_cd_moveStatus_fkey";

-- DropForeignKey
ALTER TABLE "movimentation" DROP CONSTRAINT "movimentation_cd_navPlan_fkey";

-- DropForeignKey
ALTER TABLE "navagationPlan" DROP CONSTRAINT "navagationPlan_cd_company_fkey";

-- DropForeignKey
ALTER TABLE "navagationPlan" DROP CONSTRAINT "navagationPlan_cd_destiny_fkey";

-- DropForeignKey
ALTER TABLE "navagationPlan" DROP CONSTRAINT "navagationPlan_cd_moveStatus_fkey";

-- DropForeignKey
ALTER TABLE "navagationPlan" DROP CONSTRAINT "navagationPlan_cd_user_fkey";

-- DropForeignKey
ALTER TABLE "shipClient" DROP CONSTRAINT "shipClient_cd_client_fkey";

-- DropForeignKey
ALTER TABLE "shipClient" DROP CONSTRAINT "shipClient_cd_ship_fkey";

-- DropForeignKey
ALTER TABLE "shipMariner" DROP CONSTRAINT "shipMariner_cd_mariner_fkey";

-- DropForeignKey
ALTER TABLE "shipMariner" DROP CONSTRAINT "shipMariner_cd_ship_fkey";

-- AlterTable
ALTER TABLE "movimentation" DROP COLUMN "cd_moveStatus",
ADD COLUMN     "cd_move_status" INTEGER NOT NULL;

-- DropTable
DROP TABLE "navagationPlan";

-- DropTable
DROP TABLE "shipClient";

-- DropTable
DROP TABLE "shipMariner";

-- CreateTable
CREATE TABLE "ship_mariner" (
    "id_clienteMariner" SERIAL NOT NULL,
    "cd_ship" INTEGER NOT NULL,
    "cd_mariner" INTEGER NOT NULL,

    CONSTRAINT "ship_mariner_pkey" PRIMARY KEY ("id_clienteMariner")
);

-- CreateTable
CREATE TABLE "ship_client" (
    "id_clienteMariner" SERIAL NOT NULL,
    "cd_ship" INTEGER NOT NULL,
    "cd_client" INTEGER NOT NULL,

    CONSTRAINT "ship_client_pkey" PRIMARY KEY ("id_clienteMariner")
);

-- CreateTable
CREATE TABLE "navagation_plan" (
    "id_navPlan" SERIAL NOT NULL,
    "qt_crew" INTEGER NOT NULL,
    "qt_passengers" INTEGER NOT NULL,
    "dt_departure" TIMESTAMP(3) NOT NULL,
    "dt_arrival" TIMESTAMP(3),
    "ds_observation" VARCHAR,
    "cd_destiny" INTEGER NOT NULL,
    "cd_user" INTEGER NOT NULL,
    "cd_company" INTEGER NOT NULL,
    "cd_move_status" INTEGER NOT NULL,

    CONSTRAINT "navagation_plan_pkey" PRIMARY KEY ("id_navPlan")
);

-- AddForeignKey
ALTER TABLE "ship_mariner" ADD CONSTRAINT "ship_mariner_cd_mariner_fkey" FOREIGN KEY ("cd_mariner") REFERENCES "mariner"("id_mariner") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ship_mariner" ADD CONSTRAINT "ship_mariner_cd_ship_fkey" FOREIGN KEY ("cd_ship") REFERENCES "ship"("id_ship") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ship_client" ADD CONSTRAINT "ship_client_cd_client_fkey" FOREIGN KEY ("cd_client") REFERENCES "client"("id_client") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ship_client" ADD CONSTRAINT "ship_client_cd_ship_fkey" FOREIGN KEY ("cd_ship") REFERENCES "ship"("id_ship") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimentation" ADD CONSTRAINT "movimentation_cd_move_status_fkey" FOREIGN KEY ("cd_move_status") REFERENCES "moveStatus"("id_status") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimentation" ADD CONSTRAINT "movimentation_cd_navPlan_fkey" FOREIGN KEY ("cd_navPlan") REFERENCES "navagation_plan"("id_navPlan") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "navagation_plan" ADD CONSTRAINT "navagation_plan_cd_user_fkey" FOREIGN KEY ("cd_user") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "navagation_plan" ADD CONSTRAINT "navagation_plan_cd_company_fkey" FOREIGN KEY ("cd_company") REFERENCES "company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "navagation_plan" ADD CONSTRAINT "navagation_plan_cd_destiny_fkey" FOREIGN KEY ("cd_destiny") REFERENCES "location"("id_location") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "navagation_plan" ADD CONSTRAINT "navagation_plan_cd_move_status_fkey" FOREIGN KEY ("cd_move_status") REFERENCES "moveStatus"("id_status") ON DELETE RESTRICT ON UPDATE CASCADE;
