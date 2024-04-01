// F I N I S H I N G  T O U C H E S
//
// Version 2.1
//
// by Joakim Hertze (www.hertze.se)
//
// ---------------------------------------------------------------------

#target photoshop


// LIBRARY -------------------------------------------------------------
//
// Change or add all the library objects you like!
//

const action_library = [
	
	{
		"keywords": ["color"],
		"aspect_ratio": "2x3",
		"target_size": 3600,
		"actions": [["35mm ISO 400 (3600 Color)", "The Film Grain 3600 Color.atn"]]
	},
	
	{
		"keywords": ["color", "isohigh"],
		"aspect_ratio": "2x3",
		"target_size": 3600,
		"actions": [["35mm ISO 1600 (3600 Color)", "The Film Grain 3600 Color.atn"]]
	},
	
	{
		"keywords": ["bw"],
		"aspect_ratio": "2x3",
		"target_size": 3600,
		"actions": [["35mm ISO 400 (3600 Monochrome)", "The Film Grain 3600 Monochrome.atn"]]
	},
	
	{
		"keywords": ["bw", "isohigh"],
		"aspect_ratio": "2x3",
		"target_size": 3600,
		"actions": [["35mm ISO 3200 (3600 Monochrome)", "The Film Grain 3600 Monochrome.atn"]]
	},
	
	{
		"keywords": ["poserframes"],
		"aspect_ratio": "2x3",
		"actions": [["Matted crop, variable", "Poserframes 2x3.atn"]]
	},

	{
		"keywords": ["halation", "color"],
		"aspect_ratio": "2x3",
		"actions": [["Halation, 35mm", "Halation global.atn"]]
	},

	{
		"keywords": ["halation", "bw"],
		"aspect_ratio": "2x3",
		"actions": [["Halation, 35mm, subtle", "Halation mono.atn"]]
	},
	
	{
		"keywords": ["color"],
		"aspect_ratio": "4x3",
		"target_size": 6000,
		"actions": [["645 ISO 400 (6000 Color)", "The Film Grain 6000 Color.atn"]]
	},
	
	{
		"keywords": ["color", "isohigh"],
		"aspect_ratio": "4x3",
		"target_size": 6000,
		"actions": [["645 ISO 1600 (6000 Color)", "The Film Grain 6000 Color.atn"]]
	},

	{
		"keywords": ["poserframes"],
		"aspect_ratio": "4x3",
		"actions": [["Matted crop, Contax, thick", "Poserframes 4x3.atn"]]
	},
	
	{
		"keywords": ["bw"],
		"aspect_ratio": "4x3",
		"target_size": 6000,
		"actions": [["645 ISO 400  (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"]]
	},
	
	{
		"keywords": ["bw", "isohigh"],
		"aspect_ratio": "4x3",
		"target_size": 6000,
		"actions": [["645 ISO 3200  (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"]]
	},
	
	{
		"keywords": ["halation", "color"],
		"aspect_ratio": "4x3",
		"actions": [["Halation, 120", "Halation global.atn"]]
	},

	{
		"keywords": ["halation", "bw"],
		"aspect_ratio": "4x3",
		"actions": [["Halation, 120", "Halation mono.atn"]]
	},
	
	{
		"keywords": ["color"],
		"aspect_ratio": "6x7",
		"target_size": 6000,
		"actions": [["Halation, 120", "Halation global.atn"], ["6x6/6x7 ISO 400 (6000 Color)", "The Film Grain 6000 Color.atn"]]
	},
	
	{
		"keywords": ["color", "isohigh"],
		"aspect_ratio": "6x7",
		"target_size": 6000,
		"actions": [["Halation, 120", "Halation global.atn"], ["6x6/6x7 ISO 1600 (6000 Color)", "The Film Grain 6000 Color.atn"]]
	},
	
	{
		"keywords": ["halation", "color"],
		"aspect_ratio": "6x7",
		"actions": [["Halation, 120", "Halation global.atn"]]
	},
	
	{
		"keywords": ["bw"],
		"aspect_ratio": "6x7",
		"target_size": 6000,
		"actions": [["6x6/6x7 ISO 400 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"]]
	},
	
	{
		"keywords": ["bw", "isohigh"],
		"aspect_ratio": "6x7",
		"target_size": 6000,
		"actions": [["6x6/6x7 ISO 3200 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"]]
	},
	
	{
		"keywords": ["color"],
		"aspect_ratio": "1x1",
		"target_size": 6000,
		"actions": [["Halation, 120", "Halation global.atn"], ["6x6/6x7 ISO 400 (6000 Color)", "The Film Grain 6000 Color.atn"]]
	},
	
	{
		"keywords": ["color", "isohigh"],
		"aspect_ratio": "1x1",
		"target_size": 6000,
		"actions": [["Halation, 120", "Halation global.atn"], ["6x6/6x7 ISO 1600 (6000 Color)", "The Film Grain 6000 Color.atn"]]
	},
	
	{
		"keywords": ["halation", "color"],
		"aspect_ratio": "1x1",
		"actions": [["Halation, 120", "Halation global.atn"]]
	},
	
	{
		"keywords": ["bw"],
		"aspect_ratio": "1x1",
		"target_size": 6000,
		"actions": [["6x6/6x7 ISO 400 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"]]
	},
	
	{
		"keywords": ["bw", "isohigh"],
		"aspect_ratio": "1x1",
		"target_size": 6000,
		"actions": [["6x6/6x7 ISO 3200 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"]]
	}
	
];


