/**
 * @copyright	Copyright (C) 2012 Cedric KEIFLIN alias ced1870
 * http://www.joomlack.fr
 * Module Slideshow CK
 * @license		GNU/GPL
 * */

//function addfromfolderck() {
//
//}

// pour gestion editeur d'images
function jInsertEditorText( text, editor ) {
    var newEl = new Element('span').set('html',text);
    var valeur = newEl.getChildren()[0].getAttribute('src');
    $(editor).value = valeur;
    addthumbnail(valeur, editor);
}

function addthumbnail(imgsrc, editor) {
    var slideimg = $(editor).getParent().getElement('img');
    var testurl = 'http';
    if (imgsrc.toLowerCase().indexOf(testurl.toLowerCase()) != -1) {
        slideimg.src = imgsrc;
    } else {
        slideimg.src = JURI+imgsrc;
    }
    
    slideimg.setProperty('width','64px');
    slideimg.setProperty('height','64px');
}

function addslideetd(imgname, imgcaption, imgthumb, imglink, imgtarget, imgvideo, slideselect, imgalignment, articleid, imgtime) {
    /*if (!articleid) articleid = '';
    if (!imgtime) imgtime = '';*/
    if (!imgname) imgname = '';
    //if (!imgthumb) imgthumb = '../modules/mod_slideshowetd/elements/etdslidesmanager/unknown.png';
    if (!imgcaption) imgcaption = '';
    imgcaption = imgcaption.replace(/\|dq\|/g,"&quot;");
    if (!imglink) imglink = '';
    //if (!imgvideo) imgvideo = '';
    if (!imgtarget || imgtarget == 'default') {
        imgtarget = '';
        imgtargetoption = '<option value="default" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_DEFAULT', 'default')+'</option><option value="_parent">'+Joomla.JText._('MOD_ETDSLIDESHOW_SAMEWINDOW', 'same window')+'</option><option value="_blank">'+Joomla.JText._('MOD_ETDSLIDESHOW_NEWWINDOW', 'new window')+'</option><option value="lightbox">'+Joomla.JText._('MOD_ETDSLIDESHOW_LIGHTBOX', 'in a Lightbox')+'</option>';
    } else {
        if (imgtarget == '_parent') {
            imgtargetoption = '<option value="default">'+Joomla.JText._('MOD_ETDSLIDESHOW_DEFAULT', 'default')+'</option><option value="_parent" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_SAMEWINDOW', 'same window')+'</option><option value="_blank">'+Joomla.JText._('MOD_ETDSLIDESHOW_NEWWINDOW', 'new window')+'</option>';
        } else if (imgtarget == 'lightbox') {
            imgtargetoption = '<option value="default">'+Joomla.JText._('MOD_ETDSLIDESHOW_DEFAULT', 'default')+'</option><option value="_parent">'+Joomla.JText._('MOD_ETDSLIDESHOW_SAMEWINDOW', 'same window')+'</option><option value="_blank">'+Joomla.JText._('MOD_ETDSLIDESHOW_NEWWINDOW', 'new window')+'</option>';
        } else {
            imgtargetoption = '<option value="default">'+Joomla.JText._('MOD_ETDSLIDESHOW_DEFAULT', 'default')+'</option><option value="_parent">'+Joomla.JText._('MOD_ETDSLIDESHOW_SAMEWINDOW', 'same window')+'</option><option value="_blank" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_NEWWINDOW', 'new window')+'</option>';
        }
    }
    /*if (!slideselect) {
        slideselect = '';
        slideselectoption = '<option value="image" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_IMAGE', 'Image')+'</option><option value="video">'+Joomla.JText._('MOD_ETDSLIDESHOW_VIDEO', 'Video')+'</option>';
    } else {
        if (slideselect == 'image') {
            slideselectoption = '<option value="image" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_IMAGE', 'Image')+'</option><option value="video">'+Joomla.JText._('MOD_ETDSLIDESHOW_VIDEO', 'Video')+'</option>';
        } else {
            slideselectoption = '<option value="image">'+Joomla.JText._('MOD_ETDSLIDESHOW_IMAGE', 'Image')+'</option><option value="video" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_VIDEO', 'Video')+'</option>';
        }
    }*/

    /*if (!imgalignment) {
        imgalignment = '';
        imgdataalignmentoption = '<option value="default" selected="selected">Default</option>'
        +'<option value="topLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPLEFT', 'top left')+'</option>'
        +'<option value="topCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPCENTER', 'top center')+'</option>'
        +'<option value="topRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPRIGHT', 'top right')+'</option>'
        +'<option value="centerLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLELEFT', 'center left')+'</option>'
        +'<option value="center">'+Joomla.JText._('MOD_ETDSLIDESHOW_CENTER', 'center')+'</option>'
        +'<option value="centerRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLERIGHT', 'center right')+'</option>'
        +'<option value="bottomLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMLEFT', 'bottom left')+'</option>'
        +'<option value="bottomCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMCENTER', 'bottom center')+'</option>'
        +'<option value="bottomRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMRIGHT', 'bottom right')+'</option>';
    } else {
        if (imgalignment == 'topLeft') {
            imgdataalignmentoption = '<option value="default">Default</option>'
            +'<option value="topLeft" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPLEFT', 'top left')+'</option>'
            +'<option value="topCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPCENTER', 'top center')+'</option>'
            +'<option value="topRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPRIGHT', 'top right')+'</option>'
            +'<option value="centerLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLELEFT', 'center left')+'</option>'
            +'<option value="center">'+Joomla.JText._('MOD_ETDSLIDESHOW_CENTER', 'center')+'</option>'
            +'<option value="centerRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLERIGHT', 'center right')+'</option>'
            +'<option value="bottomLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMLEFT', 'bottom left')+'</option>'
            +'<option value="bottomCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMCENTER', 'bottom center')+'</option>'
            +'<option value="bottomRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMRIGHT', 'bottom right')+'</option>';
        } else if (imgalignment == 'topCenter') {
            imgdataalignmentoption = '<option value="default">Default</option>'
            +'<option value="topLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPLEFT', 'top left')+'</option>'
            +'<option value="topCenter" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPCENTER', 'top center')+'</option>'
            +'<option value="topRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPRIGHT', 'top right')+'</option>'
            +'<option value="centerLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLELEFT', 'center left')+'</option>'
            +'<option value="center">'+Joomla.JText._('MOD_ETDSLIDESHOW_CENTER', 'center')+'</option>'
            +'<option value="centerRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLERIGHT', 'center right')+'</option>'
            +'<option value="bottomLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMLEFT', 'bottom left')+'</option>'
            +'<option value="bottomCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMCENTER', 'bottom center')+'</option>'
            +'<option value="bottomRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMRIGHT', 'bottom right')+'</option>';
        } else if (imgalignment == 'topRight') {
            imgdataalignmentoption = '<option value="default">Default</option>'
            +'<option value="topLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPLEFT', 'top left')+'</option>'
            +'<option value="topCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPCENTER', 'top center')+'</option>'
            +'<option value="topRight" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPRIGHT', 'top right')+'</option>'
            +'<option value="centerLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLELEFT', 'center left')+'</option>'
            +'<option value="center">'+Joomla.JText._('MOD_ETDSLIDESHOW_CENTER', 'center')+'</option>'
            +'<option value="centerRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLERIGHT', 'center right')+'</option>'
            +'<option value="bottomLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMLEFT', 'bottom left')+'</option>'
            +'<option value="bottomCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMCENTER', 'bottom center')+'</option>'
            +'<option value="bottomRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMRIGHT', 'bottom right')+'</option>';
        } else if (imgalignment == 'centerLeft') {
            imgdataalignmentoption = '<option value="default">Default</option>'
            +'<option value="topLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPLEFT', 'top left')+'</option>'
            +'<option value="topCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPCENTER', 'top center')+'</option>'
            +'<option value="topRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPRIGHT', 'top right')+'</option>'
            +'<option value="centerLeft" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLELEFT', 'center left')+'</option>'
            +'<option value="center">'+Joomla.JText._('MOD_ETDSLIDESHOW_CENTER', 'center')+'</option>'
            +'<option value="centerRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLERIGHT', 'center right')+'</option>'
            +'<option value="bottomLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMLEFT', 'bottom left')+'</option>'
            +'<option value="bottomCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMCENTER', 'bottom center')+'</option>'
            +'<option value="bottomRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMRIGHT', 'bottom right')+'</option>';
        } else if (imgalignment == 'center') {
            imgdataalignmentoption = '<option value="default">Default</option>'
            +'<option value="topLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPLEFT', 'top left')+'</option>'
            +'<option value="topCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPCENTER', 'top center')+'</option>'
            +'<option value="topRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPRIGHT', 'top right')+'</option>'
            +'<option value="centerLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLELEFT', 'center left')+'</option>'
            +'<option value="center" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_CENTER', 'center')+'</option>'
            +'<option value="centerRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLERIGHT', 'center right')+'</option>'
            +'<option value="bottomLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMLEFT', 'bottom left')+'</option>'
            +'<option value="bottomCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMCENTER', 'bottom center')+'</option>'
            +'<option value="bottomRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMRIGHT', 'bottom right')+'</option>';
        } else if (imgalignment == 'centerRight') {
            imgdataalignmentoption = '<option value="default">Default</option>'
            +'<option value="topLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPLEFT', 'top left')+'</option>'
            +'<option value="topCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPCENTER', 'top center')+'</option>'
            +'<option value="topRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPRIGHT', 'top right')+'</option>'
            +'<option value="centerLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLELEFT', 'center left')+'</option>'
            +'<option value="center">'+Joomla.JText._('MOD_ETDSLIDESHOW_CENTER', 'center')+'</option>'
            +'<option value="centerRight" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLERIGHT', 'center right')+'</option>'
            +'<option value="bottomLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMLEFT', 'bottom left')+'</option>'
            +'<option value="bottomCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMCENTER', 'bottom center')+'</option>'
            +'<option value="bottomRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMRIGHT', 'bottom right')+'</option>';
        } else if (imgalignment == 'bottomLeft') {
            imgdataalignmentoption = '<option value="default">Default</option>'
            +'<option value="topLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPLEFT', 'top left')+'</option>'
            +'<option value="topCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPCENTER', 'top center')+'</option>'
            +'<option value="topRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPRIGHT', 'top right')+'</option>'
            +'<option value="centerLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLELEFT', 'center left')+'</option>'
            +'<option value="center">'+Joomla.JText._('MOD_ETDSLIDESHOW_CENTER', 'center')+'</option>'
            +'<option value="centerRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLERIGHT', 'center right')+'</option>'
            +'<option value="bottomLeft" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMLEFT', 'bottom left')+'</option>'
            +'<option value="bottomCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMCENTER', 'bottom center')+'</option>'
            +'<option value="bottomRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMRIGHT', 'bottom right')+'</option>';
        } else if (imgalignment == 'bottomCenter') {
            imgdataalignmentoption = '<option value="default">Default</option>'
            +'<option value="topLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPLEFT', 'top left')+'</option>'
            +'<option value="topCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPCENTER', 'top center')+'</option>'
            +'<option value="topRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPRIGHT', 'top right')+'</option>'
            +'<option value="centerLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLELEFT', 'center left')+'</option>'
            +'<option value="center">'+Joomla.JText._('MOD_ETDSLIDESHOW_CENTER', 'center')+'</option>'
            +'<option value="centerRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLERIGHT', 'center right')+'</option>'
            +'<option value="bottomLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMLEFT', 'bottom left')+'</option>'
            +'<option value="bottomCenter" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMCENTER', 'bottom center')+'</option>'
            +'<option value="bottomRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMRIGHT', 'bottom right')+'</option>';
        } else if (imgalignment == 'bottomRight') {
            imgdataalignmentoption = '<option value="default">Default</option>'
            +'<option value="topLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPLEFT', 'top left')+'</option>'
            +'<option value="topCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPCENTER', 'top center')+'</option>'
            +'<option value="topRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPRIGHT', 'top right')+'</option>'
            +'<option value="centerLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLELEFT', 'center left')+'</option>'
            +'<option value="center">'+Joomla.JText._('MOD_ETDSLIDESHOW_CENTER', 'center')+'</option>'
            +'<option value="centerRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLERIGHT', 'center right')+'</option>'
            +'<option value="bottomLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMLEFT', 'bottom left')+'</option>'
            +'<option value="bottomCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMCENTER', 'bottom center')+'</option>'
            +'<option value="bottomRight" selected="selected">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMRIGHT', 'bottom right')+'</option>';
        } else {
            imgdataalignmentoption = '<option value="default" selected="selected">Default</option>'
            +'<option value="topLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPLEFT', 'top left')+'</option>'
            +'<option value="topCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPCENTER', 'top center')+'</option>'
            +'<option value="topRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_TOPRIGHT', 'top right')+'</option>'
            +'<option value="centerLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLELEFT', 'center left')+'</option>'
            +'<option value="center">'+Joomla.JText._('MOD_ETDSLIDESHOW_CENTER', 'center')+'</option>'
            +'<option value="centerRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_MIDDLERIGHT', 'center right')+'</option>'
            +'<option value="bottomLeft">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMLEFT', 'bottom left')+'</option>'
            +'<option value="bottomCenter">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMCENTER', 'bottom center')+'</option>'
            +'<option value="bottomRight">'+Joomla.JText._('MOD_ETDSLIDESHOW_BOTTOMRIGHT', 'bottom right')+'</option>';
        }
    }*/

    index = checkIndex(0);
    var etdslide = new Element('li', {
        'class': 'etdslide',
        'id': 'etdslide'+index
        });
    etdslide.set('html','<div class="etdslidehandle"><div class="etdslidenumber">'+index+'</div></div><div class="etdslidecontainer">'
        + '<input name="etdslidedelete'+index+'" class="etdslidedelete" type="button" value="'+Joomla.JText._('MOD_ETDSLIDESHOW_REMOVE2', '')+'" onclick="javascript:removeslide(this.getParent().getParent());" />'
        + '<div class="etdsliderow"><div class="etdslideimgcontainer"><img src="'+imgthumb+'" width="64" height="64"/></div>'
        
        + '<input name="etdslideimgname'+index+'" id="etdslideimgname'+index+'" class="etdslideimgname hasTip" title="Image::This is the main image for the slide, it will also be used to create the thumbnail" type="text" value="'+imgname+'" onchange="javascript:addthumbnail(this.value, this);" />'
        
        + '<a class="modal ckselectimg" href="index.php?option=com_media&view=images&tmpl=component&e_name=etdslideimgname'+index+'" rel="{handler: \'iframe\', size: {x: 570, y: 400}}" >'+Joomla.JText._('MOD_ETDSLIDESHOW_SELECTIMAGE', 'select image')+'</a></div>'
        //+ '<div class="etdsliderow2"><span class="etdslidelabel">'+Joomla.JText._('MOD_ETDSLIDESHOW_USETOSHOW', 'Display')+'</span><select class="etdslideselect">'+slideselectoption+'</select>'
        //+ '<span><img src="../modules/mod_slideshowck/elements/images/hourglass.png" style="float: none; padding-top: 5px;" align="top" class="hasTip" title="'+Joomla.JText._('MOD_ETDSLIDESHOW_SLIDETIME', 'enter a specific time value for this slide, else it will be the default time')+'"/><input name="etdslideimgtime'+index+'" class="etdslideimgtime" type="text" value="'+imgtime+'" onchange="javascript:storesetwarning();" style="width:25px;" /></span><span>ms</span>'
        + '</div>'
        + '<div class="etdsliderow"><span class="etdslidelabel">'+Joomla.JText._('MOD_ETDSLIDESHOW_CAPTION', 'Caption')+'</span><input name="etdslidecaptiontext'+index+'" class="etdslidecaptiontext" type="text" value="'+imgcaption+'" onchange="javascript:storesetwarning();" /></div>'
        
        + '<div class="etdsliderow"><div id="etdslideaccordion'+index+'">'
        //+ '<span class="etdslideaccordeonbutton">'+Joomla.JText._('MOD_ETDSLIDESHOW_IMAGEOPTIONS', 'Image options')+'</span>'
        + '<span class="etdslideaccordeonbutton">'+Joomla.JText._('MOD_ETDSLIDESHOW_LINKOPTIONS', 'Link options')+'</span>'
        //+ '<span class="etdslideaccordeonbutton">'+Joomla.JText._('MOD_ETDSLIDESHOW_VIDEOOPTIONS', 'Video options')+'</span>'
        //+ '<span class="etdslideaccordeonbutton">'+Joomla.JText._('MOD_ETDSLIDESHOW_ARTICLEOPTIONS', 'Article options')+'</span>'
        + '<div style="clear:both;"></div>'
        /*+ '<div class="etdslideaccordeoncontent">'
        + '<div class="etdsliderow"><span class="etdslidelabel">'+Joomla.JText._('MOD_ETDSLIDESHOW_ALIGNEMENT_LABEL', 'Image alignment')+'</span><select name="etdslidedataalignmenttext'+index+'" class="etdslidedataalignmenttext" >'+imgdataalignmentoption+'</select></div>'
        + '</div>'*/
        + '<div class="etdslideaccordeoncontent">'
        + '<div class="etdsliderow"><span class="etdslidelabel">'+Joomla.JText._('MOD_ETDSLIDESHOW_LINK', 'Link url')+'</span><input name="etdslidelinktext'+index+'" class="etdslidelinktext" type="text" value="'+imglink+'" onchange="javascript:storesetwarning();" /></div>'
        + '<div class="etdsliderow"><span class="etdslidelabel">'+Joomla.JText._('MOD_ETDSLIDESHOW_TARGET', 'Target')+'</span><select name="etdslidetargettext'+index+'" class="etdslidetargettext" >'+imgtargetoption+'</select></div>'
        + '</div>'
        /*+ '<div class="etdslideaccordeoncontent">'
        + '<div class="etdsliderow"><span class="etdslidelabel">'+Joomla.JText._('MOD_ETDSLIDESHOW_VIDEOURL', 'Video url')+'</span><input name="etdslidevideotext'+index+'" class="etdslidevideotext" type="text" value="'+imgvideo+'" onchange="javascript:storesetwarning();" /></div>'
        + '</div>'
        + '<div class="etdslideaccordeoncontent">'
        + '<div class="etdsliderow"><span class="etdslidelabel">'+Joomla.JText._('MOD_ETDSLIDESHOW_ARTICLE_ID', 'Article ID')+'</span><input name="etdslidearticleid'+index+'" class="etdslidearticleid" type="text" value="'+articleid+'" onchange="javascript:storesetwarning();" /></div>'
        + '</div>'*/
        + '</div></div>'
        + '</div><div style="clear:both;"></div>');

    document.id('etdslideslist').adopt(etdslide);

    storeslideetd();
    makesortables();
    SqueezeBox.initialize({});
    SqueezeBox.assign(etdslide.getElement('a.modal'), {
        parse: 'rel'
    });
    new Fx.Accordion($('accordion'+index), '#etdslideaccordion'+index+' .etdslideaccordeonbutton', '#etdslideaccordion'+index+' .etdslideaccordeoncontent',
    {
        onActive: function(toggler, content) {
            toggler.addClass('open');
        },
        onBackground: function(toggler, content) {
            toggler.removeClass('open');
        }
    });
}


