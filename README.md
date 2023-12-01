# FINISHING TOUCHES -- an action workflow script for Photoshop

This script runs one or many predefined Photoshop actions, depending on the aspect ratio of an image and the presence of specific keywords in the image meta data.

## How to install

1. Drop the script file **FinishingTouches.jsx** in Photoshop's scripts folder and restart Photoshop. The script should now be available in the menu **File/Automate**.
2. Open the script file in a text editor (such as **TextEdit.app** on a Mac) to define the Photoshop actions for different image aspect ratios and keywords, as described below. There are 40 actions sets in total, if you want to define all possible combinations of aspect ratios and keywords. There is no way around that you have to make changes in the script file itself.
3. I suggest running this script as a droplet. For this, first make an action that runs the script file by making a new action in the actions palette in Photoshop, click record and then select **Finishing Touches** in the menu **File/Automate** and the stop the recording. You may have to have at least two images open in Photoshop for this. Then make a droplet with this new action as usual.

## Image keywords

The script recognizes three keywords, set in Lightroom or in Bridge, which will inform what action set to run:

1. **bw** -- this is a black and white image. Without this keyword the script will treat the image as a color image.
2. **poserframes** -- the script [Poser Frames](https://www.poserframes.com) will run with this image.
3. **isohigh** -- useful for tagging images where you want heavier grain.

## Script settings

All settings are defined as javascript variables. When you make changes, mind quotation marks, brackets and commas.

The variables **target_size_35mm**, **target_size_645**, **target_size_67**, **target_size_45**, **target_size_square** sets the target short side of your image. Larger images will be scaled down and smaller images scaled up.

If the variable **tiff_to_jpg** is set to `true` TIFF images will be saved as JPGs in a folder named **jpgs**. If set to `false`the image will be saved as a TIFF file. Note that 16 bit TIFF files will be converted to 8 bit TIFF files if the keyword **poserframes** is present in the image meta data.

## Defining action sets

The action sets, eight per aspect ratio, are defined directly in the script code. For instance, the code for the 2:3 aspect ratio is structured like this:

	// 35mm
	
	if (do_isohigh == true) {
		
		// isohigh is set as keyword
		
		var actions_35mm_color_poserframes = [];
		var actions_35mm_bw_poserframes = [];	
		var actions_35mm_color = [];
		var actions_35mm_bw = [];
			
	} else {
		
		// isohigh is not set as keyword
		
		var actions_35mm_color_poserframes = [];
		var actions_35mm_bw_poserframes = [];
		var actions_35mm_color = [];
		var actions_35mm_bw = [];
		
	}

The script comes with all action sets pre-defined to the ones I use. Simply change them to what you want to run. An action set is defined as an array (list) of value pairs: 

1. The action name exactly as it appears in the Actions palette.
2. The name of the **.atn** file of the parent folder of that action.

Example:

	var actions_square_color_poserframes = [
			["Heavy alt 3", "Poser Frames.atn"],
			["6x6/6x7 ISO 1600 (6000 Color)", "The Film Grain 6000 Color.atn"], 
			["Light", "Remove outside grain.atn"]
			];
							
With this action set, Photoshop will run three actions one after the other: first **Heavy alt 3** from the **Poser Frames** actions folder, then **6x6/6x7 ISO 1600 (6000 Color** from the **The Film Grain 6000 Color.atn** actions folder and lastly **Light** from the **Remove outside grain** actions folder.
	
When you want to change to a different action, copy the first value (i.e. **Heavy alt 3**) directly from the actions palette. The easiest way to get the second value (i.e. **Poser Frames.atn**) is to select the actions folder, click on the hamburger menu of the actions palette, choose **Save** and copy the filename with the **.atn** ending.

Note the quotation marks and the comma after all value pairs but the last one.

Make sure none of the actions you define in this script try to save and close the images themselves. If they do, you might end up with unexpected results and broken workflows.