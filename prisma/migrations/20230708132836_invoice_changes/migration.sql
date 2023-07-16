/*
  Warnings:

  - Added the required column `cpf` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `Invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Invoices` ADD COLUMN `cpf` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `ipv4` VARCHAR(191) NULL,
    ADD COLUMN `paymentMethod` VARCHAR(191) NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NULL,
    ADD COLUMN `surname` VARCHAR(191) NOT NULL;
