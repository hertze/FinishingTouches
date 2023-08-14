// F I N I S H I N G  T O U C H E S
//
// by Joakim Hertze (www.hertze.se)
//
// ---------------------------------------------------------------------

#target photoshop


// Settings ------------------------------------------------------------


var target_size_35mm = 3600;
var target_size_645 = 6000;
var target_size_67 = 6000;
var target_size_45 = 6000;
var target_size_square = 6000;

var tiff_to_jpg = true;


// ---------------------------------------------------------------------



// Extract keywords
var doc_keywords = app.activeDocument.info.keywords;

// Set variables from keywords
for(var a in doc_keywords){
	if (doc_keywords[a].toString().match(/poserframes/)) {
		var do_poserframes = true;
	}
	if (doc_keywords[a].toString().match(/bw/)) {
		var do_bw = true;
	}
	if (doc_keywords[a].toString().match(/isohigh/)) {
		var do_isohigh = true;
	}
}


// Actions

// 35mm

if (do_isohigh == true) {
	
	var actions_35mm_color_poserframes = [
							["Light alt 1", "Poser Frames.atn"],
							["35mm ISO 1600 (3600 Color)", "The Film Grain 3600 Color.atn"]
							];
							
	var actions_35mm_bw_poserframes = [
							["Light alt 1", "Poser Frames.atn"],
							["35mm ISO 3200 (3600 Monochrome)", "The Film Grain 3600 Monochrome.atn"]
							];
							
	var actions_35mm_color = [
							["35mm ISO 1600 (3600 Color)", "The Film Grain 3600 Color.atn"]
							];
							
	var actions_35mm_bw = [
							["35mm ISO 3200 (3600 Monochrome)", "The Film Grain 3600 Monochrome.atn"]
							];
	
} else {

	var actions_35mm_color_poserframes = [
							["Extravagant 35 alt 1", "Poser Frames.atn"],
							["35mm ISO 400 (3600 Color)", "The Film Grain 3600 Color.atn"]
							];
							
	var actions_35mm_bw_poserframes = [
							["Extravagant 35 alt 1", "Poser Frames.atn"],
							["35mm ISO 400 (3600 Monochrome)", "The Film Grain 3600 Monochrome.atn"]
							];
							
	var actions_35mm_color = [
							["35mm ISO 400 (3600 Color)", "The Film Grain 3600 Color.atn"]
							];
							
	var actions_35mm_bw = [
							["35mm ISO 400 (3600 Monochrome)", "The Film Grain 3600 Monochrome.atn"]
							];

}


// 645

if (do_isohigh == true) {
	
	var actions_645_color_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["645 ISO 1600 (6000 Color)", "The Film Grain 6000 Color.atn"], 
							["Light", "Remove outside grain.atn"]
							];
							
	var actions_645_bw_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["645 ISO 3200 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"]
							];
							
	var actions_645_color = [
							["645 ISO 1600 (6000 Color)", "The Film Grain 6000 Color.atn"] 
							];
							
	var actions_645_bw = [
							["645 ISO 3200 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"] 
							];
	
} else {
	
	var actions_645_color_poserframes = [
							["Heavy alt 1", "Poser Frames.atn"],
							["645 ISO 400 (6000 Color)", "The Film Grain 6000 Color.atn"]
							];
							
	var actions_645_bw_poserframes = [
							["Heavy alt 1", "Poser Frames.atn"],
							["645 ISO 400  (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"]
							];
							
	var actions_645_color = [
							["645 ISO 400 (6000 Color)", "The Film Grain 6000 Color.atn"] 
							];
							
	var actions_645_bw = [
							["645 ISO 400  (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"] 
							];


}

//67

if (do_isohigh == true) {
	
	var actions_67_color_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["6x6/6x7 ISO 1600 (6000 Color)", "The Film Grain 6000 Color.atn"], 
							["Light", "Remove outside grain.atn"]
							];
							
	var actions_67_bw_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["6x6/6x7 ISO 3200 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"]
							];
							
	var actions_67_color = [
							["6x6/6x7 ISO 1600 (6000 Color)", "The Film Grain 6000 Color.atn"] 
							];
							
	var actions_67_bw = [
							["6x6/6x7 ISO 3200 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"] 
							];
	
} else {

	var actions_67_color_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["6x6/6x7 ISO 400 (6000 Color)", "The Film Grain 6000 Color.atn"], 
							["Light", "Remove outside grain.atn"]
							];
							
	var actions_67_bw_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["6x6/6x7 ISO 400 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"], 
							["Medium", "Remove outside grain.atn"]
							];
							
	var actions_67_color = [
							["6x6/6x7 ISO 400 (6000 Color)", "The Film Grain 6000 Color.atn"] 
							];
							
	var actions_67_bw = [
							["6x6/6x7 ISO 400 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"] 
							];

}


