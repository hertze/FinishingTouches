// F I N I S H I N G  T O U C H E S
//
// Version 2.0
//
// by Joakim Hertze (www.hertze.se)
//
// ---------------------------------------------------------------------

#target photoshop


// Keyword library -----------------------------------------------------
//
// Change or add all the keywords you like

const action_library = [
	
	{
		"keyword": "color",
		"aspect_ratio": "2x3",
		"target_size": 3600,
		"action": ["35mm ISO 1600 (3600 Color)", "The Film Grain 3600 Color.atn"]
	},
	
	{
		"keyword": "bw",
		"aspect_ratio": "2x3",
		"target_size": 3600,
		"action": ["35mm ISO 3200 (3600 Monochrome)", "The Film Grain 3600 Monochrome.atn"]
	}
	
];


// Script behaviour ----------------------------------------------------

var tiff_to_jpg = true;

// ---------------------------------------------------------------------


/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource> 
<name>Finishing Touches</name> 
<menu>automate</menu>
<enableinfo>true</enableinfo>
<eventid>6ffe283a-e7f3-11ed-a05b-0242ac120003</eventid>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

function saveClose() {
	var file_ending = app.activeDocument.name.split('.').pop().toLowerCase();
	var fPath = app.activeDocument.path;
	if (file_ending == "tif" || file_ending == "tiff") {
		if (tiff_to_jpg = true) {
			// Save as jpg in folder
			var fName = app.activeDocument.name.split('.');
			var jpgPath = fPath + "\/jpgs\/" + fName[0] + ".jpg";
			
			var jpgFolder = Folder(fPath + "/jpgs");
			//Check if it exist, if not create it.
			if(!jpgFolder.exists) jpgFolder.create();

			var jpgFile = new File(jpgPath);
			jpgSaveOptions = new JPEGSaveOptions();
			jpgSaveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;
			jpgSaveOptions.embedColorProfile = true;
			jpgSaveOptions.matte = MatteType.NONE;
			jpgSaveOptions.quality = 12;
			app.activeDocument.saveAs(jpgFile, jpgSaveOptions, true, Extension.LOWERCASE);
		} else {
			// Save out the image as tiff
			var tiffFile = new File(fPath);
			tiffSaveOptions = new TiffSaveOptions();
			tiffSaveOptions.imageCompression = TIFFEncoding.NONE;
			tiffSaveOptions.layers = false;
			tiffSaveOptions.embedColorProfile = true;
			app.activeDocument.saveAs(tiffFile, tiffSaveOptions, false, Extension.LOWERCASE);
		}
	} else {
		// Save out the image as jpeg
		var jpgFile = new File(fPath);
		jpgSaveOptions = new JPEGSaveOptions();
		jpgSaveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;
		jpgSaveOptions.embedColorProfile = true;
		jpgSaveOptions.matte = MatteType.NONE;
		jpgSaveOptions.quality = 12;
		app.activeDocument.saveAs(jpgFile, jpgSaveOptions, false, Extension.LOWERCASE);
	}
	app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

function resizeThisImage(thisSize) {
	if (doc_height/doc_width > 1) {
		// Portrait
		app.activeDocument.resizeImage(UnitValue(thisSize, "px"), null, null, ResampleMethod.AUTOMATIC);
	} else {
		app.activeDocument.resizeImage(null, UnitValue(thisSize, "px"), null, ResampleMethod.AUTOMATIC);
	}	
}

function format(){
	// Determine format
	if (doc_height > doc_width) {
		if (doc_height/doc_width < 1.1) {
			return "1x1";
		}
		else if (doc_height/doc_width > 1.1 && doc_height/doc_width < 1.2) {
			return "6x7";
		}
		else if (doc_height/doc_width > 1.2 && doc_height/doc_width < 1.3) {
			return "4x5";
		}
		else if (doc_height/doc_width > 1.3 && doc_height/doc_width < 1.4) {
			return "645";
		}
		else {
			return "2x3";
		}
	}
	else {
		if (doc_width/doc_height < 1.1) {
			return "1x1";
		}
		else if (doc_width/doc_height > 1.1 && doc_width/doc_height < 1.2) {
			return "6x7";
		}
		else if (doc_width/doc_height > 1.2 && doc_width/doc_height < 1.3) {
			return "4x5";
		}
		else if (doc_width/doc_height > 1.3 && doc_width/doc_height < 1.4) {
			return "645";
		}
		else {
			return "2x3";
		}
	}	
}


// M A I N

const doc_height = app.activeDocument.height;
const doc_width = app.activeDocument.width;
const image_format = format();

try {
	// Extract keywords
	var doc_keywords = app.activeDocument.info.keywords;
	// Loop through all keywords in file
	for(var a in doc_keywords){
		// Loop through all keywords in action_library and look for match
		for(var b in action_library){
			if (action_library[b].keyword == doc_keywords[a].toString() && action_library[b].aspect_ratio == image_format) {
				// Resize if needed
				if (action_library[b].target_size) {
					resizeThisImage(action_library[b].target_size);
				}
				// Execute action
				app.doAction(action_library[b].action[0], action_library[b].action[1]);
			}
		}
	}
	//saveClose();
} catch(e) { alert(e); }