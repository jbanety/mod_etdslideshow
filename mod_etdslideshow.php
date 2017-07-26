<?php
/*!
 * @package		Module ETD Slideshow - ETD Solutions
 *
 * @version		1.0
 * @copyright	Copyright (C) 2016 ETD Solutions, SARL Etudoo. Tous droits réservés.
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
	$document->addScript('https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.jquery.min.js');
}

if ($params->get('loadswiperjs', '1')) {
	$document->addScript('https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js');
}

if ($params->get('loadswipercss', '1')) {
	$document->addStyleSheet('https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css');
}
$document->addStyleSheet(JUri::root() . '/modules/mod_etdslideshow/assets/css/etdslideshow.min.css');


// on affiche le module.
require JModuleHelper::getLayoutPath('mod_etdslideshow', $params->get('layout', 'default'));
