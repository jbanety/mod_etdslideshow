<?php

/**
 * @copyright	Copyright (C) 2011 Cedric KEIFLIN alias ced1870
 * http://www.joomlack.fr
 * @license		GNU/GPL
 * */
// no direct access
defined('_JEXEC') or die('Restricted access');

JText::script('MOD_ETDSLIDESHOW_ADDSLIDE');
JText::script('MOD_ETDSLIDESHOW_SELECTIMAGE');
JText::script('MOD_ETDSLIDESHOW_CAPTION');
JText::script('MOD_ETDSLIDESHOW_USETOSHOW');
JText::script('MOD_ETDSLIDESHOW_IMAGE');
JText::script('MOD_ETDSLIDESHOW_VIDEO');
JText::script('MOD_ETDSLIDESHOW_IMAGEOPTIONS');
JText::script('MOD_ETDSLIDESHOW_LINKOPTIONS');
JText::script('MOD_ETDSLIDESHOW_VIDEOOPTIONS');
JText::script('MOD_ETDSLIDESHOW_ALIGNEMENT_LABEL');
JText::script('MOD_ETDSLIDESHOW_TOPLEFT');
JText::script('MOD_ETDSLIDESHOW_TOPCENTER');
JText::script('MOD_ETDSLIDESHOW_TOPRIGHT');
JText::script('MOD_ETDSLIDESHOW_MIDDLELEFT');
JText::script('MOD_ETDSLIDESHOW_CENTER');
JText::script('MOD_ETDSLIDESHOW_MIDDLERIGHT');
JText::script('MOD_ETDSLIDESHOW_BOTTOMLEFT');
JText::script('MOD_ETDSLIDESHOW_BOTTOMCENTER');
JText::script('MOD_ETDSLIDESHOW_BOTTOMRIGHT');
JText::script('MOD_ETDSLIDESHOW_LINK');
JText::script('MOD_ETDSLIDESHOW_TARGET');
JText::script('MOD_ETDSLIDESHOW_SAMEWINDOW');
JText::script('MOD_ETDSLIDESHOW_NEWWINDOW');
JText::script('MOD_ETDSLIDESHOW_VIDEOURL');
JText::script('MOD_ETDSLIDESHOW_REMOVE');
JText::script('MOD_ETDSLIDESHOW_IMPORTFROMFOLDER');
JText::script('MOD_ETDSLIDESHOW_ARTICLEOPTIONS');
JText::script('MOD_ETDSLIDESHOW_SLIDETIME');



class JFormFieldEtdslidesmanager extends JFormField {

    protected $type = 'etdslidesmanager';

    protected function getInput() {

        $document = JFactory::getDocument();
        $document->addScriptDeclaration("JURI='" . JURI::root() . "'");
        $path = 'modules/mod_etdslideshow/fields/etdslidesmanager/';
        JHTML::_('behavior.modal');
        JHTML::_('script', $path.'etdslidesmanager.js');
        JHTML::_('script', $path.'FancySortable.js');
        JHTML::_('stylesheet', $path.'etdslidesmanager.css');

        $html = '<input name="' . $this->name . '" id="etdslides" type="hidden" value="' . $this->value . '" />'
                . '<input name="etdaddslide" id="etdaddslide" type="button" value="' . JText::_('MOD_ETDSLIDESHOW_ADDSLIDE') . '" onclick="javascript:addslideetd();"/>'
                . '<ul id="etdslideslist" style="clear:both;"></ul>'
                . '<input name="etdaddslide" id="etdaddslide" type="button" value="' . JText::_('MOD_ETDSLIDESHOW_ADDSLIDE') . '" onclick="javascript:addslideetd();"/>';

        return $html;
    }

    protected function getPathToImages() {
        $localpath = dirname(__FILE__);
        $rootpath = JPATH_ROOT;
        $httppath = trim(JURI::root(), "/");
        $pathtoimages = str_replace("\\", "/", str_replace($rootpath, $httppath, $localpath));
        return $pathtoimages;
    }

    protected function getLabel() {

        return '';
    }

    protected function getArticlesList() {
        $db = & JFactory::getDBO();

        $query = "SELECT id, title FROM #__content WHERE state = 1 LIMIT 2;";
        $db->setQuery($query);
        $row = $db->loadObjectList('id');
//        var_dump($row);
        return json_encode($row);
    }

}