//Square

if (do_isohigh == true) {
	
	var actions_square_color_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["6x6/6x7 ISO 1600 (6000 Color)", "The Film Grain 6000 Color.atn"], 
							["Light", "Remove outside grain.atn"]
							];
							
	var actions_square_bw_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["6x6/6x7 ISO 3200 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"]
							];
							
	var actions_square_color = [
							["6x6/6x7 ISO 1600 (6000 Color)", "The Film Grain 6000 Color.atn"] 
							];
							
	var actions_square_bw = [
							["6x6/6x7 ISO 3200 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"] 
							];
	
} else {
	
	var actions_square_color_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["6x6/6x7 ISO 400 (6000 Color)", "The Film Grain 6000 Color.atn"], 
							["Light", "Remove outside grain.atn"]
							];
							
	var actions_square_bw_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["6x6/6x7 ISO 400 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"], 
							["Medium", "Remove outside grain.atn"]
							];
							
	var actions_square_color = [
							["6x6/6x7 ISO 400 (6000 Color)", "The Film Grain 6000 Color.atn"] 
							];
							
	var actions_square_bw = [
							["6x6/6x7 ISO 400 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"] 
							];

}

//4x5

if (do_isohigh == true) {
	
	var actions_45_color_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["4x5 ISO 1600 (6000 Color)", "The Film Grain 6000 Color.atn"], 
							["Light", "Remove outside grain.atn"]
							];
							
	var actions_45_bw_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["4x5 ISO 3200 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"]
							];
							
	var actions_45_color = [
							["4x5 ISO 1600 (6000 Color)", "The Film Grain 6000 Color.atn"] 
							];
							
	var actions_45_bw = [
							["4x5 ISO 3200 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"] 
							];
	
} else {

	var actions_45_color_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["4x5 ISO 400 (6000 Color)", "The Film Grain 6000 Color.atn"], 
							["Light", "Remove outside grain.atn"]
							];
							
	var actions_45_bw_poserframes = [
							["Heavy alt 3", "Poser Frames.atn"],
							["4x5 ISO 400 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"], 
							["Medium", "Remove outside grain.atn"]
							];
							
	var actions_45_color = [
							["4x5 ISO 400 (6000 Color)", "The Film Grain 6000 Color.atn"] 
							];
							
	var actions_45_bw = [
							["4x5 ISO 400 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"] 
							];

}

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
			var format = "square";
		}
		else if (doc_height/doc_width > 1.1 && doc_height/doc_width < 1.2) {
			var format = "67";
		}
		else if (doc_height/doc_width > 1.2 && doc_height/doc_width < 1.3) {
			var format = "45";
		}
		else if (doc_height/doc_width > 1.3 && doc_height/doc_width < 1.4) {
			var format = "645";
		}
		else {
			var format = "35mm";
		}
	}
	else {
		if (doc_width/doc_height < 1.1) {
			var format = "square";
		}
		else if (doc_width/doc_height > 1.1 && doc_width/doc_height < 1.2) {
			var format = "67";
		}
		else if (doc_width/doc_height > 1.2 && doc_width/doc_height < 1.3) {
			var format = "45";
		}
		else if (doc_width/doc_height > 1.3 && doc_width/doc_height < 1.4) {
			var format = "645";
		}
		else {
			var format = "35mm";
		}
	}

	return format;
	
}



// M A I N

const doc_height = app.activeDocument.height;
const doc_width = app.activeDocument.width;
const image_format = format();

