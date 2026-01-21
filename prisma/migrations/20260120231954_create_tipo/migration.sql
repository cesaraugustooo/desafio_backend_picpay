/*
  Warnings:

  - Added the required column `tipo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('comum', 'lojista');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tipo" "Tipo" NOT NULL;
