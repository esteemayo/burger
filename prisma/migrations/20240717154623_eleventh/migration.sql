/*
  Warnings:

  - You are about to drop the column `email` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `reviews` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reviews" DROP COLUMN "email",
DROP COLUMN "name";
