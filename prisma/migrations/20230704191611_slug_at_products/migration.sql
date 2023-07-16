/*
  Warnings:

  - Added the required column `slug` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `slug` VARCHAR(191) NOT NULL;