try {
	
	if (app.activeDocument.bitsPerChannel == BitsPerChannelType.SIXTEEN) {
		app.activeDocument.bitsPerChannel = BitsPerChannelType.EIGHT;
	}

	if (do_bw == true) {
		// BW workflows
		if (image_format == "35mm") {
			resizeThisImage(target_size_35mm);
			if (do_poserframes == true) {
				for (var i in actions_35mm_bw_poserframes) {
					app.doAction(actions_35mm_bw_poserframes[i][0], actions_35mm_bw_poserframes[i][1]);
				}
			} else {
				for (var i in actions_35mm_bw) {
					app.doAction(actions_35mm_bw[i][0], actions_35mm_bw[i][1]);	
				}
			}	
		} else if (image_format == "645") {
			resizeThisImage(target_size_645);
			if (do_poserframes == true) {
				for (var i in actions_645_bw_poserframes) {
					app.doAction(actions_645_bw_poserframes[i][0], actions_645_bw_poserframes[i][1]);
				}
			} else {
				for (var i in actions_645_bw) {
					app.doAction(actions_645_bw[i][0], actions_645_bw[i][1]);	
				}
			}
		} else if (image_format == "67") {
			resizeThisImage(target_size_67);
			if (do_poserframes == true) {
				for (var i in actions_67_bw_poserframes) {
					app.doAction(actions_67_bw_poserframes[i][0], actions_67_bw_poserframes[i][1]);
				}
			} else {
				for (var i in actions_67_bw) {
					app.doAction(actions_67_bw[i][0], actions_67_bw[i][1]);	
				}
			}
		} else if (image_format == "45") {
			resizeThisImage(target_size_45);
			if (do_poserframes == true) {
				for (var i in actions_45_bw_poserframes) {
					app.doAction(actions_45_bw_poserframes[i][0], actions_45_bw_poserframes[i][1]);
				}
			} else {
				for (var i in actions_45_bw) {
					app.doAction(actions_45_bw[i][0], actions_45_bw[i][1]);	
				}
			}
		} else if (image_format == "square") {
			resizeThisImage(target_size_square);
			if (do_poserframes == true) {
				for (var i in actions_square_bw_poserframes) {
					app.doAction(actions_square_bw_poserframes[i][0], actions_square_bw_poserframes[i][1]);
				}
			} else {
				for (var i in actions_square_bw) {
					app.doAction(actions_square_bw[i][0], actions_square_bw[i][1]);	
				}
			}
		}
	} else {
		// Color workflows
		if (image_format == "35mm") {
			resizeThisImage(target_size_35mm);
			if (do_poserframes == true) {
				for (var i in actions_35mm_color_poserframes) {
					app.doAction(actions_35mm_color_poserframes[i][0], actions_35mm_color_poserframes[i][1]);
				}
			} else {
				for (var i in actions_35mm_color) {
					app.doAction(actions_35mm_color[i][0], actions_35mm_color[i][1]);	
				}
			}
		} else if (image_format == "645") {
			resizeThisImage(target_size_645);
			if (do_poserframes == true) {
				for (var i in actions_645_color_poserframes) {
					app.doAction(actions_645_color_poserframes[i][0], actions_645_color_poserframes[i][1]);
				}
			} else {
				for (var i in actions_645_color) {
					app.doAction(actions_645_color[i][0], actions_645_color[i][1]);	
				}
			}
		} else if (image_format == "67") {
			resizeThisImage(target_size_67);
			if (do_poserframes == true) {
				for (var i in actions_67_color_poserframes) {
					app.doAction(actions_67_color_poserframes[i][0], actions_67_color_poserframes[i][1]);
				}
			} else {
				for (var i in actions_67_color) {
					app.doAction(actions_67_color[i][0], actions_67_color[i][1]);	
				}
			}
		} else if (image_format == "45") {
			resizeThisImage(target_size_45);
			if (do_poserframes == true) {
				for (var i in actions_45_color_poserframes) {
					app.doAction(actions_45_color_poserframes[i][0], actions_45_color_poserframes[i][1]);
				}
			} else {
				for (var i in actions_45_color) {
					app.doAction(actions_45_color[i][0], actions_45_color[i][1]);	
				}
			}
		} else if (image_format == "square") {
			resizeThisImage(target_size_square);
			if (do_poserframes == true) {
				for (var i in actions_square_color_poserframes) {
					app.doAction(actions_square_color_poserframes[i][0], actions_square_color_poserframes[i][1]);
				}
			} else {
				for (var i in actions_square_color) {
					app.doAction(actions_square_color[i][0], actions_square_color[i][1]);	
				}
			}
		}
	}
	
	saveClose();

} catch(e) { alert(e); }