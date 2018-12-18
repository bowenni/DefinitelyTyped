var canvas = document.createElement("canvas");
var gl = canvas.getContext("webgl");
var t: any;

var ext1: EXT_color_buffer_half_float;
if (ext1 = gl.getExtension("EXT_color_buffer_half_float")) {
  t = ext1.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT;
}

var ext2: WEBGL_compressed_texture_atc;
if (ext2 = gl.getExtension("WEBGL_compressed_texture_atc")) {
	t = ext2.COMPRESSED_RGB_ATC_WEBGL;
}

var ext3: WEBGL_compressed_texture_etc1;
if (ext3 = gl.getExtension("WEBGL_compressed_texture_etc1")) {
	t = ext3.COMPRESSED_RGB_ETC1_WEBGL;
}

var ext4: WEBKIT_WEBGL_compressed_texture_pvrtc;
if (ext4 = gl.getExtension("WEBGL_compressed_texture_pvrtc")) {
	t = ext4.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
}
