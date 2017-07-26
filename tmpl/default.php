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
new Swiper ('#swiper-carousel-" . $module->id . "', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    paginationClickable: " . $params->get('paginationclickable') . ",
    autoplay:" . $params->get('interval') . ",
    
    // If we need pagination
    pagination: '#swiper-pagination-carousel',
    
    // Navigation arrows
    nextButton: '#swiper-button-next-carousel',
    prevButton: '#swiper-button-prev-carousel'
    
    
  })        
});");



    ?>
    <section id="carousel">
        <div id="swiper-carousel-<?php echo $module->id; ?>" class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">

                <?php foreach($items as $i => $item) : ?>
                    <?php if (empty($item->imglink)) : ?>
                        <div class="swiper-slide">
                    <?php else: ?>
                        <a href="<?php echo $item->imglink; ?>" target="<?php echo $item->imgtarget; ?>" class="swiper-slide">
                    <?php endif; ?>
                    <div class="carousel-img" style="background-image:url('<?php echo $item->imgname ?>');"></div>


                    <?php if (!empty($item->imgcaptiontxt)) : ?>
                        <div class="caption-container">
                            <div class="carousel-caption">
                                <div>
                                    <?php echo $item->imgcaptiontxt; ?>
                                </div>

                            </div>
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
                <!-- If we need pagination -->
                <div id="swiper-pagination-carousel" class="swiper-pagination"></div>

                <!-- If we need navigation buttons -->
                <div id="swiper-button-prev-carousel" class="swiper-button-prev"></div>
                <div id="swiper-button-next-carousel" class="swiper-button-next"></div>
            <?php endif; ?>
            <?php //var_dump($params);die; ?>
            <?php if ($params->get('displayarrowbounce') == '1' && $nb > 1) : ?>
                <a id="arrows" class="waypoint">
                    <div></div>
                    <div></div>
                    <div></div>
                </a>
            <?php endif; ?>
        </div>
    </section>

<?php endif; ?>
