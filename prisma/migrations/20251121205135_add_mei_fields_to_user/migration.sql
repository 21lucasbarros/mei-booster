/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "atividade" TEXT,
ADD COLUMN     "cnpj" TEXT,
ADD COLUMN     "razaoSocial" TEXT,
ADD COLUMN     "telefone" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_cnpj_key" ON "User"("cnpj");
