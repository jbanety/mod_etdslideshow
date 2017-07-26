<?php

// no direct access
defined('_JEXEC') or die;

class modEtdSlideshowHelper {

	/**
	 * Get a list of the items.
	 *
	 * @param	JRegistry	$params	The module options.
	 *
	 * @return	array
	 */
	static function getItems(&$params) {

		// load the libraries
		$items = json_decode(str_replace("|qq|", "\"", $params->get('slides')));

		foreach ($items as $i => $item) {
			if (!$item->imgname) {
				unset($items[$i]);
				continue;
			}

			if (!stristr($item->imgname, "http")) {
				$item->imgname = JURI::base(true) . '/' . $item->imgname;
			}

			// manage the title and description
			if (stristr($item->imgcaptiontxt, "||")) {
				$splitcaption = explode("||", $item->imgcaptiontxt);
				$item->imgcaption = '<h4>' . $splitcaption[0] . '</h4><p>' . $splitcaption[1] . '</p>';
			} elseif (!empty($item->imgcaptiontxt)) {
                $item->imgcaptiontxt = '<p>' . $item->imgcaptiontxt . '</p>';
            }
		}
		//shuffle($items);
		return $items;
	}

	/**
	 * Truncates text blocks over the specified character limit and closes
	 * all open HTML tags. The method will optionally not truncate an individual
	 * word, it will find the first space that is within the limit and
	 * truncate at that point. This method is UTF-8 safe.
	 *
	 * @param   string   $text       The text to truncate.
	 * @param   integer  $length     The maximum length of the text.
	 * @param   boolean  $noSplit    Don't split a word if that is where the cutoff occurs (default: true).
	 * @param   boolean  $allowHtml  Allow HTML tags in the output, and close any open tags (default: true).
	 *
	 * @return  string   The truncated text.
	 *
	 * @since   11.1
	 */
	public static function truncate($text, $length = 0, $noSplit = true, $allowHtml = true) {
		// Check if HTML tags are allowed.
		if (!$allowHtml) {
			// Deal with spacing issues in the input.
			$text = str_replace('>', '> ', $text);
			$text = str_replace(array('&nbsp;', '&#160;'), ' ', $text);
			$text = JString::trim(preg_replace('#\s+#mui', ' ', $text));

			// Strip the tags from the input and decode entities.
			$text = strip_tags($text);
			$text = html_entity_decode($text, ENT_QUOTES, 'UTF-8');

			// Remove remaining extra spaces.
			$text = str_replace('&nbsp;', ' ', $text);
			$text = JString::trim(preg_replace('#\s+#mui', ' ', $text));
		}

		// Truncate the item text if it is too long.
		if ($length > 0 && JString::strlen($text) > $length) {
			// Find the first space within the allowed length.
			$tmp = JString::substr($text, 0, $length);

			if ($noSplit) {
				$offset = JString::strrpos($tmp, ' ');
				if (JString::strrpos($tmp, '<') > JString::strrpos($tmp, '>')) {
					$offset = JString::strrpos($tmp, '<');
				}
				$tmp = JString::substr($tmp, 0, $offset);

				// If we don't have 3 characters of room, go to the second space within the limit.
				if (JString::strlen($tmp) > $length - 3) {
					$tmp = JString::substr($tmp, 0, JString::strrpos($tmp, ' '));
				}
			}

			if ($allowHtml) {
				// Put all opened tags into an array
				preg_match_all("#<([a-z][a-z0-9]*)\b.*?(?!/)>#i", $tmp, $result);
				$openedTags = $result[1];
				$openedTags = array_diff($openedTags, array("img", "hr", "br"));
				$openedTags = array_values($openedTags);

				// Put all closed tags into an array
				preg_match_all("#</([a-z]+)>#iU", $tmp, $result);
				$closedTags = $result[1];

				$numOpened = count($openedTags);

				// All tags are closed
				if (count($closedTags) == $numOpened) {
					return $tmp . '...';
				}
				$tmp .= '...';
				$openedTags = array_reverse($openedTags);

				// Close tags
				for ($i = 0; $i < $numOpened; $i++) {
					if (!in_array($openedTags[$i], $closedTags)) {
						$tmp .= "</" . $openedTags[$i] . ">";
					} else {
						unset($closedTags[array_search($openedTags[$i], $closedTags)]);
					}
				}
			}

			$text = $tmp;
		}

		return $text;
	}

}
