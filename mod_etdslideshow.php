<?php
/*!
 * @package		Module ETD Slideshow - ETD Solutions
 *
 * @version		1.0
 * @copyright	Copyright (C) 2015 ETD Solutions, SARL Etudoo. Tous droits réservés.
 * @license		http://etd-solutions.com/licence
 * @author		ETD Solutions http://etd-solutions.com
 */

// no direct access
defined('_JEXEC') or die;

// On charge le helper.
require_once dirname(__FILE__) . '/helper.php';

// On charge les items.
$items = modEtdSlideshowHelper::getItems($params);

// On ajoute les scripts et css.
$document = JFactory::getDocument();
if ($params->get('loadjquery', '1')) {
	$document->addScript(JURI::base(true) . '/modules/mod_etdslideshow/assets/js/jquery-1.11.2.min.js');
	$document->addScript(JURI::base(true) . '/modules/mod_etdslideshow/assets/js/jquery.noconflict.js');
}

if ($params->get('loadtwtbsjs', '1')) {
	$document->addScript(JURI::base(true) . '/modules/mod_etdslideshow/assets/js/etdslideshow_twtbs.min.js');
}

if ($params->get('loadtwtbscss', '1')) {
	$document->addStyleSheet(JURI::base(true) . '/modules/mod_etdslideshow/assets/css/etdslideshow_twtbs.min.css');
}

// on affiche le module.
require JModuleHelper::getLayoutPath('mod_etdslideshow', $params->get('layout', 'default'));
