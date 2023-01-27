-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 26 يناير 2023 الساعة 19:26
-- إصدار الخادم: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sfi`
--

-- --------------------------------------------------------

--
-- بنية الجدول `activities`
--

DROP TABLE IF EXISTS `activities`;
CREATE TABLE IF NOT EXISTS `activities` (
  `activity_name` varchar(50) NOT NULL,
  `activity_date` date NOT NULL,
  `activity_Governorate` varchar(50) NOT NULL,
  `activity_area` varchar(50) NOT NULL,
  `activity_type` varchar(50) NOT NULL,
  `activity_details` varchar(50) NOT NULL,
  `program_name` varchar(50) NOT NULL,
  `project_name` varchar(50) NOT NULL,
  KEY `program_name` (`program_name`),
  KEY `project_name` (`project_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `activ_bene`
--

DROP TABLE IF EXISTS `activ_bene`;
CREATE TABLE IF NOT EXISTS `activ_bene` (
  `activity_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `beneficiarie_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  KEY `activity_name` (`activity_name`),
  KEY `beneficiarie_name` (`beneficiarie_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `activ_chall`
--

DROP TABLE IF EXISTS `activ_chall`;
CREATE TABLE IF NOT EXISTS `activ_chall` (
  `challenge_id` int(11) NOT NULL,
  `activity_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  KEY `challenge_id` (`challenge_id`),
  KEY `activity_name` (`activity_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `act_emp`
--

DROP TABLE IF EXISTS `act_emp`;
CREATE TABLE IF NOT EXISTS `act_emp` (
  `emp_id` int(11) NOT NULL,
  `activity_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  KEY `emp_id` (`emp_id`),
  KEY `activity_name` (`activity_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `act_part`
--

DROP TABLE IF EXISTS `act_part`;
CREATE TABLE IF NOT EXISTS `act_part` (
  `participant_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `activity_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  KEY `participant_name` (`participant_name`),
  KEY `activity_name` (`activity_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `area`
--

DROP TABLE IF EXISTS `area`;
CREATE TABLE IF NOT EXISTS `area` (
  `area_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`area_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `attachments`
--

DROP TABLE IF EXISTS `attachments`;
CREATE TABLE IF NOT EXISTS `attachments` (
  `attachment_id` int(11) NOT NULL,
  `attachment` text CHARACTER SET utf8 NOT NULL,
  `activity_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`attachment_id`),
  KEY `activity_name` (`activity_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `beneficiaries`
--

DROP TABLE IF EXISTS `beneficiaries`;
CREATE TABLE IF NOT EXISTS `beneficiaries` (
  `beneficiarie_name` varchar(50) NOT NULL,
  `beneficiarie_age` int(11) NOT NULL,
  `beneficiarie_male` varchar(7) NOT NULL,
  PRIMARY KEY (`beneficiarie_name`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- بنية الجدول `challenges`
--

DROP TABLE IF EXISTS `challenges`;
CREATE TABLE IF NOT EXISTS `challenges` (
  `challenge_id` int(11) NOT NULL,
  `challenge` text NOT NULL,
  PRIMARY KEY (`challenge_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `employees`
--

DROP TABLE IF EXISTS `employees`;
CREATE TABLE IF NOT EXISTS `employees` (
  `emp_id` int(11) NOT NULL,
  `emp_first_name` text NOT NULL,
  `emp_last_name` text NOT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- بنية الجدول `goals`
--

DROP TABLE IF EXISTS `goals`;
CREATE TABLE IF NOT EXISTS `goals` (
  `goal` varchar(25) NOT NULL,
  `goal_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`goal_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- إرجاع أو استيراد بيانات الجدول `goals`
--

INSERT INTO `goals` (`goal`, `goal_id`) VALUES
('aim1', 1);

-- --------------------------------------------------------

--
-- بنية الجدول `goal_pro`
--

DROP TABLE IF EXISTS `goal_pro`;
CREATE TABLE IF NOT EXISTS `goal_pro` (
  `goal_id` int(11) NOT NULL,
  `project_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  KEY `goal_id` (`goal_id`),
  KEY `project_name` (`project_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `links`
--

DROP TABLE IF EXISTS `links`;
CREATE TABLE IF NOT EXISTS `links` (
  `link_id` int(11) NOT NULL,
  `link` text CHARACTER SET utf8 NOT NULL,
  `activity_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `foreign_key_column` varchar(50) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`link_id`),
  KEY `activity_name` (`activity_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `nicknames`
--

DROP TABLE IF EXISTS `nicknames`;
CREATE TABLE IF NOT EXISTS `nicknames` (
  `nickname` varchar(50) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`nickname`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `participants`
--

DROP TABLE IF EXISTS `participants`;
CREATE TABLE IF NOT EXISTS `participants` (
  `participants_name` varchar(50) NOT NULL,
  `nickname` varchar(50) NOT NULL,
  PRIMARY KEY (`participants_name`),
  KEY `nickname` (`nickname`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- بنية الجدول `programs`
--

DROP TABLE IF EXISTS `programs`;
CREATE TABLE IF NOT EXISTS `programs` (
  `program_name` varchar(50) NOT NULL,
  PRIMARY KEY (`program_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `project_name` varchar(50) NOT NULL,
  `project_financier_first_name` varchar(50) NOT NULL,
  `project_financier_last_name` varchar(50) NOT NULL,
  `project_value` float NOT NULL,
  `project_idea` text NOT NULL,
  PRIMARY KEY (`project_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- بنية الجدول `pro_area`
--

DROP TABLE IF EXISTS `pro_area`;
CREATE TABLE IF NOT EXISTS `pro_area` (
  `area_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `project_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  KEY `area_name` (`area_name`),
  KEY `project_name` (`project_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `target_groups`
--

DROP TABLE IF EXISTS `target_groups`;
CREATE TABLE IF NOT EXISTS `target_groups` (
  `target_group` varchar(50) CHARACTER SET utf8 COLLATE utf8_german2_ci NOT NULL,
  PRIMARY KEY (`target_group`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `targ_pro`
--

DROP TABLE IF EXISTS `targ_pro`;
CREATE TABLE IF NOT EXISTS `targ_pro` (
  `target_group` varchar(50) CHARACTER SET utf8 NOT NULL,
  `project_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  KEY `target_group` (`target_group`),
  KEY `project_name` (`project_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- بنية الجدول `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `permission` varchar(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

--
-- إرجاع أو استيراد بيانات الجدول `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `permission`) VALUES
(37, 'mohammad', '1234', 'admin'),
(36, 'a', 'a', 'admin'),
(35, 'qaz', ' qaz1', 'as'),
(38, 'd', 'd', 'user');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
