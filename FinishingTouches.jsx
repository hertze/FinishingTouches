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

var actions_35mm_color_poserframes = [
						["Heavy alt 3", "Poser Frames.atn"],
						["35mm ISO 400 (3600 Color)", "The Film Grain 3600 Color.atn"],
						["Color", "Remove outside grain.atn"]
						];

var actions_645_color_poserframes = [
						["Heavy alt 3", "Poser Frames.atn"],
						["645 ISO 400 (6000 Color)", "The Film Grain 6000 Color.atn"], 
						["Color", "Remove outside grain.atn"]
						];
						
var actions_645_bw_poserframes = [
						["Heavy alt 3", "Poser Frames.atn"],
						["645 ISO 400 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"], 
						["Color", "Remove outside grain.atn"]
						];
						
var actions_645_color = [
						["645 ISO 400 (6000 Color)", "The Film Grain 6000 Color.atn"] 
						];
						
var actions_645_bw = [
						["645 ISO 400 (6000 Monochrome)", "The Film Grain 6000 Monochrome.atn"] 
						];


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
		// Save out the image as tiff
		var tiffFile = new File(fPath);
		tiffSaveOptions = new TiffSaveOptions();
		tiffSaveOptions.imageCompression = TIFFEncoding.NONE;
		tiffSaveOptions.layers = false;
		tiffSaveOptions.embedColorProfile = true;
		app.activeDocument.saveAs(tiffFile, tiffSaveOptions, false, Extension.LOWERCASE);
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
	app.activeDocument.close();
}

function resizeThisImage(thisSize) {
	if (doc_height/doc_width > 1) {
		// Portrait
		app.activeDocument.resizeImage(UnitValue(thisSize, "px"), null, null, ResampleMethod.AUTOMATIC);
	} else {
		pp.activeDocument.resizeImage(null, UnitValue(thisSize, "px"), null, ResampleMethod.AUTOMATIC);
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

// Find the short side
if (doc_height/doc_width > 1) {
	var short_side = doc_width;
} else {
	var short_side = doc_height;
}

const image_format = format();

// Extract keywords
var doc_keywords = app.activeDocument.info.keywords;

// Set constants from keywords
for(var a in doc_keywords){

	if (doc_keywords[a].toString().match(/poserframes/)) {
		var do_poserframes = true;
	}
	if (doc_keywords[a].toString().match(/bw/)) {
		var do_bw = true;
	}
}

if (do_bw == true) {
	// BW workflows
	if (image_format == "35mm") {
			
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
		
	} else if (image_format == "45") {
		
	} else if (image_format == "square") {
		
	}
	
} else {
	// Color workflows
	if (image_format == "35mm") {
		
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
		
	} else if (image_format == "45") {
		
	} else if (image_format == "square") {
		
	}
	
}

//saveClose();