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

?>
<?php if ($nb) : ?>
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

                <img src="<?php echo $item->imgname; ?>" alt="">
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