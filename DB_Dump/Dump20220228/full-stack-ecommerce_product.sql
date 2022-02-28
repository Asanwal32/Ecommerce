-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: full-stack-ecommerce
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `size` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `unit_price` decimal(13,2) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `active` bit(1) DEFAULT b'1',
  `units_in_stock` int DEFAULT NULL,
  `date_created` datetime(6) DEFAULT NULL,
  `last_updated` datetime(6) DEFAULT NULL,
  `category_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category` (`category_id`),
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'medium','Feelings of Birthday Gift Hamper','Feelings if love arise from subtlety, soft, gentle and joyful, much like this gorgeous hamper. This includes sweet avalanche, aqua pink and white roses, and pink gypsos attached in a white 10 inches wooden drawer box.',2399.00,'assets/images/products/birthdays/birthday01.jpg',_binary '',100,'2021-05-21 01:01:47.000000',NULL,1),(2,'medium','A Floral Affair','A wild burst of colours in a palette typical of fairytale forests, this flower bouquet is a sight of sheer delight. It is an arrangement of cerise pink roses, purple roses, red roses, green button, purple statice, mauve Limonium and green Italian ruscus.',2099.00,'assets/images/products/birthdays/birthday02.jpg',_binary '',100,'2021-05-21 01:01:48.000000',NULL,1),(3,'large','The Color Of Love','Every color of love blooms beautifully in these red roses and red spray carnations for a spectacular celebration of romance. Paired with a forevermore love mug in a ribbon-styled black and white striped box, love knows no better way to express.',3067.00,'assets/images/products/birthdays/birthday03.jpg',_binary '',100,'2021-05-21 01:01:48.000000',NULL,1),(4,'small','Birthday Flower Bouquet','If you are confused over what to give and what not to give to your loved one on this birthday of theirs, then the best option is to give a flower bouquet. A flower bouquet mesmerizes the entire atmosphere for the birthday girl or boy.',1499.00,'assets/images/products/birthdays/birthday04.jpg',_binary '',100,'2021-05-21 01:01:48.000000',NULL,1),(5,'small','Happy Birthday Flowers','Make a birthday special with a unique birthday delivery! It is fun to send love with happy birthday flowers.Whether they are celebrating their 8th birthday or their 80th birthday, we have the perfect flowers for birthday delivery to make their day bright.',1870.00,'assets/images/products/birthdays/birthday05.jpg',_binary '',100,'2021-05-21 01:01:48.000000',NULL,1),(6,'medium','White & Red Roses Box Arrangement','Feelings if love arise from subtlety, soft, gentle and joyful, much like this gorgeous hamper. This includes sweet avalanche, aqua pink and white roses, and pink gypsos attached in a white 10 inches wooden drawer box.',1319.00,'assets/images/products/birthdays/birthday06.jpg',_binary '',100,'2021-05-21 01:01:48.000000',NULL,1),(7,'small','Magic Of Love Floral Arrangement','Origin- The rose is (according to fossil evidence) 35 million years old. Garden cultivation of roses began some 5,000 years ago, probably in China.Gerberas have several meanings, but all lean to happiness.',499.00,'assets/images/products/birthdays/birthday07.jpg',_binary '',100,'2021-05-21 01:01:48.000000',NULL,1),(8,'small','Wedding Bouquet','Siva Flower is a floral designing boutique established since 1998.Vellalore (Coimbatore-Tamilnadu-India) Siva Flowers speciality is in designing. Exquisite flower arrangements that are made from exotic sourced from all parts of world Wide.',499.00,'assets/images/products/marriage/marriage01.jpg',_binary '',100,'2021-05-21 01:06:04.000000',NULL,2),(9,'small','White Rose Wedding Flowers','Leveraging their rich experience in the care, design and delivery of flowers, our floral specialists employ a superior selection of fresh cut flowers and signature design to give each product exceptional quality and style.',711.00,'assets/images/products/marriage/marriage02.jpg',_binary '',100,'2021-05-21 01:06:04.000000',NULL,2),(10,'medium','Red Rose Bridal Bouquet','Material: high quality cloth, coral, ribbon.Handmade, photos are taken in kind, please rest assured to buy.Size: Flower Ball Diameter: 23cm; Height: 28cm.If you have a favorite style pictures, we can customize.',1699.00,'assets/images/products/marriage/marriage03.jpg',_binary '',100,'2021-05-21 01:06:04.000000',NULL,2),(11,'medium','Pink Rose','18cm Wedding Flowers Bridal Bouquets Bridesmaid Artificial Rose Flowers Bouquet Diamond Bridal Beaded Bouquet Marriage Bouquets Wedding Accessories',2099.00,'assets/images/products/marriage/marriage04.jpg',_binary '',100,'2021-05-21 01:06:04.000000',NULL,2),(12,'large','Red and White Bouquet','18cm Wedding Flowers Bridal Bouquets Bridesmaid Artificial Rose Flowers Bouquet Diamond Bridal Beaded Bouquet Marriage Bouquets Wedding Accessories',2499.00,'assets/images/products/marriage/marriage05.jpg',_binary '',100,'2021-05-21 01:06:04.000000',NULL,2),(13,'small','Lilies Bouquet','Lilies have a very pleasant fragrance, which makes them one of the most popular flowers among people. The symbol of blessings, humility, devotion, wealth, and prosperity.',699.00,'assets/images/products/grand_opening/grand01.jpg',_binary '',100,'2021-05-21 01:06:44.000000',NULL,3),(14,'small','Red Roses Bouquet','Bouquets and flowers are great ways to brighten up your loved one’s day, and add colors and joy to their daily life. Floral Garage’s grand opening flowers and flower stand are designed to help you send your congratulations amidst your busy schedule',1499.00,'assets/images/products/grand_opening/grand04.jpg',_binary '',100,'2021-05-21 01:06:44.000000',NULL,3),(15,'medium','Grand Opening Bouquet Flower','This Grand Opening Bouquet Flower includes Roses and Beautiful Green Leaf. A Better Huge Bouquet Flower reserves the right to replace any element in the stand with an item of equivalent or higher value.',1599.00,'assets/images/products/grand_opening/grand02.jpg',_binary '',100,'2021-05-21 01:06:44.000000',NULL,3),(16,'medium','Lavish Pastel Centerpiece','Beautiful combination of Purple roses, White Roses, Peach Spray Roses, Pink Spray Roses, Statice and Wax Flower',3699.00,'assets/images/products/grand_opening/grand03.jpg',_binary '',100,'2021-05-21 01:06:44.000000',NULL,3),(17,'large','Grand Opening Huge Bouquet Flower','Combination of Phalaenopsis orchids, Oncidium, Roses, Sunflower, Hydrangea, Snapdragon flower, Green Anthuriums',4999.00,'assets/images/products/grand_opening/grand05.jpg',_binary '',100,'2021-05-21 01:06:44.000000',NULL,3),(18,'small','Yellow Bouquet','Beautiful small bouquet flowers',599.00,'assets/images/products/get_well_soon/soon01.jpg',_binary '',100,'2021-05-21 01:07:06.000000',NULL,4),(19,'small','Pretty Pink Roses','Bunch of 12 Stem pretty pink roses wrapped in cellophane packing.',699.00,'assets/images/products/get_well_soon/soon02.jpg',_binary '',100,'2021-05-21 01:07:07.000000',NULL,4),(20,'medium','Caring For Love One','Roses in Pink Roses in White Mini Carnations Poms in Green Sleek Glass Vase with Bow',1599.00,'assets/images/products/get_well_soon/soon03.jpg',_binary '',100,'2021-05-21 01:07:07.000000',NULL,4),(21,'medium','Purples, Blues & Lilacs','A dynamic bouquet with excellent colour combinations using the darker shades.',1999.00,'assets/images/products/get_well_soon/soon04.jpg',_binary '',100,'2021-05-21 01:07:07.000000',NULL,4),(22,'large','Big Red Roses Bouquet','Red Roses Fresh Green and White Fillers Large Glass Vase.',3599.00,'assets/images/products/get_well_soon/soon05.jpg',_binary '',100,'2021-05-21 01:07:07.000000',NULL,4),(23,'small','Pumpkin Raw Seeds','Protein, Fiber, Zinc, Magnesium, Vitamins and Many Heallthy Minirals.',155.00,'assets/images/products/seeds/seeds01.jpg',_binary '',100,'2021-05-21 01:07:25.000000',NULL,5),(24,'small','Sunflower Seeds','It is beneficial in improving the health by providing sufficient amount of selenium, magnesium and vitamin E.',100.00,'assets/images/products/seeds/seeds02.jpg',_binary '',100,'2021-05-21 01:07:26.000000',NULL,5),(25,'small','Green Cardamom Seed','Enriched with years of experience in the industry, we are engaged in offering Green Cardamom Seed.',2600.00,'assets/images/products/seeds/seeds03.jpg',_binary '',100,'2021-05-21 01:07:26.000000',NULL,5),(26,'small','Beefsteak Tomato Seeds','250 Seeds Non-GMO',272.00,'assets/images/products/seeds/seeds04.jpg',_binary '',100,'2021-05-21 01:07:26.000000',NULL,5),(27,'small','Jcs Onion Seeds','Black Onion seed (Kalonji/Nigella) health benefits: Cure Acne, skin diseases (neurodermatitis, eczema), various allergies. Helps with asthma, bronchitis, high blood pressure, impotence. Helps with colds and coughs.',280.00,'assets/images/products/seeds/seeds05.jpg',_binary '',100,'2021-05-21 01:07:26.000000',NULL,5);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-28 14:40:19
