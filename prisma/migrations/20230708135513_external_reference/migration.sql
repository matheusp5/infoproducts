/*
  Warnings:

  - Added the required column `externalReference` to the `Invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Invoices` ADD COLUMN `externalReference` VARCHAR(191) NOT NULL;
