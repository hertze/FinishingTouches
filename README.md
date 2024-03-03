# FINISHING TOUCHES -- an action workflow script for Photoshop

This script executes Photoshop actions from keywords embedded in an image file. In a way, the script "expands" a keyword into a Photoshop action, taking the aspect ratio of the image into consideration. If you want it to, the script will also resize your image to a target size. You can have as many keywords as you like in a file and the script will the execute all the corresponding actions in the order they have in the file.

## How to install

1. Drop the script file **FinishingTouches.jsx** in Photoshop's scripts folder and restart Photoshop. The script should now be available in the menu **File/Automate**.
2. Open the script file in a text editor (such as **TextEdit.app** on a Mac) to define the Photoshop actions for different image aspect ratios and keywords, as described below. There are 40 actions sets in total, if you want to define all possible combinations of aspect ratios and keywords. There is no way around that you have to make changes in the script file itself.
3. I suggest running this script as a droplet. For this, first make an action that runs the script file by making a new action in the actions palette in Photoshop, click record and then select **Finishing Touches** in the menu **File/Automate** and the stop the recording. You may have to have at least two images open in Photoshop for this. Then make a droplet with this new action as usual.

## Defining actions

Finishing Touches has a library of keywords tied to Photoshop actions in the form of javascript objects, of the following form:

	{
		"keyword": the keyword you set in Lightroom,
		"aspect_ratio": the aspect ratio: 2x3, 4x3, 4x5, 6x7 or 1x1,
		"target_size": the short-side dimension of the image in pixels,
		"actions": [[the name of the first action as it is displayed in the Actions palette, the path to the .atn file for the action], [...]]
	}
	
This is a real example of a library object:

	{
		"keyword": "bw",
		"aspect_ratio": "2x3",
		"target_size": 3600,
		"actions": [["35mm ISO 3200 (3600 Monochrome)", "The Film Grain 3600 Monochrome.atn"]]
	}
	
The keyword `bw` is set in Lightroom (or Bridge). When Finishing Touches finds this keyword in an image file it runs the action `35mm ISO 3200 (3600 Monochrome)` for images with a 2x3 aspect ratio. It also resizes this images to 3600px on the short side. Note where you need the quotation marks and the square brackets around the actions. All library objects but the last one needs a comma after the closing `}`. The item `target_size` is optional.

You can add as many actions as you like to a library object and they will be executed in the order you've listed them. 

When you want to change to a different action, copy the first value (i.e. **35mm ISO 3200 (3600 Monochrome)**) directly from the actions palette. The easiest way to get the second value (i.e. **The Film Grain 3600 Monochrome.atn**) is to select the actions folder, click on the hamburger menu of the actions palette, choose **Save** and copy the filename with the **.atn** ending.

Note the quotation marks and the comma after all value pairs but the last one.

Make sure none of the actions you define in this script try to save and close the images themselves. If they do, you might end up with unexpected results and broken workflows.

## Script behaviour settings

All settings are defined as javascript variables. When you make changes, mind quotation marks, brackets and commas.

If the variable **tiff_to_jpg** is set to `true` TIFF images will be saved as JPGs in a folder named **jpgs**. If set to `false`the image will be saved as a TIFF file.

The variable **keyword_order** is an array (list) of keywords, that defines the order in which they should be executed.

## Tips

Oftentimes the order of executed actions is important. You can define a list of actions to be executed with one keyword, but a more flexible way is to only define one action per keyword and then add several keywords to the image to have several actions executed. The list of keywords will then define the order of execution. Unfortunately, all Adobe products always save the keywords in alphabetical order, so as a work-around I suggest adding a number to the start of your keywords (i.e. `1. color` instead of just `color`), so they sort in the correct order. You can also use the setting **keyword_order** to define the order in which the keywords should be executed.