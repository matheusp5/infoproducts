/*
  Warnings:

  - You are about to drop the column `orderId` on the `UserCarts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `UserCarts` DROP FOREIGN KEY `UserCarts_orderId_fkey`;

-- AlterTable
ALTER TABLE `UserCarts` DROP COLUMN `orderId`;

-- CreateTable
CREATE TABLE `OrderCarts` (
    `id` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NULL,
    `total` DOUBLE NOT NULL,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `productId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OrderCarts` ADD CONSTRAINT `OrderCarts_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Orders`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderCarts` ADD CONSTRAINT `OrderCarts_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
