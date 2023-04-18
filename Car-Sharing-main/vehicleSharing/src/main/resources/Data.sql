-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: progettosharing
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Dumping data for table `archivioutenti`
--

LOCK TABLES `archivioutenti` WRITE;
/*!40000 ALTER TABLE `archivioutenti` DISABLE KEYS */;
INSERT INTO `archivioutenti` VALUES (1,'Paperino','2005-12-31 22:00:00.000000','paono.paperino@paperopoli.com ','Amministratore dei servizi','20/08/1900','Paolino','Amministratore','A',NULL,'Amministrator'),(2,'Paperino','2005-12-31 22:00:00.000000','paolino.paperino@paperopoli.com ','Amministratore dei servizi','20/08/1900','Paolino','Amministratore','A',NULL,'Amministratore'),(3,'Paperino','2005-12-31 22:00:00.000000','paolina.paperino@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente1','B',NULL,'Utente1'),(4,'Rossi','2005-12-31 22:00:00.000000','paalino.rossi@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente2','B',NULL,'Utente2'),(5,'Verdi','2005-12-31 22:00:00.000000','pawlino.verdi@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente3','B',NULL,'Utente3'),(6,'Bianchi','2005-12-31 22:00:00.000000','paelino.bianchi@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente4','B',NULL,'Utente4'),(7,'Neri','2005-12-31 22:00:00.000000','plino.neri@paperopoli.com ','Utente dei servizi','20/08/1900','Paolino','Utente5','B',NULL,'Utente5'),(8,'Katana','2023-01-01 23:10:29.062000','aperissima.neri@paperopoli.com','Admin Prova','20/08/1900','Paolino','2','A',NULL,'1');
/*!40000 ALTER TABLE `archivioutenti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `veicoli`
--

LOCK TABLES `veicoli` WRITE;
/*!40000 ALTER TABLE `veicoli` DISABLE KEYS */;
INSERT INTO `veicoli` VALUES (1,'elettrica','441CV','Rosso','2022-12-29 16:01:51.725000',_binary '','/img/imgVeicoli/bmwElettrica.png','BMW I3-2007','45.09925526988869, 7.645044245314483',_binary '','AUTO'),(2,'elettrica','441CV','Blu chiaro','2022-12-29 16:50:34.429000',_binary '','/img/imgVeicoli/golfElettrica.png','Golf GTE 2019','45.029612957486535, 7.625650858459454',_binary '','AUTO'),(3,'elettrica','408CV','Grigio scuro','2022-12-29 16:50:50.272000',_binary '','/img/imgVeicoli/golfElettrica.png','Golf GTE 2019','45.072446536101296, 7.672807409654312',_binary '','AUTO'),(4,'elettrica','480CV','Beige','2022-12-29 16:51:13.405000',_binary '','/img/imgVeicoli/bmwElettrica.png','BMW I3-2007','45.02297593153962, 7.661987941198349',_binary '','AUTO'),(5,'elettrica','523CV','Bianco e nero metallizzati','2022-12-29 16:51:23.397000',_binary '','/img/imgVeicoli/smartElettrica.png','Smart FortTwo EQ 2016','45.065873444470895, 7.623681325573687',_binary '','AUTO'),(6,'ibrida','141CV','Bianco metallizzato','2022-12-29 17:03:45.942000',_binary '','/img/imgVeicoli/mercedesHybrida.png','Mercedes-Benz GLC Class 2018','45.054476864230786, 7.629753107908601',_binary '','AUTO'),(7,'ibrida','157CV','Bianco opaco','2022-12-29 17:19:11.116000',_binary '','/img/imgVeicoli/mercedesHybrida.png','Mercedes-Benz GLC Class 2018','45.077281560132505, 7.619071411489569',_binary '','AUTO'),(8,'ibrida','140CV','Rosso scarlatto metallizzato','2022-12-29 17:20:31.875000',_binary '','/img/imgVeicoli/mercedesHybrida.png','Mercedes-Benz GLC Class 2018','45.09664983012599, 7.696270944699844',_binary '','AUTO'),(9,'ibrida','140CV','Rosso scarlatto metallizzato','2022-12-29 17:22:39.806000',_binary '','/img/imgVeicoli/toyotaHybrida.png','Toyota C-HR 2021','45.10898724945684, 7.662769260476517',_binary '','AUTO'),(10,'ibrida','300CV','Nero metallizzato','2022-12-29 17:23:41.822000',_binary '','/img/imgVeicoli/toyotaHybrida.png','Toyota C-HR 2021','45.10498075750407, 7.698280066128392',_binary '','AUTO'),(11,'elettrico','500W','Rosso opaco','2022-12-29 17:23:41.822000',_binary '','/img/imgVeicoli/scooter.png','Segway Ninebot','45.10369564385882, 7.670119230114582',_binary '','MONOPATTINO'),(12,'elettrico','500W','Nero opaco','2022-12-29 21:03:16.099000',_binary '','/img/imgVeicoli/scooter.png','Segway Ninebot','45.102838885356626, 7.6623507236280135',_binary '','MONOPATTINO'),(13,'elettrico','500W','Nero opaco','2022-12-29 21:07:18.228000',_binary '','/img/imgVeicoli/scooter.png','Segway Ninebot','45.084897204685426, 7.6232500001376335',_binary '','MONOPATTINO'),(14,'elettrico','500W','Nero opaco','2022-12-29 21:08:21.191000',_binary '','/img/imgVeicoli/scooter.png','Segway Ninebot','45.0878060009636, 7.693631158972045',_binary '','MONOPATTINO'),(15,'elettrico','500W','Nero opaco argento metallizzato','2022-12-29 21:10:27.614000',_binary '','/img/imgVeicoli/scooter.png','Segway Ninebot','45.05660785815555, 7.666397939532711',_binary '','MONOPATTINO'),(16,'elettrico','600W','Verde pisello spento opaco','2022-12-29 21:17:57.907000',_binary '','/img/imgVeicoli/bici.png','Flyer Uproc X','45.10800596144694, 7.64095328691469',_binary '','BICICLETTA'),(17,'elettrico','600W','Grigio scuro opaco','2022-12-29 21:19:24.106000',_binary '','/img/imgVeicoli/bici.png','Flyer Uproc X','45.07947157294681, 7.6248261546878755',_binary '','BICICLETTA'),(18,'elettrico','600W','Giallo ocra opaco','2022-12-29 21:19:55.849000',_binary '','/img/imgVeicoli/bici.png','Flyer Uproc X','45.06681464915833, 7.65159160394411',_binary '','BICICLETTA'),(19,'elettrico','600W','Rosso scarlatto opaco ','2022-12-29 21:20:44.725000',_binary '','/img/imgVeicoli/bici.png','Flyer Uproc X','45.0638441603777, 7.612452811923893',_binary '','BICICLETTA'),(20,'elettrico','600W','Grigio chiaro opaco','2022-12-29 21:21:26.779000',_binary '','/img/imgVeicoli/bici.png','Flyer Uproc X','45.01800679599068, 7.613924469236634',_binary '','BICICLETTA');
/*!40000 ALTER TABLE `veicoli` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-07  1:56:50