function checkIndex(i) {
    while ($('etdslide'+i)) i++;
    return i;
}


function removeslide(slide) {
    if (confirm(Joomla.JText._('MOD_ETDSLIDESHOW_REMOVE', 'Remove this slide')+' ?')) {
        slide.destroy();
        storeslideetd();
    }
}

function storesetwarning() {
// $('ckstoreslide').setStyle('background-color', 'red');
}

function storeremovewarning() {
// $('ckstoreslide').setStyle('background-color', 'white');
}

function storeslideetd() {
    var i = 0;
    var slides = new Array();
    document.id('etdslideslist').getElements('.etdslide').each(function(el) {
        slide = new Object();
        slide['imgname'] = el.getElement('.etdslideimgname').value;
        slide['imgcaption'] = el.getElement('.etdslidecaptiontext').value;
        slide['imgcaption'] = slide['imgcaption'].replace(/"/g,"|dq|");
        slide['imgthumb'] = el.getElement('img').src;
        slide['imglink'] = el.getElement('.etdslidelinktext').value;
        slide['imglink'] = slide['imglink'].replace(/"/g,"|dq|");
        slide['imgtarget'] = el.getElement('.etdslidetargettext').value;
        /*slide['imgalignment'] = el.getElement('.etdslidedataalignmenttext').value;
        slide['imgvideo'] = el.getElement('.etdslidevideotext').value;
        slide['slideselect'] = el.getElement('.etdslideselect').value;
        slide['slidearticleid'] = el.getElement('.etdslidearticleid').value;
        slide['imgtime'] = el.getElement('.etdslideimgtime').value;*/
        slides[i] = slide;
        i++;
    });

    slides = JSON.encode(slides);
    slides = slides.replace(/"/g,"|qq|");
    document.id('etdslides').value = slides;
    storeremovewarning();

}

function callslides() {
    // alert(document.id('etdslides').value);
    var slides = JSON.decode(document.id('etdslides').value.replace(/\|qq\|/g,"\""));
    if (slides) {
        slides.each(function(slide) {
            addslideetd(slide['imgname'],
                slide['imgcaption'],
                slide['imgthumb'],
                slide['imglink'],
                slide['imgtarget']/*,
                slide['imgvideo'],
                slide['slideselect'],
                slide['imgalignment'],
                slide['slidearticleid'],
                slide['imgtime']*/
                );
        });
        storeremovewarning();
    }
}
	
	
function makesortables() {
    var sb = new Sortables('etdslideslist', {
        /* set options */
        clone:true,
        revert: true,
        handle:'.etdslidehandle',
        /* initialization stuff here */
        initialize: function() {
      
        },
        /* once an item is selected */
        onStart: function(el) {
            el.setStyle('background','#add8e6');
        },
        /* when a drag is complete */
        onComplete: function(el) {
            el.setStyle('background','#fff');
            storesetwarning();
        },
        onSort: function(el, clone) {
		
        }
    });
}
	
window.addEvent('domready', function() {
    callslides();		

    var script = document.createElement("script");
    script.setAttribute('type','text/javascript');
    script.text="Joomla.submitbutton = function(task){"
    +"storeslideetd();"
    +"if (task == 'module.cancel' || document.formvalidator.isValid(document.id('module-form'))) {	Joomla.submitform(task, document.getElementById('module-form'));"
    +"if (self != top) {"
    +"window.top.setTimeout('window.parent.SqueezeBox.close()', 1000);"
    +"}"
    +"} else {"
    +"alert('Formulaire invalide');"
    +"}}";
    document.body.appendChild(script);
});


	
	
    