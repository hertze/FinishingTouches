# FINISHING TOUCHES -- an action workflow script for Photoshop

This script lets you define a set of Photoshop actions to be run depending on the aspect ratio of an image file and the presence of a specific keywords.

The variables **target_size_35mm**, **target_size_645**, **target_size_67**, **target_size_45**, **target_size_square** sets the target short side of your image. Larger images will be scaled down and smaller images scaled up.

If the variable **tiff_to_jpg** is set to `true` TIFF images will be saved as JPGs in a folder named **jpgs**.

The following variables are available as containers for actions sets (four per aspect ratio):

1. **actions_35mm_color_poserframes**
2. **actions_35mm_bw_poserframes**
3. **actions_35mm_color**
4. **actions_35mm_bw**
5. **actions_645_color_poserframes**
6. **actions_645_bw_poserframes**
7. **actions_645_color**
8. **actions_645_bw**
9. **actions_67_color_poserframes**
10. **actions_67_bw_poserframes**
11. **actions_67_color**
12. **actions_67_bw**
13. **actions_square_color_poserframes**
14. **actions_square_bw_poserframes**
15. **actions_square_color**
16. **actions_square_bw**
17. **actions_45_color_poserframes**
18. **actions_45_bw_poserframes**
19.**actions_45_color**
20. **actions_45_bw**

Two variants are set for each variable, depending on weather the keyword **isohigh** is present in an image.

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