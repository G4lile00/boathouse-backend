/*
  Warnings:

  - Made the column `ds_name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ds_password` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "ds_name" SET NOT NULL,
ALTER COLUMN "ds_password" SET NOT NULL;
