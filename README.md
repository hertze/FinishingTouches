# FINISHING TOUCHES -- an action workflow script for Photoshop

This script lets you define a set of Photoshop actions to be run depending on the aspect ratio of an image file and the presence of a specific keywords.

The action set is defined as an array of value pairs (The action name exactly as it appears in the Actions palette and the name of the .atn file of the parent folder of that action).

Example:

	var actions_square_color_poserframes = [
			["Heavy alt 3", "Poser Frames.atn"],
			["6x6/6x7 ISO 1600 (6000 Color)", "The Film Grain 6000 Color.atn"], 
			["Light", "Remove outside grain.atn"]
			];
								
Copy the first value directly from the Action palette. The easiest way to get the second value is to select the actions folder, click on the hamburger menu of the actions palette, choose "Save" and copy the filename with the .atn ending.

The script recognizes three keywords, set in Lightroom or in Bridge:

1. **bw** -- this is a black and white image
2. **poserframes** -- the script Poser Frames should be run
3. **isohigh** -- this is an higher iso image, useful when adding heavier grain