// Script behaviour ----------------------------------------------------

var tiff_to_jpg = true;
var keyword_order = ["halation", "poserframes", "color"];

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
	if (app.activeDocument.height/app.activeDocument.width > 1) {
		// Portrait
		app.activeDocument.resizeImage(UnitValue(thisSize, "px"), null, null, ResampleMethod.AUTOMATIC);
	} else {
		app.activeDocument.resizeImage(null, UnitValue(thisSize, "px"), null, ResampleMethod.AUTOMATIC);
	}	
}

function format(){
	// Determine format
	var aspectRatio = app.activeDocument.height / app.activeDocument.width;
	if (aspectRatio > 1) {
		if (aspectRatio < 1.1) {
			return "1x1";
		} else if (aspectRatio < 1.2) {
			return "6x7";
		} else if (aspectRatio < 1.3) {
			return "4x5";
		} else if (aspectRatio < 1.4) {
			return "4x3";
		} else {
			return "2x3";
		}
	} else {
		if (1 / aspectRatio < 1.1) {
			return "1x1";
		} else if (1 / aspectRatio < 1.2) {
			return "6x7";
		} else if (1 / aspectRatio < 1.3) {
			return "4x5";
		} else if (1 / aspectRatio < 1.4) {
			return "4x3";
		} else {
			return "2x3";
		}
	}
}

function reorderArray(originalArray, orderArray) {

	for (var i = 0; i < originalArray.length; i++) {
		originalArray[i] = String(originalArray[i]);
	}

	var orderMap = {};
	for (var i = 0; i < orderArray.length; i++) {
		orderMap[orderArray[i]] = i;
	}

	originalArray.sort(function(a, b) {
		var indexA = orderMap[a];
		var indexB = orderMap[b];
		
		// Check if both items are found in orderArray
		if (indexA !== undefined && indexB !== undefined) {
			// Compare the indices in orderArray
			return indexA - indexB;
		} else if (indexA !== undefined) {
			// Place item a before item b if only a is found in orderArray
			return -1;
		} else if (indexB !== undefined) {
			// Place item b before item a if only b is found in orderArray
			return 1;
		} else {
			// Maintain the original order if neither item is found in orderArray
			return 0;
		}
	});

	return originalArray;
}

// Helper function to check if all elements of arr1 are in arr2
function containsAll(arr1, arr2) {
    for(var i = 0; i < arr1.length; i++) {
        var found = false;
        for(var j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                found = true;
                break;
            }
        }
        if(!found) {
            return false;
        }
    }
    return true;
}

// M A I N

// M A I N

try {
    // Extract keywords
    var raw_keywords = app.activeDocument.info.keywords;
    var doc_keywords = reorderArray(raw_keywords, keyword_order);

    // Calculate format once at the start of the script
    var doc_format = format();

    // Loop through all keywords in doc_keywords
    for(var a = 0; a < doc_keywords.length; a++){
        // Create a temporary array to hold the subset of objects from action_library, where the first keyword equals the current doc keyword and are of the correct aspect ratio
        var temp_array = [];
        for(var i = 0; i < action_library.length; i++) {
            if(action_library[i].keywords[0] == doc_keywords[a] && action_library[i].aspect_ratio == doc_format) {
                temp_array.push(action_library[i]);
            }
        }

        // Reorder the temporary array so that objects with the most keywords come first
        temp_array.sort(function(a, b) {
            return b.keywords.length - a.keywords.length;
        });

        // Loop over temp_array
        for(var i = 0; i < temp_array.length; i++) {
            // Check if all keywords in temp_array[i] are present in doc_keywords
            if (containsAll(temp_array[i].keywords, doc_keywords)) {
                // Resize if needed
                if (temp_array[i].target_size) {
                    resizeThisImage(temp_array[i].target_size);
                }
                // Execute actions
                for(var c = 0; c < temp_array[i].actions.length; c++) {
                    app.doAction(temp_array[i].actions[c][0], temp_array[i].actions[c][1]);
                }
            }
        }
    }
    saveClose();
} catch(e) { alert(e); }