-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         11.5.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando datos para la tabla inter_soccer.league_schedule: ~0 rows (aproximadamente)

-- Volcando datos para la tabla inter_soccer.matches: ~0 rows (aproximadamente)

-- Volcando datos para la tabla inter_soccer.match_stats: ~0 rows (aproximadamente)

-- Volcando datos para la tabla inter_soccer.players: ~0 rows (aproximadamente)

-- Volcando datos para la tabla inter_soccer.teams: ~0 rows (aproximadamente)

-- Volcando datos para la tabla inter_soccer.users: ~1 rows (aproximadamente)
INSERT INTO `users` (`id`, `username`, `password`, `email`, `profile_picture`, `created_at`, `updated_at`) VALUES
	(1, 'marcosP', '$2a$10$sB6aSU0jPWlSkMZMoqe98On.YEv23TSYUVhVCGVcYoZCMpB5byX7C', 'marcos@gmail.com', NULL, '2024-10-26 03:23:45', '2024-10-26 03:23:45');

-- Volcando datos para la tabla inter_soccer.user_favorites: ~0 rows (aproximadamente)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
