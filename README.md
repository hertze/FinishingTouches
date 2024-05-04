# FINISHING TOUCHES -- an action workflow script for Photoshop

This script is designed to automate actions in Adobe Photoshop based on the keywords and aspect ratio of the active image file. It's particularly useful for batch processing a mix of images with varying sizes, mode and aspect ratios.

## How to install

1. Drop the script file **FinishingTouches.jsx** in Photoshop's scripts folder and restart Photoshop. The script should now be available in the menu **File/Automate**.
2. Open the script file in a text editor (such as **TextEdit.app** on a Mac) to define the Photoshop actions for different image aspect ratios and keywords, as described below.
3. I suggest running this script as a droplet. For this, first make an action that runs the script file by making a new action in the actions palette in Photoshop, click record and then select **Finishing Touches** in the menu **File/Automate** and the stop the recording. You may have to have at least two images open in Photoshop for this. Then make a droplet with this new action as usual.

## How it works

The script has a library of *capsules*, where each capsule contains a combination of *matching properties* (keywords and aspect ratio) and *instructional properties* (target size and Photoshop actions). When the script runs on an image, it looks at the keywords in the image EXIF data and its aspect ratio and resizes and executes the Photoshop actions of the matching capsule.

## Defining library capsules

A capsule is a javascript object of the following form:

	{
		"keywords": the keyword or keywords you add to the image EXIF data in Lightroom,
		"aspect_ratio": the aspect ratio of the image: "2x3", "4x3", "4x5", "6x7" or "1x1",
		"target_size": the short-side target dimension of the image in pixels,
		"actions": [[the name of the first action as it is displayed in the Actions palette, the path to the .atn file for the action], [...]]
	}
	
If an image is to match this capsule, both the keywords in the image and its aspect ratio must match the contents of `"keywords"` and `"aspect_ratio"` respectively. Only then will the script resize it to `"target_size"` and execute the actions in `"actions"`.

The item `"keywords"` may contain one or many keywords. The first keyword is called a *master keyword* and subsequent keywords are called *modifier keywords*. Master keywords determine the order in which capsules are matched and executed (see **keyword_order** below) and can be viewed as a way to group related capsules. For instance, I use the master keyword **color** in a capsule that executes a grain action for ISO400 grain, but I also have a capsule with the master keyword **color** and the modifier keyword **iso1600** that executes a ISO1600 grain action. By adding one or both of those keywords in Lightroom, I can decide which grain action to execute when the script runs on that image.

The keyword set for a specific aspect ratio must be unique to one capsule, so there can be only one match.

The item `"target_size"` is optional. If it's present in a capsule, the image will be resized to the target size when the capsule is matched. I suggest using it in capsules that run actions that need images of specific dimensions. Resizing is done before any action is executed.
	
This is a real example of a capsule:

	{
		"keywords": ["bw"],
		"aspect_ratio": "2x3",
		"target_size": 3600,
		"actions": [["35mm ISO 3200 (3600 Monochrome)", "The Film Grain 3600 Monochrome.atn"]]
	}
	
The keyword `bw` is set in Lightroom (or Bridge). When Finishing Touches finds this keyword in an image file with a 2x3 aspect ratio it resizes this images to 3600px on the short side and then runs the action `35mm ISO 3200 (3600 Monochrome)`. Note where you need the quotation marks and the square brackets around the actions. All library objects but the last one needs a comma after the closing `}`.

When you want to change to a different action, copy the first value (i.e. **35mm ISO 3200 (3600 Monochrome)**) directly from the actions palette. The easiest way to get the second value (i.e. **The Film Grain 3600 Monochrome.atn**) is to select the actions folder, click on the hamburger menu of the actions palette, choose **Save** and copy the filename with the **.atn** ending.

Note the quotation marks, square brackets and the comma after all value pairs but the last one.

These are two examples of a capsules with a master keyword (**halation**) and a modifier keyword (**color** or **bw**). With these capsules, "Halation, 35mm" is run for images with both **halation** and **color** among its keywords, but "Halation mono" for images with **halation** and **bw** among its keywords.

	{
		"keywords": ["halation", "color"],
		"aspect_ratio": "2x3",
		"target_size": 3600,
		"actions": [["Halation color", "Halation.atn"]]
	},
	
	{
		"keywords": ["halation", "bw"],
		"aspect_ratio": "2x3",
		"target_size": 3600,
		"actions": [["Halation mono", "Halation.atn"]]
	}

You can add as many actions as you like to a capsule and they will be executed in the order you've listed them. This capsule will run two action in order, "Halation, 35mm" and "35mm ISO 3200 (3600 Monochrome)" for every image in 2x3 format that has the keyword "color" in it's meta data:

	{
		"keywords": ["color"],
		"aspect_ratio": "2x3",
		"target_size": 3600,
		"actions": [["Halation, 35mm", "Halation global.atn"], ["35mm ISO 3200 (3600 Monochrome)", "The Film Grain 3600 Monochrome.atn"]]
	}

## Script behaviour settings

All settings are defined as javascript variables. When you make changes, mind quotation marks, brackets and commas.

If the variable **tiff_to_jpg** is set to `true` TIFF images will be saved as JPGs in a folder named **jpgs**. If set to `false`the image will be saved as a TIFF file.

If the variable **sRGB** is set to `true`the color profile will be converted to sRGB before a TIFF image is saved as a jpeg.

The variable **keyword_order** is an array (list) of master keywords, that defines the order in which capsules should be matched and executed.

## Tips

Oftentimes the order of executed actions is important. You can define a list of actions to be executed with one keyword, but a more flexible way is to only define one action per keyword and then add several keywords to the image to have several actions executed. The list of keywords will then define the order of execution. Unfortunately, all Adobe products always save the keywords in alphabetical order, so I suggest using the setting **keyword_order** to define the order in which capsules should be matched and executed.

Make sure none of the actions you define in this script try to save and close the images themselves. If they do, you might end up with unexpected results and broken workflows.