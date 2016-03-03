<?php
/*!
 * @package		Module ETD Slideshow - ETD Solutions
 *
 * @version		1.0
 * @copyright	Copyright (C) 2013 ETD Solutions, SARL Etudoo. Tous droits réservés.
 * @license		http://www.etd-solutions.com/licence
 * @author		ETD Solutions http://www.etd-solutions.com
 */

// Nombre de slides.
$nb = count($items);

if ($nb) :

JFactory::getDocument()->addScriptDeclaration("jQuery(document).ready(function($) {
    $('#twtbs-carousel-". $module->id . "').carousel({
        interval: " . ((int) $params->get('interval', 5000)) . ",
        pause: " . ($params->get('pauseonhover', '1') == '1' ? "'hover'" : "false") . "
    });
});");

?>
<div id="twtbs-carousel-<?php echo $module->id; ?>" class="carousel<?php if ($params->get('displaycontrols') == '0' || $nb <= 1) : ?> carousel-nocontrols<?php endif; ?> slide">
    <?php if ($params->get('displayindicators') == '1') : ?>
    <ol class="carousel-indicators">
        <?php for($i=0;$i<$nb;$i++) : ?>
            <li data-target="#twtbs-carousel-<?php echo $module->id; ?>" data-slide-to="<?php echo $i; ?>"<?php if ($i==0):?> class="active"<?php endif; ?>></li>
        <?php endfor; ?>
    </ol>
    <?php endif; ?>
    <div class="carousel-inner">
        <?php foreach($items as $i => $item) : ?>
            <?php if (empty($item->imglink)) : ?>
                <div class="item<?php if ($i==0): ?> active<?php endif; ?>">
            <?php else: ?>
                <a href="<?php echo $item->imglink; ?>" target="<?php echo $item->imgtarget; ?>" class="item<?php if ($i==0): ?> active<?php endif; ?>">
            <?php endif; ?>

                <div class="bg-img" style="background-image:url('<?php echo $item->imgname ?>');"></div>
                <?php if (!empty($item->imgcaption)) : ?>
                <div class="carousel-caption">
                    <?php echo $item->imgcaption; ?>
                </div>
                <?php endif; ?>
            <?php if (empty($item->imglink)) : ?>
                </div>
            <?php else: ?>
                </a>
            <?php endif; ?>

        <?php endforeach; ?>
    </div>
    <?php if ($params->get('displaycontrols') == '1' && $nb > 1) : ?>
    <div class="carousel-controls">
        <a class="carousel-control left" href="#twtbs-carousel-<?php echo $module->id; ?>" data-slide="prev">&lsaquo;</a>
        <a class="carousel-control right" href="#twtbs-carousel-<?php echo $module->id; ?>" data-slide="next">&rsaquo;</a>
    </div>
    <?php endif; ?>
</div>
<?php endif; ?>